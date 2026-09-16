import type { APIRoute } from 'astro';
import { SettingsRepo } from '../../../server/db/repo.js';

// Helper: Call Google Gemini REST API
async function callGemini(apiKey: string, model: string, systemPrompt: string, userPrompt: string, imageUrl?: string) {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model || 'gemini-2.0-flash'}:generateContent?key=${apiKey}`;

  const contents: any[] = [];
  const parts: any[] = [];

  if (imageUrl && imageUrl.startsWith('data:image/')) {
    const [header, base64Data] = imageUrl.split(',');
    const mimeMatch = header.match(/data:(.*?);base64/);
    const mimeType = mimeMatch ? mimeMatch[1] : 'image/jpeg';
    parts.push({
      inline_data: {
        mime_type: mimeType,
        data: base64Data
      }
    });
  }

  parts.push({ text: userPrompt });

  contents.push({ role: 'user', parts });

  const payload: any = {
    contents,
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 4096
    }
  };

  if (systemPrompt) {
    payload.systemInstruction = {
      parts: [{ text: systemPrompt }]
    };
  }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const json = await res.json();
  if (!res.ok || json.error) {
    throw new Error(json.error?.message || `Lỗi từ Gemini API (Status ${res.status})`);
  }

  const candidate = json.candidates?.[0];
  const text = candidate?.content?.parts?.[0]?.text || '';
  return text.trim();
}

// Helper: Call OpenAI GPT REST API
async function callOpenAI(apiKey: string, model: string, systemPrompt: string, userPrompt: string, imageUrl?: string) {
  const endpoint = 'https://api.openai.com/v1/chat/completions';

  const messages: any[] = [];
  if (systemPrompt) {
    messages.push({ role: 'system', content: systemPrompt });
  }

  const userContent: any[] = [];
  if (imageUrl && (imageUrl.startsWith('http://') || imageUrl.startsWith('https://') || imageUrl.startsWith('data:image/'))) {
    userContent.push({
      type: 'image_url',
      image_url: { url: imageUrl }
    });
  }
  userContent.push({ type: 'text', text: userPrompt });

  messages.push({ role: 'user', content: userContent.length === 1 ? userPrompt : userContent });

  const payload = {
    model: model || 'gpt-4o-mini',
    messages,
    temperature: 0.7,
    max_tokens: 4096
  };

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(payload)
  });

  const json = await res.json();
  if (!res.ok || json.error) {
    throw new Error(json.error?.message || `Lỗi từ OpenAI API (Status ${res.status})`);
  }

  const text = json.choices?.[0]?.message?.content || '';
  return text.trim();
}

// Main APIRoute
export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { action, provider, gemini_key, gemini_model, openai_key, openai_model } = data;

    // 1. Fetch site settings if keys are not explicitly passed
    const settings = await SettingsRepo.getAll();
    const activeProvider = provider || settings.ai_provider || 'gemini';
    const geminiKey = gemini_key || settings.gemini_api_key || process.env.GEMINI_API_KEY || '';
    const geminiModel = gemini_model || settings.gemini_model || 'gemini-3.6-flash';
    const openaiKey = openai_key || settings.openai_api_key || process.env.OPENAI_API_KEY || '';
    const openaiModel = openai_model || settings.openai_model || 'gpt-4o-mini';
    const baseSystemPrompt = settings.ai_system_prompt || `Bạn là chuyên gia biên tập nội dung SEO kỹ thuật cho Siêu Thị VLXD Hoàng Yến (299 Lê Duẩn, Phường Đông Hà, Quảng Trị - Hotline/Zalo: 0946.575.579).
