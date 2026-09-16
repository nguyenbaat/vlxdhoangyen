export const SEED_SETTINGS = {
  company_name: 'CÔNG TY TNHH MTV VẬT LIỆU XÂY DỰNG TỔNG HỢP HOÀNG YẾN',
  brand_name: 'Siêu Thị VLXD Hoàng Yến',
  tax_id: '3200165533',
  founding_year: '2003',
  address: '299 Lê Duẩn, Phường Đông Hà, Tỉnh Quảng Trị',
  hotline_main: '0946.575.579',
  hotline_alt: '0914.127.111',
  contact_person_main: '',
  contact_person_alt: '',
  email: 'vlxdhoangyenqt@gmail.com',
  zalo_url: 'https://zalo.me/0946575579',
  facebook_url: 'https://www.facebook.com/sieuthivlxdhoangyen/',
  youtube_url: '',
  twitter_url: '',
  maps_embed_url: 'https://maps.google.com/maps?q=Si%C3%AAu+Th%E1%BB%8B+Ho%C3%A0ng+Y%E1%BA%BFn,+299+L%C3%AA+Du%E1%BA%A9n,+%C4%90%C3%B4ng+H%C3%A0,+Qu%E1%BA%A3ng+Tr%E1%BB%8B&t=k&z=17&ie=UTF8&iwloc=&output=embed',
  default_seo_title: 'Đại Lý Cấp 1 VLXD Hoàng Yến - Vật Liệu Xây Dựng Tại Quảng Trị',
  default_seo_desc: 'Hoàng Yến là Đại lý cấp 1 cung cấp VLXD tỉnh Quảng Trị, thành lập từ năm 2003 với hơn 20 năm kinh nghiệm, được hơn 1.250+ nhà thầu tin chọn trong suốt 20+ năm qua.',
  logo_url: '/logo.png',
  favicon_url: '/favicon.png',
  banner_url: '/images/HoangYen.jpg'
};

export const SEED_CATEGORIES = [
  // GROUP 1: VẬT LIỆU XÂY THÔ & KẾT CẤU
  {
    id: 1,
    name: 'XI MĂNG',
    slug: 'xi-mang',
    group_type: 'vlxd',
    h1: 'Xi Măng Xây Dựng Tại Quảng Trị',
    description: `Xi măng là một trong những vật liệu quan trọng trong hầu hết các công trình xây dựng, từ xây nhà dân dụng, xây tô tường đến đổ bê tông và thi công kết cấu.

Siêu Thị VLXD Hoàng Yến cung cấp nhiều loại xi măng xây dựng phục vụ nhu cầu thi công tại Quảng Trị. Khách hàng có thể tham khảo sản phẩm theo thương hiệu, loại xi măng, mục đích sử dụng và quy cách phù hợp với từng hạng mục công trình.

Giá xi măng có thể thay đổi theo thương hiệu, loại sản phẩm, số lượng và thời điểm đặt hàng. Liên hệ Hoàng Yến để được tư vấn lựa chọn sản phẩm và nhận báo giá mới nhất.`,
    image_url: '/images/danh-muc/ximang.png',
    seo_title: 'Xi Măng Xây Dựng Tại Quảng Trị | Báo Giá Xi Măng - Hoàng Yến',
    seo_description: 'Mua xi măng xây dựng tại Quảng Trị. Tham khảo các loại xi măng dùng xây tô, đổ bê tông và thi công công trình. Liên hệ VLXD Hoàng Yến để nhận báo giá.',
    sort_order: 1
  },
  {
    id: 2,
    name: 'THÉP XÂY DỰNG',
    slug: 'thep-xay-dung',
    group_type: 'vlxd',
    h1: 'Thép Xây Dựng Tại Quảng Trị',
    description: 'Thép xây dựng Hòa Phát gồm thép cuộn D6, D8, thép cây vằn D10 - D25 mác CB300-V, CB400-V chuẩn barem tiêu chuẩn tại Quảng Trị.',
    image_url: '/images/danh-muc/thep.png',
    seo_title: 'Thép Xây Dựng Tại Quảng Trị | Thép Hòa Phát Báo Giá - Hoàng Yến',
    seo_description: 'Cung cấp thép xây dựng Hòa Phát tại Quảng Trị. Thép cuộn D6, D8, thép cây D10 - D25 chuẩn barem. Liên hệ VLXD Hoàng Yến để nhận báo giá.',
    sort_order: 2
  },
  {
    id: 3,
    name: 'TÔN',
    slug: 'ton',
    group_type: 'vlxd',
    h1: 'Tôn Lợp Mái & Tôn Chống Nóng Tại Quảng Trị',
    description: 'Tôn lạnh màu, tôn mạ kẽm Đông Á dập sóng vuông 5 sóng, 9 sóng, sóng ngói Ruby độ dày 0.35mm - 0.50mm, cách nhiệt và chống nóng hiệu quả.',
    image_url: '/images/danh-muc/ton.png',
    seo_title: 'Tôn Lợp Mái Tại Quảng Trị | Tôn Đông Á Báo Giá - Hoàng Yến',
    seo_description: 'Cung cấp tôn lợp mái, tôn lạnh mạ màu Đông Á tại Quảng Trị. Cán dập sóng 5 sóng, 9 sóng, sóng ngói theo kích thước yêu cầu.',
    sort_order: 3
  },
  {
    id: 4,
    name: 'LƯỚI XÂY DỰNG',
    slug: 'luoi-xay-dung',
    group_type: 'vlxd',
    h1: 'Lưới Xây Dựng & Lưới B40 Tại Quảng Trị',
    description: 'Lưới B40 mạ kẽm sợi 2.7mm - 3.5mm, mắt lưới 50x50mm, 60x60mm đan chắc chắn, các khổ cao 1.0m đến 2.4m làm hàng rào và che chắn công trình.',
    image_url: '/images/danh-muc/b40.png',
    seo_title: 'Lưới B40 Xây Dựng Tại Quảng Trị | Lưới Mạ Kẽm - Hoàng Yến',
    seo_description: 'Cung cấp lưới B40 mạ kẽm các khổ từ 1.0m đến 2.4m tại Quảng Trị. Bán theo kg hoặc mét dài theo nhu cầu công trình.',
    sort_order: 4
  },
  {
    id: 5,
    name: 'GẠCH TUYNEL',
    slug: 'gach-tuynel',
    group_type: 'vlxd',
    h1: 'Gạch Tuynel Đất Sét Nung Tại Quảng Trị',
    description: 'Gạch Tuynel đất sét nung 6 lỗ, 2 lỗ và gạch đặc công nghệ lò tuynel. Độ cứng cao, màu đỏ tươi đồng đều, chịu lực tốt cho công trình.',
    image_url: '/images/danh-muc/gach.png',
    seo_title: 'Gạch Tuynel Đất Nung Tại Quảng Trị | Gạch 6 Lỗ, 2 Lỗ - Hoàng Yến',
    seo_description: 'Cung cấp gạch tuynel 6 lỗ, 2 lỗ đất nung tại Đông Hà, Quảng Trị. Giao hàng tận công trình theo tiến độ thi công.',
    sort_order: 5
  },
  {
    id: 6,
    name: 'XÀ GỒ',
    slug: 'xa-go',
    group_type: 'vlxd',
    h1: 'Xà Gồ Thép C & Z Mạ Kẽm Tại Quảng Trị',
    description: 'Xà gồ thép chữ C, chữ Z mạ kẽm quy cách C100, C125, C150, C180, C200 độ dày 1.4mm - 2.5mm chịu lực vượt nhịp cho khung kèo mái lợp.',
    image_url: '/images/danh-muc/xago.png',
    seo_title: 'Xà Gồ Thép C Mạ Kẽm Tại Quảng Trị | Xà Gồ C100 - C200 - Hoàng Yến',
    seo_description: 'Cung cấp xà gồ thép C, xà gồ Z mạ kẽm tại Quảng Trị. Cắt theo khẩu độ mái và hỗ trợ đột lỗ theo bản vẽ thiết kế.',
    sort_order: 6
  },
  {
    id: 7,
    name: 'XỐP - NHỰA',
    slug: 'xop-nhua',
    group_type: 'vlxd',
    h1: 'Tấm Xốp Cách Nhiệt EPS Tại Quảng Trị',
    description: 'Tấm xốp cách nhiệt EPS tỷ trọng cao chống nóng mái tôn, chống ồn trần nhà, lót sàn bê tông nhẹ và cách âm phòng tại Quảng Trị.',
    image_url: '/images/danh-muc/xopnhua.png',
    seo_title: 'Tấm Xốp Cách Nhiệt EPS Tại Quảng Trị | Xốp Chống Nóng - Hoàng Yến',
    seo_description: 'Cung cấp tấm xốp EPS cách nhiệt chống nóng mái tôn tại Đông Hà, Quảng Trị. Đủ độ dày 2cm, 3cm, 5cm, 10cm giao tận nơi.',
    sort_order: 7
  },
  {
    id: 8,
    name: 'KẼM BUỘC',
    slug: 'kem-buoc',
    group_type: 'vlxd',
    h1: 'Dây Kẽm Buộc 1 Ly Xây Dựng Tại Quảng Trị',
    description: 'Dây kẽm đen 1 ly dẻo dai, dễ uốn siết kết cấu sắt thép sàn móng dầm bê tông, không bị đứt gãy khi xoắn siết bằng móc buộc.',
    image_url: '/images/danh-muc/kem.png',
    seo_title: 'Dây Kẽm Buộc 1 Ly Tại Quảng Trị | Kẽm Dẻo Xây Dựng - Hoàng Yến',
    seo_description: 'Cung cấp kẽm buộc 1 ly dẻo dai cho thợ sắt và nhà thầu tại Đông Hà, Quảng Trị. Bán sỉ theo cuộn và bán lẻ theo kg.',
    sort_order: 8
  },
  {
    id: 9,
    name: 'ĐINH VÍT',
    slug: 'dinh-vit',
    group_type: 'vlxd',
    h1: 'Đinh Thép & Vít Bắn Tôn Xây Dựng Tại Quảng Trị',
    description: 'Đinh thép đóng gỗ ghép cốp pha các cỡ 3 phân đến 10 phân, đinh bê tông tôi cứng và vít bắn tôn tự khoan đệm ron cao su chống dột.',
    image_url: '/images/danh-muc/dinhsat.png',
    seo_title: 'Đinh Thép & Vít Bắn Tôn Tại Quảng Trị | Phụ Kiện Xây Dựng - Hoàng Yến',
    seo_description: 'Cung cấp đinh thép đóng cốp pha, đinh bê tông và vít bắn tôn tự khoan có đệm ron cao su tại Đông Hà, Quảng Trị.',
    sort_order: 9
  },

  // GROUP 2: THIẾT BỊ VỆ SINH & PHÒNG TẮM
  {
    id: 10,
    name: 'BỒN CẦU',
    slug: 'bon-cau',
    group_type: 'noi-that',
    h1: 'Bồn Cầu Vệ Sinh Tại Quảng Trị',
    description: 'Bồn cầu một khối, bồn cầu hai khối thương hiệu Caesar, Viglacera, Mowoen. Men sứ chống bám bẩn, hệ thống xả xoáy hút đẩy mạnh mẽ, tiết kiệm nước.',
    image_url: '/images/danh-muc/boncau.png',
    seo_title: 'Bồn Cầu Vệ Sinh Tại Quảng Trị | Bồn Cầu 1 Khối, 2 Khối - Hoàng Yến',
    seo_description: 'Cung cấp bồn cầu một khối, bồn cầu hai khối Caesar tại Đông Hà, Quảng Trị. Men sứ sáng bóng, xả xoáy êm ái.',
    sort_order: 10
  },
  {
    id: 11,
    name: 'LAVABO',
    slug: 'lavabo',
    group_type: 'noi-that',
    h1: 'Chậu Rửa Mặt Lavabo Tại Quảng Trị',
    description: 'Chậu rửa mặt Lavabo đặt bàn, âm bàn, treo tường men sứ trắng sáng, chống bám bẩn, thiết kế thanh lịch cho phòng tắm gia đình và công trình.',
    image_url: '/images/danh-muc/lavabo.png',
    seo_title: 'Chậu Rửa Mặt Lavabo Tại Quảng Trị | Lavabo Đặt Bàn, Âm Bàn - Hoàng Yến',
    seo_description: 'Cung cấp chậu rửa mặt lavabo đặt bàn đá, lavabo âm bàn tại Đông Hà, Quảng Trị. Đa dạng kiểu dáng vuông, tròn, oval.',
    sort_order: 11
  },
  {
    id: 12,
    name: 'VÒI HOA SEN',
    slug: 'voi-hoa-sen',
    group_type: 'noi-that',
    h1: 'Sen Vòi Phòng Tắm Tại Quảng Trị',
    description: 'Sen cây tắm đứng nóng lạnh, củ sen tắm massage bằng đồng thau mạ crom/niken hoặc inox 304, áp lực nước êm ái, điều chỉnh nhiệt độ mượt mà.',
    image_url: '/images/danh-muc/voi-hoa-sen.png',
    seo_title: 'Sen Vòi Phòng Tắm Tại Quảng Trị | Sen Cây Nóng Lạnh - Hoàng Yến',
    seo_description: 'Cung cấp sen cây tắm đứng, vòi sen nóng lạnh cao cấp tại Đông Hà, Quảng Trị. Thân đồng mạ crom sáng bóng, van ceramic bền bỉ.',
    sort_order: 12
  },
  {
    id: 13,
    name: 'BỒN TẮM',
    slug: 'bon-tam',
    group_type: 'noi-that',
    h1: 'Bồn Tắm Nằm & Bồn Tắm Ngâm Tại Quảng Trị',
    description: 'Bồn tắm nằm ngâm, bồn tắm Acrylic cao cấp thương hiệu Mowoen, Caesar thiết kế công thái học, giữ nhiệt lâu, chống trơn trượt an toàn.',
    image_url: '/images/danh-muc/bon-tam.png',
    seo_title: 'Bồn Tắm Nằm Massage Tại Quảng Trị | Bồn Tắm Ngâm Acrylic - Hoàng Yến',
    seo_description: 'Cung cấp bồn tắm ngâm đặt sàn, bồn tắm massage Acrylic tại Quảng Trị. Đủ kích thước 1m4 đến 1m8 cho phòng tắm gia đình.',
    sort_order: 13
  },
  {
    id: 14,
    name: 'GẠCH MEN',
    slug: 'gach-men',
    group_type: 'noi-that',
    h1: 'Gạch Men Ốp Tường & Lát Nền Tại Quảng Trị',
    description: 'Gạch men ốp lát kích thước 30x30, 40x40, 30x60, 60x60, 80x80 cm men bóng kiếng, men mờ chống trơn, gạch giả gỗ cho phòng khách, phòng ngủ và nhà tắm.',
    image_url: '/images/danh-muc/gachmen.png',
    seo_title: 'Gạch Men Ốp Lát Tại Quảng Trị | Gạch Lát Nền, Ốp Tường - Hoàng Yến',
    seo_description: 'Cung cấp gạch men lát nền, gạch ốp tường 30x60, 60x60, 80x80 tại Đông Hà, Quảng Trị. Đa dạng mẫu mã, men bóng kiếng và men mờ.',
    sort_order: 14
  }
];

