export interface CategorySEOData {
  overviewTitle: string;
  overviewContent: string;
  guideTitle: string;
  guideIntro: string;
  tableHeaders?: string[];
  tableRows?: string[][];
  notesTitle?: string;
  notesIntro?: string;
  technicalNotes: string[];
  notesFooter?: string;
  pricingTitle?: string;
  pricingIntro?: string;
  pricingFactors?: string[];
  pricingFooter?: string;
  locationTitle?: string;
  locationContent?: string;
  updatedDate?: string;
  authorName?: string;
  faqTitle?: string;
  faqs: Array<{ question: string; answer: string }>;
  relatedLinks: Array<{ name: string; url: string }>;
}

export const CATEGORY_SEO_DATA: Record<string, CategorySEOData> = {
  // 1. XI MĂNG
  'xi-mang': {
    overviewTitle: 'Xi Măng Là Gì? Vai Trò & Danh Mục Xi Măng Tại Hoàng Yến',
    overviewContent: 'Xi măng là chất kết dính thủy lực dạng bột mịn vô cơ, khi nhào trộn với nước sẽ tạo thành dạng hồ dẻo và dần đóng rắn trong không khí cũng như trong nước, tạo thành khối liên kết chịu lực vững chắc. Đây là loại vật liệu xây dựng thô cốt lõi nhất, kết hợp cùng cát, đá, sỏi và nước để tạo thành bê tông, vữa xây tường, tô trát và cán nền.\n\nTại Siêu Thị VLXD Hoàng Yến (299 Lê Duẩn, Phường Đông Hà, Quảng Trị), chúng tôi cung cấp đầy đủ các thương hiệu xi măng xây dựng uy tín hàng đầu trên thị trường như: **Xi măng Nghi Sơn, Xi măng Kim Đỉnh, Xi măng Sông Gianh, Xi măng Đồng Lâm, Xi măng Long Sơn, Xi măng Vicem Hoàng Mai...** với đầy đủ các dòng xi măng chuyên dụng xây tô (PCB30), xi măng đa dụng và xi măng đổ bê tông kết cấu móng dầm sàn (PCB40) phục vụ từ nhà ở dân dụng đến các công trình dự án lớn.',
    guideTitle: 'Các chủng loại xi măng Hoàng Yến đang phân phối',
    guideIntro: 'Tại VLXD Hoàng Yến, quý khách có thể lựa chọn các dòng xi măng theo từng mục đích thi công cụ thể:\n\n- **Xi măng chuyên dụng xây tô (PCB30):** Các dòng xi măng Nghi Sơn PCB30, Kim Đỉnh PCB30, Sông Gianh PCB30 có độ mịn vượt trội, vữa dẻo mịn bám dính tốt, giữ nước lâu giúp thợ dễ thi công và ngăn ngừa nứt chân chim bề mặt tường.\n- **Xi măng đa dụng (PCB30 / PCB40):** Linh hoạt cho cả công tác xây tô lẫn đổ bê tông nhà ở dân dụng với cường độ phát triển ổn định.\n- **Xi măng bê tông kết cấu chịu lực (PCB40):** Các dòng Nghi Sơn PCB40, Đồng Lâm PCB40, Sông Gianh PCB40 chuyên dụng đổ móng, cột, dầm, sàn bê tông cốt thép, phát triển cường độ sớm cao, đáp ứng tiến độ tháo dỡ cốp pha an toàn.\n- **Xi măng bao 50kg và xi măng rời:** Cung ứng linh hoạt theo bao lẻ hoặc xe tải chở hàng tấn phục vụ công trình dự án.',
    notesTitle: 'Những yếu tố cần lưu ý khi chọn mua & bảo quản xi măng',
    notesIntro: 'Để đảm bảo chất lượng khối xây và kết cấu bê tông, người mua cần chú ý các yếu tố sau:',
    technicalNotes: [
      'Chọn đúng mác xi măng theo yêu cầu của từng hạng mục (PCB30 cho công tác xây trát, PCB40 cho kết cấu bê tông cốt thép).',
      'Kiểm tra ngày sản xuất in trên vỏ bao; xi măng nên được sử dụng trong vòng 60 ngày kể từ ngày xuất xưởng để đạt hoạt tính cao nhất.',
      'Bảo quản bao xi măng nơi khô ráo, kê trên pallet hoặc đà gỗ cách mặt đất tối thiểu 15 - 20cm và cách tường 20cm.',
      'Trộn vữa và bê tông đúng tỷ lệ cấp phối theo hướng dẫn trên vỏ bao hoặc chỉ định của kỹ sư thiết kế.'
    ],
    notesFooter: 'Đối với các công trình có thiết kế cấp phối riêng, quý khách nên tham khảo ý kiến của kỹ sư hoặc đơn vị giám sát thi công.',
    pricingTitle: 'Yếu tố ảnh hưởng đến giá xi măng tại Quảng Trị',
    pricingIntro: 'Giá xi măng xây dựng trên thị trường thường biến động theo các yếu tố:',
    pricingFactors: [
      'Thương hiệu sản xuất (Nghi Sơn, Kim Đỉnh, Sông Gianh, Đồng Lâm, Long Sơn...) và chủng loại mác (PCB30, PCB40)',
      'Khối lượng đặt mua (mua lẻ theo bao hoặc mua số lượng lớn theo tấn cho công trình)',
      'Địa điểm giao nhận và cự ly vận chuyển tận chân công trình',
      'Biến động giá nguyên liệu sản xuất clinker từ nhà máy theo từng thời điểm'
    ],
    pricingFooter: 'Quý khách vui lòng liên hệ Hotline/Zalo 0946.575.579 để nhận thông tin báo giá chi tiết cho đơn hàng cụ thể.',
    locationTitle: 'Địa chỉ cung ứng xi măng tại Quảng Trị',
    locationContent: 'Siêu Thị VLXD Hoàng Yến tọa lạc tại 299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị. Chúng tôi hỗ trợ giao nhận tận nơi cho các công trình tại khu vực TP. Đông Hà và các địa bàn lân cận.',
    updatedDate: '2026-03-16',
    authorName: 'Siêu Thị VLXD Hoàng Yến',
    faqTitle: '10 Câu hỏi thường gặp về xi măng xây dựng',
    faqs: [
      {
        question: 'Xi măng là gì và có vai trò gì trong công trình?',
        answer: 'Xi măng là chất kết dính thủy lực kết hợp cùng cát, sỏi, đá và nước để tạo nên bê tông chịu lực và vữa xây trát, quyết định độ cứng chắc và tuổi thọ kết cấu công trình.'
      },
      {
        question: 'Hoàng Yến đang cung cấp những thương hiệu xi măng nào tại Quảng Trị?',
        answer: 'Chúng tôi cung cấp các thương hiệu xi măng uy tín gồm: Xi măng Nghi Sơn, Xi măng Kim Đỉnh, Xi măng Sông Gianh, Xi măng Đồng Lâm, Xi măng Long Sơn, Xi măng Vicem Hoàng Mai với đầy đủ mác PCB30 và PCB40.'
      },
      {
        question: 'Xi măng PCB30 và PCB40 khác nhau như thế nào?',
        answer: 'Ký hiệu PCB30 biểu thị cường độ chịu nén sau 28 ngày đạt tối thiểu 30 N/mm2, rất dẻo và tối ưu cho xây trát; PCB40 đạt tối thiểu 40 N/mm2, cường độ chịu nén cao hơn, chuyên dùng đổ móng, cột, dầm, sàn.'
      },
      {
        question: 'Xây nhà dân dụng nên dùng loại xi măng nào?',
        answer: 'Thông thường cho nhà ở dân dụng, các nhà thầu sử dụng xi măng PCB40 cho hạng mục bê tông kết cấu móng, dầm, sàn và sử dụng xi măng PCB30 cho hạng mục xây tường, tô trát để tối ưu độ dẻo vữa và tiết kiệm chi phí.'
      },
      {
        question: 'Xi măng để được bao lâu kể từ ngày sản xuất?',
        answer: 'Xi măng bao thường duy trì chất lượng tốt nhất trong vòng 60 ngày kể từ ngày sản xuất in trên bao bì. Sau thời gian này, hoạt tính kết dính có thể suy giảm dần nếu môi trường có độ ẩm cao.'
      },
      {
        question: 'Làm sao để nhận biết bao xi măng bị vón cục, giảm phẩm chất?',
        answer: 'Bao xi măng đạt chuẩn khi sờ vào cảm giác mềm xốp đều. Nếu bao bị cứng cục bộ hoặc xuất hiện các khối vón hạt khó bóp tan thì xi măng đã hút ẩm không khí, không nên dùng cho kết cấu chịu lực.'
      },
      {
        question: 'Cách bảo quản xi măng tại công trường tránh ẩm ướt?',
        answer: 'Cần xếp xi măng trên pallet gỗ cách mặt đất tối thiểu 15 - 20cm, cách tường 20cm, che phủ bạt kín chống mưa gió và xếp không quá 10 bao chồng lên nhau để tránh nén chặt.'
      },
      {
        question: 'Định mức 1 bao xi măng trộn được bao nhiêu vữa xây hoặc bê tông?',
        answer: 'Tùy theo mác vữa yêu cầu (Mác 75, Mác 100), thông thường 1 bao xi măng 50kg trộn vữa xây tô mác 75 tương đương cấp phối khoảng 8 đến 9 thùng cát 18 lít.'
      },
      {
        question: 'Giá xi măng tại Quảng Trị được tính theo bao hay theo tấn?',
        answer: 'VLXD Hoàng Yến hỗ trợ cả hai hình thức: tính theo bao 50kg đối với đơn hàng lẻ và tính theo tấn (20 bao/tấn) đối với đơn hàng công trình.'
      },
      {
        question: 'Địa chỉ cửa hàng bán xi măng uy tín tại Đông Hà, Quảng Trị?',
        answer: 'Quý khách có thể đến trực tiếp Siêu Thị VLXD Hoàng Yến tại số 299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị hoặc gọi Hotline/Zalo 0946.575.579 để được hỗ trợ.'
      }
    ],
    relatedLinks: [
      { name: 'Thép Xây Dựng Hòa Phát & TISCO', url: '/thep-xay-dung/' },
      { name: 'Gạch Tuynel Đất Nung 6 Lỗ, 4 Lỗ', url: '/gach-tuynel/' },
      { name: 'Kẽm Buộc 1 Ly Dẻo', url: '/kem-buoc/' },
      { name: 'Tôn Lạnh Mạ Màu Đông Á', url: '/ton/' }
    ]
  },

  // 2. THÉP XÂY DỰNG
  'thep-xay-dung': {
    overviewTitle: 'Thép Xây Dựng Là Gì? Các Thương Hiệu & Chủng Loại Thép Tại Hoàng Yến',
    overviewContent: 'Thép xây dựng là loại hợp kim của sắt và cacbon (cùng một số nguyên tố vi lượng), được gia công cán nóng thành các dạng cuộn hoặc thanh tròn có gờ vằn, có khả năng chịu lực kéo và uốn cực cao. Trong xây dựng, thép kết hợp với bê tông (vốn chịu nén tốt nhưng chịu kéo kém) để tạo thành hệ kết cấu bê tông cốt thép vững chắc cho toàn bộ tòa nhà.\n\nTại Siêu Thị VLXD Hoàng Yến (299 Lê Duẩn, Phường Đông Hà, Quảng Trị), chúng tôi cung ứng các thương hiệu thép xây dựng lớn và uy tín hàng đầu Việt Nam như: **Thép Hòa Phát, Thép TISCO (Gang thép Thái Nguyên), Thép Việt Ý, Thép Việt Mỹ (VAS), Thép Pomina, Thép Việt Sing...** với đầy đủ các dòng thép cuộn đai tròn trơn (Phi 6, Phi 8) và thép cây thanh vằn chịu lực (Phi 10 đến Phi 25), mác thép CB240-T, CB300-V, CB400-V, CB500-V chuẩn tiêu chuẩn TCVN 1651:2018.',
    guideTitle: 'Các chủng loại thép xây dựng Hoàng Yến đang cung cấp',
    guideIntro: 'Danh mục sắt thép xây dựng tại VLXD Hoàng Yến bao gồm đầy đủ các quy cách phục vụ từ công trình dân dụng đến dự án kết cấu khẩu độ lớn:\n\n- **Thép cuộn tròn trơn (Thép cuộn D6, D8):** Thép cuộn Hòa Phát, TISCO phi 6 (D6) và phi 8 (D8) mác thép CB240-T dạng cuộn tròn (~500kg/cuộn), bề mặt nhẵn bóng, dẻo dai dễ uốn bẻ đai cốt thép cột, dầm, đà kiềng.\n- **Thép thanh vằn (Thép cây D10 - D25):** Thép cây Hòa Phát, TISCO chiều dài tiêu chuẩn 11.7 mét / cây gồm các đường kính Phi 10 (D10), Phi 12 (D12), Phi 14 (D14), Phi 16 (D16), Phi 18 (D18), Phi 20 (D20), Phi 22 (D22), Phi 25 (D25) với gờ vằn sắc nét tăng lực bám dính bê tông.\n- **Các mác thép tiêu chuẩn:** CB240-T (cho thép cuộn), CB300-V (cho thép cây nhà dân dụng), CB400-V và CB500-V (cho công trình cao tầng, móng dầm chịu lực lớn).\n- **Thép hình, thép hộp mạ kẽm:** Thép hộp vuông, thép hộp chữ nhật mạ kẽm và thép hình V, U, I, H phục vụ gia công cơ khí và khung kết cấu.',
    notesTitle: 'Lưu ý khi lựa chọn và bảo quản thép xây dựng',
    notesIntro: 'Để đảm bảo chất lượng kết cấu cho công trình, cần lưu ý:',
    technicalNotes: [
      'Kiểm tra logo và ký hiệu dập nổi trên thân thép cây (chữ HOA PHAT hoặc TISCO, đường kính và mác thép).',
      'Thép cây xuất xưởng có chiều dài tiêu chuẩn 11.7m, bó thép nguyên vẹn có đính kèm thẻ treo kim loại ghi rõ số lô.',
      'Kê thép trên đà gỗ cao hơn mặt đất tối thiểu 15cm tại công trường, phủ bạt che kín khi trời mưa để tránh oxy hóa bề mặt.',
      'Gia công uốn bẻ đai và nối thép đúng chiều dài đoạn nối quy định trong bản vẽ kết cấu.'
    ],
    notesFooter: 'Hoàng Yến hỗ trợ phương thức bán theo cây theo barem hoặc cân ký thực tế theo yêu cầu của quý khách.',
    pricingTitle: 'Yếu tố ảnh hưởng đến giá thép xây dựng tại Quảng Trị',
    pricingIntro: 'Giá sắt thép xây dựng thường biến động theo thị trường thế giới và trong nước:',
    pricingFactors: [
      'Thương hiệu sản xuất (Thép Hòa Phát, Thép TISCO, Thép Việt Mỹ, Thép Việt Ý...)',
      'Chủng loại (thép cuộn hay thép thanh vằn) và đường kính (D10 đến D25)',
      'Mác thép (CB240-T, CB300-V, CB400-V, CB500-V)',
      'Khối lượng đơn hàng (mua sỉ theo tấn cho công trình hay mua lẻ theo cây)',
      'Thời điểm mua và địa điểm giao nhận vật tư'
    ],
    pricingFooter: 'Quý khách vui lòng liên hệ trực tiếp để kiểm tra giá thép cập nhật theo thời điểm hiện tại.',
    locationTitle: 'Điểm cung ứng sắt thép xây dựng uy tín tại Quảng Trị',
    locationContent: 'Siêu Thị VLXD Hoàng Yến tọa lạc tại 299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị. Cửa hàng có sẵn phương tiện vận chuyển chuyên dụng chở thép cây 11.7m đến tận chân công trình.',
    updatedDate: '2026-03-16',
    authorName: 'Siêu Thị VLXD Hoàng Yến',
    faqTitle: '10 Câu hỏi thường gặp về thép xây dựng',
    faqs: [
      {
        question: 'Thép xây dựng là gì và gồm những loại nào?',
        answer: 'Thép xây dựng là vật liệu cốt lõi chịu lực kéo trong bê tông cốt thép, gồm thép cuộn trơn (D6, D8) làm đai và thép thanh vằn (D10 đến D25) làm cốt chịu lực chính.'
      },
      {
        question: 'Hoàng Yến cung cấp thép xây dựng của những thương hiệu nào?',
        answer: 'Chúng tôi cung cấp các thương hiệu thép uy tín như Thép Hòa Phát, Thép TISCO (Thái Nguyên), Thép Việt Ý, Thép Việt Mỹ (VAS) với đầy đủ chủng loại thép cuộn và thép cây mác CB300-V, CB400-V.'
      },
      {
        question: 'Mác thép CB240-T, CB300-V, CB400-V có ý nghĩa gì?',
        answer: 'CB là viết tắt của Cốt Bê tông, con số 240, 300, 400 biểu thị giới hạn chảy tối thiểu (N/mm2), chữ T là thép tròn trơn và chữ V là thép thanh vằn.'
      },
      {
        question: 'Làm thế nào để nhận biết thép Hòa Phát và thép TISCO chính hãng?',
        answer: 'Thép Hòa Phát có biểu tượng 3 hình tam giác và chữ HOA PHAT dập nổi; thép TISCO có biểu tượng chữ TISCO dập nổi trên thân cây kèm ký hiệu đường kính và mác thép sắc nét, bó thép có thẻ treo nhà máy.'
      },
      {
        question: 'Một cây thép xây dựng dài bao nhiêu mét tiêu chuẩn?',
        answer: 'Chiều dài tiêu chuẩn của thép thanh vằn xuất xưởng từ nhà máy là 11.7 mét / cây (thường được bẻ gập đôi dạng chữ U khi vận chuyển để thuận tiện di chuyển).'
      },
      {
        question: 'Thép bị rỉ sét nhẹ màu vàng có sử dụng đổ bê tông được không?',
        answer: 'Lớp rỉ sét nhẹ màu vàng (bụi rỉ do ẩm không khí) chỉ cần dùng bàn chải sắt hoặc giẻ lau sạch là có thể sử dụng bình thường. Nếu rỉ bong tróc vảy làm giảm tiết diện thép thì không nên dùng cho kết cấu chính.'
      },
      {
        question: 'Bán thép theo barem cây hay cân ký có lợi hơn?',
        answer: 'Cả hai phương thức đều minh bạch nếu thép đạt chuẩn dung sai nhà sản xuất. Mua theo barem cây thuận tiện cho việc kiểm đếm số lượng theo bản vẽ thiết kế.'
      },
      {
        question: 'Khoảng cách nối chồng cốt thép tiêu chuẩn là bao nhiêu?',
        answer: 'Chiều dài đoạn nối chồng cốt thép phụ thuộc vào mác bê tông và đường kính thép, thông thường từ 30d đến 45d (với d là đường kính thanh thép).'
      },
      {
        question: 'Giá thép xây dựng tại Quảng Trị cập nhật như thế nào?',
        answer: 'Giá sắt thép có xu hướng biến động theo thị trường hàng tuần/hàng tháng. Quý khách vui lòng liên hệ Hotline 0946.575.579 để nhận báo giá chính xác tại thời điểm đặt hàng.'
      },
      {
        question: 'Địa chỉ mua thép xây dựng Hòa Phát, TISCO tại Đông Hà, Quảng Trị?',
        answer: 'Quý khách ghé Siêu Thị VLXD Hoàng Yến, 299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị. Hotline/Zalo: 0946.575.579.'
      }
    ],
    relatedLinks: [
      { name: 'Kẽm Buộc 1 Ly Dẻo', url: '/kem-buoc/' },
      { name: 'Đinh Thép Cốp Pha', url: '/dinh-vit/' },
      { name: 'Xi Măng Đổ Bê Tông PCB40', url: '/xi-mang/' },
      { name: 'Xà Gồ C Mạ Kẽm', url: '/xa-go/' }
    ]
  },

  // 3. TÔN
  'ton': {
    overviewTitle: 'Tôn Lợp Mái Là Gì? Các Thương Hiệu & Chủng Loại Tôn Tại Hoàng Yến',
    overviewContent: 'Tôn lợp mái (tôn kim loại) là tấm thép mỏng được mạ hợp kim nhôm kẽm (tôn lạnh) hoặc phủ thêm lớp sơn màu tĩnh điện (tôn mạ màu) và được dập sóng để gia tăng độ cứng chịu lực và thoát nước. Tôn đóng vai trò bao che bảo vệ ngôi nhà khỏi mưa nắng, gió bão và bức xạ nhiệt mặt trời.\n\nTại Siêu Thị VLXD Hoàng Yến (299 Lê Duẩn, Phường Đông Hà, Quảng Trị), chúng tôi cung ứng các thương hiệu tôn lợp hàng đầu Việt Nam như: **Tôn Đông Á, Tôn Hoa Sen, Tôn Phương Nam (Việt Nhật SSSC), Tôn Nam Kim...** với đầy đủ các dòng tôn lạnh mạ kẽm, tôn lạnh mạ màu, tôn xốp chống nóng EPS/PU 3 lớp, tôn sóng ngói Ruby, tôn 5 sóng vuông, tôn 9 sóng vuông và tôn la-phông cách nhiệt.',
    guideTitle: 'Các chủng loại và biên dạng sóng tôn Hoàng Yến đang phân phối',
    guideIntro: 'Tùy theo yêu cầu kiến trúc và loại công trình, VLXD Hoàng Yến cung cấp các giải pháp tôn lợp đa dạng:\n\n- **Tôn lạnh mạ nhôm kẽm & Tôn lạnh mạ màu Đông Á, Hoa Sen:** Bề mặt phủ hợp kim nhôm kẽm kháng nhiệt, đa dạng màu sắc (xanh rêu, xanh dương, đỏ đậm, xám lông chuột, nâu đất...). Độ dày dem tôn từ 0.30mm, 0.35mm, 0.40mm, 0.45mm đến 0.50mm.\n- **Tôn 5 sóng vuông công nghiệp:** Bước sóng cao 32mm có gân phụ giữa các sóng, thoát nước cực nhanh, chuyên dùng cho nhà xưởng, kho bãi khẩu độ mái lớn.\n- **Tôn 9 sóng vuông dân dụng:** Biên dạng sóng dày dặn, dễ thi công viền mái và phụ kiện, tối ưu cho nhà ở dân dụng, nhà trọ, ki-ốt và mái hiên.\n- **Tôn sóng ngói Ruby (Tôn giả ngói):** Mang vẻ đẹp sang trọng như ngói đất nung truyền thống nhưng trọng lượng nhẹ, chống dột tốt, chuyên dùng cho biệt thự, nhà mái Thái, mái Nhật.\n- **Tôn xốp cách nhiệt EPS / PU 3 lớp:** Tích hợp lớp xốp cách nhiệt dán ép mặt dưới giúp chống nóng, hạ nhiệt độ phòng từ 5 - 8°C và giảm tiếng ồn khi trời mưa to.\n- **Tôn la-phông & Tôn vách ngăn:** Tôn 13 sóng hoặc sóng phẳng làm trần cách nhiệt và vách bao che kinh tế.',
    notesTitle: 'Lưu ý khi thi công lợp tôn mái nhà',
    notesIntro: 'Để mái tôn bền đẹp và không bị thấm dột, người thi công cần chú ý:',
    technicalNotes: [
      'Cắt tôn bằng kéo chuyên dụng hoặc máy cắt gặm, tránh dùng đá mài cắt tạo tia lửa làm cháy lớp mạ bảo vệ.',
      'Sử dụng vít tự khoan mạ kẽm có đệm ron cao su EPDM chất lượng cao để ngăn nước mưa ngấm qua lỗ vít.',
      'Các tấm tôn úp sóng chồng lên nhau tối thiểu 1.5 sóng và nối đầu tối thiểu 15 - 20cm theo chiều dốc mái.',
      'Quét dọn sạch sẽ mạt sắt sau khi bắn vít để tránh rỉ ố bề mặt tôn khi gặp trời mưa ẩm.'
    ],
    notesFooter: 'Hoàng Yến nhận cán dập sóng tôn theo đúng chiều dài mái thực tế công trình của quý khách.',
    pricingTitle: 'Yếu tố ảnh hưởng đến giá tôn lợp tại Quảng Trị',
    pricingIntro: 'Giá tôn lợp mái phụ thuộc vào các tiêu chí kỹ thuật:',
    pricingFactors: [
      'Thương hiệu sản xuất (Tôn Đông Á, Tôn Hoa Sen, Tôn Phương Nam, Tôn Nam Kim...)',
      'Độ dày dem tôn thực tế (0.35mm, 0.40mm, 0.45mm, 0.50mm)',
      'Biên dạng sóng (5 sóng, 9 sóng, sóng ngói Ruby, dán xốp cách nhiệt)',
      'Tổng diện tích mét vuông và chiều dài cán dập theo đơn hàng'
    ],
    pricingFooter: 'Liên hệ Siêu Thị VLXD Hoàng Yến để nhận bảng báo giá tôn chi tiết theo kích thước mái của bạn.',
    locationTitle: 'Địa chỉ mua tôn lợp mái uy tín tại Quảng Trị',
    locationContent: 'Siêu Thị VLXD Hoàng Yến tọa lạc tại 299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị. Cung cấp tôn lợp mái, xà gồ mạ kẽm và phụ kiện bắn tôn đồng bộ.',
    updatedDate: '2026-03-16',
    authorName: 'Siêu Thị VLXD Hoàng Yến',
    faqTitle: '10 Câu hỏi thường gặp về tôn lợp mái',
    faqs: [
      {
        question: 'Tôn lợp mái là gì và có những loại nào phổ biến?',
        answer: 'Tôn lợp mái là tấm thép mạ nhôm kẽm cán sóng, gồm tôn lạnh mạ kẽm, tôn lạnh mạ màu, tôn dán xốp cách nhiệt EPS và tôn sóng ngói Ruby.'
      },
      {
        question: 'Hoàng Yến đang phân phối những thương hiệu tôn nào tại Quảng Trị?',
        answer: 'Chúng tôi phân phối chính thức các dòng tôn cao cấp từ Tôn Đông Á, Tôn Hoa Sen, Tôn Phương Nam (Việt Nhật) với đầy đủ biên dạng 5 sóng, 9 sóng, sóng ngói Ruby và tôn dán xốp chống nóng.'
      },
      {
        question: 'Tôn lạnh và tôn kẽm thông thường khác nhau thế nào?',
        answer: 'Tôn lạnh được mạ hợp kim gồm 55% Nhôm, 43.5% Kẽm và 1.5% Silic, có khả năng phản xạ nhiệt mặt trời và chống ăn mòn vượt trội gấp nhiều lần so với tôn kẽm thông thường.'
      },
      {
        question: 'Tại Quảng Trị khí hậu nắng nóng nên lợp tôn loại nào?',
        answer: 'Khách hàng nên chọn tôn lạnh mạ màu có độ dày từ 0.40mm - 0.45mm trở lên, kết hợp dán thêm lớp xốp cách nhiệt EPS chống nóng để giảm nhiệt độ bên trong ngôi nhà.'
      },
      {
        question: 'Nên chọn tôn 5 sóng hay tôn 9 sóng cho mái nhà?',
        answer: 'Tôn 5 sóng vuông có bước sóng cao 32mm thích hợp cho mái nhà xưởng khẩu độ rộng thoát nước nhanh; tôn 9 sóng vuông bước sóng thấp thích hợp cho nhà ở dân dụng và mái hiên.'
      },
      {
        question: 'Độ dốc mái tôn tối thiểu là bao nhiêu để không bị tràn nước?',
        answer: 'Độ dốc mái tôn tối thiểu khuyến nghị nên từ 10% đến 15% (tương đương góc nghiêng khoảng 6° - 9°) để đảm bảo thoát nước mưa nhanh khi mưa lớn.'
      },
      {
        question: 'Hoàng Yến có nhận cán tôn theo kích thước chiều dài yêu cầu không?',
        answer: 'Có. Chúng tôi nhận đặt cán tôn theo đúng kích thước chiều dài mái thực tế công trình, hạn chế tối đa việc phải chắp nối dọc tấm tôn.'
      },
      {
        question: 'Làm thế nào để chống dột tại các vị trí bắt vít mái tôn?',
        answer: 'Cần sử dụng vít bắn tôn tự khoan mạ kẽm có gắn kèm đệm ron cao su EPDM đàn hồi tốt, siết vừa tay không làm rách ron cao su.'
      },
      {
        question: 'Tôn sóng ngói Ruby có ưu điểm gì so với ngói đất nung?',
        answer: 'Tôn sóng ngói mang vẻ đẹp thẩm mỹ tương tự ngói truyền thống nhưng trọng lượng nhẹ hơn nhiều, giảm tải trọng cho khung kèo xà gồ và thi công nhanh chóng.'
      },
      {
        question: 'Địa chỉ cửa hàng cung cấp tôn Đông Á, Hoa Sen tại Quảng Trị?',
        answer: 'Quý khách có thể liên hệ Siêu Thị VLXD Hoàng Yến tại 299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị hoặc gọi Hotline/Zalo 0946.575.579.'
      }
    ],
    relatedLinks: [
      { name: 'Xà Gồ C Mạ Kẽm', url: '/xa-go/' },
      { name: 'Đinh Vít Bắn Tôn Ron Cao Su', url: '/dinh-vit/' },
      { name: 'Xốp Cách Nhiệt EPS', url: '/xop-nhua/' },
      { name: 'Thép Xây Dựng Hòa Phát', url: '/thep-xay-dung/' }
    ]
  },

  // 4. LƯỚI XÂY DỰNG
  'luoi-xay-dung': {
    overviewTitle: 'Lưới B40 & Lưới Xây Dựng Là Gì? Các Chủng Loại Tại Hoàng Yến',
    overviewContent: 'Lưới xây dựng (tiêu biểu là lưới B40, lưới thép hàn, lưới trát tường) là dạng vật liệu được đan hoặc hàn từ các sợi dây thép mạ kẽm hoặc thép đen tạo thành tấm hoặc cuộn lưới có các mắt lưới hình thoi hoặc hình vuông đều đặn. Lưới có đặc tính chịu lực căng kéo dẻo dai, dễ thi công lắp đặt và độ bền cao trong môi trường ngoài trời.\n\nTại Siêu Thị VLXD Hoàng Yến (299 Lê Duẩn, Phường Đông Hà, Quảng Trị), chúng tôi cung ứng đầy đủ các dòng: **Lưới B40 mạ kẽm sợi 2.7mm - 3.5mm, Lưới B40 bọc nhựa PVC, Lưới thép hàn đổ bê tông nền sàn (Phi 4, Phi 6, Phi 8), Lưới trát tường chống nứt (lưới mắt cáo mạ kẽm) và Lưới bao che an toàn công trình** với đầy đủ các khổ chiều cao từ 1.0m đến 2.4m.',
    guideTitle: 'Các quy cách và khổ lưới xây dựng Hoàng Yến đang cung cấp',
    guideIntro: 'Danh mục lưới xây dựng tại VLXD Hoàng Yến bao gồm:\n\n- **Lưới B40 mạ kẽm:** Đan từ sợi thép mạ kẽm nhúng nóng đường kính 2.7mm, 3.0mm, 3.2mm, 3.5mm với mắt lưới 50x50mm hoặc 60x60mm, chống gỉ sét ngoài trời. Đầy đủ các khổ cao tiêu chuẩn: Khổ 1.0m, Khổ 1.2m, Khổ 1.5m, Khổ 1.8m, Khổ 2.0m, Khổ 2.4m.\n- **Lưới B40 bọc nhựa PVC:** Sợi kẽm bọc nhựa màu xanh lá tăng cường tính thẩm mỹ và chống ăn mòn nước mặn ven biển.\n- **Lưới thép hàn bê tông (Phi 4, Phi 6, Phi 8):** Dạng tấm hoặc cuộn thay thế đan thép thủ công cho sàn nhà xưởng, đường bê tông nông thôn, sân bãi.\n- **Lưới tô tường / trát tường chống nứt:** Lưới thép mắt cáo mạ kẽm chuyên dán tại các góc cột, đà bê tông và đường cắt ống điện nước trước khi tô vữa chống xé nứt.\n- **Lưới che bụi & lưới an toàn:** Lưới cước che chắn xung quanh giàn giáo thi công.',
    notesTitle: 'Lưu ý khi thi công lắp đặt lưới B40',
    notesIntro: 'Để hàng rào lưới B40 luôn căng phẳng và chắc chắn, cần lưu ý:',
    technicalNotes: [
      'Căng lưới trên trụ bê tông hoặc trụ ống thép có giằng ngang để lưới không bị chùng võng sau thời gian dài.',
      'Sử dụng dây kẽm buộc hoặc thanh nẹp thép để khóa chặt mép lưới vào cột trụ.',
      'Đối với khu vực đất trũng hoặc gần biển, nên đổ đà kiềng bê tông chân hàng rào cao 20 - 30cm trước khi lắp lưới.'
    ],
    notesFooter: 'Hoàng Yến cung cấp lưới B40 tính theo cân ký thực tế hoặc quy đổi theo mét dài theo yêu cầu.',
    pricingTitle: 'Yếu tố ảnh hưởng đến giá lưới xây dựng tại Quảng Trị',
    pricingIntro: 'Giá lưới B40 và lưới xây dựng phụ thuộc vào:',
    pricingFactors: [
      'Đường kính sợi thép mạ kẽm (2.7mm, 3.0mm, 3.2mm, 3.5mm)',
      'Khổ chiều cao cuộn lưới (1.0m, 1.2m, 1.5m, 1.8m, 2.0m, 2.4m)',
      'Tổng khối lượng kg hoặc mét dài đặt mua',
      'Chi phí vận chuyển theo cự ly công trình'
    ],
    pricingFooter: 'Liên hệ Hotline/Zalo 0946.575.579 để nhận báo giá lưới B40 chi tiết.',
    locationTitle: 'Nơi mua lưới B40 mạ kẽm tại Quảng Trị',
    locationContent: 'Siêu Thị VLXD Hoàng Yến tọa lạc tại 299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị. Cửa hàng có sẵn các khổ lưới phục vụ giao ngay.',
    updatedDate: '2026-03-16',
    authorName: 'Siêu Thị VLXD Hoàng Yến',
    faqTitle: '10 Câu hỏi thường gặp về lưới B40 & lưới xây dựng',
    faqs: [
      {
        question: 'Lưới B40 là gì và tại sao có tên gọi B40?',
        answer: 'Lưới B40 là loại lưới đan từ các sợi thép mạ kẽm thành các mắt lưới hình quả trám/hình thoi. Tên gọi B40 xuất phát từ thời chiến tranh khi lưới được dùng làm rào chắn chống đạn súng B40.'
      },
      {
        question: 'Hoàng Yến có sẵn những khổ lưới B40 nào tại kho Đông Hà?',
        answer: 'Chúng tôi có sẵn đầy đủ các khổ chiều cao từ 1.0m, 1.2m, 1.5m, 1.8m, 2.0m đến 2.4m với đường kính sợi kẽm từ 2.7mm đến 3.5mm.'
      },
      {
        question: 'Lưới B40 mạ kẽm và lưới B40 bọc nhựa loại nào bền hơn?',
        answer: 'Lưới bọc nhựa PVC có thêm lớp vỏ nhựa bảo vệ chống oxy hóa vượt trội trong môi trường ven biển ẩm ướt; lưới mạ kẽm thông thường có độ cứng cáp và giá thành tiết kiệm hơn.'
      },
      {
        question: 'Lưới B40 bán theo cân ký hay theo mét dài?',
        answer: 'VLXD Hoàng Yến cung cấp lưới B40 tính theo cân ký thực tế trên cân điện tử hoặc quy đổi theo mét dài theo nhu cầu của khách hàng.'
      },
      {
        question: 'Một mét lưới B40 nặng khoảng bao nhiêu kg?',
        answer: 'Trọng lượng 1 mét lưới phụ thuộc vào khổ cao và độ dày sợi kẽm (ví dụ khổ 1.5m sợi 3.0mm nặng khoảng 2.3 - 2.5 kg/m).'
      },
      {
        question: 'Khoảng cách giữa các trụ rào lưới B40 bao nhiêu là hợp lý?',
        answer: 'Khoảng cách giữa các cột trụ bê tông hoặc trụ ống thép nên bố trí từ 2.5m đến 3.0m và có thanh giằng ngang trên đỉnh để giữ lưới căng phẳng.'
      },
      {
        question: 'Lưới trát tường chống nứt là gì và dùng khi nào?',
        answer: 'Lưới trát tường (lưới mắt cáo mạ kẽm) dùng để dán tại vị trí tiếp giáp giữa cột bê tông và tường gạch hoặc đường cắt ống điện nước trước khi tô trát vữa để chống nứt xé chân chim.'
      },
      {
        question: 'Lưới thép hàn bê tông có những phi nào?',
        answer: 'Lưới thép hàn bê tông phổ biến có các đường kính sợi phi 4, phi 6, phi 8 với mắt lưới 100x100, 150x150 hoặc 200x200mm dùng đổ nền nhà xưởng và đường bê tông.'
      },
      {
        question: 'Làm thế nào để căng lưới B40 không bị chùng võng?',
        answer: 'Khi thi công cần sử dụng tời căng hoặc thanh luồn thép kéo căng hai đầu cuộn trước khi dùng dây kẽm buộc chặt cố định vào trụ.'
      },
      {
        question: 'Địa chỉ mua lưới B40 giá tốt tại Đông Hà, Quảng Trị?',
        answer: 'Quý khách có thể mua lưới B40 tại Siêu Thị VLXD Hoàng Yến, 299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị. Hotline/Zalo: 0946.575.579.'
      }
    ],
    relatedLinks: [
      { name: 'Kẽm Buộc 1 Ly Dẻo', url: '/kem-buoc/' },
      { name: 'Đinh Thép Cốp Pha', url: '/dinh-vit/' },
      { name: 'Xi Măng Đổ Móng Trụ', url: '/xi-mang/' },
      { name: 'Thép Xây Dựng Hòa Phát', url: '/thep-xay-dung/' }
    ]
  },

  // 5. GẠCH TUYNEL
  'gach-tuynel': {
    overviewTitle: 'Gạch Tuynel Là Gì? Các Loại Gạch 6 Lỗ, 4 Lỗ, 2 Lỗ & Gạch Thẻ Tại Hoàng Yến',
    overviewContent: 'Gạch tuynel là loại gạch đất sét nung được sản xuất theo công nghệ lò nung tuynel liên tục hiện đại. Đất sét tự nhiên được ngâm ủ, nghiền mịn, đùn ép hút chân không tạo hình và sấy nung ở nhiệt độ cao (trên 1000°C), tạo nên viên gạch có màu đỏ gạch tự nhiên, độ cứng cao, đanh chắc và khả năng hút nước thấp theo tiêu chuẩn TCVN 1450:2009.\n\nTại Siêu Thị VLXD Hoàng Yến (299 Lê Duẩn, Phường Đông Hà, Quảng Trị), chúng tôi cung ứng đầy đủ các dòng gạch tuynel đất sét nung từ các nhà máy lò tuynel uy tín hàng đầu khu vực miền Trung gồm: **Gạch Tuynel 6 lỗ, Gạch Tuynel 4 lỗ, Gạch Tuynel 2 lỗ và Gạch Tuynel đặc (gạch thẻ đặc)** phục vụ xây tường bao 20cm, tường ngăn 10cm, móng nhà, hố ga và các kết cấu chịu lực.',
    guideTitle: 'Các loại gạch tuynel Hoàng Yến đang phân phối',
    guideIntro: 'Tùy theo vị trí hạng mục thi công, quý khách có thể lựa chọn các dòng gạch tuynel phù hợp:\n\n- **Gạch Tuynel 6 lỗ (Kích thước ~195x135x90mm):** Viên gạch kích thước lớn với 6 khoang rỗng giúp cách âm, cách nhiệt chống nóng cực tốt và tăng tốc độ thi công xây tường bao 20cm hoặc tường ngăn phòng.\n- **Gạch Tuynel 4 lỗ (Kích thước ~190x80x80mm):** Dòng gạch xây tường ngăn phòng thông dụng, trọng lượng nhẹ, giảm tải trọng cho dầm sàn nhà phố và căn hộ.\n- **Gạch Tuynel 2 lỗ (Kích thước ~205x95x55mm):** Viên gạch nhỏ gọn, độ cứng cao, chuyên dùng xây tường đơn 10cm, chèn góc cột và tường ngăn.\n- **Gạch Tuynel đặc (Gạch thẻ đặc, Kích thước ~205x95x55mm):** Viên gạch đúc đặc 100% không lỗ, khả năng chịu lực nén cực cao và chống thấm tuyệt đối, chuyên dùng cho 3 hàng gạch chân móng, xây hố ga bể phốt, bậc cầu thang, đà giằng và bổ trụ chịu tải.\n- **Gạch nung chất lượng cao:** Viên gạch màu đỏ cam đồng đều, gõ kêu đanh chắc, không cong vênh, ít sứt mẻ hao hụt.',
    notesTitle: 'Lưu ý kỹ thuật khi xây tường gạch tuynel',
    notesIntro: 'Để khối xây tường thẳng đẹp và liên kết vữa vững chắc, thợ xây cần chú ý:',
    technicalNotes: [
      'Tưới ẩm nước gạch trước khi xây khoảng 15 - 20 phút để gạch không hút nước của vữa xi măng làm vữa mất nước nhanh.',
      'Mạch vữa xây dày từ 10mm đến 12mm, miết no vữa các mạch đứng và ngang để tường không bị rỗng xốp.',
      'Cứ mỗi 4 - 5 hàng gạch xây dọc nên bố trí 1 hàng gạch quay ngang (câu gạch) để khóa liên kết khối xây.',
      'Chèn thép râu liên kết với cột bê tông để chống nứt khối xây.'
    ],
    notesFooter: 'Hoàng Yến hỗ trợ giao gạch tận chân công trình cẩn thận nhằm giảm thiểu tối đa hao hụt sứt mẻ.',
    pricingTitle: 'Yếu tố ảnh hưởng đến giá gạch tuynel tại Quảng Trị',
    pricingIntro: 'Giá gạch tuynel phụ thuộc vào:',
    pricingFactors: [
      'Chủng loại gạch (gạch 6 lỗ, gạch 4 lỗ, gạch 2 lỗ hay gạch đặc)',
      'Số lượng viên đặt mua cho công trình (mua lẻ hay mua theo thiên/vạn viên)',
      'Khoảng cách vận chuyển và điều kiện bốc xếp tại chân công trình'
    ],
    pricingFooter: 'Liên hệ Hoàng Yến qua Hotline/Zalo 0946.575.579 để nhận báo giá gạch tuynel theo đơn hàng thực tế.',
    locationTitle: 'Địa chỉ mua gạch tuynel xây dựng tại Quảng Trị',
    locationContent: 'Siêu Thị VLXD Hoàng Yến tọa lạc tại 299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị. Cung cấp gạch tuynel, xi măng và cát đá xây dựng đồng bộ.',
    updatedDate: '2026-03-16',
    authorName: 'Siêu Thị VLXD Hoàng Yến',
    faqTitle: '10 Câu hỏi thường gặp về gạch tuynel đất sét nung',
    faqs: [
      {
        question: 'Gạch tuynel là gì và khác gì so với gạch thủ công truyền thống?',
        answer: 'Gạch tuynel được nung trong hầm lò tuynel tự động điều khiển nhiệt độ chuẩn xác, viên gạch chín đều, không cong vênh nứt nẻ và chịu lực tốt hơn nhiều so với gạch nung thủ công.'
      },
      {
        question: 'Hoàng Yến cung cấp những loại gạch tuynel nào tại Quảng Trị?',
        answer: 'Chúng tôi cung cấp đầy đủ các dòng gạch tuynel đất sét nung: Gạch 6 lỗ, Gạch 4 lỗ, Gạch 2 lỗ và Gạch thẻ đặc phục vụ đầy đủ các hạng mục tường bao, tường ngăn và móng nhà.'
      },
      {
        question: 'Gạch 6 lỗ, 4 lỗ và 2 lỗ nên dùng ở những vị trí nào?',
        answer: 'Gạch 6 lỗ và 4 lỗ thích hợp cho tường bao và tường ngăn phòng để cách âm chống nóng; gạch 2 lỗ và gạch đặc có độ cứng cao hơn, chuyên dùng cho móng, chân tường và vị trí chịu lực.'
      },
      {
        question: 'Xây 1m2 tường 10 cần bao nhiêu viên gạch 6 lỗ?',
        answer: 'Định mức thông thường xây 1m2 tường đơn (tường 10cm) sử dụng khoảng 45 đến 48 viên gạch 6 lỗ.'
      },
      {
        question: 'Xây 1m2 tường 10 cần bao nhiêu viên gạch 2 lỗ hoặc 4 lỗ?',
        answer: 'Định mức xây 1m2 tường đơn sử dụng khoảng 68 đến 70 viên gạch 2 lỗ (hoặc ~55 - 60 viên gạch 4 lỗ tùy kích thước).'
      },
      {
        question: 'Tại sao phải tưới nước gạch trước khi xây tường?',
        answer: 'Tưới nước giúp gạch no nước, không hút nước từ vữa xi măng, giúp xi măng ninh kết đạt đủ cường độ và không bị nứt mạch vữa.'
      },
      {
        question: 'Gạch đặc (gạch thẻ) nên dùng ở những vị trí nào?',
        answer: 'Gạch đặc có khả năng chịu lực nén và chống thấm tốt nhất, nên dùng ở 3 hàng gạch chân móng, bậc cầu thang, bổ trụ và tường bao hố ga bể phốt.'
      },
      {
        question: 'Làm sao để nhận biết viên gạch tuynel đạt chuẩn chất lượng?',
        answer: 'Viên gạch đạt chuẩn có màu đỏ cam đồng đều, gõ nhẹ vào nhau phát ra tiếng coong đanh chắc, góc cạnh vuông vắn và không bị cháy đen hay non lửa.'
      },
      {
        question: 'Tường bao ngoài nhà nên xây tường 10 hay tường 20?',
        answer: 'Tại miền Trung khí hậu nắng gắt và mưa bão nhiều, tường bao ngoài nhà nên xây tường 20 (gạch đôi) để tăng khả năng chống nóng, cách âm và chống thấm ẩm.'
      },
      {
        question: 'Địa chỉ mua gạch tuynel chất lượng tại Đông Hà, Quảng Trị?',
        answer: 'Quý khách liên hệ Siêu Thị VLXD Hoàng Yến, số 299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị. Hotline/Zalo: 0946.575.579.'
      }
    ],
    relatedLinks: [
      { name: 'Xi Măng Xây Tô PCB30', url: '/xi-mang/' },
      { name: 'Kẽm Buộc Râu Tường', url: '/kem-buoc/' },
      { name: 'Thép Xây Dựng Hòa Phát', url: '/thep-xay-dung/' }
    ]
  },

  // 6. XÀ GỒ
  'xa-go': {
    overviewTitle: 'Xà Gồ Thép Là Gì? Các Quy Cách Xà Gồ C & Z Mạ Kẽm Tại Hoàng Yến',
    overviewContent: 'Xà gồ thép là cấu kiện dầm phụ nằm ngang trong hệ kết cấu khung nhà, có nhiệm vụ liên kết các vì kèo cột và trực tiếp nâng đỡ tấm tôn lợp mái hoặc vách ngăn. Xà gồ được cán nguội định hình từ thép cuộn mạ kẽm cường độ cao, giúp tăng khả năng chịu uốn chịu tải trọng gió bão và chống rỉ sét ăn mòn.\n\nTại Siêu Thị VLXD Hoàng Yến (299 Lê Duẩn, Phường Đông Hà, Quảng Trị), chúng tôi cung ứng các dòng: **Xà gồ thép C mạ kẽm (C100, C125, C150, C180, C200), Xà gồ thép Z mạ kẽm (Z150, Z180, Z200, Z250), Xà gồ thép hộp mạ kẽm (hộp 30x60, 40x80, 50x100)** với đầy đủ các độ dày từ 1.4mm đến 2.5mm, nhận cán cắt theo chiều dài bản vẽ và hỗ trợ đột lỗ liên kết theo yêu cầu kết cấu.',
    guideTitle: 'Các quy cách xà gồ thép Hoàng Yến đang cung cấp',
    guideIntro: 'Danh mục xà gồ tại VLXD Hoàng Yến gồm:\n\n- **Xà gồ C mạ kẽm:** Tiết diện hình chữ C gồm các kích thước C100 (100x50x15), C125 (125x50x15), C150 (150x50x20), C180 (180x50x20), C200 (200x65x20) với độ dày 1.4mm - 2.5mm, tối ưu cho mái nhà dân dụng, nhà ống, nhà phố và gara.\n- **Xà gồ Z mạ kẽm:** Tiết diện hình chữ Z gồm Z150, Z180, Z200, Z250 có khả năng nối chồng gối lên nhau tại vị trí kèo cột, tăng khả năng chịu lực vượt nhịp lớn cho nhà xưởng công nghiệp.\n- **Thép hộp mạ kẽm:** Hộp vuông 40x40, 50x50 và hộp chữ nhật 30x60, 40x80, 50x100 làm đòn tay và khung đỡ mái hiên.\n- **Dịch vụ gia công:** Nhận cán cắt theo đúng kích thước chiều dài nhịp mái thực tế và đột lỗ oval bắt bu-lông chuẩn xác theo bản vẽ kết cấu.',
    notesTitle: 'Lưu ý khi lắp đặt xà gồ thép mạ kẽm',
    notesIntro: 'Để khung kèo mái vững chãi và chịu tải tốt, cần chú ý:',
    technicalNotes: [
      'Khoảng cách bố trí xà gồ lợp tôn thường từ 0.8m đến 1.2m tùy theo độ dốc mái và độ dày tôn lợp.',
      'Sử dụng bu-lông mạ kẽm chất lượng cao để liên kết bản mã xà gồ với cột kèo.',
      'Xà gồ mạ kẽm đã có lớp bảo vệ chống gỉ, không cần sơn thêm trong điều kiện sử dụng thông thường.'
    ],
    notesFooter: 'Hoàng Yến nhận cán cắt xà gồ theo chiều dài thực tế công trình để tránh hao hụt mối nối.',
    pricingTitle: 'Yếu tố ảnh hưởng đến giá xà gồ thép tại Quảng Trị',
    pricingIntro: 'Giá xà gồ thép C mạ kẽm phụ thuộc vào:',
    pricingFactors: [
      'Quy cách kích thước tiết diện (C100, C125, C150, C200, Z150, Z200...)',
      'Độ dày thép mạ kẽm (1.4mm - 2.5mm)',
      'Chiều dài cây và khối lượng đặt mua',
      'Yêu cầu đột lỗ theo bản vẽ thiết kế'
    ],
    pricingFooter: 'Liên hệ Hoàng Yến để nhận bảng giá xà gồ theo quy cách yêu cầu.',
    locationTitle: 'Địa chỉ cung ứng xà gồ thép tại Quảng Trị',
    locationContent: 'Siêu Thị VLXD Hoàng Yến tọa lạc tại 299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị. Cung ứng xà gồ C, tôn lợp và phụ kiện kim khí đồng bộ.',
    updatedDate: '2026-03-16',
    authorName: 'Siêu Thị VLXD Hoàng Yến',
    faqTitle: '10 Câu hỏi thường gặp về xà gồ thép',
    faqs: [
      {
        question: 'Xà gồ thép là gì và có chức năng gì trong kết cấu mái?',
        answer: 'Xà gồ thép là các thanh dầm ngang gác lên hệ kèo cột, có nhiệm vụ nâng đỡ hệ tôn lợp mái hoặc vách ngăn và truyền tải trọng xuống hệ khung nhà.'
      },
      {
        question: 'Hoàng Yến cung cấp những loại xà gồ nào tại Quảng Trị?',
        answer: 'Chúng tôi cung cấp xà gồ C mạ kẽm (C100 đến C200), xà gồ Z mạ kẽm (Z150 đến Z250) và thép hộp mạ kẽm các loại với độ dày từ 1.4mm đến 2.5mm.'
      },
      {
        question: 'Xà gồ C và xà gồ Z khác nhau như thế nào?',
        answer: 'Xà gồ C có mặt cắt hình chữ C thích hợp cho khung nhịp đơn giản; xà gồ Z có thể chồng gối lên nhau tại vị trí gối tựa giúp tăng khả năng chịu lực cho các nhịp nhà xưởng lớn.'
      },
      {
        question: 'Ký hiệu xà gồ C150x50x20x1.8 có ý nghĩa gì?',
        answer: 'Ký hiệu này biểu thị: Chiều cao bụng H = 150mm, hai cánh B = 50mm, mép gập C = 20mm và độ dày thép mạ kẽm là 1.8mm.'
      },
      {
        question: 'Khoảng cách giữa các thanh xà gồ lợp tôn bao nhiêu là chuẩn?',
        answer: 'Khoảng cách xà gồ lợp mái tôn dân dụng thông thường từ 80cm đến 110cm tùy thuộc vào độ dốc mái và độ dày của tôn lợp.'
      },
      {
        question: 'Xà gồ thép mạ kẽm có bị rỉ sét khi dùng ngoài trời không?',
        answer: 'Lớp mạ kẽm phủ bề mặt giúp bảo vệ lõi thép chống lại quá trình oxy hóa trong điều kiện không khí thông thường nhiều năm mà không cần sơn phủ.'
      },
      {
        question: 'Hoàng Yến có nhận đột lỗ bu-lông trên xà gồ không?',
        answer: 'Có. Chúng tôi nhận đột lỗ ô-van hoặc lỗ tròn trên thân xà gồ theo đúng khoảng cách bản vẽ kết cấu để thuận tiện bắt bu-lông liên kết.'
      },
      {
        question: 'Cắt xà gồ theo chiều dài yêu cầu có tính thêm phí không?',
        answer: 'Chúng tôi hỗ trợ cắt xà gồ theo khẩu độ thực tế của công trình để giúp quý khách tiết kiệm chi phí và thời gian gia công tại chỗ.'
      },
      {
        question: 'Giá xà gồ C mạ kẽm tại Quảng Trị tính theo mét hay theo kg?',
        answer: 'Giá xà gồ có thể tính theo mét dài theo quy cách hoặc cân ký thực tế theo khối lượng đơn hàng.'
      },
      {
        question: 'Địa chỉ mua xà gồ thép C uy tín tại Đông Hà, Quảng Trị?',
        answer: 'Quý khách liên hệ Siêu Thị VLXD Hoàng Yến tại 299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị. Hotline: 0946.575.579.'
      }
    ],
    relatedLinks: [
      { name: 'Tôn Lạnh Mạ Màu Đông Á', url: '/ton/' },
      { name: 'Vít Bắn Tôn Mạ Kẽm', url: '/dinh-vit/' },
      { name: 'Thép Xây Dựng Hòa Phát', url: '/thep-xay-dung/' }
    ]
  },

  // 7. XỐP - NHỰA
  'xop-nhua': {
    overviewTitle: 'Tấm Xốp Cách Nhiệt EPS Là Gì? Các Loại Xốp Chống Nóng Tại Hoàng Yến',
    overviewContent: 'Tấm xốp cách nhiệt EPS (Expanded Polystyrene) là vật liệu nhựa xốp dạng bọt được sản xuất từ hạt nhựa nguyên sinh EPS nén nở ở nhiệt độ cao. Cấu trúc bên trong chứa tới 98% là các túi khí kín li ti khép kín, mang lại khả năng cách nhiệt tuyệt vời, hệ số dẫn nhiệt cực thấp, cách âm hiệu quả và không ngấm nước.\n\nTại Siêu Thị VLXD Hoàng Yến (299 Lê Duẩn, Phường Đông Hà, Quảng Trị), chúng tôi cung ứng các dòng: **Tấm xốp cách nhiệt EPS tỷ trọng thường và tỷ trọng nặng (độ dày 2cm, 3cm, 5cm, 10cm), Tấm xốp cách âm XPS, Màng xốp cách nhiệt PE-OPP tráng bạc, Màng nilon chống thấm lót sàn bê tông** kích thước tấm tiêu chuẩn 1m x 2m chuyên dùng lót chống nóng dưới mái tôn, ốp tường hướng Tây, lót trần la-phông và tôn nền sàn bê tông nhẹ.',
    guideTitle: 'Các dòng tấm xốp cách nhiệt Hoàng Yến đang phân phối',
    guideIntro: 'Danh mục xốp cách nhiệt tại VLXD Hoàng Yến bao gồm:\n\n- **Tấm xốp EPS 2cm - 3cm (2 phân - 3 phân):** Kích thước 1m x 2m chuyên dùng trải lót dưới xà gồ mái tôn nhà phố, nhà cấp 4 hoặc dán trần la-phông cách nhiệt nhẹ nhàng và kinh tế.\n- **Tấm xốp EPS 5cm (5 phân):** Kích thước 1m x 2m có độ dày cao hơn, chống nóng vượt trội cho mái nhà xưởng và ốp vách tường hướng Tây chịu nắng gay gắt.\n- **Tấm xốp EPS 10cm (1 tấc):** Độ dày lớn chuyên dùng cho vách cách âm phòng karaoke, phòng thu, kho lạnh bảo quản thực phẩm.\n- **Tấm xốp EPS tỷ trọng nặng (16kg - 30kg/m3):** Hạt xốp nén chặt cứng cáp, chuyên dùng tôn nền công trình chống lún và lót sàn bê tông nhẹ giảm tải trọng móng.\n- **Màng xốp tráng bạc PE-OPP & Nilon lót sàn:** Phụ kiện hỗ trợ chống nóng phản xạ nhiệt và chống mất nước vữa bê tông khi đổ sàn.',
    notesTitle: 'Lưu ý khi thi công tấm xốp cách nhiệt EPS',
    notesIntro: 'Để đạt hiệu quả cách nhiệt tốt nhất, cần lưu ý:',
    technicalNotes: [
      'Khi lợp tôn chống nóng, xếp các tấm xốp khít mép trên xà gồ để ngăn luồng nhiệt truyền xuống dưới.',
      'Tránh để xốp tiếp xúc trực tiếp với xăng dầu, hóa chất dung môi hòa tan hoặc tia lửa hàn.',
      'Sử dụng keo dán chuyên dụng hoặc đinh ghim nhựa khi thi công ốp vách tường.'
    ],
    notesFooter: 'Hoàng Yến cung ứng tấm xốp EPS đầy đủ kích cỡ phục vụ thi công tại Quảng Trị.',
    pricingTitle: 'Yếu tố ảnh hưởng đến giá tấm xốp EPS tại Quảng Trị',
    pricingIntro: 'Giá xốp EPS phụ thuộc vào:',
    pricingFactors: [
      'Độ dày tấm xốp (2cm, 3cm, 5cm, 10cm)',
      'Tỷ trọng nén hạt xốp (tỷ trọng thường 8-12kg/m3 hay tỷ trọng nặng 16-30kg/m3)',
      'Số lượng tấm đặt mua'
    ],
    pricingFooter: 'Liên hệ Hoàng Yến qua Hotline/Zalo 0946.575.579 để nhận giá xốp EPS tốt nhất.',
    locationTitle: 'Địa chỉ mua tấm xốp EPS tại Quảng Trị',
    locationContent: 'Siêu Thị VLXD Hoàng Yến tọa lạc tại 299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị.',
    updatedDate: '2026-03-16',
    authorName: 'Siêu Thị VLXD Hoàng Yến',
    faqTitle: '10 Câu hỏi thường gặp về xốp cách nhiệt EPS',
    faqs: [
      {
        question: 'Tấm xốp cách nhiệt EPS là gì?',
        answer: 'Tấm xốp EPS là vật liệu cách nhiệt sản xuất từ hạt nhựa polystyrene giãn nở, chứa 98% không khí khép kín giúp ngăn chặn bức xạ nhiệt mặt trời và giảm nhiệt độ phòng.'
      },
      {
        question: 'Hoàng Yến có những độ dày xốp EPS nào?',
        answer: 'Chúng tôi có sẵn các độ dày 2cm, 3cm, 5cm, 10cm với kích thước tấm 1m x 2m và nhận đặt xốp khối tỷ trọng nặng theo yêu cầu công trình.'
      },
      {
        question: 'Chống nóng mái tôn nhà ở nên chọn xốp dày bao nhiêu?',
        answer: 'Đối với mái tôn nhà dân dụng, độ dày xốp EPS tối ưu là 2cm đến 3cm; với nhà xưởng hoặc mái tôn chịu nắng hướng Tây gắt nên dùng độ dày 5cm.'
      },
      {
        question: 'Tấm xốp EPS có bị thấm nước hay mục nát không?',
        answer: 'Cấu trúc hạt kín không hút nước, không bị mối mọt và không tạo môi trường cho nấm mốc phát triển, đảm bảo độ bền lâu dài.'
      },
      {
        question: 'Cách thi công đặt xốp cách nhiệt dưới mái tôn như thế nào?',
        answer: 'Xốp được đặt trải đều trực tiếp trên các thanh xà gồ mái, các mép tấm ghép sát khít nhau trước khi đặt tấm tôn lên trên và bắn vít cố định.'
      },
      {
        question: 'Xốp EPS có dùng cách âm phòng ngủ, phòng hát được không?',
        answer: 'Có. Xốp EPS dạng tỷ trọng cao kết hợp cùng vách thạch cao tạo thành kết cấu vách tiêu âm và cách âm hiệu quả cho phòng ngủ và phòng làm việc.'
      },
      {
        question: 'Xốp tỷ trọng nhẹ và tỷ trọng nặng khác nhau thế nào?',
        answer: 'Xốp tỷ trọng nhẹ (8 - 12 kg/m3) dùng chống nóng mái tôn thông thường; xốp tỷ trọng nặng (16 - 30 kg/m3) có độ cứng cao hơn, chuyên dùng tôn nền sàn bê tông nhẹ và kho lạnh.'
      },
      {
        question: 'Tấm xốp EPS có chịu được nhiệt độ cao không?',
        answer: 'Xốp EPS chịu được nhiệt độ làm việc liên tục đến 75 - 80°C mà không bị biến dạng, rất an toàn dưới nhiệt độ mái tôn mùa hè.'
      },
      {
        question: 'Giá tấm xốp EPS tại Quảng Trị tính theo tấm hay mét vuông?',
        answer: 'Giá xốp EPS thường được tính theo tấm (kích thước 1m x 2m = 2m2/tấm) tùy thuộc vào độ dày của tấm.'
      },
      {
        question: 'Địa chỉ mua tấm xốp cách nhiệt EPS tại Đông Hà, Quảng Trị?',
        answer: 'Quý khách liên hệ Siêu Thị VLXD Hoàng Yến tại 299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị. Hotline: 0946.575.579.'
      }
    ],
    relatedLinks: [
      { name: 'Tôn Lạnh Đông Á', url: '/ton/' },
      { name: 'Xà Gồ C Mạ Kẽm', url: '/xa-go/' },
      { name: 'Đinh Vít Bắn Tôn', url: '/dinh-vit/' }
    ]
  },

  // 8. KẼM BUỘC
  'kem-buoc': {
    overviewTitle: 'Kẽm Buộc Là Gì? Các Loại Kẽm Đen & Kẽm Trắng Tại Hoàng Yến',
    overviewContent: 'Kẽm buộc xây dựng (dây thép buộc) là loại dây thép có đường kính nhỏ (thông dụng nhất là 1 ly / 1.0mm) được xử lý qua quy trình ủ than mềm đặc biệt để khử độ giòn, giúp dây thép đạt độ dẻo dai cực cao. Dây kẽm dễ uốn cong, chịu được lực vặn xoắn siết chặt mà không bị đứt gãy.\n\nTại Siêu Thị VLXD Hoàng Yến (299 Lê Duẩn, Phường Đông Hà, Quảng Trị), chúng tôi cung ứng các dòng: **Kẽm đen ủ mềm 1 ly (1.0mm), Kẽm trắng mạ kẽm (1 ly, 2 ly, 3 ly, 4 ly), Dây kẽm giằng cốp pha và Dây kẽm gai rào bảo vệ (kẽm gai xoắn, kẽm gai hình dao bùng nhùng)** phục vụ cố định cốt thép bê tông và giằng chống an toàn công trình.',
    guideTitle: 'Các loại dây kẽm buộc Hoàng Yến đang phân phối',
    guideIntro: 'Danh mục kẽm tại VLXD Hoàng Yến gồm có:\n\n- **Dây kẽm đen ủ mềm 1 ly (1.0mm):** Dây thép đen đã qua xử lý nhiệt ủ mềm dẻo, dễ uốn gập và vặn xoắn siết chặt cốt thép sàn, móng, dầm, cột mà không lo đứt gãy, đóng cuộn 25kg - 50kg.\n- **Dây kẽm trắng mạ kẽm 1 ly:** Bề mặt phủ kẽm sáng bóng chống rỉ sét, thích hợp cho các mối nối lộ thiên hoặc khu vực ẩm ướt.\n- **Dây kẽm giằng 2 ly, 3 ly, 4 ly (2.0mm - 4.0mm):** Sợi kẽm dày dặn chịu lực căng kéo lớn, chuyên dùng giằng cốp pha gỗ, neo giữ giàn giáo và căng lưới rào B40.\n- **Dây kẽm gai rào chắn:** Kẽm gai đôi mạ kẽm và kẽm gai lá búa sắc bén chuyên dùng rào chống trộm bảo vệ khuôn viên đất và kho bãi.',
    notesTitle: 'Lưu ý khi sử dụng kẽm buộc xây dựng',
    notesIntro: 'Để việc buộc thép thi công đạt chuẩn, thợ sắt cần chú ý:',
    technicalNotes: [
      'Cắt dây kẽm thành từng đoạn vừa tay khoảng 12 - 15cm, gập đôi lại khi dùng móc xoắn để tăng độ siết chặt.',
      'Buộc chắc chắn các góc giao nhau và xen kẽ sole ít nhất 50% các điểm giao nhau trên mặt sàn bê tông.',
      'Bảo quản kẽm cuộn nơi khô ráo, tránh ngập nước để giữ độ dẻo mềm tốt nhất.'
    ],
    notesFooter: 'Hoàng Yến cung cấp nguyên cuộn hoặc bán lẻ theo kg theo nhu cầu khách hàng.',
    pricingTitle: 'Yếu tố ảnh hưởng đến giá kẽm buộc tại Quảng Trị',
    pricingIntro: 'Giá kẽm buộc phụ thuộc vào:',
    pricingFactors: [
      'Loại kẽm (kẽm đen ủ mềm hay kẽm trắng mạ kẽm)',
      'Đường kính sợi kẽm (1 ly, 2 ly, 3 ly, 4 ly)',
      'Số lượng đặt mua theo cuộn (25kg - 50kg) hoặc theo tấn'
    ],
    pricingFooter: 'Liên hệ Hoàng Yến để nhận báo giá kẽm buộc tốt nhất.',
    locationTitle: 'Địa chỉ mua kẽm buộc xây dựng tại Quảng Trị',
    locationContent: 'Siêu Thị VLXD Hoàng Yến tọa lạc tại 299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị.',
    updatedDate: '2026-03-16',
    authorName: 'Siêu Thị VLXD Hoàng Yến',
    faqTitle: '10 Câu hỏi thường gặp về kẽm buộc xây dựng',
    faqs: [
      {
        question: 'Kẽm buộc 1 ly là gì và dùng để làm gì?',
        answer: 'Kẽm buộc 1 ly là dây thép đường kính 1.0mm được ủ mềm dẻo, chuyên dùng để buộc cố định các nút giao nhau của khung cốt thép bê tông trước khi đổ vữa.'
      },
      {
        question: 'Hoàng Yến có những loại kẽm buộc nào?',
        answer: 'Chúng tôi cung cấp kẽm đen ủ mềm 1 ly, kẽm trắng mạ kẽm 1 ly - 4 ly, kẽm giằng cốp pha và kẽm gai chống trộm nguyên cuộn hoặc bán lẻ theo kg.'
      },
      {
        question: 'Kẽm đen ủ mềm và kẽm trắng mạ kẽm khác nhau thế nào?',
        answer: 'Kẽm đen ủ mềm có độ dẻo cao và giá thành kinh tế nhất chuyên dùng buộc cốt thép trong bê tông; kẽm trắng được mạ thêm lớp kẽm sáng chống gỉ sét cho các hạng mục lộ thiên.'
      },
      {
        question: 'Định mức 1 tấn thép xây dựng cần bao nhiêu kg kẽm buộc?',
        answer: 'Theo kinh nghiệm thi công, trung bình 1 tấn cốt thép xây dựng cần khoảng 12 đến 15 kg dây kẽm buộc 1 ly.'
      },
      {
        question: 'Một cuộn kẽm buộc nặng bao nhiêu kg?',
        answer: 'Quy cách đóng gói một cuộn kẽm buộc thông thường nặng từ 25kg đến 50kg/cuộn.'
      },
      {
        question: 'Tại sao kẽm buộc để ngoài mưa bị cứng và dễ đứt?',
        answer: 'Khi ngấm nước mưa lâu ngày, bề mặt kẽm bị oxy hóa rỉ sét làm giảm độ dẻo mềm, do đó nên bảo quản cuộn kẽm nơi khô ráo trên pallet gỗ.'
      },
      {
        question: 'Kẽm 2 ly, 3 ly thường dùng cho mục đích gì?',
        answer: 'Kẽm đường kính 2.0mm - 3.0mm có độ cứng cao hơn, chuyên dùng để giằng ván khuôn cốp pha gỗ, neo giữ cột chống và giằng lưới rào B40.'
      },
      {
        question: 'Cách buộc cốt thép sàn bê tông đúng kỹ thuật?',
        answer: 'Cắt dây kẽm dài khoảng 12 - 15cm, gập đôi, luồn dưới nút giao cốt thép và dùng móc xoắn siết chặt từ 2 - 3 vòng vừa đủ lực.'
      },
      {
        question: 'Hoàng Yến có bán lẻ kẽm buộc theo kg không?',
        answer: 'Có. Chúng tôi cung cấp nguyên cuộn 25kg - 50kg cho công trình và có bán lẻ số lượng ít theo kg cho khách hàng có nhu cầu sửa chữa nhỏ.'
      },
      {
        question: 'Địa chỉ mua kẽm buộc xây dựng tại Đông Hà, Quảng Trị?',
        answer: 'Quý khách liên hệ Siêu Thị VLXD Hoàng Yến, 299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị. Hotline: 0946.575.579.'
      }
    ],
    relatedLinks: [
      { name: 'Thép Xây Dựng Hòa Phát', url: '/thep-xay-dung/' },
      { name: 'Đinh Thép Cốp Pha', url: '/dinh-vit/' },
      { name: 'Lưới B40 Mạ Kẽm', url: '/luoi-xay-dung/' }
    ]
  },

  // 9. ĐINH VÍT
  'dinh-vit': {
    overviewTitle: 'Đinh Vít Xây Dựng Là Gì? Các Loại Đinh Thép & Vít Bắn Tôn Tại Hoàng Yến',
    overviewContent: 'Đinh vít xây dựng là các phụ kiện cơ khí liên kết kim loại bằng ma sát và ren xoắn, giữ vai trò ghép nối cố định các cấu kiện gỗ, ván ép cốp pha, xà gồ thép, tôn lợp và tấm thạch cao trong toàn bộ quá trình thi công xây thô đến hoàn thiện.\n\nTại Siêu Thị VLXD Hoàng Yến (299 Lê Duẩn, Phường Đông Hà, Quảng Trị), chúng tôi cung ứng đầy đủ các dòng: **Đinh thép đóng cốp pha (3 phân đến 10 phân), Đinh bê tông tôi cứng, Vít tự khoan bắn tôn mạ kẽm (2cm - 7cm kèm đệm ron cao su EPDM), Vít bắn thạch cao, Vít bắn gỗ đầu dù và Bu-lông tắc-kê nở sắt** phục vụ thi công cốp pha và hoàn thiện khung mái.',
    guideTitle: 'Các loại đinh và vít xây dựng Hoàng Yến đang cung cấp',
    guideIntro: 'Danh mục phụ kiện kim khí xây dựng tại VLXD Hoàng Yến gồm có:\n\n- **Đinh thép đóng cốp pha (Đinh 3 phân, 5 phân, 7 phân, 10 phân):** Thân đinh tròn, mũi nhọn sắc bén, mũ đinh to chịu búa đóng chắc chắn, chuyên ghép ván khuôn, hộp cột và giàn giáo gỗ.\n- **Đinh bê tông tôi cứng (Đinh 2cm, 3cm, 5cm, 7cm):** Làm từ thép hợp kim tôi nhiệt độ cứng cao, đóng trực tiếp xuyên qua tường gạch, dầm bê tông cứng mà không bị cong gãy.\n- **Vít tự khoan bắn tôn mạ kẽm (Vít 2cm, 4cm, 5cm, 6cm, 7cm):** Đầu vít đuôi cá tự khoan xà gồ thép dày, thân mạ kẽm chống rỉ kèm long đền cao su EPDM đệm kín chống thấm dột mái tôn.\n- **Vít thạch cao & Vít bắn gỗ:** Vít thạch cao photphat đen đầu bằng bắt chìm mặt tấm và vít bắn gỗ đầu dù liên kết nội thất.\n- **Bu-lông neo, Tắc-kê sắt, Tắc-kê nở đạn:** Dùng cố định bản mã xà gồ và khung thép vào sàn bê tông.',
    notesTitle: 'Lưu ý khi sử dụng đinh vít xây dựng',
    notesIntro: 'Để việc lắp ghép liên kết an toàn, thợ thi công cần chú ý:',
    technicalNotes: [
      'Khi bắn vít tôn, điều chỉnh lực siết vừa phải để ron cao su ép phẳng đều mặt tôn, không siết quá mạnh làm vỡ ron.',
      'Sử dụng đinh thép đúng chiều dài tương ứng với độ dày của ván cốp pha để đảm bảo an toàn khi đổ bê tông.'
    ],
    notesFooter: 'Hoàng Yến cung cấp đầy đủ các loại đinh đóng cốp pha và vít bắn tôn số lượng lớn.',
    pricingTitle: 'Yếu tố ảnh hưởng đến giá đinh vít tại Quảng Trị',
    pricingIntro: 'Giá đinh vít phụ thuộc vào chủng loại, kích cỡ và số lượng mua.',
    pricingFactors: [
      'Chủng loại (đinh thép, đinh bê tông, vít bắn tôn mạ kẽm)',
      'Quy cách kích cỡ chiều dài (3 phân, 5 phân, 7 phân, 10 phân...)',
      'Khối lượng mua theo bịch, hộp hoặc theo bao 50kg'
    ],
    pricingFooter: 'Liên hệ Hotline 0946.575.579 để nhận báo giá chi tiết.',
    locationTitle: 'Địa chỉ mua đinh vít xây dựng tại Quảng Trị',
    locationContent: 'Siêu Thị VLXD Hoàng Yến tọa lạc tại 299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị.',
    updatedDate: '2026-03-16',
    authorName: 'Siêu Thị VLXD Hoàng Yến',
    faqTitle: '10 Câu hỏi thường gặp về đinh thép & vít xây dựng',
    faqs: [
      {
        question: 'Đinh thép cốp pha có những kích thước nào?',
        answer: 'Các kích thước đinh thép phổ biến gồm: đinh 3 phân (3cm), đinh 5 phân (5cm), đinh 7 phân (7cm) và đinh 10 phân (10cm).'
      },
      {
        question: 'Hoàng Yến có những loại đinh vít nào?',
        answer: 'Chúng tôi cung cấp đinh thép đóng cốp pha (3-10 phân), đinh bê tông tôi cứng, vít tự khoan bắn tôn có ron cao su (2-7cm), vít thạch cao và bu-lông tắc-kê nở sắt.'
      },
      {
        question: 'Đinh bê tông khác gì so với đinh thép thông thường?',
        answer: 'Đinh bê tông được làm từ thép cacbon cao cấp qua tôi nhiệt luyện cứng cáp, có thể đóng trực tiếp xuyên qua tường gạch và bê tông mà không bị cong gãy.'
      },
      {
        question: 'Vít bắn tôn tự khoan hoạt động như thế nào?',
        answer: 'Đầu vít có hình đuôi cá sắc bén tự khoan thủng tấm tôn và xà gồ thép dày mà không cần khoan mồi trước, thân có bước ren siết chặt và long đền cao su EPDM chống dột.'
      },
      {
        question: 'Vít bắn tôn có những chiều dài nào thông dụng?',
        answer: 'Chiều dài vít bắn tôn thông dụng gồm 2cm, 4cm, 5cm, 6cm và 7cm (đối với tôn dán xốp cách nhiệt thường dùng vít dài 5cm - 7cm).'
      },
      {
        question: 'Tại sao khi bắn vít mái tôn không được siết quá chặt?',
        answer: 'Siết quá chặt làm biến dạng lõm sóng tôn và làm rách đệm ron cao su, khiến nước mưa dễ ngấm theo chân vít gây dột.'
      },
      {
        question: 'Vít thạch cao có đặc điểm gì nổi bật?',
        answer: 'Vít thạch cao có đầu loe phẳng (khi bắt chìm phẳng mặt tấm thạch cao) và thân phủ photphat đen chống rỉ, bước ren thưa bám chắc vào khung xương thép.'
      },
      {
        question: 'Đinh thép cốp pha đóng gói theo quy cách nào?',
        answer: 'Đinh thép thường được đóng trong bao 50kg cho công trình hoặc đóng hộp 5kg, có bán lẻ theo kg.'
      },
      {
        question: 'Một bịch vít bắn tôn có bao nhiêu con?',
        answer: 'Vít bắn tôn thường được đóng gói theo bịch khoảng 200 con đến 500 con/bịch tùy theo chiều dài vít.'
      },
      {
        question: 'Địa chỉ mua đinh thép và vít bắn tôn tại Đông Hà Quảng Trị?',
        answer: 'Quý khách liên hệ Siêu Thị VLXD Hoàng Yến, 299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị. Hotline: 0946.575.579.'
      }
    ],
    relatedLinks: [
      { name: 'Tôn Lạnh Đông Á', url: '/ton/' },
      { name: 'Xà Gồ C Mạ Kẽm', url: '/xa-go/' },
      { name: 'Thép Xây Dựng Hòa Phát', url: '/thep-xay-dung/' }
    ]
  },

  // 10. BỒN CẦU
  'bon-cau': {
    overviewTitle: 'Bồn Cầu Là Gì? Các Thương Hiệu Caesar, Viglacera, Mowoen Tại Hoàng Yến',
    overviewContent: 'Bồn cầu vệ sinh (bàn cầu) là thiết bị sứ vệ sinh chuyên dụng để xử lý chất thải sinh hoạt của con người, được kết nối với hệ thống cấp nước sạch và hệ thống thoát nước thải bể phốt. Sản phẩm được đúc từ chất liệu sứ nung tráng men thủy tinh chống bám dính, tích hợp hệ thống xả siphon xoáy hút đẩy giúp cuốn trôi chất bẩn nhanh chóng và ngăn mùi hôi bể phốt hiệu quả.\n\nTại Siêu Thị VLXD Hoàng Yến (299 Lê Duẩn, Phường Đông Hà, Quảng Trị), chúng tôi là điểm trưng bày và cung ứng các thương hiệu thiết bị vệ sinh hàng đầu gồm: **Caesar, Viglacera, Inax, Toto, Mowoen, Navier...** với đầy đủ các dòng: Bồn cầu 1 khối (liền khối) men nano tuyết, Bồn cầu 2 khối (két rời), Bồn cầu thông minh điện tử tự động đóng mở nắp và Bồn cầu treo tường két âm sang trọng.',
    guideTitle: 'Các dòng bồn cầu vệ sinh Hoàng Yến đang phân phối',
    guideIntro: 'Danh mục bồn cầu tại Showroom VLXD Hoàng Yến đa dạng phân khúc từ bình dân đến cao cấp:\n\n- **Bồn cầu 1 khối (Bàn cầu liền khối):** Các mẫu bồn cầu Caesar, Viglacera, Mowoen có thân và két nước đúc liền 1 khối nguyên khối sang trọng, không khe hở bám bụi bẩn, hệ thống xả xoáy Siphon êm ái cuốn trôi mọi chất thải.\n- **Bồn cầu 2 khối (Bàn cầu két rời):** Két nước và thân tách rời nhỏ gọn, dễ lắp đặt và thay thế linh kiện, tối ưu diện tích cho nhà trọ, nhà phố nhỏ hẹp.\n- **Bồn cầu thông minh (Smart Toilet):** Tích hợp tính năng tự động đóng mở nắp khi người đến gần, sưởi ấm bệ ngồi mùa đông, vòi xịt rửa massage tự động và sấy khô kháng khuẩn.\n- **Bồn cầu treo tường két âm:** Két nước giấu chìm trong tường gạch, lòng bồn treo cách sàn giúp việc lau sàn nhà tắm cực kỳ thông thoáng.\n- **Bồn tiểu nam & Van xả cảm ứng:** Phục vụ nhà vệ sinh cơ quan, nhà hàng, khách sạn và biệt thự.',
    notesTitle: 'Lưu ý khi lắp đặt và bảo dưỡng bồn cầu',
    notesIntro: 'Để bồn cầu vận hành ổn định và không phát sinh mùi hôi, cần chú ý:',
    technicalNotes: [
      'Kiểm tra tâm xả tiêu chuẩn là 300mm (tính từ tim ống thải đến tường đã ốp gạch) trước khi chọn bồn cầu.',
      'Lắp đặt gioăng cao su non đệm chân bồn cầu kín khít để ngăn mùi hôi từ bể phốt.',
      'Vệ sinh bằng nước tẩy rửa trung tính và khăn mềm, tránh dùng vật sắc nhọn làm xước men sứ.'
    ],
    notesFooter: 'Chính sách bảo hành bồn cầu được áp dụng theo quy định của nhà sản xuất.',
    pricingTitle: 'Yếu tố ảnh hưởng đến giá bồn cầu tại Quảng Trị',
    pricingIntro: 'Giá bồn cầu phụ thuộc vào thương hiệu, kiểu dáng và công nghệ xả.',
    pricingFactors: [
      'Thương hiệu sản xuất (Caesar, Viglacera, Mowoen, Inax, Toto...)',
      'Kiểu dáng (bồn cầu 1 khối, bồn cầu 2 khối, bồn cầu thông minh, bồn cầu treo tường)',
      'Công nghệ men sứ (men Nano nung kháng khuẩn) và bộ phụ kiện xả'
    ],
    pricingFooter: 'Liên hệ Hoàng Yến để xem mẫu thực tế và nhận báo giá chi tiết.',
    locationTitle: 'Địa chỉ mua bồn cầu vệ sinh tại Quảng Trị',
    locationContent: 'Siêu Thị VLXD Hoàng Yến tọa lạc tại 299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị.',
    updatedDate: '2026-03-16',
    authorName: 'Siêu Thị VLXD Hoàng Yến',
    faqTitle: '10 Câu hỏi thường gặp về bồn cầu vệ sinh',
    faqs: [
      {
        question: 'Bồn cầu 1 khối và bồn cầu 2 khối khác nhau như thế nào?',
        answer: 'Bồn cầu 1 khối đúc liền thân và két nước thành 1 khối sang trọng, không khe hở dễ vệ sinh; bồn cầu 2 khối có két nước rời, kích thước nhỏ gọn phù hợp phòng tắm nhỏ.'
      },
      {
        question: 'Hoàng Yến phân phối bồn cầu của những thương hiệu nào tại Quảng Trị?',
        answer: 'Chúng tôi phân phối chính hãng các thương hiệu thiết bị vệ sinh Caesar, Viglacera, Mowoen, Inax với đầy đủ bồn cầu 1 khối, 2 khối và bồn cầu thông minh cao cấp.'
      },
      {
        question: 'Tâm xả bồn cầu tiêu chuẩn là bao nhiêu mm?',
        answer: 'Tâm xả chuẩn quốc tế của hầu hết các mẫu bồn cầu hiện nay là 300mm tính từ tim ống thoát chờ trên sàn đến mép tường đã hoàn thiện ốp gạch.'
      },
      {
        question: 'Hệ thống xả xoáy Siphon hoạt động như thế nào?',
        answer: 'Hệ thống xả xoáy Siphon tạo luồng nước xoáy mạnh mẽ quanh lòng bồn kết hợp lực hút chân không phía dưới, giúp cuốn trôi chất bẩn êm ái và không văng nước.'
      },
      {
        question: 'Men Nano nung trên bồn cầu có tác dụng gì?',
        answer: 'Men sứ phủ nano nung ở nhiệt độ cao tạo bề mặt siêu nhẵn mịn, ngăn cản cặn bẩn bám dính và hạn chế sự phát triển của vi khuẩn ố vàng.'
      },
      {
        question: 'Tại sao bồn cầu mới lắp lại bị bốc mùi hôi thối?',
        answer: 'Nguyên nhân phổ biến do chưa lắp gioăng cao su đệm chân bồn cầu kín khít hoặc ống thông hơi của bể phốt bị tắc nghẽn.'
      },
      {
        question: 'Nắp bồn cầu rơi êm có ưu điểm gì?',
        answer: 'Nắp rơi êm sử dụng bản lề thủy lực giảm chấn, khi đóng nắp sẽ hạ xuống từ từ không gây tiếng động va đập và tránh nứt vỡ sứ.'
      },
      {
        question: 'Chế độ xả 2 nhấn (xả tiểu / xả đại) tiết kiệm nước ra sao?',
        answer: 'Chế độ 2 nút nhấn cho phép chọn xả tiểu (khoảng 3 lít) hoặc xả đại (khoảng 4.5 - 6 lít), giúp tiết kiệm đáng kể lượng nước sinh hoạt hàng tháng.'
      },
      {
        question: 'Bồn cầu có được bảo hành phụ kiện xả và sứ không?',
        answer: 'Sản phẩm bồn cầu tại Hoàng Yến được áp dụng chế độ bảo hành chính hãng từ nhà sản xuất cho phần sứ và bộ phụ kiện cấp xả.'
      },
      {
        question: 'Địa chỉ xem mẫu bồn cầu Caesar, Viglacera tại Đông Hà, Quảng Trị?',
        answer: 'Quý khách ghé Siêu Thị VLXD Hoàng Yến tại 299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị. Hotline: 0946.575.579.'
      }
    ],
    relatedLinks: [
      { name: 'Chậu Lavabo Sứ Đặt Bàn', url: '/lavabo/' },
      { name: 'Sen Cây Tắm Nóng Lạnh', url: '/voi-hoa-sen/' },
      { name: 'Bồn Tắm Ngâm Acrylic', url: '/bon-tam/' }
    ]
  },

  // 11. LAVABO
  'lavabo': {
    overviewTitle: 'Lavabo Là Gì? Các Kiểu Dáng Chậu Rửa Mặt Tại Hoàng Yến',
    overviewContent: 'Lavabo (chậu rửa mặt / bồn rửa tay) là thiết bị vệ sinh được thiết kế dạng chậu chứa nước kèm lỗ thoát xả tràn, phục vụ các hoạt động vệ sinh cá nhân hàng ngày như rửa mặt, rửa tay, đánh răng. Chậu được làm từ chất liệu sứ vệ sinh tráng men sáng bóng hoặc đá tự nhiên, kết hợp cùng vòi nước và bộ siphon xả thoát đáy.\n\nTại Siêu Thị VLXD Hoàng Yến (299 Lê Duẩn, Phường Đông Hà, Quảng Trị), chúng tôi cung ứng các dòng chậu lavabo từ các thương hiệu hàng đầu: **Caesar, Viglacera, Mowoen, Inax, Navier...** với đầy đủ các kiểu dáng: Lavabo đặt bàn đá (dương bàn), Lavabo âm bàn toàn phần, Lavabo bán âm bàn, Lavabo treo tường chân lửng và Tủ chậu lavabo cabinet cao cấp.',
    guideTitle: 'Các kiểu dáng chậu lavabo Hoàng Yến đang phân phối',
    guideIntro: 'Danh mục chậu lavabo tại Showroom VLXD Hoàng Yến gồm:\n\n- **Lavabo đặt bàn đá (Chậu dương bàn):** Các mẫu chậu sứ Caesar, Mowoen hình chữ nhật, hình Oval, hình tròn viền mỏng thanh lịch đặt nổi hoàn toàn trên mặt bàn đá, tạo điểm nhấn nghệ thuật sang trọng cho phòng tắm biệt thự, nhà phố.\n- **Lavabo âm bàn đá:** Toàn bộ lòng chậu nằm chìm dưới mặt đá tự nhiên, mặt bàn phẳng thoáng giúp dễ dàng gạt nước lau chùi sạch sẽ.\n- **Lavabo bán âm bàn:** Phần sau lòng chậu nằm trong bàn đá và phần trước nhô ra ngoài, tiết kiệm chiều sâu bàn đá cho phòng tắm có chiều ngang hẹp.\n- **Lavabo treo tường (Chân lửng / Chân dài):** Gắn trực tiếp lên tường gạch kèm chân sứ che giấu siphon xả, giải pháp tiết kiệm không gian tối đa cho phòng tắm nhỏ.\n- **Bộ tủ chậu Lavabo Cabinet:** Thùng tủ nhựa PVC / hợp kim nhôm chống nước kèm gương LED cảm ứng hiện đại.',
    notesTitle: 'Lưu ý khi lắp đặt chậu lavabo',
    notesIntro: 'Để sử dụng thuận tiện và không bị rò rỉ nước, cần chú ý:',
    technicalNotes: [
      'Chiều cao lắp đặt chuẩn từ mặt sàn đến mép trên chậu lavabo là 80cm - 85cm đối với người lớn.',
      'Sử dụng bộ xả siphon chống hôi có gioăng cao su kín khít để ngăn mùi cống trào ngược.',
      'Vệ sinh bằng bọt biển êm và nước xà phòng nhẹ để giữ độ bóng của men sứ.'
    ],
    notesFooter: 'Hoàng Yến cung cấp đồng bộ lavabo, vòi xả và phụ kiện cấp thoát nước.',
    pricingTitle: 'Yếu tố ảnh hưởng đến giá chậu lavabo tại Quảng Trị',
    pricingIntro: 'Giá chậu lavabo phụ thuộc vào:',
    pricingFactors: [
      'Thương hiệu sản xuất (Caesar, Viglacera, Mowoen, Inax...)',
      'Kiểu dáng (đặt bàn, âm bàn, treo tường, tủ cabinet)',
      'Kích thước chậu và phụ kiện vòi xả đi kèm'
    ],
    pricingFooter: 'Liên hệ Hoàng Yến qua Hotline 0946.575.579 để nhận báo giá.',
    locationTitle: 'Địa chỉ mua chậu lavabo tại Quảng Trị',
    locationContent: 'Siêu Thị VLXD Hoàng Yến tọa lạc tại 299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị.',
    updatedDate: '2026-03-16',
    authorName: 'Siêu Thị VLXD Hoàng Yến',
    faqTitle: '10 Câu hỏi thường gặp về chậu rửa mặt lavabo',
    faqs: [
      {
        question: 'Lavabo là gì và có những kiểu dáng nào phổ biến?',
        answer: 'Lavabo là chậu rửa mặt phòng tắm, gồm 3 kiểu dáng chính: lavabo đặt nổi trên bàn đá, lavabo âm toàn phần dưới bàn đá và lavabo treo tường không bàn.'
      },
      {
        question: 'Hoàng Yến cung cấp những thương hiệu chậu lavabo nào?',
        answer: 'Chúng tôi cung cấp các thương hiệu chính hãng gồm Caesar, Viglacera, Mowoen, Inax với đa dạng mẫu lavabo đặt bàn, âm bàn, treo tường và tủ cabinet gương led.'
      },
      {
        question: 'Nên chọn lavabo đặt bàn hay lavabo âm bàn?',
        answer: 'Lavabo đặt bàn mang vẻ đẹp nghệ thuật và sang trọng nổi bật; lavabo âm bàn giúp mặt bàn đá phẳng thoáng, dễ gạt nước lau chùi sạch sẽ.'
      },
      {
        question: 'Chiều cao lắp đặt chậu lavabo tiêu chuẩn là bao nhiêu?',
        answer: 'Chiều cao chuẩn tính từ mặt sàn hoàn thiện đến mép trên của chậu là 80cm đến 85cm (đối với người lớn) để đứng rửa thoải mái không bị gập lưng.'
      },
      {
        question: 'Lavabo treo tường phù hợp với không gian nào?',
        answer: 'Lavabo treo tường gắn trực tiếp vào tường gạch là giải pháp tối ưu diện tích cho các phòng tắm nhỏ dưới 3m2 hoặc nhà trọ, nhà phố nhỏ hẹp.'
      },
      {
        question: 'Bộ xả siphon của lavabo có chức năng gì?',
        answer: 'Siphon là ống xả chữ P hoặc chữ U dưới đáy chậu, luôn giữ một lượng nước đọng nhất định để ngăn mùi hôi và côn trùng từ đường cống trào ngược lên.'
      },
      {
        question: 'Vòi lavabo nào dùng cho chậu đặt bàn cao?',
        answer: 'Chậu đặt bàn cao cần dùng loại vòi lavabo thân cao (20cm - 30cm) gắn trực tiếp trên mặt bàn đá; chậu có sẵn lỗ cắm vòi thì dùng vòi thân thấp.'
      },
      {
        question: 'Chất liệu men sứ của lavabo có bị ố vàng theo thời gian không?',
        answer: 'Sản phẩm sứ tráng men nano cao cấp có độ trơ cao, chống bám bẩn và không bị ố vàng nếu được lau chùi định kỳ bằng khăn mềm.'
      },
      {
        question: 'Giá chậu lavabo tại Hoàng Yến có bao gồm vòi nước chưa?',
        answer: 'Giá chậu sứ lavabo thông thường chưa bao gồm vòi nước và bộ xả siphon, quý khách có thể lựa chọn mẫu vòi đồng bộ theo sở thích.'
      },
      {
        question: 'Địa chỉ mua chậu lavabo đẹp tại Đông Hà, Quảng Trị?',
        answer: 'Quý khách đến Siêu Thị VLXD Hoàng Yến tại 299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị. Hotline: 0946.575.579.'
      }
    ],
    relatedLinks: [
      { name: 'Bồn Cầu 1 Khối Men Nano', url: '/bon-cau/' },
      { name: 'Vòi Sen Nóng Lạnh & Vòi Lavabo', url: '/voi-hoa-sen/' },
      { name: 'Bồn Tắm Acrylic', url: '/bon-tam/' }
    ]
  },

  // 12. VÒI HOA SEN
  'voi-hoa-sen': {
    overviewTitle: 'Sen Vòi Phòng Tắm Là Gì? Các Dòng Sen Cây & Sen Tắm Tại Hoàng Yến',
    overviewContent: 'Sen vòi phòng tắm (vòi hoa sen) là thiết bị van khóa điều phối và phân tán luồng nước thành các hạt tia nước mịn phục vụ nhu cầu tắm gội và thư giãn hàng ngày. Thân vòi được đúc từ hợp kim đồng thau hoặc Inox 304 nguyên khối, bề mặt mạ nhiều lớp Crom - Niken sáng bóng chống hoen gỉ, bên trong sử dụng lõi chia nước bằng gốm sứ ceramic đóng mở êm ái.\n\nTại Siêu Thị VLXD Hoàng Yến (299 Lê Duẩn, Phường Đông Hà, Quảng Trị), chúng tôi cung ứng các dòng sen vòi từ các thương hiệu uy tín: **Caesar, Inax, Viglacera, Navier, Mowoen...** với đầy đủ các sản phẩm: Sen cây tắm đứng nóng lạnh bát sen trần, Sen cây nhiệt độ tự động khóa 38°C, Sen tắm cầm tay dây mềm, Vòi chậu lavabo nóng lạnh và Vòi xịt vệ sinh Inox 304.',
    guideTitle: 'Các dòng sen vòi phòng tắm Hoàng Yến đang phân phối',
    guideIntro: 'Danh mục sen vòi tại VLXD Hoàng Yến gồm có:\n\n- **Sen cây tắm đứng nóng lạnh:** Thiết kế thân cần đứng điều chỉnh độ cao, bát sen trần diện tích lớn (vuông hoặc tròn) phân bổ luồng nước tắm mưa massage toàn thân, củ sen tích hợp vòi xả phụ tiện lợi.\n- **Sen cây khóa nhiệt độ tự động (38°C):** Van cảm biến nhiệt thông minh tự động cân bằng nhiệt độ nước ở mức 38°C, chống bỏng nước nóng đột ngột khi áp lực nước thay đổi, an toàn cho trẻ nhỏ và người lớn tuổi.\n- **Sen tắm cầm tay nóng lạnh (Sen dây):** Gọn gàng, dễ lắp đặt, phù hợp mọi áp lực nước và không gian phòng tắm vừa và nhỏ.\n- **Vòi chậu lavabo nóng lạnh:** Vòi lavabo thân cao gắn bàn đá, vòi lavabo thân thấp gắn chậu, van ceramic đóng mở nhẹ nhàng.\n- **Vòi xịt vệ sinh, vòi hồ, xả bồn tắm:** Đúc từ Inox 304 và đồng mạ Crom bền bỉ chống rò rỉ.',
    notesTitle: 'Lưu ý khi lắp đặt sen vòi phòng tắm',
    notesIntro: 'Để sen vòi hoạt động ổn định và bền lâu, cần chú ý:',
    technicalNotes: [
      'Khoảng cách tâm giữa 2 đầu cấp nước nóng và lạnh tiêu chuẩn là 15cm (±1.5cm), đầu nước nóng bên trái và nước lạnh bên phải.',
      'Độ cao đầu chờ cấp nước cho sen tắm thường từ 85cm - 90cm tính từ mặt sàn hoàn thiện.',
      'Xả sạch cặn bẩn đường ống nước trước khi lắp đặt củ sen để tránh kẹt van.'
    ],
    notesFooter: 'Hoàng Yến cung cấp sen vòi chính hãng kèm đầy đủ phụ kiện chân sen và gioăng đệm.',
    pricingTitle: 'Yếu tố ảnh hưởng đến giá sen vòi tại Quảng Trị',
    pricingIntro: 'Giá sen vòi phụ thuộc vào chất liệu đúc, công nghệ mạ và thương hiệu.',
    pricingFactors: [
      'Chất liệu thân củ sen (đồng thau mạ Crom-Niken hoặc Inox 304)',
      'Dòng sản phẩm (sen cây tắm đứng hay sen tắm dây cầm tay)',
      'Thương hiệu sản xuất (Caesar, Inax, Viglacera, Mowoen...) và chế độ van khóa nhiệt độ'
    ],
    pricingFooter: 'Liên hệ Hoàng Yến để nhận báo giá sen vòi phòng tắm mới nhất.',
    locationTitle: 'Địa chỉ mua sen vòi tắm tại Quảng Trị',
    locationContent: 'Siêu Thị VLXD Hoàng Yến tọa lạc tại 299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị.',
    updatedDate: '2026-03-16',
    authorName: 'Siêu Thị VLXD Hoàng Yến',
    faqTitle: '10 Câu hỏi thường gặp về sen vòi phòng tắm',
    faqs: [
      {
        question: 'Sen cây tắm đứng và sen tắm thông thường khác nhau thế nào?',
        answer: 'Sen cây có thân đứng kèm bát sen trần đường kính lớn tỏa dòng nước dạng mưa bao phủ toàn thân; sen tắm thông thường chỉ gồm củ sen và tay sen dây mềm.'
      },
      {
        question: 'Hoàng Yến cung cấp những thương hiệu sen vòi nào?',
        answer: 'Chúng tôi phân phối các thương hiệu chính hãng Caesar, Inax, Viglacera, Mowoen, Navier với đầy đủ sen cây tắm đứng, sen nhiệt độ và vòi lavabo.'
      },
      {
        question: 'Nên chọn sen vòi chất liệu đồng mạ Crom hay Inox 304?',
        answer: 'Đồng thau mạ Crom-Niken có độ sáng bóng gương sang trọng và độ bền van cao; Inox 304 mờ có khả năng chống oxy hóa tốt và chống xước tự nhiên.'
      },
      {
        question: 'Khoảng cách tâm giữa 2 lỗ cấp nước nóng lạnh tiêu chuẩn là bao nhiêu?',
        answer: 'Khoảng cách tâm tiêu chuẩn giữa 2 đầu cấp nước chờ trên tường là 15cm (±1.5cm với chân sen chữ Z điều chỉnh linh hoạt).'
      },
      {
        question: 'Quy ước đường nước nóng và nước lạnh lắp đặt như thế nào?',
        answer: 'Theo quy chuẩn lắp đặt quốc tế, ống nước nóng luôn nằm bên tay trái và ống nước lạnh nằm bên tay phải khi nhìn đối diện vào củ sen.'
      },
      {
        question: 'Áp lực nước yếu có lắp được sen cây tắm đứng không?',
        answer: 'Sen cây cần áp lực nước tối thiểu 2 - 3 bar để bát sen trần phun đều nước. Nếu bồn nước đặt thấp, quý khách nên lắp thêm bơm tăng áp tự động.'
      },
      {
        question: 'Sen nhiệt độ tự động có ưu điểm gì an toàn?',
        answer: 'Sen nhiệt độ tích hợp van sáp cảm biến khóa nhiệt độ cố định ở mức an toàn 38°C, giúp chống bỏng đột ngột cho trẻ nhỏ và người lớn tuổi.'
      },
      {
        question: 'Làm sao để làm sạch cặn canxi bám trên vòi sen mạ Crom?',
        answer: 'Dùng giấm ăn pha loãng hoặc nước cốt chanh lau nhẹ bằng khăn mềm, sau đó rửa lại bằng nước sạch; tránh dùng hóa chất tẩy bồn cầu mạnh làm cháy lớp mạ.'
      },
      {
        question: 'Sen vòi tại Hoàng Yến có kèm đầy đủ phụ kiện lắp đặt không?',
        answer: 'Bộ sản phẩm luôn có đầy đủ củ sen, dây sen, tay sen, bát sen, chân chữ Z và gioăng cao su đệm chống rò rỉ.'
      },
      {
        question: 'Địa chỉ mua sen cây tắm uy tín tại Đông Hà, Quảng Trị?',
        answer: 'Quý khách ghé Siêu Thị VLXD Hoàng Yến, 299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị. Hotline: 0946.575.579.'
      }
    ],
    relatedLinks: [
      { name: 'Bồn Cầu 1 Khối Cao Cấp', url: '/bon-cau/' },
      { name: 'Chậu Lavabo Sứ Đặt Bàn', url: '/lavabo/' },
      { name: 'Bồn Tắm Nằm Massage', url: '/bon-tam/' }
    ]
  },

  // 13. BỒN TẮM
  'bon-tam': {
    overviewTitle: 'Bồn Tắm Là Gì? Các Dòng Bồn Tắm Nằm & Massage Mowoen, Caesar Tại Hoàng Yến',
    overviewContent: 'Bồn tắm là thiết bị vệ sinh cao cấp dạng bể chứa nước hình chữ nhật hoặc hình Oval, cho phép người dùng ngâm mình thư giãn toàn thân trong làn nước ấm để giải tỏa căng thẳng và chăm sóc sức khỏe. Bồn tắm hiện đại được đúc từ chất liệu Acrylic nguyên khối gia cường sợi thủy tinh siêu bền, bề mặt nhẵn mịn chống ố vàng và giữ nhiệt độ nước ấm lâu dài.\n\nTại Siêu Thị VLXD Hoàng Yến (299 Lê Duẩn, Phường Đông Hà, Quảng Trị), chúng tôi cung ứng các dòng bồn tắm từ các thương hiệu uy tín: **Mowoen, Caesar, Navier...** với đầy đủ các sản phẩm: Bồn tắm ngâm đặt sàn không yếm (Freestanding Seamless), Bồn tắm chân yếm góc, Bồn tắm massage thủy lực sục khí đa chế độ với kích thước từ 1.2m đến 1.8m.',
    guideTitle: 'Các dòng bồn tắm Hoàng Yến đang phân phối',
    guideIntro: 'Danh mục bồn tắm tại Showroom VLXD Hoàng Yến bao gồm:\n\n- **Bồn tắm ngâm đặt sàn độc lập (Freestanding Seamless):** Đúc liền khối Acrylic ngọc trai cao cấp không mối nối, kiểu dáng Oval, dáng thuyền hoặc chữ nhật thanh lịch, đặt trực tiếp giữa phòng tắm hoặc cạnh cửa sổ view đẹp của biệt thự, nhà phố.\n- **Bồn tắm góc chân yếm:** Thiết kế kê góc vuông bo tròn mặt trước, tối ưu không gian cho các phòng tắm có diện tích vừa và nhỏ.\n- **Bồn tắm massage thủy lực sục khí:** Tích hợp hệ thống mắt sục massage nước và mắt sục khí tạo bọt, máy bơm áp lực tuần hoàn giúp massage giảm đau nhức cơ bắp và lưu thông máu.\n- **Kích thước đa dạng:** 1200x700mm, 1400x700mm, 1500x750mm, 1600x800mm, 1700x800mm, 1800x900mm phù hợp với mọi vóc dáng và diện tích phòng.',
    notesTitle: 'Lưu ý khi lắp đặt bồn tắm nằm',
    notesIntro: 'Để lắp đặt bồn tắm thuận tiện, chủ nhà cần chuẩn bị trước:',
    technicalNotes: [
      'Chừa đường ống thoát sàn phi 60 hoặc phi 90 đúng vị trí rốn xả của bồn theo bản vẽ.',
      'Bố trí sẵn nguồn cấp nước nóng lạnh và vòi sen xả bồn đặt sàn trước khi hoàn thiện ốp lát sàn.',
      'Vệ sinh bằng khăn mềm và dung dịch xà phòng nhẹ sau khi sử dụng.'
    ],
    notesFooter: 'Hoàng Yến hỗ trợ tư vấn kỹ thuật đường thoát nước chuẩn xác cho từng mẫu bồn tắm.',
    pricingTitle: 'Yếu tố ảnh hưởng đến giá bồn tắm tại Quảng Trị',
    pricingIntro: 'Giá bồn tắm phụ thuộc vào kích thước, chất liệu đúc và chức năng massage.',
    pricingFactors: [
      'Chủng loại (bồn ngâm đặt sàn hay bồn tắm massage thủy lực sục khí)',
      'Kích thước chiều dài (1m2, 1m4, 1m5, 1m6, 1m7, 1m8)',
      'Thương hiệu sản xuất (Mowoen, Caesar, Navier...)'
    ],
    pricingFooter: 'Liên hệ Hotline 0946.575.579 để nhận báo giá bồn tắm chi tiết.',
    locationTitle: 'Địa chỉ mua bồn tắm cao cấp tại Quảng Trị',
    locationContent: 'Siêu Thị VLXD Hoàng Yến tọa lạc tại 299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị.',
    updatedDate: '2026-03-16',
    authorName: 'Siêu Thị VLXD Hoàng Yến',
    faqTitle: '10 Câu hỏi thường gặp về bồn tắm nằm & massage',
    faqs: [
      {
        question: 'Bồn tắm ngâm và bồn tắm massage khác nhau thế nào?',
        answer: 'Bồn tắm ngâm dùng để ngâm mình thư giãn đơn thuần; bồn tắm massage có gắn thêm máy bơm và các mắt sục nước/sục khí thủy lực tạo dòng nước massage cơ bắp.'
      },
      {
        question: 'Hoàng Yến cung cấp bồn tắm của những thương hiệu nào?',
        answer: 'Chúng tôi cung cấp bồn tắm Acrylic cao cấp từ Mowoen, Caesar, Navier với đầy đủ mẫu bồn tắm ngâm đặt sàn, bồn góc và bồn tắm massage sục khí.'
      },
      {
        question: 'Chất liệu Acrylic đúc bồn tắm có ưu điểm gì?',
        answer: 'Chất liệu Acrylic cao cấp có trọng lượng nhẹ, bề mặt nhẵn bóng chống bám ố vàng, không ố màu và có khả năng giữ nhiệt nước nóng lâu hơn.'
      },
      {
        question: 'Kích thước bồn tắm nằm thông dụng là bao nhiêu?',
        answer: 'Chiều dài bồn tắm phổ biến từ 1.4m đến 1.8m (1400mm, 1500mm, 1600mm, 1700mm, 1800mm) với chiều rộng từ 700mm đến 850mm.'
      },
      {
        question: 'Diện tích phòng tắm bao nhiêu thì lắp được bồn tắm?',
        answer: 'Phòng tắm có diện tích từ 4m2 trở lên là có thể bố trí được bồn tắm ngâm đặt sàn kích thước 1.4m - 1.5m gọn gàng.'
      },
      {
        question: 'Cần chuẩn bị đường ống cấp và thoát nước thế nào trước khi lắp bồn?',
        answer: 'Cần bố trí ống thoát sàn chờ đường kính phi 60 hoặc phi 90 sát mặt sàn và đường cấp nước nóng lạnh cho vòi xả bồn theo bản vẽ kỹ thuật.'
      },
      {
        question: 'Bồn tắm massage có tốn nhiều điện năng không?',
        answer: 'Máy bơm bồn tắm massage công suất thông thường khoảng 750W - 1100W (tương đương 1 máy điều hòa nhỏ), chỉ tiêu thụ điện trong lúc bật tính năng sục.'
      },
      {
        question: 'Cách vệ sinh và bảo dưỡng bồn tắm Acrylic?',
        answer: 'Dùng khăn mềm nhúng nước xà phòng ấm lau sạch sau khi sử dụng; tránh dùng cọ cứng hoặc hóa chất tẩy mạnh làm mờ độ bóng bề mặt.'
      },
      {
        question: 'Chế độ bảo hành bồn tắm tại Hoàng Yến như thế nào?',
        answer: 'Sản phẩm bồn tắm được áp dụng chính sách bảo hành chính hãng từ nhà sản xuất cho thân bồn và hệ thống linh kiện.'
      },
      {
        question: 'Địa chỉ xem mẫu bồn tắm nằm đẹp tại Đông Hà, Quảng Trị?',
        answer: 'Quý khách đến Siêu Thị VLXD Hoàng Yến tại 299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị. Hotline: 0946.575.579.'
      }
    ],
    relatedLinks: [
      { name: 'Sen Cây Tắm Đứng Nóng Lạnh', url: '/voi-hoa-sen/' },
      { name: 'Bồn Cầu 1 Khối Cao Cấp', url: '/bon-cau/' },
      { name: 'Chậu Lavabo Sứ Đặt Bàn', url: '/lavabo/' }
    ]
  },

  // 14. GẠCH MEN
  'gach-men': {
    overviewTitle: 'Gạch Men Là Gì? Các Thương Hiệu Gạch Ốp Lát Viglacera, Prime, Đồng Tâm Tại Hoàng Yến',
    overviewContent: 'Gạch men (gạch ceramic/granite) là vật liệu ốp lát nhân tạo được sản xuất từ nguyên liệu đất sét, tràng thạch và bột đá tự nhiên, trải qua quá trình ép áp lực cao và nung ở nhiệt độ từ 1100°C đến 1250°C. Bề mặt gạch được phủ một lớp men bảo vệ với hoa văn vân đá, vân gỗ hoặc men mờ chống trơn, mang lại vẻ đẹp thẩm mỹ sang trọng, chống thấm nước và dễ lau chùi cho sàn và tường công trình.\n\nTại Siêu Thị VLXD Hoàng Yến (299 Lê Duẩn, Phường Đông Hà, Quảng Trị), chúng tôi cung ứng các thương hiệu gạch ốp lát nổi tiếng hàng đầu Việt Nam và nhập khẩu gồm: **Viglacera, Prime, Đồng Tâm, Catalan, Taicera, TTC, gạch nhập khẩu Ấn Độ...** với đầy đủ các quy cách: Gạch lát nền (60x60, 80x80, 100x100 cm), Gạch ốp tường (30x60, 40x80 cm), Gạch vân gỗ (15x80, 15x90 cm), Gạch lát sân vườn chống trơn và Gạch Granite vi tinh cao cấp.',
    guideTitle: 'Các dòng gạch men ốp lát Hoàng Yến đang phân phối',
    guideIntro: 'Showroom Gạch Ốp Lát VLXD Hoàng Yến trưng bày hàng trăm mẫu mã phục vụ mọi không gian:\n\n- **Gạch lát nền bóng kiếng toàn phần (60x60cm, 80x80cm, 100x100cm):** Xương đá Porcelain/Granite cứng cáp, bề mặt tráng men bóng kiếng nano tạo chiều sâu phản chiếu ánh sáng lộng lẫy cho phòng khách, sảnh chính, khách sạn.\n- **Gạch lát nền men mờ (Matt) & Men nhám (60x60cm, 30x60cm):** Phong cách hiện đại Châu Âu chống bám vân chân, chống trơn trượt cho phòng ngủ, phòng tắm và ban công.\n- **Gạch giả gỗ / Gạch vân gỗ (15x80cm, 15x90cm, 20x100cm):** Vân gỗ sồi, gỗ óc chó tự nhiên ấm áp, chống nước 100% và không lo mối mọt.\n- **Gạch ốp tường phòng tắm, nhà bếp (30x60cm, 40x80cm):** Men bóng hoặc men mờ chống ố vàng dầu mỡ, dễ lau chùi sạch sẽ.\n- **Gạch lát sân vườn & lối đi (40x40cm, 50x50cm):** Men định hình nhám chống trơn tuyệt đối khi trời mưa ẩm.\n- **Gạch trang trí bông cổ điển, gạch thẻ ốp mặt tiền & giếng trời.**',
    notesTitle: 'Lưu ý khi thi công ốp lát gạch men',
    notesIntro: 'Để sàn tường gạch luôn phẳng đẹp và không bị bộp nứt, cần chú ý:',
    technicalNotes: [
      'Chọn gạch cùng một mã màu và cùng một đợt sản xuất cho một diện tích sàn để màu sắc đồng đều.',
      'Chừa khe ron tối thiểu từ 1.5mm đến 2mm, sử dụng ke cân bằng để mặt sàn phẳng.',
      'Sử dụng keo dán gạch và keo chà ron chuyên dụng để tăng độ kết dính.'
    ],
    notesFooter: 'Hoàng Yến hỗ trợ tư vấn chọn mẫu gạch và tính toán số lượng hộp phù hợp theo diện tích.',
    pricingTitle: 'Yếu tố ảnh hưởng đến giá gạch men tại Quảng Trị',
    pricingIntro: 'Giá gạch men phụ thuộc vào kích thước, chất liệu xương gạch (Ceramic hay Granite) và bề mặt men.',
    pricingFactors: [
      'Thương hiệu sản xuất (Viglacera, Prime, Đồng Tâm, Catalan, Taicera...)',
      'Chất liệu xương gạch (xương Ceramic, xương bán sứ Porcelain, xương Granite)',
      'Kích thước gạch (30x60, 60x60, 80x80, 15x80 cm)',
      'Công nghệ in bề mặt men (men bóng kiếng, men mờ Matt, vi tinh)',
      'Khối lượng mét vuông đặt mua'
    ],
    pricingFooter: 'Quý khách liên hệ Hoàng Yến để xem mẫu gạch thực tế và nhận báo giá chi tiết.',
    locationTitle: 'Địa chỉ mua gạch men ốp lát tại Quảng Trị',
    locationContent: 'Siêu Thị VLXD Hoàng Yến tọa lạc tại 299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị.',
    updatedDate: '2026-03-16',
    authorName: 'Siêu Thị VLXD Hoàng Yến',
    faqTitle: '10 Câu hỏi thường gặp về gạch men ốp lát',
    faqs: [
      {
        question: 'Gạch Ceramic và gạch Porcelain/Granite khác nhau thế nào?',
        answer: 'Gạch Ceramic có xương đất sét đỏ độ hút nước >10% thích hợp ốp tường; gạch Porcelain/Granite có 70% bột đá nung nhiệt độ cao, độ hút nước <0.5%, chịu lực nén cực tốt thích hợp lát nền.'
      },
      {
        question: 'Hoàng Yến phân phối những thương hiệu gạch men nào tại Quảng Trị?',
        answer: 'Chúng tôi phân phối các thương hiệu gạch ốp lát nổi tiếng: Viglacera, Prime, Đồng Tâm, Catalan, Taicera, TTC và gạch nhập khẩu với đa dạng kích thước 60x60, 80x80, 30x60, gạch vân gỗ 15x80.'
      },
      {
        question: 'Phòng khách nên chọn gạch lát nền kích thước bao nhiêu?',
        answer: 'Phòng khách nhà phố hiện đại thường sử dụng gạch 60x60cm hoặc 80x80cm men bóng kiếng toàn phần để tạo cảm giác không gian rộng rãi và sang trọng.'
      },
      {
        question: 'Phòng tắm và nhà vệ sinh nên lát gạch loại nào chống trơn?',
        answer: 'Nên chọn gạch lát nền men mờ (Matt) hoặc men nhám định hình chống trơn trượt (Anti-slip) kích thước 30x30cm hoặc 60x60cm để đảm bảo an toàn.'
      },
      {
        question: 'Gạch ốp tường nhà tắm kích thước bao nhiêu là phổ biến?',
        answer: 'Kích thước gạch ốp tường thông dụng nhất hiện nay là 30x60cm (có thể ốp ngang hoặc ốp dọc) kết hợp viên điểm trang trí.'
      },
      {
        question: 'Tại sao cần chừa khe ron khi lát gạch men?',
        answer: 'Gạch có sự giãn nở nhiệt tự nhiên theo thời tiết, việc chừa khe ron từ 1.5mm - 2mm giúp gạch không bị đội cấn nứt bộp khi nhiệt độ thay đổi.'
      },
      {
        question: 'Một thùng gạch lát nền 60x60 hoặc 80x80 có bao nhiêu viên?',
        answer: 'Quy cách chuẩn: Thùng gạch 60x60cm gồm 4 viên = 1.44 m2; Thùng gạch 80x80cm gồm 3 viên = 1.92 m2; Thùng gạch 30x60cm gồm 8 viên = 1.44 m2.'
      },
      {
        question: 'Nên dùng keo dán gạch hay vữa xi măng truyền thống?',
        answer: 'Với các dòng gạch xương đá Porcelain/Granite khổ lớn, nên sử dụng keo dán gạch chuyên dụng vì gạch ít hút nước, keo tạo độ bám dính vượt trội chống bong tróc.'
      },
      {
        question: 'Gạch vân gỗ có ưu điểm gì so với sàn gỗ công nghiệp?',
        answer: 'Gạch vân gỗ có màu sắc tự nhiên như gỗ thật nhưng hoàn toàn không bị cong vênh, chống thấm nước tuyệt đối và không bị mối mọt.'
      },
      {
        question: 'Địa chỉ xem mẫu gạch men Viglacera, Prime tại Đông Hà, Quảng Trị?',
        answer: 'Quý khách ghé Showroom Siêu Thị VLXD Hoàng Yến, 299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị. Hotline: 0946.575.579.'
      }
    ],
    relatedLinks: [
      { name: 'Bồn Cầu 1 Khối Men Nano', url: '/bon-cau/' },
      { name: 'Chậu Lavabo Sứ Đặt Bàn', url: '/lavabo/' },
      { name: 'Sen Cây Tắm Nóng Lạnh', url: '/voi-hoa-sen/' }
    ]
  }
};