Tuân thủ QUY CHUẨN VIẾT BÀI SEO:
1. SEARCH INTENT & ANSWER FIRST: Trả lời trực tiếp câu hỏi người dùng ngay đầu bài (không mở đầu bằng văn phong AI sáo rỗng như 'Trong cuộc sống hiện đại...', 'Ngành xây dựng ngày nay...').
2. CHÍNH XÁC > ĐẦY ĐỦ > SEO: Tuyệt đối không bịa giá tiền cụ thể, không bịa tồn kho ảo, không bịa cam kết bảo hành/đổi trả/vận chuyển nếu chưa có dữ liệu. Số liệu kỹ thuật phải tuân thủ TCVN hoặc nhà sản xuất.
3. CẤU TRÚC BÀI: Sapo (60-120 từ) -> Quick Answer Box -> H2 Trả lời trực tiếp -> H2 Chi tiết & Bảng HTML -> H2 Cách tính/Ví dụ -> FAQ (4-6 câu) -> Commercial bridge dẫn nhẹ về sản phẩm/category -> CTA.`;

    // 2. Test connection action
    if (action === 'test') {
      let reply = '';
      if (activeProvider === 'gemini') {
        if (!geminiKey) throw new Error('Chưa cấu hình Gemini API Key.');
        reply = await callGemini(geminiKey, geminiModel, 'Bạn là trợ lý ảo.', 'Chào bạn! Hãy trả lời ngắn gọn trong 5 từ xác nhận kết nối thành công.');
        return new Response(JSON.stringify({ success: true, provider: 'gemini', model: geminiModel, reply }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      } else {
        if (!openaiKey) throw new Error('Chưa cấu hình OpenAI API Key.');
        reply = await callOpenAI(openaiKey, openaiModel, 'Bạn là trợ lý ảo.', 'Chào bạn! Hãy trả lời ngắn gọn trong 5 từ xác nhận kết nối thành công.');
        return new Response(JSON.stringify({ success: true, provider: 'openai', model: openaiModel, reply }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // 3. Generate Post (Bài viết tin tức / cẩm nang)
    if (action === 'generate_post') {
      const { topic, category_name, keywords, notes } = data;
      if (!topic) {
        return new Response(JSON.stringify({ success: false, error: 'Vui lòng nhập chủ đề bài viết.' }), { status: 400 });
      }

      const prompt = `Yêu cầu: Hãy tạo một bài viết hoàn chỉnh chuẩn SEO theo "QUY CHUẨN VIẾT BÀI SEO – VLXD HOÀNG YẾN".
Chủ đề bài viết: "${topic}"
Chuyên mục: ${category_name || 'Tin Tức & Báo Giá'}
Primary Keyword: ${keywords || topic}
Ghi chú thêm: ${notes || 'Không có'}

Cấu trúc bài viết bắt buộc:
1. Sapo (60-120 từ): Đi thẳng vào vấn đề, nhắc Primary Keyword tự nhiên, không dùng văn sáo rỗng.
2. Đoạn Trả lời nhanh (Answer First) trong thẻ <div class="callout-box">: Trả lời ngắn gọn ngay câu hỏi chính/thông số chính.
3. Các thẻ <h2> và <h3>: Giải thích chi tiết, công thức, ví dụ thực tế tính toán.
4. Bảng tra cứu thông số / barem: PHẢI dùng định dạng HTML chuẩn:
   <table>
     <thead>
       <tr><th>Hạng Mục / Chủng Loại</th><th>Quy Cách</th><th>Tiêu Chuẩn / Đặc Tính</th><th>Ứng Dụng</th></tr>
     </thead>
     <tbody>
       <tr><td>...</td><td>...</td><td>...</td><td>...</td></tr>
     </tbody>
   </table>
5. FAQ: Chứa 4-6 câu hỏi thường gặp đúng trọng tâm dưới dạng:
   <div class="faq-item">
     <h3 class="faq-question">Câu hỏi?</h3>
     <div class="faq-answer"><p>Câu trả lời chính xác, ngắn gọn.</p></div>
   </div>
6. Commercial Bridge & CTA: Dẫn dắt tự nhiên về tham khảo sản phẩm tại VLXD Hoàng Yến, CTA cung cấp số Hotline 0946.575.579 để nhận báo giá vật tư tại Quảng Trị.
7. Mọi hình ảnh (<img>) nếu có trong bài BẮT BUỘC PHẢI CÓ thẻ alt chuẩn SEO chứa từ khóa và địa danh: ví dụ <img src="..." alt="${topic} – Siêu Thị VLXD Hoàng Yến Quảng Trị" loading="lazy" />.