export const SEED_BRANDS = [
  { id: 1, name: 'Thép Hòa Phát', slug: 'hoa-phat', description: 'Tập đoàn Hòa Phát - Nhà sản xuất thép xây dựng hàng đầu Việt Nam.', logo_url: '/images/brands/hoa-phat.png', is_featured: 1 },
  { id: 2, name: 'Xi Măng Sông Gianh', slug: 'song-gianh', description: 'Xi măng Sông Gianh - Dòng xi măng bền sunfat chuyên dụng chống chọi khí hậu miền Trung.', logo_url: '/images/brands/song-gianh.png', is_featured: 1 },
  { id: 3, name: 'Xi Măng Bỉm Sơn', slug: 'bim-son', description: 'Xi măng Bỉm Sơn (Vicem Bỉm Sơn) - Thương hiệu xi măng Con Voi chất lượng cao cho kết cấu chịu lực.', logo_url: '/images/brands/bim-son.png', is_featured: 0 },
  { id: 4, name: 'Xi Măng Nghi Sơn', slug: 'nghi-son', description: 'Xi măng Nghi Sơn - Liên doanh công nghệ Nhật Bản, độ dẻo cao và phát triển cường độ sớm.', logo_url: '/images/brands/nghi-son.png', is_featured: 0 },
  { id: 5, name: 'Thép TISCO', slug: 'tisco', description: 'Thép TISCO - Công ty Cổ phần Gang Thép Thái Nguyên, thương hiệu thép xây dựng uy tín lâu đời.', logo_url: '/images/brands/tisco.png', is_featured: 1 },
  { id: 6, name: 'Tôn Đông Á', slug: 'ton-dong-a', description: 'Tôn Đông Á - Nhà sản xuất thép lá mạ kẽm, tôn lạnh mạ màu chất lượng cao.', logo_url: '/images/brands/ton-dong-a.png', is_featured: 1 },
  { id: 7, name: 'Tôn Hoa Sen', slug: 'hoa-sen', description: 'Tập đoàn Hoa Sen - Thương hiệu tôn mạ hàng đầu Việt Nam.', logo_url: '/images/brands/hoa-sen.png', is_featured: 0 },
  { id: 8, name: 'Caesar', slug: 'caesar', description: 'Thiết bị vệ sinh CAESAR - Thương hiệu thiết bị phòng tắm sứ men Nano cao cấp.', logo_url: '/images/brands/caesar.png', is_featured: 0 },
  { id: 9, name: 'Mowoen', slug: 'mowoen', description: 'Thiết bị phòng tắm cao cấp Mowoen - Công nghệ chuẩn châu Âu.', logo_url: '/images/brands/mowoen.png', is_featured: 0 },
  { id: 10, name: 'Vicem Hà Tiên', slug: 'vicem-ha-tien', description: 'Xi măng Vicem Hà Tiên - Thương hiệu xi măng biểu tượng Kỳ Lân chất lượng cao.', logo_url: '/images/brands/vicem-ha-tien.png', is_featured: 1 },
  { id: 11, name: 'Xi Măng Công Thanh', slug: 'cong-thanh', description: 'Xi măng Công Thanh - Thương hiệu xi măng chất lượng cao được ưa chuộng tại miền Trung.', logo_url: '/images/brands/cong-thanh.png', is_featured: 1 }
];