export function buildCategorySeoHtml(seoData?: CategorySEOData): string {
  if (!seoData) return '';

  let guideHtml = '';
  if (seoData.guideTitle && seoData.guideIntro) {
    let tableMarkup = '';
    if (seoData.tableHeaders && seoData.tableHeaders.length > 0 && seoData.tableRows && seoData.tableRows.length > 0) {
      const headers = seoData.tableHeaders.map(h => `<th>${h}</th>`).join('');
      const rows = seoData.tableRows.map(row => {
        const cells = row.map(cell => `<td>${cell}</td>`).join('');
        return `<tr>${cells}</tr>`;
      }).join('');
      tableMarkup = `
  <div class="table-responsive">
    <table class="spec-table-industrial">
      <thead><tr>${headers}</tr></thead>
      <tbody>${rows}</tbody>
    </table>
  </div>`;
    }

    guideHtml = `
<div class="seo-block">
  <h3 class="seo-sub-heading">${seoData.guideTitle}</h3>
  <p class="seo-desc-text">${seoData.guideIntro.replace(/\n\n/g, '</p><p class="seo-desc-text">')}</p>${tableMarkup}
</div>`;
  }

  let notesHtml = '';
  if (seoData.technicalNotes && seoData.technicalNotes.length > 0) {
    const list = seoData.technicalNotes.map(n => `<li>${n}</li>`).join('');
    notesHtml = `
<div class="technical-notes-box">
  <h4 class="notes-heading">${seoData.notesTitle || 'Lưu ý kỹ thuật quan trọng khi chọn & thi công:'}</h4>
  ${seoData.notesIntro ? `<p class="notes-intro-text">${seoData.notesIntro}</p>` : ''}
  <ul class="notes-list">${list}</ul>
  ${seoData.notesFooter ? `<p class="notes-footer-text">${seoData.notesFooter}</p>` : ''}
</div>`;
  }

  let pricingHtml = '';
  if (seoData.pricingFactors && seoData.pricingFactors.length > 0) {
    const pList = seoData.pricingFactors.map(p => `<li>${p}</li>`).join('');
    pricingHtml = `
<div class="seo-block pricing-factors-block">
  <h3 class="seo-sub-heading">${seoData.pricingTitle || 'Báo giá & Yếu tố ảnh hưởng'}</h3>
  ${seoData.pricingIntro ? `<p class="seo-desc-text">${seoData.pricingIntro}</p>` : ''}
  <ul class="pricing-factors-list">${pList}</ul>
  ${seoData.pricingFooter ? `<p class="pricing-footer-note"><em>${seoData.pricingFooter}</em></p>` : ''}
</div>`;
  }

  let locationHtml = '';
  if (seoData.locationTitle && seoData.locationContent) {
    locationHtml = `
<div class="seo-block location-info-block">
  <h3 class="seo-sub-heading">${seoData.locationTitle}</h3>
  <p class="seo-desc-text">${seoData.locationContent}</p>
</div>`;
  }

  let faqsHtml = '';
  if (seoData.faqs && seoData.faqs.length > 0) {
    const faqList = seoData.faqs.map((f, idx) => `
<div class="faq-card-item">
  <h4 class="faq-question"><span class="faq-q-badge">Q${idx + 1}</span> ${f.question}</h4>
  <p class="faq-answer">${f.answer}</p>
</div>`).join('');
    faqsHtml = `
<div class="seo-block faqs-block">
  <h3 class="seo-sub-heading">${seoData.faqTitle || 'Câu Hỏi Thường Gặp'}</h3>
  <div class="faq-list">${faqList}</div>
  <div class="faq-disclaimer-note" style="margin-top: 1.25rem; padding: 0.9rem 1.15rem; background: #fffbeb; border: 1px solid #fef3c7; border-left: 3px solid #f59e0b; border-radius: 8px; font-size: 0.85rem; color: #92400e; line-height: 1.55;">
    <p style="margin: 0;"><em>* Lưu ý:</em> Các câu hỏi giải đáp và số liệu kỹ thuật trên chỉ mang tính chất tham khảo chung. Định mức, quy cách tiêu chuẩn và đơn giá vật tư thực tế có thể có sự sai sót hoặc thay đổi theo từng thời điểm, từng lô sản xuất từ nhà máy hoặc yêu cầu riêng của từng công trình. Quý khách vui lòng liên hệ Hotline/Zalo <strong>0946.575.579</strong> để kiểm tra thông tin thực tế.</p>
  </div>
</div>`;
  }

  let linksHtml = '';
  if (seoData.relatedLinks && seoData.relatedLinks.length > 0) {
    const linkItems = seoData.relatedLinks.map(l => `<a href="${l.url}" class="related-tag-btn"><span>${l.name}</span></a>`).join('');
    linksHtml = `
<div class="seo-block related-links-block">
  <h4 class="related-links-title">Vật Tư &amp; Danh Mục Liên Quan</h4>
  <div class="related-tags-grid">${linkItems}</div>
</div>`;
  }

  return `<div class="seo-block">
  <h2 class="seo-main-heading">${seoData.overviewTitle}</h2>
  <p class="seo-lead-text">${seoData.overviewContent.replace(/\n\n/g, '</p><p class="seo-lead-text">')}</p>
</div>
${guideHtml}
${notesHtml}
${pricingHtml}
${locationHtml}
${faqsHtml}
${linksHtml}`;
}