Trả về kết quả DUY NHẤT dưới định dạng JSON hợp lệ (không kèm theo markdown codeblock thừa bên ngoài) với cấu trúc sau:
{
  "title": "Tiêu đề bài viết hấp dẫn, chuẩn SEO (50-65 ký tự)",
  "slug": "duong-dan-slug-khong-dau-ngan-gon",
  "summary": "Đoạn tóm tắt mở đầu bài viết hấp dẫn (120-160 ký tự) dùng làm Meta Description",
  "seo_title": "[Từ khóa chính] + [lợi ích/thông tin chính] | VLXD Hoàng Yến",
  "seo_description": "Thẻ mô tả Meta Description chuẩn SEO (140-165 ký tự, chứa từ khóa chính)",
  "content": "Toàn bộ nội dung bài viết định dạng HTML hoàn chỉnh theo đúng cấu trúc trên"
}`;

      let rawResponse = '';
      if (activeProvider === 'gemini') {
        if (!geminiKey) throw new Error('Chưa cấu hình Gemini API Key trong Cài Đặt Hệ Thống.');
        rawResponse = await callGemini(geminiKey, geminiModel, baseSystemPrompt, prompt);
      } else {
        if (!openaiKey) throw new Error('Chưa cấu hình OpenAI API Key trong Cài Đặt Hệ Thống.');
        rawResponse = await callOpenAI(openaiKey, openaiModel, baseSystemPrompt, prompt);
      }

      const cleanJson = rawResponse.replace(/```json/g, '').replace(/```/g, '').trim();
      let parsed: any;
      try {
        parsed = JSON.parse(cleanJson);
      } catch (e) {
        parsed = {
          title: topic,
          slug: topic.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          summary: '',
          seo_title: topic,
          seo_description: '',
          content: rawResponse
        };
      }

      return new Response(JSON.stringify({ success: true, data: parsed }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 4. Generate Product (Mô tả sản phẩm, thông số & SEO)
    if (action === 'generate_product') {
      const { name, brand_name, category_name, unit, sku, notes, image_url } = data;
      if (!name) {
        return new Response(JSON.stringify({ success: false, error: 'Vui lòng nhập tên sản phẩm.' }), { status: 400 });
      }

      const prompt = `Yêu cầu: Hãy tạo thông tin chi tiết, mô tả sản phẩm và thẻ SEO cho sản phẩm vật tư xây dựng sau tại VLXD Hoàng Yến Quảng Trị.
Tên sản phẩm: "${name}"
Thương hiệu: ${brand_name || 'Theo nhà sản xuất'}
Danh mục: ${category_name || 'Vật liệu xây dựng'}
Đơn vị tính: ${unit || 'Cây / Bao / Tấm / Mét'}
Mã SKU/Quy cách: ${sku || 'Chuẩn'}
Ghi chú đặc tính: ${notes || 'Không có'}

Trả về kết quả DUY NHẤT dưới định dạng JSON hợp lệ với cấu trúc sau:
{
  "name": "Tên sản phẩm chuẩn mực",
  "slug": "slug-san-pham-khong-dau",
  "short_description": "Mô tả ngắn 2-3 câu làm nổi bật đặc tính và ứng dụng chính",
  "specifications": "Bảng thông số kỹ thuật dạng text hoặc markdown chuẩn",
  "seo_title": "Tiêu đề SEO sản phẩm (50-65 ký tự, chứa tên + Quảng Trị + Hoàng Yến)",
  "seo_description": "Thẻ Meta Description chuẩn (130-160 ký tự)",
  "content": "Bài viết mô tả chi tiết sản phẩm định dạng HTML chuẩn (gồm <h3>Đặc tính nổi bật</h3>, <ul><li>ưu điểm</li></ul>, <h3>Ứng dụng trong công trình</h3>, <h3>Lưu ý bảo quản & thi công</h3>, hướng dẫn liên hệ hotline)"
}`;

      let rawResponse = '';
      if (activeProvider === 'gemini') {
        if (!geminiKey) throw new Error('Chưa cấu hình Gemini API Key trong Cài Đặt Hệ Thống.');
        rawResponse = await callGemini(geminiKey, geminiModel, baseSystemPrompt, prompt, image_url);
      } else {
        if (!openaiKey) throw new Error('Chưa cấu hình OpenAI API Key trong Cài Đặt Hệ Thống.');
        rawResponse = await callOpenAI(openaiKey, openaiModel, baseSystemPrompt, prompt, image_url);
      }

      const cleanJson = rawResponse.replace(/```json/g, '').replace(/```/g, '').trim();
      let parsed: any;
      try {
        parsed = JSON.parse(cleanJson);
      } catch (e) {
        parsed = {
          name,
          slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          short_description: '',
          specifications: '',
          seo_title: `${name} Tại Quảng Trị | VLXD Hoàng Yến`,
          seo_description: '',
          content: rawResponse
        };
      }

      return new Response(JSON.stringify({ success: true, data: parsed }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ success: false, error: 'Hành động không hợp lệ.' }), { status: 400 });
  } catch (err: any) {
    console.error('Error in ai-generate API:', err);
    return new Response(JSON.stringify({ success: false, error: err.message || 'Lỗi server khi tạo nội dung bằng AI.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