export const SEED_PRODUCTS = [
  // 1. Xi Măng
  {
    id: 101,
    brand_id: 3,
    category_id: 1,
    name: 'Xi Măng Bỉm Sơn Con Voi PCB40 Cường Độ Cao',
    slug: 'xi-mang-bim-son-pcb40',
    sku: 'BS-PCB40',
    price: 0,
    unit: 'Bao (50kg)',
    short_description: 'Xi măng Pooclăng hỗn hợp Bỉm Sơn Con Voi PCB40 cường độ nén cao sau 28 ngày >= 40 N/mm2, chuyên dùng đổ móng, cột, dầm, sàn bê tông cốt thép.',
    content: '<h3>Thông số kỹ thuật</h3><ul><li>Mác xi măng: PCB40 theo TCVN 6260:2009</li><li>Quy cách: Bao 50 kg</li><li>Ứng dụng: Bê tông kết cấu chịu lực, dầm sàn, móng cọc</li></ul>',
    featured_image: 'https://vlxdhoangyen.com/wp-content/uploads/2025/07/bimsonpcb40.png',
    images: ['https://vlxdhoangyen.com/wp-content/uploads/2025/07/bimsonpcb40.png'],
    seo_title: 'Xi Măng Bỉm Sơn PCB40 Con Voi Tại Quảng Trị | VLXD Hoàng Yến',
    seo_description: 'Báo giá xi măng Bỉm Sơn PCB40 tại Đông Hà Quảng Trị. Giao nhanh tận nơi theo yêu cầu.',
    is_featured: 1,
    is_in_stock: 1
  },
  {
    id: 102,
    brand_id: 4,
    category_id: 1,
    name: 'Xi Măng Nghi Sơn PCB40 Đa Dụng',
    slug: 'xi-mang-nghi-son-pcb40',
    sku: 'NS-PCB40',
    price: 0,
    unit: 'Bao (50kg)',
    short_description: 'Xi măng Nghi Sơn PCB40 công nghệ Nhật Bản, độ dẻo cao, phát triển cường độ sớm, giảm thiểu hiện tượng co ngót nứt nẻ cho công trình.',
    content: '<h3>Thông số kỹ thuật</h3><ul><li>Mác xi măng: PCB40</li><li>Đóng bao: 50 kg/bao</li><li>Ưu điểm: Độ mịn cao, vữa dẻo, bê tông đanh chắc</li></ul>',
    featured_image: 'https://vlxdhoangyen.com/wp-content/uploads/2025/07/pcb40-dan-dung-north-1628659528-1.png',
    images: ['https://vlxdhoangyen.com/wp-content/uploads/2025/07/pcb40-dan-dung-north-1628659528-1.png'],
    seo_title: 'Xi Măng Nghi Sơn PCB40 Tại Quảng Trị | VLXD Hoàng Yến',
    seo_description: 'Phân phối xi măng Nghi Sơn PCB40 tại Quảng Trị. Liên hệ nhận báo giá theo khối lượng đơn hàng.',
    is_featured: 1,
    is_in_stock: 1
  },
  {
    id: 103,
    brand_id: 2,
    category_id: 1,
    name: 'Xi Măng Sông Gianh PCB40 Kháng Mặn',
    slug: 'xi-mang-song-gianh-pcb40',
    sku: 'SG-PCB40',
    price: 0,
    unit: 'Bao (50kg)',
    short_description: 'Xi măng Sông Gianh PCB40 công nghệ Đức, độ bền sunfat vượt trội thích hợp đặc thù khí hậu ven biển miền Trung và giảm rạn nứt cho công trình.',
    content: '<h3>Thông số sản phẩm</h3><ul><li>Mác xi măng: PCB40</li><li>Đóng bao: 50 kg/bao</li><li>Ứng dụng: Đổ bê tông móng, sàn, chống thấm ăn mòn</li></ul>',
    featured_image: 'https://vlxdhoangyen.com/wp-content/uploads/2025/07/songgianhpcb40.jpg',
    images: ['https://vlxdhoangyen.com/wp-content/uploads/2025/07/songgianhpcb40.jpg'],
    seo_title: 'Xi Măng Sông Gianh PCB40 Tại Quảng Trị - VLXD Hoàng Yến',
    seo_description: 'Báo giá xi măng Sông Gianh PCB40 tại Quảng Trị. Cung ứng theo yêu cầu của công trình.',
    is_featured: 1,
    is_in_stock: 1
  },
  {
    id: 104,
    brand_id: 3,
    category_id: 1,
    name: 'Xi Măng Bỉm Sơn Xây Trát PCB30 Dẻo Mịn',
    slug: 'xi-mang-bim-son-pcb30',
    sku: 'BS-PCB30',
    price: 0,
    unit: 'Bao (50kg)',
    short_description: 'Xi măng chuyên dụng xây trát Bỉm Sơn PCB30 vữa dẻo mịn, dễ miết bay, tăng năng suất thợ hồ và giữ bề mặt tường không rạn nứt.',
    content: '<h3>Đặc điểm nổi bật</h3><ul><li>Quy cách: 50kg/bao</li><li>Ứng dụng: Xây tường gạch, trát tường trong ngoài, ốp lát gạch</li></ul>',
    featured_image: 'https://vlxdhoangyen.com/wp-content/uploads/2025/07/bimsonpcb40.png',
    images: ['https://vlxdhoangyen.com/wp-content/uploads/2025/07/bimsonpcb40.png'],
    seo_title: 'Xi Măng Bỉm Sơn Xây Trát PCB30 Tại Quảng Trị | VLXD Hoàng Yến',
    seo_description: 'Cung cấp xi măng Bỉm Sơn PCB30 xây tô dẻo đẹp, giá tốt tại Đông Hà Quảng Trị.',
    is_featured: 0,
    is_in_stock: 1
  },

  // 2. Thép Xây Dựng
  {
    id: 201,
    brand_id: 1,
    category_id: 2,
    name: 'Thép Cây Hòa Phát D14 (CB300V / CB400V)',
    slug: 'thep-phi-14',
    sku: 'HP-D14',
    price: 0,
    unit: 'Cây (11.7m)',
    short_description: 'Thép thanh vằn phi 14 Hòa Phát tiêu chuẩn 11.7m, mác thép CB300V / CB400V cường độ cao, chịu uốn dẻo tốt cho kết cấu dầm cột móng.',
    content: '<h3>Thông số kỹ thuật</h3><ul><li>Đường kính: 14mm</li><li>Chiều dài: 11.7m</li><li>Trọng lượng tiêu chuẩn: 1.21 kg/m</li><li>Mác thép: CB300V / CB400V</li></ul>',
    featured_image: '/images/banner-vlxdhoangyen.png',
    images: ['/images/banner-vlxdhoangyen.png'],
    seo_title: 'Thép Phi 14 (D14) Hòa Phát Báo Giá Tốt Tại Quảng Trị | VLXD Hoàng Yến',
    seo_description: 'Đại lý thép Hòa Phát D14 tại Quảng Trị. Hàng chuẩn barem, giao hàng tận nơi.',
    is_featured: 1,
    is_in_stock: 1
  },
  {
    id: 202,
    brand_id: 1,
    category_id: 2,
    name: 'Thép Cây Hòa Phát D12 (CB300V)',
    slug: 'thep-phi-12',
    sku: 'HP-D12',
    price: 0,
    unit: 'Cây (11.7m)',
    short_description: 'Thép thanh vằn phi 12 Hòa Phát dài 11.7m, chuyên dụng cho thi công dầm giằng, cột chịu lực nhà phố và công trình dân dụng.',
    content: '<h3>Thông số kỹ thuật</h3><ul><li>Đường kính: 12mm</li><li>Chiều dài: 11.7m</li><li>Trọng lượng: 0.888 kg/m</li></ul>',
    featured_image: 'https://vlxdhoangyen.com/wp-content/uploads/2025/07/thep-cuon-phi-10-1.jpg',
    images: ['https://vlxdhoangyen.com/wp-content/uploads/2025/07/thep-cuon-phi-10-1.jpg'],
    seo_title: 'Thép Cây Hòa Phát D12 Tại Quảng Trị - Báo Giá Mới Nhất',
    seo_description: 'Cung cấp thép D12 Hòa Phát chuẩn nhà máy tại Quảng Trị. Giao hàng theo tiến độ.',
    is_featured: 1,
    is_in_stock: 1
  },
  {
    id: 203,
    brand_id: 1,
    category_id: 2,
    name: 'Thép Cây Hòa Phát D10 (CB300V)',
    slug: 'thep-cuon-phi-10',
    sku: 'HP-D10',
    price: 0,
    unit: 'Cây (11.7m)',
    short_description: 'Thép thanh vằn D10 Hòa Phát tiêu chuẩn 11.7m, ứng dụng then chốt trong bố trí thép sàn, đà kiềng và kết cấu phụ trợ.',
    content: '<h3>Thông số kỹ thuật</h3><ul><li>Đường kính: 10mm</li><li>Trọng lượng: 0.617 kg/m</li></ul>',
    featured_image: 'https://vlxdhoangyen.com/wp-content/uploads/2025/07/thep-cuon-phi-10.jpg',
    images: ['https://vlxdhoangyen.com/wp-content/uploads/2025/07/thep-cuon-phi-10.jpg'],
    seo_title: 'Thép Phi 10 (D10) Hòa Phát Giá Cạnh Tranh Tại Đông Hà Quảng Trị',
    seo_description: 'Báo giá thép cây D10 Hòa Phát tại Quảng Trị. Liên hệ VLXD Hoàng Yến để nhận thông tin chi tiết.',
    is_featured: 0,
    is_in_stock: 1
  },
  {
    id: 204,
    brand_id: 1,
    category_id: 2,
    name: 'Thép Cuộn Hòa Phát Phi 8 (D8)',
    slug: 'thep-cuon-phi-8',
    sku: 'HP-CUON-D8',
    price: 0,
    unit: 'Kg / Cuộn',
    short_description: 'Thép cuộn tròn trơn phi 8 Hòa Phát bề mặt nhẵn bóng, dẻo dai dễ uốn bẻ đai cột dầm, độ bền kéo tiêu chuẩn.',
    content: '<h3>Thông số kỹ thuật</h3><ul><li>Đường kính: 8mm</li><li>Trọng lượng: 0.395 kg/m</li></ul>',
    featured_image: 'https://vlxdhoangyen.com/wp-content/uploads/2025/07/thep-cuon-phi-8.jpg',
    images: ['https://vlxdhoangyen.com/wp-content/uploads/2025/07/thep-cuon-phi-8.jpg'],
    seo_title: 'Thép Cuộn Phi 8 (D8) Hòa Phát Tại Quảng Trị',
    seo_description: 'Cung cấp thép cuộn D8 Hòa Phát tại Quảng Trị. Cân đúng ký, giao hàng nhanh.',
    is_featured: 0,
    is_in_stock: 1
  },
  {
    id: 205,
    brand_id: 1,
    category_id: 2,
    name: 'Thép Cuộn Hòa Phát Phi 6 (D6)',
    slug: 'thep-cuon-phi-6',
    sku: 'HP-CUON-D6',
    price: 0,
    unit: 'Kg / Cuộn',
    short_description: 'Thép cuộn tròn phi 6 Hòa Phát dẻo mềm chất lượng cao, dễ gia công đai móng cột, đai dầm trong xây dựng.',
    content: '<h3>Thông số kỹ thuật</h3><ul><li>Đường kính: 6mm</li><li>Trọng lượng: 0.222 kg/m</li></ul>',
    featured_image: 'https://vlxdhoangyen.com/wp-content/uploads/2025/07/thep-cuon-phi-6-1.jpg',
    images: ['https://vlxdhoangyen.com/wp-content/uploads/2025/07/thep-cuon-phi-6-1.jpg'],
    seo_title: 'Thép Cuộn Phi 6 (D6) Hòa Phát Giá Tốt Tại Quảng Trị',
    seo_description: 'Bán thép cuộn D6 Hòa Phát tại Quảng Trị. Hỗ trợ giao hàng tận nơi.',
    is_featured: 0,
    is_in_stock: 1
  },

  // 3. Tôn
  {
    id: 301,
    brand_id: 6,
    category_id: 3,
    name: 'Tôn Lạnh Mạ Màu Đông Á 5 Sóng Vuông & Sóng Ngói',
    slug: 'ton-dong-a',
    sku: 'TON-DA',
    price: 0,
    unit: 'Mét Dài',
    short_description: 'Tôn mạ hợp kim nhôm kẽm Đông Á dập sóng công nghiệp, độ dày 0.35 - 0.50mm, lớp mạ giúp tăng khả năng chống ăn mòn và oxy hóa.',
    content: '<h3>Quy cách</h3><ul><li>Độ dày: 0.35mm, 0.40mm, 0.45mm, 0.50mm</li><li>Cán sóng vuông, sóng ngói theo chiều dài yêu cầu</li></ul>',
    featured_image: 'https://vlxdhoangyen.com/wp-content/uploads/2025/07/ton-dong-a.jpg',
    images: ['https://vlxdhoangyen.com/wp-content/uploads/2025/07/ton-dong-a.jpg'],
    seo_title: 'Tôn Đông Á Tại Quảng Trị - Báo Giá Mới Nhất | VLXD Hoàng Yến',
    seo_description: 'Cung cấp tôn Đông Á tại Quảng Trị. Cán tôn sóng vuông, sóng ngói theo yêu cầu, giao nhanh theo tiến độ.',
    is_featured: 1,
    is_in_stock: 1
  },

  // 4. Lưới Xây Dựng
  {
    id: 401,
    brand_id: null,
    category_id: 4,
    name: 'Lưới B40 Mạ Kẽm Sợi Dày Chống Rỉ',
    slug: 'luoi-b40',
    sku: 'LUOI-B40',
    price: 0,
    unit: 'Kg / Cuộn',
    short_description: 'Lưới B40 mạ kẽm sợi 2.7mm - 3.5mm mắt lưới 50x50mm, 60x60mm đan chắc chắn, khổ cao 1.0m đến 2.4m làm hàng rào và che chắn công trình.',
    content: '<h3>Quy cách</h3><ul><li>Khổ cao: 1.0m, 1.2m, 1.5m, 1.8m, 2.0m, 2.4m</li><li>Sợi mạ kẽm chống ăn mòn</li></ul>',
    featured_image: 'https://vlxdhoangyen.com/wp-content/uploads/2025/07/luoi-b40-.jpg',
    images: ['https://vlxdhoangyen.com/wp-content/uploads/2025/07/luoi-b40-.jpg'],
    seo_title: 'Lưới B40 Mạ Kẽm Giá Sỉ Tại Quảng Trị | VLXD Hoàng Yến',
    seo_description: 'Cung cấp lưới B40 mạ kẽm các khổ tại Đông Hà Quảng Trị. Cân đúng ký, giá cạnh tranh.',
    is_featured: 1,
    is_in_stock: 1
  },

  // 5. Gạch Tuynel
  {
    id: 501,
    brand_id: null,
    category_id: 5,
    name: 'Gạch Tuynel 6 Lỗ Đất Sét Nung Chuẩn Kỹ Thuật',
    slug: 'gach-tuynel-6-lo',
    sku: 'GACH-6LO',
    price: 0,
    unit: 'Viên',
    short_description: 'Gạch xây dựng Tuynel 6 lỗ đất sét nung công nghệ lò tuynel hiện đại, màu đỏ tươi đồng đều, chịu lực nén tốt, cách âm cách nhiệt lý tưởng.',
    content: '<h3>Quy cách</h3><ul><li>Kích thước: 195 x 135 x 90 mm</li><li>Cường độ nén: Mác 75</li></ul>',
    featured_image: 'https://vlxdhoangyen.com/wp-content/uploads/2025/07/gachtuynel-1.jpg',
    images: ['https://vlxdhoangyen.com/wp-content/uploads/2025/07/gachtuynel-1.jpg'],
    seo_title: 'Gạch Tuynel 6 Lỗ Xây Dựng Tại Quảng Trị | VLXD Hoàng Yến',
    seo_description: 'Cung cấp gạch tuynel 6 lỗ đất nung chất lượng tại Quảng Trị. Giao hàng theo tiến độ công trình.',
    is_featured: 1,
    is_in_stock: 1
  },

  // 6. Xà Gồ
  {
    id: 601,
    brand_id: null,
    category_id: 6,
    name: 'Xà Gồ Thép C Mạ Kẽm (C100 - C200)',
    slug: 'xa-go-thep-c-ma-kem',
    sku: 'XAGO-C',
    price: 0,
    unit: 'Cây (6m / Theo Yêu Cầu)',
    short_description: 'Xà gồ chữ C mạ kẽm cường độ cao chịu lực vượt nhịp, lớp mạ giúp tăng khả năng chống ăn mòn và oxy hóa cho khung kèo thép và mái lợp.',
    content: '<h3>Quy cách</h3><ul><li>Kích thước: C100, C125, C150, C180, C200</li><li>Độ dày: 1.4mm - 2.5mm mạ kẽm</li></ul>',
    featured_image: 'https://vlxdhoangyen.com/wp-content/uploads/2025/07/bao-gia-xa-go-thep-1.jpg',
    images: ['https://vlxdhoangyen.com/wp-content/uploads/2025/07/bao-gia-xa-go-thep-1.jpg'],
    seo_title: 'Xà Gồ C Mạ Kẽm Cường Độ Cao Tại Quảng Trị | VLXD Hoàng Yến',
    seo_description: 'Đại lý xà gồ thép mạ kẽm C100, C150, C200 tại Đông Hà Quảng Trị. Cắt theo khẩu độ mái, giao tận nơi.',
    is_featured: 1,
    is_in_stock: 1
  },

  // 7. Xốp - Nhựa
  {
    id: 701,
    brand_id: null,
    category_id: 7,
    name: 'Tấm Xốp Cách Nhiệt EPS Chống Nóng Mái Tôn',
    slug: 'tam-xop-cach-nhiet-eps',
    sku: 'XOP-EPS',
    price: 0,
    unit: 'Tấm (1m x 2m)',
    short_description: 'Tấm xốp EPS tỷ trọng cao chống nóng mái nhà xưởng, cách âm phòng, chống nóng trần nhà và tôn nền móng công trình.',
    content: '<h3>Thông số kỹ thuật</h3><ul><li>Kích thước: 1000 x 2000 mm</li><li>Độ dày: 2cm, 3cm, 5cm, 10cm</li></ul>',
    featured_image: 'https://vlxdhoangyen.com/wp-content/uploads/2025/07/xopnhua.jpg',
    images: ['https://vlxdhoangyen.com/wp-content/uploads/2025/07/xopnhua.jpg'],
    seo_title: 'Xốp Cách Nhiệt EPS Chống Nóng Mái Tôn Tại Quảng Trị',
    seo_description: 'Cung cấp tấm xốp EPS cách nhiệt tỷ trọng cao giá cạnh tranh tại Đông Hà Quảng Trị. Đủ kích thước.',
    is_featured: 0,
    is_in_stock: 1
  },

  // 8. Kẽm Buộc
  {
    id: 801,
    brand_id: null,
    category_id: 8,
    name: 'Dây Kẽm Buộc 1 Ly Dẻo Dai Xây Dựng',
    slug: 'day-kem-buoc-1-ly',
    sku: 'KEM-1LY',
    price: 0,
    unit: 'Kg / Cuộn',
    short_description: 'Dây kẽm đen 1 ly dẻo dai, dễ uốn siết liên kết các thanh sắt thép kết cấu sàn, móng, dầm bê tông cốt thép.',
    content: '<h3>Đặc điểm</h3><ul><li>Đường kính: 1.0 mm (1 ly)</li><li>Đặc tính: Dẻo mềm, chống đứt gãy</li></ul>',
    featured_image: 'https://vlxdhoangyen.com/wp-content/uploads/2025/07/day-thep-den.jpg',
    images: ['https://vlxdhoangyen.com/wp-content/uploads/2025/07/day-thep-den.jpg'],
    seo_title: 'Dây Kẽm Buộc 1 Ly Xây Dựng Giá Đại Lý Tại Quảng Trị',
    seo_description: 'Bán sỉ kẽm buộc 1 ly dẻo dai cho thợ sắt và nhà thầu tại Quảng Trị. Hàng luôn sẵn có số lượng lớn.',
    is_featured: 0,
    is_in_stock: 1
  },

  // 9. Đinh Vít
  {
    id: 901,
    brand_id: null,
    category_id: 9,
    name: 'Đinh Thép Đóng Cốp Pha & Vít Bắn Tôn Tự Khoan',
    slug: 'dinh-thep-dong-cop-pha',
    sku: 'DINH-VIT',
    price: 0,
    unit: 'Kg / Hộp',
    short_description: 'Đinh thép đóng gỗ 3 phân - 10 phân, đinh bê tông tôi cứng và vít bắn tôn mạ kẽm tự khoan chất lượng cao.',
    content: '<h3>Quy cách</h3><ul><li>Đinh đóng gỗ: 3cm - 10cm</li><li>Vít bắn tôn tự khoan đệm cao su EPDM</li></ul>',
    featured_image: 'https://vlxdhoangyen.com/wp-content/uploads/2025/07/dinh-vlxd-hoang-yen.png',
    images: ['https://vlxdhoangyen.com/wp-content/uploads/2025/07/dinh-vlxd-hoang-yen.png'],
    seo_title: 'Đinh Thép Xây Dựng, Vít Tôn Tại Quảng Trị | Hoàng Yến',
    seo_description: 'Cung cấp đinh thép ghép cốp pha, vít tôn chất lượng tại Đông Hà, Quảng Trị.',
    is_featured: 0,
    is_in_stock: 1
  },

  // 10. Bồn Cầu
  {
    id: 1001,
    brand_id: 8,
    category_id: 10,
    name: 'Bồn Cầu Khối CAESAR CD1356 Men NANO Hạn Chế Bám Bẩn',
    slug: 'bon-cau-khoi-caesar-cd1356',
    sku: 'CAESAR-CD1356',
    price: 0,
    unit: 'Bộ',
    short_description: 'Bồn cầu 1 khối Caesar CD1356 nắp êm, men sứ Nano siêu mịn hạn chế bám bẩn, xả xoáy hút đẩy mạnh mẽ tiết kiệm nước.',
    content: '<h3>Thông số kỹ thuật</h3><ul><li>Kích thước: 720 x 390 x 700 mm</li><li>Hệ thống xả: Xả nhấn 2 chế độ 3L/6L</li><li>Tâm thoát phân: 300 mm</li><li>Men sứ Nano hạn chế bám cặn</li></ul>',
    featured_image: 'https://vlxdhoangyen.com/wp-content/uploads/2025/08/boncau-caesar-1.jpg',
    images: ['https://vlxdhoangyen.com/wp-content/uploads/2025/08/boncau-caesar-1.jpg'],
    seo_title: 'Bồn Cầu 1 Khối Caesar CD1356 Tại Quảng Trị - Đại Lý VLXD Hoàng Yến',
    seo_description: 'Cung cấp bồn cầu liền khối Caesar CD1356 tại Đông Hà, Quảng Trị. Liên hệ nhận báo giá.',
    is_featured: 1,
    is_in_stock: 1
  },

  // 11. Lavabo
  {
    id: 1101,
    brand_id: 8,
    category_id: 11,
    name: 'Chậu Rửa Mặt Lavabo Đặt Bàn CAESAR LF5364 Cao Cấp',
    slug: 'lavabo-dat-ban-caesar-lf5364',
    sku: 'CAESAR-LF5364',
    price: 0,
    unit: 'Cái',
    short_description: 'Chậu lavabo đặt bàn đá hình chữ nhật viền mỏng thanh lịch, men sứ cao cấp hạn chế bám ố, dễ dàng lau chùi vệ sinh.',
    content: '<h3>Thông số kỹ thuật</h3><ul><li>Kích thước: 500 x 400 x 140 mm</li><li>Kiểu dáng: Đặt trên mặt bàn đá</li><li>Màu sắc: Trắng tinh khiết</li></ul>',
    featured_image: 'https://vlxdhoangyen.com/wp-content/uploads/2025/08/lavaboo-1.jpg',
    images: ['https://vlxdhoangyen.com/wp-content/uploads/2025/08/lavaboo-1.jpg'],
    seo_title: 'Lavabo Đặt Bàn Caesar LF5364 Tại Quảng Trị | VLXD Hoàng Yến',
    seo_description: 'Cung cấp chậu lavabo đặt bàn Caesar LF5364 men sáng bóng tại Đông Hà Quảng Trị.',
    is_featured: 1,
    is_in_stock: 1
  },

  // 12. Vòi Hoa Sen
  {
    id: 1201,
    brand_id: 8,
    category_id: 12,
    name: 'Vòi Sen Nóng Lạnh CAESAR S393C Tay Sen Massage',
    slug: 'voi-sen-nong-lanh-caesar-s393c',
    sku: 'CAESAR-S393C',
    price: 0,
    unit: 'Bộ',
    short_description: 'Vòi sen tắm nóng lạnh Caesar S393C chất liệu đồng thau mạ Crom - Niken sáng bóng, tay sen massage tia nước êm ái thư giãn.',
    content: '<h3>Thông số kỹ thuật</h3><ul><li>Chất liệu chính: Đồng thau</li><li>Lớp mạ: Crom - Niken giúp tăng độ bền sáng</li><li>Tay sen massage chịu áp lực nước tốt</li></ul>',
    featured_image: 'https://vlxdhoangyen.com/wp-content/uploads/2025/08/voi-hoa-sen.jpg',
    images: ['https://vlxdhoangyen.com/wp-content/uploads/2025/08/voi-hoa-sen.jpg'],
    seo_title: 'Vòi Sen Nóng Lạnh Caesar S393C Tại Quảng Trị | VLXD Hoàng Yến',
    seo_description: 'Cung cấp vòi sen tắm nóng lạnh Caesar S393C tại Quảng Trị. Đầy đủ phụ kiện lắp đặt.',
    is_featured: 1,
    is_in_stock: 1
  },

  // 13. Bồn Tắm
  {
    id: 1301,
    brand_id: 9,
    category_id: 13,
    name: 'Bồn Tắm Ngâm Mowoen MW003 – Matt White Đặt Sàn',
    slug: 'bon-tam-ngam-mowoen',
    sku: 'MOWOEN-MW003',
    price: 0,
    unit: 'Cái',
    short_description: 'Bồn tắm nằm ngâm đặt sàn Mowoen MW003 đúc liền khối Seamless, thiết kế công thái học thư giãn cơ thể, bề mặt mô phỏng đá tự nhiên sang trọng.',
    content: '<h3>Thông số chi tiết</h3><ul><li>Kích thước: 1700 x 750 x 600 mm</li><li>Chất liệu: Nhựa cường độ cao gia cường sợi thủy tinh Ashland + Gelcoat</li><li>Bảo hành: Theo quy định nhà sản xuất</li></ul>',
    featured_image: 'https://vlxdhoangyen.com/wp-content/uploads/2025/08/bon-tam-sewo-d-1013.jpg',
    images: ['https://vlxdhoangyen.com/wp-content/uploads/2025/08/bon-tam-sewo-d-1013.jpg'],
    seo_title: 'Bồn Tắm Ngâm Mowoen MW003 Đặt Sàn Tại Quảng Trị | VLXD Hoàng Yến',
    seo_description: 'Cung cấp bồn tắm ngâm Mowoen MW003 tại Đông Hà Quảng Trị. Hỗ trợ giao tận nơi.',
    is_featured: 1,
    is_in_stock: 1
  }
];

