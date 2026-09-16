export interface BrandSEOData {
  slug: string;
  isTier1: boolean;
  tierBadge: string;
  tagline: string;
  overview: string;
  historyAndOrigin: string;
  standards: string[];
  keyStrengths: string[];
  agencyRole: string;
  faqs: Array<{ question: string; answer: string }>;
  metaTitle: string;
  metaDescription: string;
}

export const BRAND_SEO_DATA: Record<string, BrandSEOData> = {
  'vicem-ha-tien': {
    slug: 'vicem-ha-tien',
    isTier1: true,
    tierBadge: 'Thương Hiệu Xi Măng Phổ Biến',
    tagline: 'Xi Măng Vicem Hà Tiên - Biểu Tượng Kỳ Lân',
    overview: 'Xi măng Vicem Hà Tiên là một trong những thương hiệu xi măng lâu năm tại Việt Nam, thuộc Tổng Công ty Xi măng Việt Nam (VICEM). Biểu tượng con Kỳ Lân của Hà Tiên quen thuộc với nhiều công trình công nghiệp và dân dụng.',
    historyAndOrigin: 'Xi măng Hà Tiên sở hữu hệ thống nhà máy và trạm nghiền hiện đại, quy trình sản xuất đáp ứng các tiêu chuẩn kỹ thuật xây dựng hiện hành.',
    standards: [
      'TCVN 6260:2009 (Xi măng Poóc lăng hỗn hợp PCB40, PCB50)',
      'TCVN 2682:2009 (Xi măng Poóc lăng PC40, PC50)',
      'Tiêu chuẩn quốc tế ASTM C1157, ASTM C150 (Hoa Kỳ)',
      'Hệ thống quản lý chất lượng ISO 9001:2015 & Môi trường ISO 14001:2015'
    ],
    keyStrengths: [
      'Độ mịn tiêu chuẩn, khả năng giữ nước tốt giúp vữa dẻo, dễ thao tác trong công tác xây tô',
      'Đặc tính phát triển cường độ ổn định theo tiêu chuẩn nhà sản xuất',
      'Đáp ứng yêu cầu thi công cho nhiều hạng mục kết cấu bê tông và vữa xây dựng',
      'Bao bì đa lớp hỗ trợ bảo quản xi măng trong điều kiện kho bãi tiêu chuẩn'
    ],
    agencyRole: 'Siêu Thị VLXD Hoàng Yến có các sản phẩm xi măng Vicem Hà Tiên trong danh mục kinh doanh tại Quảng Trị. Khách hàng có thể liên hệ để kiểm tra loại xi măng, số lượng và nhận báo giá tại thời điểm mua.',
    faqs: [
      {
        question: 'Mua xi măng Vicem Hà Tiên ở đâu tại Quảng Trị?',
        answer: 'Khách hàng tại Quảng Trị có thể tham khảo và mua xi măng Vicem Hà Tiên tại Siêu Thị VLXD Hoàng Yến, 299 Lê Duẩn, Phường Đông Hà. Vui lòng liên hệ Hotline/Zalo 0946.575.579 để kiểm tra tình trạng hàng và nhận báo giá.'
      },
      {
        question: 'Xi măng Vicem Hà Tiên PCB40 phù hợp với những hạng mục thi công nào?',
        answer: 'Hà Tiên PCB40 thường được sử dụng cho đổ bê tông móng, cột, dầm sàn cũng như công tác xây tô tường cho công trình dân dụng và nhà xưởng.'
      },
      {
        question: 'Thời gian giao nhận xi măng Vicem Hà Tiên như thế nào?',
        answer: 'Thời gian và phương án giao nhận được trao đổi cụ thể tùy theo địa điểm công trình, khối lượng đơn hàng và điều kiện bốc xếp.'
      }
    ],
    metaTitle: 'Xi Măng Vicem Hà Tiên Tại Quảng Trị | Báo Giá - VLXD Hoàng Yến',
    metaDescription: 'Tham khảo xi măng Vicem Hà Tiên PCB40 tại Quảng Trị. Cung ứng cho công trình dân dụng và dự án. Liên hệ VLXD Hoàng Yến để nhận báo giá hiện hành.'
  },

  'hoa-phat': {
    slug: 'hoa-phat',
    isTier1: true,
    tierBadge: 'Thương Hiệu Thép Phổ Biến',
    tagline: 'Thép Xây Dựng Hòa Phát - Hòa Hợp Cùng Phát Triển',
    overview: 'Thép Hòa Phát là thương hiệu thép xây dựng thuộc Tập đoàn Hòa Phát. Sản phẩm được sản xuất từ quặng sắt qua quy trình lò cao khép kín, được ứng dụng rộng rãi trong các công trình dân dụng và hạ tầng trên cả nước.',
    historyAndOrigin: 'Hòa Phát sở hữu các khu liên hợp luyện kim quy mô tại Hải Dương và Dung Quất (Quảng Ngãi), làm chủ chuỗi sản xuất từ quặng sắt đến thép thành phẩm đạt các tiêu chuẩn kỹ thuật trong nước và quốc tế.',
    standards: [
      'TCVN 1651-2:2018 (Tiêu chuẩn Việt Nam cho thép cốt bê tông)',
      'ASTM A615/A615M (Tiêu chuẩn Hoa Kỳ)',
      'JIS G3112:2020 (Tiêu chuẩn Công nghiệp Nhật Bản)',
      'BS 4449:2005 (Tiêu chuẩn Anh Quốc)'
    ],
    keyStrengths: [
      'Quy trình luyện kim lò cao giúp kiểm soát hàm lượng tạp chất, thép dẻo dai và cơ tính ổn định',
      'Chuẩn barem nhà sản xuất, đường kính đồng đều, nhận diện bằng logo 3 hình tam giác dập nổi',
      'Đa dạng mác thép từ CB240-T, CB300-V, CB400-V đến CB500-V phù hợp từng hạng mục kết cấu',
      'Bề mặt thép đồng đều, có tem mác truy xuất nguồn gốc trên từng bó thép xuất xưởng'
    ],
    agencyRole: 'Siêu Thị VLXD Hoàng Yến cung cấp các dòng sản phẩm thép xây dựng thương hiệu Hòa Phát tại Đông Hà và các khu vực lân cận tại Quảng Trị. Hàng hóa có đầy đủ chứng từ xuất kho theo từng đơn đặt hàng.',
    faqs: [
      {
        question: 'Dấu hiệu nhận biết thép xây dựng Hòa Phát là gì?',
        answer: 'Thép thanh vằn Hòa Phát có logo 3 hình tam giác dập nổi kèm chữ HOA PHAT, đường kính và mác thép sắc nét trên thân cây. Thép cuộn có dập nổi chữ HOA PHAT và tem nhãn mã vạch truy xuất nguồn gốc.'
      },
      {
        question: 'VLXD Hoàng Yến có hỗ trợ cắt bẻ thép theo yêu cầu không?',
        answer: 'Khách hàng có nhu cầu gia công uốn, cắt đai thép theo bản vẽ có thể trao đổi trực tiếp khi đặt hàng để kiểm tra khả năng hỗ trợ cho đơn hàng cụ thể.'
      },
      {
        question: 'Báo giá thép Hòa Phát tại Hoàng Yến như thế nào?',
        answer: 'Đơn giá thép xây dựng thay đổi theo biến động thị trường và khối lượng đặt mua. Khách hàng vui lòng liên hệ Hotline/Zalo 0946.575.579 để nhận báo giá hiện thời.'
      }
    ],
    metaTitle: 'Thép Hòa Phát Tại Quảng Trị | Báo Giá Thép Xây Dựng Hoàng Yến',
    metaDescription: 'Tham khảo thép xây dựng thương hiệu Hòa Phát tại Quảng Trị. Thép cuộn D6, D8, thép cây D10 - D25 mác CB300, CB400. Liên hệ VLXD Hoàng Yến để nhận báo giá.'
  },

  'song-gianh': {
    slug: 'song-gianh',
    isTier1: true,
    tierBadge: 'Thương Hiệu Xi Măng Phổ Biến',
    tagline: 'Xi Măng Sông Gianh - Phục Vụ Công Trình Miền Trung',
    overview: 'Xi măng Sông Gianh là thương hiệu xi măng thuộc Công ty Cổ phần Xi măng Sông Gianh, được sản xuất trên dây chuyền công nghệ hiện đại của hãng F.L.Smidth (Đan Mạch), phục vụ nhu cầu xây dựng tại khu vực miền Trung.',
    historyAndOrigin: 'Tận dụng nguồn đá vôi chất lượng tại miền Trung, Xi măng Sông Gianh cung cấp các dòng xi măng Poóc lăng hỗn hợp PCB30, PCB40 và xi măng bền sunfat cho các công trình dân dụng và hạ tầng.',
    standards: [
      'TCVN 6260:2009 (Xi măng Poóc lăng hỗn hợp)',
      'TCVN 7711:2013 (Xi măng Poóc lăng hỗn hợp bền sunfat)',
      'Chứng chỉ quản lý chất lượng quốc tế ISO 9001:2015 & ISO 14001:2015'
    ],
    keyStrengths: [
      'Có các dòng xi măng phù hợp cho điều kiện khí hậu miền Trung',
      'Độ mịn và độ dẻo vữa hợp lý, hỗ trợ thao tác xây trát thuận tiện',
      'Cường độ nén đáp ứng yêu cầu kỹ thuật của tiêu chuẩn TCVN',
      'Quy cách đóng bao 50kg thuận tiện cho vận chuyển và bốc xếp'
    ],
    agencyRole: 'Siêu Thị VLXD Hoàng Yến cung cấp các sản phẩm xi măng Sông Gianh tại Quảng Trị, đáp ứng nhu cầu xây tô và đổ bê tông cho các công trình xây dựng.',
    faqs: [
      {
        question: 'Xi măng Sông Gianh thường dùng cho hạng mục nào?',
        answer: 'Xi măng Sông Gianh PCB40 thường dùng cho công tác đổ bê tông móng, dầm, cột, sàn và xây trát tường hoàn thiện.'
      },
      {
        question: 'Hoàng Yến cung cấp những loại xi măng Sông Gianh nào?',
        answer: 'Chúng tôi cung cấp xi măng Sông Gianh PCB40 đóng bao 50kg. Khách hàng vui lòng liên hệ trước để kiểm tra tình trạng hàng tại kho.'
      }
    ],
    metaTitle: 'Xi Măng Sông Gianh Tại Quảng Trị | Báo Giá - VLXD Hoàng Yến',
    metaDescription: 'Cung cấp xi măng Sông Gianh PCB40 tại Quảng Trị phục vụ xây tô và bê tông kết cấu. Liên hệ VLXD Hoàng Yến 0946.575.579 để nhận báo giá hiện tại.'
  },

  'tisco': {
    slug: 'tisco',
    isTier1: true,
    tierBadge: 'Thương Hiệu Thép Phổ Biến',
    tagline: 'Thép TISCO - Gang Thép Thái Nguyên',
    overview: 'Thép TISCO thuộc Công ty Cổ phần Gang thép Thái Nguyên, là một trong những đơn vị sản xuất thép xây dựng lâu đời tại Việt Nam với sản phẩm thép thanh vằn và thép cuộn tròn trơn.',
    historyAndOrigin: 'TISCO sở hữu quy trình luyện cán thép quy mô, cung cấp thép xây dựng cho nhiều công trình dân dụng và hạ tầng kỹ thuật trên cả nước.',
    standards: [
      'TCVN 1651-1:2018 (Thép tròn trơn)',
      'TCVN 1651-2:2018 (Thép thanh vằn)',
      'ASTM A615/A615M (Tiêu chuẩn Hoa Kỳ)',
      'JIS G 3112 (Tiêu chuẩn Nhật Bản)'
    ],
    keyStrengths: [
      'Cơ tính ổn định, độ bền kéo đáp ứng các tiêu chuẩn cốt thép bê tông hiện hành',
      'Độ dẻo phù hợp cho quá trình gia công uốn đai và liên kết kết cấu',
      'Barem trọng lượng theo quy định của tiêu chuẩn sản xuất',
      'Dấu hiệu nhận biết dập nổi chữ TISCO trên thân cây thép'
    ],
    agencyRole: 'Siêu Thị VLXD Hoàng Yến có cung cấp các sản phẩm thép TISCO tại địa chỉ 299 Lê Duẩn, TP. Đông Hà, phục vụ nhu cầu thi công xây dựng tại địa phương.',
    faqs: [
      {
        question: 'Dấu hiệu nhận biết thép TISCO là gì?',
        answer: 'Thân thép cây TISCO có chữ dập nổi TISCO kèm ký hiệu đường kính và mác thép. Bó thép có tem mác xuất xưởng từ nhà sản xuất.'
      },
      {
        question: 'Phương thức giao nhận thép TISCO của Hoàng Yến như thế nào?',
        answer: 'Phương thức vận chuyển và địa điểm giao nhận được trao đổi cụ thể theo thỏa thuận trong từng đơn hàng.'
      }
    ],
    metaTitle: 'Thép TISCO Thái Nguyên Tại Quảng Trị | VLXD Hoàng Yến',
    metaDescription: 'Tham khảo thép xây dựng thương hiệu TISCO tại Quảng Trị. Thép cuộn, thép cây gân chuẩn barem. Liên hệ VLXD Hoàng Yến để kiểm tra hàng và nhận báo giá.'
  },

  'ton-dong-a': {
    slug: 'ton-dong-a',
    isTier1: true,
    tierBadge: 'Thương Hiệu Tôn Lợp Phổ Biến',
    tagline: 'Tôn Đông Á - Cùng Xây Cuộc Sống Xanh',
    overview: 'Công ty Cổ phần Tôn Đông Á là đơn vị sản xuất các dòng sản phẩm tôn mạ kẽm, tôn lạnh mạ hợp kim nhôm kẽm và tôn mạ màu phục vụ cho mái lợp công trình dân dụng và công nghiệp.',
    historyAndOrigin: 'Tôn Đông Á vận hành hệ thống nhà máy với dây chuyền công nghệ hiện đại, cung ứng các dòng sản phẩm tôn mạ chất lượng cho thị trường trong nước và xuất khẩu.',
    standards: [
      'JIS G 3321 / JIS G 3322 (Tiêu chuẩn Công nghiệp Nhật Bản)',
      'ASTM A792 / ASTM A755 (Tiêu chuẩn Hoa Kỳ)',
      'AS 1397 / AS 2728 (Tiêu chuẩn Úc)',
      'BS EN 10346 (Tiêu chuẩn châu Âu)'
    ],
    keyStrengths: [
      'Lớp mạ hợp kim nhôm kẽm hỗ trợ khả năng chống ăn mòn trong điều kiện thời tiết ngoài trời',
      'Lớp sơn phủ màu đa dạng, hỗ trợ thẩm mỹ cho mái lợp',
      'Khả năng phản xạ nhiệt giúp giảm hấp thụ nhiệt từ mái nhà',
      'Phù hợp cán nhiều dạng sóng: sóng vuông công nghiệp, sóng tròn, sóng ngói'
    ],
    agencyRole: 'Siêu Thị VLXD Hoàng Yến cung cấp các sản phẩm tôn Đông Á tại Quảng Trị, nhận cán sóng theo kích thước chiều dài yêu cầu của công trình.',
    faqs: [
      {
        question: 'Tôn Đông Á có những màu sắc nào phổ biến?',
        answer: 'Tôn Đông Á có nhiều màu sắc thông dụng như xanh ngọc, đỏ đậm, xanh dương, xám lông chuột. Khách hàng vui lòng liên hệ để kiểm tra màu sắc và độ dày thực tế tại kho.'
      },
      {
        question: 'Hoàng Yến có nhận cán tôn theo chiều dài mái không?',
        answer: 'Có. Khách hàng có thể cung cấp kích thước chiều dài mái để được hỗ trợ cán sóng tôn theo đúng quy cách công trình.'
      }
    ],
    metaTitle: 'Tôn Đông Á Tại Quảng Trị | Báo Giá Tôn Lợp Mái - VLXD Hoàng Yến',
    metaDescription: 'Cung cấp tôn lạnh, tôn màu thương hiệu Đông Á tại Quảng Trị. Nhận cán sóng vuông, sóng ngói, tôn xốp theo kích thước mái. Liên hệ VLXD Hoàng Yến.'
  },

  'cong-thanh': {
    slug: 'cong-thanh',
    isTier1: true,
    tierBadge: 'Thương Hiệu Xi Măng Phổ Biến',
    tagline: 'Xi Măng Công Thanh - Chất Lượng Vững Bền',
    overview: 'Xi măng Công Thanh là thương hiệu xi măng thuộc Tập đoàn Công Thanh, cung ứng các dòng sản phẩm xi măng Pooclăng hỗn hợp PCB30, PCB40 phục vụ các hạng mục xây thô và kết cấu bê tông.',
    historyAndOrigin: 'Tập đoàn Công Thanh đầu tư hệ thống sản xuất clinker và trạm nghiền hiện đại, đáp ứng các tiêu chuẩn kỹ thuật xây dựng tại Việt Nam.',
    standards: [
      'TCVN 6260:2009 (Xi măng Poóc lăng hỗn hợp)',
      'TCVN 7024:2002 (Clinker xi măng Poóc lăng thương phẩm)',
      'Hệ thống quản lý ISO 9001:2015'
    ],
    keyStrengths: [
      'Cường độ nén đáp ứng yêu cầu kỹ thuật của tiêu chuẩn TCVN 6260:2009',
      'Độ dẻo phù hợp, hỗ trợ công tác xây tô và hoàn thiện mặt tường',
      'Thời gian đông kết tiêu chuẩn, thuận tiện cho việc thi công',
      'Mức giá phù hợp cho nhiều loại hình công trình dân dụng'
    ],
    agencyRole: 'Siêu Thị VLXD Hoàng Yến cung cấp các sản phẩm xi măng Công Thanh tại Quảng Trị, hỗ trợ vận chuyển theo thỏa thuận đơn hàng.',
    faqs: [
      {
        question: 'Xi măng Công Thanh PCB40 dùng cho các hạng mục nào?',
        answer: 'Xi măng Công Thanh PCB40 thường dùng cho đổ bê tông móng, dầm, cột, sàn và xây tô tường công trình dân dụng.'
      },
      {
        question: 'Giá xi măng Công Thanh tại Hoàng Yến bao nhiêu?',
        answer: 'Giá xi măng có thể thay đổi theo thời điểm và số lượng đặt hàng. Khách hàng vui lòng liên hệ Hotline/Zalo 0946.575.579 để nhận thông tin giá cụ thể.'
      }
    ],
    metaTitle: 'Xi Măng Công Thanh Tại Quảng Trị | VLXD Hoàng Yến',
    metaDescription: 'Cung cấp xi măng Công Thanh PCB40 bao 50kg tại Quảng Trị. Liên hệ VLXD Hoàng Yến để kiểm tra tình trạng hàng và nhận báo giá hiện tại.'
  },

  // Additional Brands
  'bim-son': {
    slug: 'bim-son',
    isTier1: false,
    tierBadge: 'Thương Hiệu Xi Măng Cung Ứng',
    tagline: 'Xi Măng Bỉm Sơn - Biểu Tượng Con Voi',
    overview: 'Công ty Cổ phần Xi măng Bỉm Sơn thuộc Tổng Công ty Xi măng Việt Nam (VICEM) với thương hiệu Xi măng Con Voi quen thuộc tại thị trường xây dựng Việt Nam.',
    historyAndOrigin: 'Nhà máy Xi măng Bỉm Sơn sản xuất các dòng xi măng Poóc lăng hỗn hợp và Poóc lăng thông thường đạt tiêu chuẩn quốc gia.',
    standards: [
      'TCVN 6260:2009 (Xi măng Poóc lăng hỗn hợp PCB40)',
      'TCVN 2682:2009 (Xi măng Poóc lăng PC40, PC50)',
      'ISO 9001:2015 & ISO 14001:2015'
    ],
    keyStrengths: [
      'Cường độ nén 28 ngày đạt tiêu chuẩn TCVN, phù hợp cho kết cấu bê tông chịu lực',
      'Độ dẻo tốt, dễ thi công xây tô',
      'Quy cách bao bì đóng gói 50kg tiêu chuẩn'
    ],
    agencyRole: 'Siêu Thị VLXD Hoàng Yến cung cấp các sản phẩm xi măng Bỉm Sơn Con Voi tại Quảng Trị phục vụ thi công công trình.',
    faqs: [
      {
        question: 'Xi măng Bỉm Sơn PCB40 có những ứng dụng gì?',
        answer: 'Bỉm Sơn PCB40 thường được sử dụng cho đổ bê tông móng, cột, dầm sàn và các hạng mục xây dựng kiên cố.'
      }
    ],
    metaTitle: 'Xi Măng Bỉm Sơn Con Voi Tại Quảng Trị | VLXD Hoàng Yến',
    metaDescription: 'Tham khảo xi măng Bỉm Sơn PCB40 Con Voi tại Quảng Trị. Liên hệ VLXD Hoàng Yến 0946.575.579 để kiểm tra tình trạng hàng và nhận báo giá.'
  },

  'nghi-son': {
    slug: 'nghi-son',
    isTier1: false,
    tierBadge: 'Thương Hiệu Xi Măng Cung Ứng',
    tagline: 'Xi Măng Nghi Sơn - Liên Doanh Công Nghệ Nhật Bản',
    overview: 'Công ty Xi măng Nghi Sơn là liên doanh giữa Tổng Công ty Xi măng Việt Nam (VICEM) với các tập đoàn xi măng Nhật Bản, chuyên cung ứng các dòng xi măng chất lượng cao.',
    historyAndOrigin: 'Nhà máy ứng dụng dây chuyền công nghệ hiện đại, sản xuất các sản phẩm xi măng đạt tiêu chuẩn TCVN và tiêu chuẩn quốc tế.',
    standards: [
      'TCVN 6260:2009',
      'Tiêu chuẩn Nhật Bản JIS R 5210',
      'Hệ thống quản lý ISO 9001, ISO 14001'
    ],
    keyStrengths: [
      'Cường độ nén ổn định theo tiêu chuẩn kiểm định',
      'Độ mịn cao hỗ trợ bề mặt vữa phẳng mịn',
      'Quy trình đóng gói và bảo quản tiêu chuẩn'
    ],
    agencyRole: 'Siêu Thị VLXD Hoàng Yến cung cấp xi măng Nghi Sơn tại Đông Hà, Quảng Trị với đầy đủ chứng từ xuất kho theo từng đơn hàng.',
    faqs: [
      {
        question: 'Xi măng Nghi Sơn dùng cho hạng mục nào?',
        answer: 'Xi măng Nghi Sơn PCB40 thích hợp cho công tác đổ bê tông kết cấu cũng như xây trát cho công trình dân dụng.'
      }
    ],
    metaTitle: 'Xi Măng Nghi Sơn Tại Quảng Trị | VLXD Hoàng Yến',
    metaDescription: 'Cung cấp xi măng Nghi Sơn PCB40 tại Quảng Trị. Liên hệ VLXD Hoàng Yến 0946.575.579 để nhận thông tin giá và tồn kho.'
  },

  'hoa-sen': {
    slug: 'hoa-sen',
    isTier1: false,
    tierBadge: 'Thương Hiệu Tôn Lợp Cung Ứng',
    tagline: 'Tôn Hoa Sen - Tập Đoàn Hoa Sen',
    overview: 'Tập đoàn Hoa Sen là doanh nghiệp sản xuất và kinh doanh các sản phẩm tôn mạ kẽm, tôn lạnh và tôn mạ màu tại Việt Nam.',
    historyAndOrigin: 'Hoa Sen vận hành các nhà máy mạ tôn trên toàn quốc, cung cấp các sản phẩm tôn lợp đa dạng chủng loại và màu sắc.',
    standards: [
      'JIS G 3302, JIS G 3321 (Nhật Bản)',
      'ASTM A653, ASTM A792 (Hoa Kỳ)',
      'AS 1397 (Úc)'
    ],
    keyStrengths: [
      'Lớp mạ nhôm kẽm hỗ trợ bảo vệ bề mặt trước tác động thời tiết',
      'Màu sắc đa dạng, phù hợp cho nhiều kiểu kiến trúc mái lợp',
      'Dễ gia công cán các biên dạng sóng công nghiệp và sóng ngói'
    ],
    agencyRole: 'Siêu Thị VLXD Hoàng Yến cung ứng các sản phẩm Tôn Hoa Sen tại Quảng Trị, nhận cán sóng theo quy cách công trình.',
    faqs: [
      {
        question: 'Hoàng Yến có cung cấp tôn lạnh Hoa Sen không?',
        answer: 'Có. Chúng tôi có các sản phẩm tôn lạnh và tôn màu Hoa Sen. Khách hàng vui lòng liên hệ để kiểm tra độ dày và màu sắc có sẵn.'
      }
    ],
    metaTitle: 'Tôn Hoa Sen Tại Quảng Trị | Báo Giá Tôn Lợp - VLXD Hoàng Yến',
    metaDescription: 'Cung cấp tôn lạnh, tôn màu thương hiệu Hoa Sen tại Quảng Trị. Cán sóng theo yêu cầu công trình. Liên hệ VLXD Hoàng Yến để nhận báo giá.'
  },

  'caesar': {
    slug: 'caesar',
    isTier1: false,
    tierBadge: 'Thương Hiệu Thiết Bị Vệ Sinh Cung Ứng',
    tagline: 'Thiết Bị Vệ Sinh CAESAR - Men Sứ NANO',
    overview: 'CAESAR là thương hiệu thiết bị vệ sinh có mặt tại thị trường Việt Nam nhiều năm qua, cung cấp các dòng sản phẩm bồn cầu, chậu rửa lavabo, sen vòi và phụ kiện phòng tắm.',
    historyAndOrigin: 'Sản phẩm Caesar được sản xuất theo quy trình công nghệ hiện đại, đáp ứng các tiêu chuẩn chất lượng thiết bị vệ sinh thông dụng.',
    standards: [
      'Tiêu chuẩn CNS',
      'Tiêu chuẩn ISO 9001:2015',
      'Tiêu chuẩn men sứ kháng khuẩn'
    ],
    keyStrengths: [
      'Men sứ bề mặt hỗ trợ hạn chế bám bẩn và dễ lau chùi',
      'Hệ thống xả nước đa dạng, hỗ trợ tiết kiệm nước sinh hoạt',
      'Mẫu mã phong phú, phù hợp từ nhà ở dân dụng đến các công trình dịch vụ'
    ],
    agencyRole: 'Siêu Thị VLXD Hoàng Yến cung cấp các sản phẩm thiết bị vệ sinh thương hiệu Caesar tại Đông Hà, Quảng Trị.',
    faqs: [
      {
        question: 'Thiết bị vệ sinh Caesar bảo hành như thế nào?',
        answer: 'Chính sách bảo hành sản phẩm Caesar được áp dụng theo quy định hiện hành của nhà sản xuất. Khách hàng vui lòng giữ hóa đơn chứng từ mua hàng để được hỗ trợ khi cần kiểm tra bảo hành.'
      }
    ],
    metaTitle: 'Thiết Bị Vệ Sinh Caesar Tại Quảng Trị | VLXD Hoàng Yến',
    metaDescription: 'Cung cấp bồn cầu, lavabo, sen vòi thương hiệu Caesar tại Đông Hà, Quảng Trị. Liên hệ VLXD Hoàng Yến để kiểm tra mẫu mã và nhận báo giá.'
  },

  'mowoen': {
    slug: 'mowoen',
    isTier1: false,
    tierBadge: 'Thương Hiệu Thiết Bị Phòng Tắm Cung Ứng',
    tagline: 'Mowoen - Thiết Bị Phòng Tắm',
    overview: 'Mowoen là thương hiệu thiết bị phòng tắm cung cấp các dòng sản phẩm bồn tắm ngâm Acrylic, bồn cầu và thiết bị phòng tắm hiện đại.',
    historyAndOrigin: 'Sản phẩm Mowoen hướng đến phong cách thiết kế hiện đại, sử dụng vật liệu Acrylic cho các dòng bồn tắm nằm và bồn tắm ngâm.',
    standards: [
      'Tiêu chuẩn DIN',
      'Tiêu chuẩn an toàn CE',
      'Tiêu chuẩn RoHS'
    ],
    keyStrengths: [
      'Chất liệu Acrylic hỗ trợ giữ nhiệt nước và dễ vệ sinh',
      'Kiểu dáng hiện đại, phù hợp cho các không gian phòng tắm tiện nghi',
      'Quy cách kích thước đa dạng từ 1m5 đến 1m8'
    ],
    agencyRole: 'Siêu Thị VLXD Hoàng Yến có các sản phẩm bồn tắm thương hiệu Mowoen trong danh mục kinh doanh tại Quảng Trị.',
    faqs: [
      {
        question: 'Bồn tắm Mowoen có những kiểu dáng nào tại Hoàng Yến?',
        answer: 'Chúng tôi cung cấp bồn tắm ngâm đặt sàn dạng Oval và hình chữ nhật thương hiệu Mowoen. Khách hàng vui lòng liên hệ trước để kiểm tra kích thước và mẫu có sẵn.'
      }
    ],
    metaTitle: 'Bồn Tắm Mowoen Tại Quảng Trị | VLXD Hoàng Yến',
    metaDescription: 'Tham khảo bồn tắm Acrylic thương hiệu Mowoen tại Quảng Trị. Liên hệ VLXD Hoàng Yến 0946.575.579 để nhận thông tin sản phẩm và báo giá.'
  }
};