export const SEED_POST_CATEGORIES = [
  { id: 1, name: 'THÉP XÂY DỰNG', slug: 'thep-xay-dung', description: 'Cập nhật giá thép Hòa Phát, bảng quy cách trọng lượng và kỹ thuật thi công cốt thép' },
  { id: 2, name: 'GẠCH TUYNEL', slug: 'gach-tuynel', description: 'Kiến thức về các loại gạch đất sét nung, kích thước tiêu chuẩn và báo giá gạch tuynel' },
  { id: 3, name: 'XI MĂNG', slug: 'xi-mang', description: 'Cẩm nang chọn xi măng PCB30, PCB40 đổ móng, dầm, sàn và xây trát dẻo mịn' },
  { id: 4, name: 'THIẾT BỊ VỆ SINH', slug: 'thiet-bi-ve-sinh', description: 'Kinh nghiệm lựa chọn thiết bị phòng tắm, bồn cầu, lavabo và sen tắm phù hợp' }
];

export const SEED_POSTS = [
  {
    id: 1,
    title: 'Giá Thép Xây Dựng Hôm Nay Tại Quảng Trị – Bảng Giá Mới Nhất',
    slug: 'bang-gia-thep-hoa-phat-quang-tri',
    category_id: 1,
    category_name: 'THÉP XÂY DỰNG',
    category_slug: 'thep-xay-dung',
    published_at: '2026-09-15 08:30:00',
    summary: 'Cập nhật giá thép xây dựng Hòa Phát tại Quảng Trị, quy cách D6–D25 mác CB300/CB400, bảng trọng lượng barem và báo giá giao tận công trình.',
    content: `
<p class="article-lead">Giá thép xây dựng thường thay đổi theo thương hiệu, quy cách, thời điểm và số lượng đặt mua. Bài viết dưới đây tổng hợp bảng giá thép xây dựng Hòa Phát mới nhất và những thông tin kỹ thuật cần biết khi lựa chọn thép cho công trình tại Quảng Trị.</p>

<h2 id="1-bang-gia-thep-xay-dung-hoa-phat-hom-nay-tai-quang-tri">1. Bảng giá thép xây dựng Hòa Phát hôm nay tại Quảng Trị</h2>
<p>Siêu thị VLXD Hoàng Yến cung cấp thép xây dựng Hòa Phát tại tỉnh Quảng Trị. Dưới đây là bảng giá tham khảo cho thép thanh vằn và thép cuộn xuất kho:</p>

<div class="table-responsive">
  <table class="table-industrial">
    <thead>
      <tr>
        <th>STT</th>
        <th>Quy Cách / Chủng Loại</th>
        <th>Mác Thép</th>
        <th>Trọng Lượng (kg/cây 11.7m)</th>
        <th>Đơn Vị</th>
        <th>Đơn Giá Tham Khảo (VNĐ)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Thép cuộn trơn D6 (Phi 6)</td>
        <td>CT3 / SAE1008</td>
        <td>0.222 kg/m</td>
        <td>Kg</td>
        <td><strong>15.200 - 15.800</strong></td>
      </tr>
      <tr>
        <td>2</td>
        <td>Thép cuộn trơn D8 (Phi 8)</td>
        <td>CT3 / SAE1008</td>
        <td>0.395 kg/m</td>
        <td>Kg</td>
        <td><strong>15.200 - 15.800</strong></td>
      </tr>
      <tr>
        <td>3</td>
        <td>Thép cây vằn D10 (Phi 10)</td>
        <td>CB300V</td>
        <td>7.22 kg/cây</td>
        <td>Cây</td>
        <td><strong>110.000 - 118.000</strong></td>
      </tr>
      <tr>
        <td>4</td>
        <td>Thép cây vằn D12 (Phi 12)</td>
        <td>CB300V</td>
        <td>10.39 kg/cây</td>
        <td>Cây</td>
        <td><strong>158.000 - 169.000</strong></td>
      </tr>
      <tr>
        <td>5</td>
        <td>Thép cây vằn D14 (Phi 14)</td>
        <td>CB300V / CB400V</td>
        <td>14.16 kg/cây</td>
        <td>Cây</td>
        <td><strong>215.000 - 230.000</strong></td>
      </tr>
      <tr>
        <td>6</td>
        <td>Thép cây vằn D16 (Phi 16)</td>
        <td>CB300V / CB400V</td>
        <td>18.49 kg/cây</td>
        <td>Cây</td>
        <td><strong>280.000 - 298.000</strong></td>
      </tr>
      <tr>
        <td>7</td>
        <td>Thép cây vằn D18 (Phi 18)</td>
        <td>CB300V / CB400V</td>
        <td>23.40 kg/cây</td>
        <td>Cây</td>
        <td><strong>355.000 - 378.000</strong></td>
      </tr>
      <tr>
        <td>8</td>
        <td>Thép cây vằn D20 (Phi 20)</td>
        <td>CB300V / CB400V</td>
        <td>28.88 kg/cây</td>
        <td>Cây</td>
        <td><strong>438.000 - 465.000</strong></td>
      </tr>
    </tbody>
  </table>
</div>

<div class="article-note-box">
  <div class="note-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6m-4 3h2m4-8a7 7 0 1 0-10 0c.9 1 1.5 2 2 3h4c.5-1 1.1-2 2-3z"/></svg></div>
  <div class="note-content">
    <strong>Lưu ý về đơn giá:</strong> Giá thép biến động theo thị trường quặng sắt thế giới và chính sách giá nhà máy từng ngày. Đơn giá trên áp dụng giao hàng tại khu vực Đông Hà, Triệu Phong, Gio Linh, Cam Lộ, Vĩnh Linh, Quảng Trị. Với số lượng lớn cho công trình dự án, vui lòng gọi Hotline <strong>0946.575.579</strong> để nhận chiết khấu trực tiếp.
  </div>
</div>

<h2 id="2-cac-loai-thep-xay-dung-hoa-phat-pho-bien-va-ung-dung">2. Các loại thép xây dựng Hòa Phát phổ biến và ứng dụng</h2>

<h3 id="2-1-thep-cuon-phi-6-va-phi-8">2.1. Thép cuộn Phi 6 và Phi 8 (D6, D8)</h3>
<p>Thép cuộn tròn trơn Hòa Phát bề mặt nhẵn bóng, cơ tính dẻo dai, dễ uốn nắn. Thường dùng gia công móc đai cho cột, đai dầm, làm kết cấu lưới thép sàn phụ gia và đan sắt nền móng.</p>

<figure class="article-img-figure">
  <img src="https://vlxdhoangyen.com/wp-content/uploads/2025/07/thep-cuon-phi-8.jpg" alt="Thép cuộn phi 8 Hòa Phát tại kho Hoàng Yến" />
  <figcaption>Thép cuộn tròn trơn phi 8 Hòa Phát dẻo dai, dễ uốn bẻ đai cột dầm công trình</figcaption>
</figure>

<h3 id="2-2-thep-thanh-van-d10-den-d25">2.2. Thép thanh vằn D10 đến D25 (Thép cây)</h3>
<p>Thép thanh vằn có gân gờ nổi giúp tăng độ bám dính chắc chắn với khối bê tông. Đây là vật liệu cốt lõi chịu lực uốn và kéo cho toàn bộ khung sườn ngôi nhà từ đài móng, cổ cột, dầm sàn tầng đến mái.</p>

<h2 id="3-phan-biet-mac-thep-cb300v-va-cb400v">3. Phân biệt mác thép CB300V và CB400V</h2>
<p>Ký hiệu mác thép thể hiện giới hạn chảy và khả năng chịu lực nén kéo của thanh thép:</p>
<ul>
  <li><strong>Mác CB300V:</strong> Thường dùng cho nhà phố, biệt thự gia đình từ 1 đến 4 tầng. Thép có độ dẻo vừa phải, dễ uốn gập mỏ tại công trường.</li>
  <li><strong>Mác CB400V / CB500V:</strong> Thép cường độ cao chuyên dùng cho nhà cao tầng, công trình công nghiệp, mố cầu và dự án có khẩu độ dầm lớn.</li>
</ul>

<h2 id="4-kinh-nghiem-nhan-biet-thep-hoa-phat">4. Kinh nghiệm nhận biết thép Hòa Phát</h2>
<p>Để tránh mua phải thép giả, thép gầy âm barem làm ảnh hưởng an toàn kết cấu công trình, quý khách cần lưu ý các dấu hiệu:</p>
<ul>
  <li><strong>Logo dập nổi:</strong> Có biểu tượng 3 hình tam giác và chữ <strong>HOA PHAT</strong> dập nổi sắc nét trên từng mét thân thép.</li>
  <li><strong>Ký hiệu mác thép và đường kính:</strong> Ví dụ: <em>HOA PHAT - CB300 - D14</em> rõ ràng, không bị mờ nhòe.</li>
  <li><strong>Bề mặt thép:</strong> Màu xanh ánh kim đặc trưng, trơn láng, không sần sùi hay có vảy rỉ đỏ.</li>
  <li><strong>Tem mác đầu bó:</strong> Bó thép nguyên đai nguyên kiện luôn có mã QR code, ngày giờ sản xuất, lô cán và dấu kiểm định KCS nhà máy.</li>
</ul>

<h2 id="5-cau-hoi-thuong-gap-ve-thep-xay-dung">5. Câu hỏi thường gặp về thép xây dựng</h2>
<div class="faq-container">
  <div class="faq-item">
    <h3 class="faq-question">1 cây thép xây dựng dài bao nhiêu mét?</h3>
    <div class="faq-answer">
      <p>Tất cả thép cây thanh vằn Hòa Phát xuất xưởng tiêu chuẩn đều có chiều dài cố định là <strong>11.7 mét</strong>. Đối với các công trình đặc thù, nhà máy có thể cắt quy cách theo đơn đặt hàng trước.</p>
    </div>
  </div>
  <div class="faq-item">
    <h3 class="faq-question">1 tấn thép D10, D12, D14 gồm bao nhiêu cây?</h3>
    <div class="faq-answer">
      <p>Dựa trên barem tiêu chuẩn: 1 tấn thép D10 khoảng 138 cây; 1 tấn thép D12 khoảng 96 cây; 1 tấn thép D14 khoảng 70 cây; 1 tấn thép D16 khoảng 54 cây.</p>
    </div>
  </div>
  <div class="faq-item">
    <h3 class="faq-question">Hoàng Yến có hỗ trợ giao thép tận công trình tại Quảng Trị không?</h3>
    <div class="faq-answer">
      <p>Có. VLXD Hoàng Yến sở hữu đội xe tải thùng và xe cẩu chuyên dụng giao sắt thép tận công trình tại tất cả các huyện thị TP. Đông Hà, Triệu Phong, Cam Lộ, Gio Linh, Vĩnh Linh, Hải Lăng, Hướng Hóa.</p>
    </div>
  </div>
</div>

<div class="article-conclusion-box">
  <h3>Kết luận & Tư vấn</h3>
  <p>Trên đây là những thông tin cần biết về bảng giá thép xây dựng Hòa Phát và cách lựa chọn quy cách phù hợp cho công trình. Giá vật tư xây dựng có thể biến động theo từng đợt điều chỉnh của nhà máy. Khách hàng và nhà thầu tại Quảng Trị cần bảng dự toán sắt thép chính xác theo khối lượng bản vẽ có thể liên hệ ngay VLXD Hoàng Yến để được hỗ trợ bóc tách và nhận báo giá xuất xưởng tốt nhất.</p>
</div>
    `,
    featured_image: '/images/banner-vlxdhoangyen.png',
    seo_title: 'Giá Thép Xây Dựng Hôm Nay Tại Quảng Trị | VLXD Hoàng Yến',
    seo_description: 'Cập nhật giá thép xây dựng Hòa Phát tại Quảng Trị, quy cách D6–D25 mác CB300/CB400, bảng trọng lượng barem và báo giá giao tận công trình.'
  },
  {
    id: 2,
    title: 'Gạch Tuynel Là Gì? Phân Loại, Kích Thước Và Giá Gạch Tuynel Tại Quảng Trị',
    slug: 'gach-tuynel-la-gi-phan-loai-kich-thuoc-bao-gia',
    category_id: 2,
    category_name: 'GẠCH TUYNEL',
    category_slug: 'gach-tuynel',
    published_at: '2026-09-14 09:15:00',
    summary: 'Gạch tuynel là gì? Tìm hiểu chi tiết các loại gạch tuynel 2 lỗ, 4 lỗ, 6 lỗ, gạch đặc, bảng kích thước tiêu chuẩn, định mức xây và báo giá mới nhất tại Quảng Trị.',
    content: `
<p class="article-lead">Gạch tuynel là vật liệu xây thô quen thuộc và không thể thiếu trong kết cấu tường bao, tường ngăn của mọi ngôi nhà. Bài viết dưới đây tổng hợp chi tiết cấu tạo, phân loại, kích thước và bảng giá gạch tuynel mới nhất tại thị trường Quảng Trị.</p>

<h2 id="1-gach-tuynel-la-gi">1. Gạch tuynel là gì?</h2>
<p>Gạch Tuynel là loại gạch đất sét nung được sản xuất bằng công nghệ lò nung tuynel liên tục hiện đại. Đất sét sau khi được ngâm ủ kỹ lưỡng sẽ được đùn ép chân không, cắt theo kích thước chuẩn, sấy khô và nung ở nhiệt độ cao từ 900°C – 1050°C. Nhờ đó viên gạch có màu đỏ tươi tự nhiên, đanh chắc, chịu lực nén cao và khả năng chống thấm nước tốt hơn nhiều so với gạch thủ công truyền thống.</p>

<figure class="article-img-figure">
  <img src="https://vlxdhoangyen.com/wp-content/uploads/2025/07/gachtuynel-1.jpg" alt="Gạch tuynel đất sét nung chất lượng cao tại kho VLXD Hoàng Yến" />
  <figcaption>Gạch tuynel đất nung công nghệ lò tuynel hiện đại màu đỏ tươi, đanh chắc chịu lực cao</figcaption>
</figure>

<h2 id="2-cac-loai-gach-tuynel-pho-bien">2. Các loại gạch tuynel phổ biến hiện nay</h2>

<h3 id="2-1-gach-tuynel-6-lo">2.1. Gạch tuynel 6 lỗ</h3>
<p>Gạch tuynel 6 lỗ là dòng gạch được sử dụng rộng rãi nhất tại miền Trung và Quảng Trị. Với thiết kế 6 lỗ rỗng chạy dọc thân viên gạch, loại gạch này giúp giảm tải trọng cho móng nhà, tăng khả năng cách âm, cách nhiệt và tiết kiệm đáng kể vữa xây.</p>

<h3 id="2-2-gach-tuynel-2-lo-va-4-lo">2.2. Gạch tuynel 2 lỗ và 4 lỗ</h3>
<p>Gạch 2 lỗ (gạch thông tâm) và 4 lỗ thường dùng để xây các bức tường ngăn chia phòng ngủ, phòng khách hoặc các vị trí tường không phải chịu tải trọng quá nặng.</p>

<h3 id="2-3-gach-dac-tuynel">2.3. Gạch đặc tuynel (Gạch thẻ đặc)</h3>
<p>Gạch đặc không có lỗ rỗng, kết cấu đặc chắc hoàn toàn. Đây là dòng gạch chịu lực nén cao nhất và chống thấm nước vượt trội, chuyên dụng cho xây móng nhà, bể nước ngầm, hố ga, tường nhà vệ sinh và các hàng gạch giằng chân tường.</p>

<h2 id="3-kich-thuoc-va-thong-so-ky-thuat-gach-tuynel">3. Kích thước và thông số kỹ thuật gạch tuynel</h2>

<div class="table-responsive">
  <table class="table-industrial">
    <thead>
      <tr>
        <th>Loại Gạch</th>
        <th>Kích Thước Tiêu Chuẩn (Dài x Rộng x Cao mm)</th>
        <th>Trọng Lượng (kg/viên)</th>
        <th>Cường Độ Nén (Mác)</th>
        <th>Độ Hút Nước (%)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Gạch tuynel 6 lỗ</td>
        <td>195 x 135 x 90</td>
        <td>~ 2.4 - 2.6 kg</td>
        <td>Mác 75</td>
        <td>&lt; 12%</td>
      </tr>
      <tr>
        <td>Gạch tuynel 4 lỗ</td>
        <td>190 x 80 x 80</td>
        <td>~ 1.2 - 1.4 kg</td>
        <td>Mác 75</td>
        <td>&lt; 12%</td>
      </tr>
      <tr>
        <td>Gạch tuynel 2 lỗ</td>
        <td>200 x 95 x 55</td>
        <td>~ 1.3 - 1.5 kg</td>
        <td>Mác 50 - 75</td>
        <td>&lt; 14%</td>
      </tr>
      <tr>
        <td>Gạch đặc tuynel</td>
        <td>205 x 95 x 55</td>
        <td>~ 2.1 - 2.3 kg</td>
        <td>Mác 100 - 150</td>
        <td>&lt; 10%</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="4-cach-tinh-so-luong-gach-can-xay-cho-1m2-tuong">4. Cách tính số lượng gạch cần xây cho 1m² tường</h2>
<p>Để dự toán số lượng vật tư chính xác khi xây nhà tại Quảng Trị, bạn có thể áp dụng định mức chuẩn sau:</p>
<ul>
  <li><strong>Tường 10 (Tường đơn dày 10cm):</strong> Sử dụng khoảng <strong>45 – 50 viên</strong> gạch 6 lỗ hoặc <strong>65 – 70 viên</strong> gạch 2 lỗ cho 1m² tường (đã tính mạch vữa 1cm).</li>
  <li><strong>Tường 20 (Tường đôi dày 20cm):</strong> Sử dụng khoảng <strong>90 – 100 viên</strong> gạch 6 lỗ hoặc <strong>130 – 140 viên</strong> gạch 2 lỗ cho 1m² tường.</li>
</ul>

<h2 id="5-gia-gach-tuynel-hien-nay-tai-quang-tri">5. Giá gạch tuynel hiện nay tại Quảng Trị</h2>
<p>Giá gạch tuynel phụ thuộc vào nhà máy sản xuất, cự ly vận chuyển và quy cách đóng bó/pallet:</p>
<ul>
  <li><strong>Gạch tuynel 6 lỗ:</strong> Dao động từ <strong>2.200đ – 2.800đ / viên</strong> (giao tận công trình).</li>
  <li><strong>Gạch tuynel 2 lỗ:</strong> Dao động từ <strong>1.100đ – 1.400đ / viên</strong>.</li>
  <li><strong>Gạch đặc tuynel mác cao:</strong> Dao động từ <strong>1.500đ – 1.900đ / viên</strong>.</li>
</ul>

<h2 id="6-kinh-nghiem-chon-mua-gach-tuynel-chuan-chat-luong">6. Kinh nghiệm chọn mua gạch tuynel chuẩn chất lượng</h2>
<ul>
  <li><strong>Màu sắc:</strong> Chọn gạch có màu đỏ cam tươi hoặc đỏ sẫm đồng đều. Tránh mua gạch màu quá nhạt (gạch non lửa, dễ vỡ) hoặc màu đen xỉn (gạch già lửa quá mức bị cong vênh).</li>
  <li><strong>Âm thanh gõ:</strong> Dùng thanh kim loại gõ nhẹ vào viên gạch, gạch tuynel đạt chuẩn sẽ phát ra tiếng keng đanh chắc.</li>
  <li><strong>Thử độ hút nước:</strong> Nhỏ vài giọt nước lên bề mặt viên gạch. Gạch tốt hút nước vừa phải, không ngấm quá nhanh.</li>
</ul>

<h2 id="7-cau-hoi-thuong-gap-ve-gach-tuynel">7. Câu hỏi thường gặp về gạch tuynel</h2>
<div class="faq-container">
  <div class="faq-item">
    <h3 class="faq-question">Nên xây tường bao bằng gạch 6 lỗ hay gạch 2 lỗ?</h3>
    <div class="faq-answer">
      <p>Tại Quảng Trị với khí hậu mùa hè nắng nóng gay gắt và mùa đông gió lạnh, hầu hết các công trình ưu tiên xây tường bao bằng <strong>gạch 6 lỗ</strong> nhờ lớp đệm không khí dày giúp cách nhiệt chống nóng rất tốt.</p>
    </div>
  </div>
  <div class="faq-item">
    <h3 class="faq-question">1 xe tải chở được bao nhiêu viên gạch tuynel?</h3>
    <div class="faq-answer">
      <p>Tùy theo tải trọng xe: Xe tải 3.5 tấn chở khoảng 1.500 - 1.800 viên gạch 6 lỗ; xe tải 8 tấn chở khoảng 3.500 - 4.000 viên; xe ben/xe cẩu chuyên dụng chở từ 6.000 - 8.000 viên mỗi chuyến.</p>
    </div>
  </div>
</div>

<div class="article-conclusion-box">
  <h3>Kết luận & Mua hàng</h3>
  <p>Trên đây là toàn bộ thông tin về đặc điểm, phân loại và bảng giá gạch tuynel đất sét nung tại Quảng Trị. Khách hàng, chủ nhà và đội thầu cần đặt mua gạch số lượng lớn và trao đổi phương án giao hàng vui lòng liên hệ Siêu thị VLXD Hoàng Yến.</p>
</div>
    `,
    featured_image: 'https://vlxdhoangyen.com/wp-content/uploads/2025/07/gachtuynel-1.jpg',
    seo_title: 'Gạch Tuynel Là Gì? Phân Loại, Kích Thước & Báo Giá Tại Quảng Trị',
    seo_description: 'Tìm hiểu gạch tuynel 2 lỗ, 4 lỗ, 6 lỗ, gạch đặc, thông số kỹ thuật kích thước và bảng giá gạch xây dựng mới nhất tại Đông Hà Quảng Trị.'
  },
  {
    id: 3,
    title: 'Báo Giá Xi Măng Bỉm Sơn, Nghi Sơn, Sông Gianh PCB30 & PCB40 Tại Quảng Trị',
    slug: 'bao-gia-xi-mang-quang-tri',
    category_id: 3,
    category_name: 'XI MĂNG',
    category_slug: 'xi-mang',
    published_at: '2026-09-13 14:20:00',
    summary: 'Cập nhật bảng giá xi măng Bỉm Sơn Con Voi, Nghi Sơn, Sông Gianh PCB30, PCB40 mới nhất hôm nay tại Quảng Trị. Cách phân biệt xi măng xây tô và đổ bê tông.',
    content: `
<p class="article-lead">Xi măng là chất kết dính quan trọng nhất trong thi công công trình từ khâu đào móng, đổ dầm cột sàn cho đến xây tường hoàn thiện. Bài viết dưới đây cập nhật bảng báo giá các thương hiệu xi măng uy tín hàng đầu và kinh nghiệm lựa chọn mác xi măng chuẩn kỹ thuật tại Quảng Trị.</p>

<h2 id="1-bang-gia-xi-mang-xay-dung-moi-nhat-tai-quang-tri">1. Bảng giá xi măng xây dựng mới nhất tại Quảng Trị</h2>
<p>VLXD Hoàng Yến phân phối các thương hiệu xi măng xây dựng tại Quảng Trị. Dưới đây là giá tham khảo (đóng bao 50kg):</p>

<div class="table-responsive">
  <table class="table-industrial">
    <thead>
      <tr>
        <th>STT</th>
        <th>Tên Sản Phẩm Xi Măng</th>
        <th>Mác Xi Măng</th>
        <th>Quy Cách Đóng Bao</th>
        <th>Ứng Dụng Chính</th>
        <th>Đơn Giá Tham Khảo (VNĐ/Bao)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Xi Măng Bỉm Sơn Con Voi PCB40</td>
        <td>PCB40</td>
        <td>50 kg</td>
        <td>Đổ móng, dầm, cột, sàn chịu lực cao</td>
        <td><strong>88.000 - 94.000</strong></td>
      </tr>
      <tr>
        <td>2</td>
        <td>Xi Măng Nghi Sơn PCB40 Đa Dụng</td>
        <td>PCB40</td>
        <td>50 kg</td>
        <td>Bê tông cường độ sớm, kết cấu dân dụng</td>
        <td><strong>89.000 - 95.000</strong></td>
      </tr>
      <tr>
        <td>3</td>
        <td>Xi Măng Sông Gianh PCB40 Kháng Mặn</td>
        <td>PCB40</td>
        <td>50 kg</td>
        <td>Bền sunfat, chống ăn mòn ven biển</td>
        <td><strong>85.000 - 90.000</strong></td>
      </tr>
      <tr>
        <td>4</td>
        <td>Xi Măng Bỉm Sơn Xây Trát PCB30</td>
        <td>PCB30</td>
        <td>50 kg</td>
        <td>Xây tường gạch, trát tường trong ngoài</td>
        <td><strong>76.000 - 82.000</strong></td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="2-phan-biet-xi-mang-pcb30-va-pcb40">2. Phân biệt xi măng PCB30 và PCB40</h2>

<h3 id="2-1-xi-mang-pcb30-chuyen-dung-xay-trat">2.1. Xi măng PCB30 (Chuyên dụng xây trát)</h3>
<p>Xi măng PCB30 có cường độ nén sau 28 ngày đạt tối thiểu 30 N/mm². Dòng sản phẩm này có độ mịn cực cao, độ dẻo vữa vượt trội giúp thợ hồ dễ miết bay, tăng độ bám dính và giữ nước tốt, hạn chế tối đa nứt chân chim trên bề mặt tường tô.</p>

<h3 id="2-2-xi-mang-pcb40-chuyen-dung-be-tong-ket-cau">2.2. Xi măng PCB40 (Chuyên dụng bê tông kết cấu)</h3>
<p>Xi măng PCB40 có cường độ nén sau 28 ngày đạt tối thiểu 40 N/mm². Đây là lựa chọn bắt buộc cho các hạng mục kết cấu chịu lực như móng băng, móng cọc, dầm ngang, sàn bê tông cốt thép, bể chứa nước ngầm.</p>

<figure class="article-img-figure">
  <img src="https://vlxdhoangyen.com/wp-content/uploads/2025/07/bimsonpcb40.png" alt="Xi măng Bỉm Sơn PCB40 tại Siêu thị VLXD Hoàng Yến" />
  <figcaption>Xi măng Bỉm Sơn Con Voi PCB40 chuyên dụng đổ móng dầm sàn</figcaption>
</figure>

<h2 id="3-ty-le-cap-phoi-vua-va-be-tong-chuan-ky-thuat">3. Tỷ lệ cấp phối vữa và bê tông chuẩn kỹ thuật</h2>
<p>Để đảm bảo chất lượng bê tông, thợ thi công nên tuân thủ tỷ lệ cấp phối theo khuyến cáo của nhà sản xuất:</p>
<ul>
  <li><strong>Bê tông mác 200 (1 bao xi măng 50kg PCB40):</strong> Trộn cùng khoảng 4 thùng cát vàng (thùng 18L) + 6-7 thùng đá 1x2 + nước vừa đủ.</li>
  <li><strong>Bê tông mác 250 (1 bao xi măng 50kg PCB40):</strong> Trộn cùng khoảng 3.5 thùng cát vàng + 5-6 thùng đá 1x2 + nước vừa đủ.</li>
  <li><strong>Vữa xây tô mác 75 (1 bao xi măng 50kg PCB30):</strong> Trộn cùng khoảng 8 thùng cát mịn sạch.</li>
</ul>

<h2 id="4-cau-hoi-thuong-gap-khi-mua-xi-mang">4. Câu hỏi thường gặp khi mua xi măng</h2>
<div class="faq-container">
  <div class="faq-item">
    <h3 class="faq-question">Xi măng để được bao lâu trong kho?</h3>
    <div class="faq-answer">
      <p>Xi măng bảo quản nơi khô ráo, kê trên pallet cách đất 20cm có hạn sử dụng tốt nhất trong vòng <strong>60 ngày (2 tháng)</strong> kể từ ngày sản xuất in trên vỏ bao.</p>
    </div>
  </div>
  <div class="faq-item">
    <h3 class="faq-question">1 tấn xi măng gồm bao nhiêu bao?</h3>
    <div class="faq-answer">
      <p>1 bao xi măng tiêu chuẩn tại Việt Nam đóng 50kg. Như vậy 1 tấn xi măng tương đương với đúng <strong>20 bao</strong>.</p>
    </div>
  </div>
</div>

<div class="article-conclusion-box">
  <h3>Kết luận & Đặt hàng</h3>
  <p>Hy vọng qua bài viết trên, quý khách hàng và nhà thầu đã nắm rõ bảng giá tham khảo cũng như cách chọn loại xi măng phù hợp cho từng giai đoạn xây nhà. Siêu thị VLXD Hoàng Yến hỗ trợ tư vấn sản phẩm, xuất hóa đơn chứng từ hợp lệ và có phương tiện giao hàng đến công trình.</p>
</div>
    `,
    featured_image: 'https://vlxdhoangyen.com/wp-content/uploads/2025/07/bimsonpcb40.png',
    seo_title: 'Báo Giá Xi Măng Bỉm Sơn, Nghi Sơn Tại Quảng Trị | VLXD Hoàng Yến',
    seo_description: 'Bảng giá xi măng Bỉm Sơn PCB40, Nghi Sơn, Sông Gianh, xi măng xây trát PCB30 tại Đông Hà Quảng Trị. Giao hàng tận nơi.'
  }
];

