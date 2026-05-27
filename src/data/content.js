// Content data for the presentation

export const conceptsData = [
  {
    id: 1,
    title: "Cơ Sở Hạ Tầng",
    subtitle: "Infrastructure (Kinh tế - Cơ sở vật chất)",
    description: "Là toàn bộ những quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội ở một giai đoạn phát triển lịch sử nhất định . Bao gồm: Quan hệ sở hữu về tư liệu sản xuất, quan hệ tổ chức quản lý và quan hệ phân phối sản phẩm",
    iconName: "Factory",
    color: "from-marx-red-700 to-marx-red-900",
    details: [
      "Quan hệ sở hữu (Tư liệu sản xuất)",
      "Quan hệ tổ chức - quản lý",
      "Quan hệ phân phối"
      
    ]
  },
  {
    id: 2,
    title: "Kiến Trúc Thượng Tầng",
    subtitle: "Superstructure (Tư tưởng - Chính trị)",
    description: "Là toàn bộ những quan điểm, tư tưởng xã hội (chính trị, pháp quyền, tôn giáo, đạo đức, triết học...) cùng với những thiết chế tương ứng (Đảng, Nhà nước, Giáo hội, các tổ chức xã hội...) được hình thành trên một cơ sở hạ tầng nhất định .",
    iconName: "Landmark",
    color: "from-red-600 to-red-800",
    details: [
      "Quan điểm, tư tưởng ",
      "Thiết chế chính trị",
      "Hệ thống pháp quyền",
      "Tôn giáo, nghệ thuật"
    ]
  }
];

export const dialecticalData = {
  title: "Biện Chứng Giữa Cơ Sở Và Thượng Tầng",
  description: "Mối quan hệ tương tác hai chiều",
  parts: [
    {
      id: 1,
      label: " Mối Quan Hệ: Quyết định",
      direction: "left-to-right",
      from: "Cơ Sở Hạ Tầng",
      to: "Kiến Trúc Thượng Tầng",
      fromIconName: "Settings", 
      toIconName: "Landmark",
      mainTheory: "Tồn tại xã hội quyết định Ý thức xã hội",
      description: "Tương ứng với một cơ sở hạ tầng sẽ sản sinh ra một kiến trúc thượng tầng phù hợp. Khi cơ sở hạ tầng biến đổi thì đòi hỏi kiến trúc thượng tầng sớm muộ cũng sẽ biến đổi theo.",
      detailsText: "Thực tiễn Gen Z: Khi kinh tế Việt Nam chuyển sang hội nhập toàn cầu, công nghệ số bùng nổ (Cơ sở hạ tầng thay đổi), tất yếu hệ tư tưởng và đạo đức của sinh viên (Kiến trúc thượng tầng) cũng phải lột xác. Những giá trị cũ như \"ổn định\", \"an phận\" dần bị phá vỡ, nhường chỗ cho tư duy \"năng động\", \"tự do cá nhân\" để thích ứng với nền kinh tế mới."
    },
    {
      id: 2,
      label: " Mối Quan Hệ: Tác động ngược",
      direction: "right-to-left",
      from: "Kiến Trúc Thượng Tầng",
      to: "Cơ Sở Hạ Tầng",
      fromIconName: "Landmark",
      toIconName: "Settings",
      mainTheory: "Tính độc lập tương đối và Sự phản tác dụng",
      description: "Kiến trúc thượng tầng không hoàn toàn thụ động mà có tính độc lập tương đối, nó tác động trở lại cơ sở hạ tầng theo hai xu hướng: Tích cực (thúc đẩy) hoặc Tiêu cực (kìm hãm).",
      detailsText: "Thực tiễn Gen Z: Hệ giá trị, lối sống mới có sức mạnh to lớn. Nếu xã hội thấu hiểu và chấp nhận sự đa dạng, tự do sáng tạo của sinh viên (tác động tích cực), lực lượng lao động trẻ này sẽ thúc đẩy nền kinh tế số phát triển. Ngược lại, nếu ép buộc người trẻ theo lối mòn (tác động tiêu cực), sẽ gây xung đột thế hệ và kìm hãm sức sáng tạo của xã hội."
    }
  ]
};

export const timelineData = [
  {
    id: 1,
    period: "Cộng Sản Nguyên Thủy",
    years: "Thời tiền sử",
    infrastructure: "Quan hệ sở hữu chung, sản xuất và phân phối bình đẳng",
    superstructure: "Tổ chức thị tộc/bộ lạc, tín ngưỡng tự nhiên, chưa có nhà nước",
    characteristics: "Không có giai cấp, không có bóc lột, tài sản chung",
    iconName: "Flame"
  },
  {
    id: 2,
    period: "Chiếm Hữu Nô Lệ",
    years: "Khoảng 3000 TCN - 500 SCN",
    infrastructure: "Chủ nô sở hữu tuyệt đối tư liệu sản xuất và thân thể người nô lệ",
    superstructure: "Nhà nước chủ nô, pháp luật hà khắc, tư tưởng tôn giáo sơ khai", 
    characteristics: "Giai cấp: Chủ nô - Nô lệ; Quan hệ bóc lột tàn bạo",
    iconName: "Swords"
  },
  {
    id: 3,
    period: "Phong Kiến",
    years: "Khoảng 500 - 1500 SCN",
    infrastructure: "Địa chủ sở hữu ruộng đất, bóc lột nông dân/nông nô bằng địa tô",
    superstructure: "Nhà nước quân chủ chuyên chế, hệ tư tưởng tôn giáo/thần học (Nho giáo, Công giáo...)", 
    characteristics: "Giai cấp: Địa chủ - Nông dân; Kinh tế tự cấp tự túc",
    iconName: "Castle"
  },
  {
    id: 4,
    period: "Tư Bản Chủ Nghĩa",
    years: "Khoảng 1500 - Nay",
    infrastructure: "Sở hữu tư nhân tư bản chủ nghĩa, bóc lột giá trị thặng dư",
    superstructure: "Nhà nước tư sản, pháp quyền tư sản, hệ tư tưởng đề cao chủ nghĩa cá nhân", 
    characteristics: "Giai cấp: Tư sản - Vô sản; Kinh tế thị trường, tối đa hóa lợi nhuận",
    iconName: "Factory"
  },
  {
    id: 5,
    period: "Cộng Sản Chủ Nghĩa",
    years: "1917 - Tương lai",
    infrastructure: "Sở hữu công cộng về tư liệu sản xuất chủ yếu, xóa bỏ bóc lột",
    superstructure: "Nhà nước chuyên chính vô sản, hệ tư tưởng Mác - Lênin khoa học", 
    characteristics: "Giai đoạn thấp là XHCN; Xóa bỏ đối kháng giai cấp, giải phóng con người",
    iconName: "Rocket"
  }
];

export const caseStudiesData = [
  {
    id: 1,
    title: "Mạng Xã Hội & Chính Trị",
    category: "Digital Platform",
    infrastructure: "Công nghệ cloud, thuật toán AI, dữ liệu lớn",
    superstructure: "Luật về bảo vệ dữ liệu, quy định nội dung, chính sách",
    impact: "Mạng xã hội thay đổi cách chính trị hoạt động → chính phủ phải cập nhật luật pháp",
    iconName: "Smartphone"
  },
  {
    id: 2,
    title: "Trí Tuệ Nhân Tạo & Lao Động",
    category: "AI Revolution",
    infrastructure: "Robot, AI, tự động hóa, công nghệ máy tính",
    superstructure: "Luật lao động, bảo hiểm xã hội, chính sách việc làm",
    impact: "Công nghệ tự động → Thất nghiệp → Cần cải cách luật lao động, phúc lợi xã hội",
    iconName: "Cpu"
  },
  {
    id: 3,
    title: "Kinh Tế Số & Pháp Luật",
    category: "Digital Economy",
    infrastructure: "Blockchain, tiền kỹ thuật số, e-commerce, fintech",
    superstructure: "Pháp luật về tiền điện tử, thuế, bảo vệ người tiêu dùng",
    impact: "Tiền điện tử xuất hiện → Chính phủ phải tạo luật pháp mới để quản lý",
    iconName: "Coins"
  },
  {
    id: 4,
    title: "Giáo Dục Trực Tuyến",
    category: "Education Tech",
    infrastructure: "Internet, nền tảng e-learning, công nghệ VR/AR",
    superstructure: "Chính sách giáo dục, cấp bằng kỹ thuật số, chuẩn mực chất lượng",
    impact: "Công nghệ giáo dục thay đổi → Phải cập nhật chương trình, cấp bằng, đánh giá",
    iconName: "BookOpen"
  },
  {
    id: 5,
    title: "Năng Lượng Xanh",
    category: "Green Tech",
    infrastructure: "Pin mặt trời, gió, công nghệ xanh, năng lượng tái tạo",
    superstructure: "Chính sách CỘng-giáp khí, quy định năng lượng, thuế carbon",
    impact: "Công nghệ xanh phát triển → Chính phủ ban hành chính sách môi trường, thay đổi ngành năng lượng",
    iconName: "Leaf"
  }
];

export const chatbotQuestions = [
  {
    id: 1,
    question: "Cơ sở hạ tầng là gì?",
    answer: "Cơ sở hạ tầng (Infrastructure) là tổng thể lực lượng sản xuất và quan hệ sản xuất trong xã hội. Nó bao gồm các công cụ lao động, máy móc, tư liệu sản xuất, đất đai, và mối quan hệ giữa các giai cấp trong quá trình sản xuất. Cơ sở hạ tầng là nền tảng kinh tế của xã hội."
  },
  {
    id: 2,
    question: "Kiến trúc thượng tầng là gì?",
    answer: "Kiến trúc thượng tầng (Superstructure) là tổng thể các quan hệ chính trị, pháp luật, tôn giáo, đạo đức, và tư tưởng của xã hội. Nó phản ánh cơ sở hạ tầng và có tác dụng phục vụ cho sự bảo vệ, phát triển cơ sở hạ tầng đó. Thượng tầng là lớp tư tưởng và quản lý của xã hội."
  },
  {
    id: 3,
    question: "Tại sao cơ sở quyết định thượng tầng?",
    answer: "Theo chủ nghĩa duy vật lịch sử, cơ sở hạ tầng quyết định thượng tầng vì sản xuất vật chất là nền tảng của xã hội. Khi công nghệ sản xuất thay đổi, các quan hệ sản xuất phải thay đổi theo. Điều này dẫn đến thay đổi trong hệ thống pháp luật, chính trị, và tư tưởng. Ví dụ: cách mạng công nghiệp làm thay đổi quan hệ giữa chủ nhân máy và công nhân, từ đó dẫn đến thay đổi pháp luật và chính sách."
  },
  {
    id: 4,
    question: "Thượng tầng có tác động ngược lại không?",
    answer: "Có, thượng tầng có thể tác động ngược lại cơ sở hạ tầng. Các chính sách, luật pháp, tư tưởng tiến bộ có thể thúc đẩy sự phát triển của cơ sở sản xuất. Ví dụ: các chính sách khuyến khích sáng tạo và nghiên cứu có thể dẫn đến phát triển công nghệ mới; hoặc luật lao động tiến bộ có thể cải thiện điều kiện làm việc, nâng cao năng suất lao động. Tuy nhiên, tác động này là có giới hạn và cuối cùng cơ sở vẫn là yếu tố quyết định."
  },
  {
    id: 5,
    question: "Ví dụ thực tế của biện chứng cơ sở-thượng tầng?",
    answer: "Ví dụ thực tế:\n1. Cách mạng công nghiệp: Phát triển máy móc (cơ sở) → Mô hình tư bản chủ nghĩa xuất hiện → Pháp luật thay đổi để bảo vệ quyền sở hữu tư nhân\n2. Công nghệ số: Máy tính, internet (cơ sở) → Mạng xã hội ra đời → Chính phủ phải ban hành luật về bảo vệ dữ liệu\n3. Kỹ thuật nông nghiệp: Máy gặt đập liên hợp (cơ sở) → Giảm nhu cầu nhân công → Pháp luật chính sách thay đổi để ứng phó thất nghiệp\n4. AI và tự động hóa: Robot thay người (cơ sở) → Thất nghiệp tăng → Cần chính sách bảo hiểm, đào tạo lại (thượng tầng)"
  }
];

export const conclusionData = {
  title: "Kết Luận",
  quote: "\"Không phải ý thức của con người quyết định con đường của nó, mà ngược lại, đó là con đường xã hội của con người quyết định ý thức của nó.\" - Karl Marx",
  mainPoints: [
    {
      title: "Cơ Sở Hạ Tầng Quyết Định",
      description: "Lực lượng sản xuất và quan hệ sản xuất là yếu tố chính quyết định xã hội"
    },
    {
      title: "Biện Chứng Hai Chiều",
      description: "Mặc dù cơ sở quyết định, nhưng thượng tầng cũng tác động ngược lại"
    },
    {
      title: "Ứng Dụng Thực Tiễn",
      description: "Hiểu được mối quan hệ này giúp dự báo xu hướng phát triển xã hội"
    },
    {
      title: "Vai Trò Con Người",
      description: "Con người có thể nhận thức được quy luật phát triển để hành động có chủ đích"
    }
  ],
  summary: "Học thuyết về mối quan hệ giữa cơ sở hạ tầng và kiến trúc thượng tầng là nền tảng của chủ nghĩa duy vật lịch sử, giúp chúng ta hiểu rõ quy luật phát triển của xã hội loài người."
};

export const quizData = [
  {
  id: 1,
  question: "Theo chủ nghĩa duy vật lịch sử, 'Cơ sở hạ tầng' của xã hội được hiểu là gì?",
  explanation: "Cơ sở hạ tầng là toàn bộ các quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội trong một giai đoạn lịch sử nhất định.",
  answers: [
    {
      text: "Toàn bộ cơ sở vật chất, kỹ thuật, đường sá, cầu cống của xã hội",
      isCorrect: false
    },
    {
      text: "Là tổng hợp các quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội ở một giai đoạn lịch sử nhất định",
      isCorrect: true
    },
    {
      text: "Toàn bộ công cụ lao động và lực lượng lao động của xã hội",
      isCorrect: false
    },
    {
      text: "Toàn bộ tư tưởng, đạo đức, pháp quyền của xã hội",
      isCorrect: false
    }
  ]
},
{
  id: 2,
  question: "Cấu trúc của Cơ sở hạ tầng bao gồm những thành phần nào?",
  explanation: "Cơ sở hạ tầng bao gồm quan hệ sản xuất tàn dư, quan hệ sản xuất thống trị và quan hệ sản xuất mầm mống.",
  answers: [
    {
      text: "Lực lượng sản xuất, công cụ lao động và người lao động",
      isCorrect: false
    },
    {
      text: "Tư tưởng chính trị, đạo đức và tôn giáo",
      isCorrect: false
    },
    {
      text: "Quan hệ sản xuất tàn dư, quan hệ sản xuất thống trị và quan hệ sản xuất mầm mống",
      isCorrect: true
    },
    {
      text: "Quan hệ sản xuất, lực lượng sản xuất và phương thức sản xuất",
      isCorrect: false
    }
  ]
},
{
  id: 3,
  question: "Theo triết học Mác - Lênin, 'Kiến trúc thượng tầng' bao gồm những yếu tố cơ bản nào?",
  explanation: "Kiến trúc thượng tầng bao gồm các quan điểm tư tưởng xã hội và các thiết chế chính trị - xã hội tương ứng.",
  answers: [
    {
      text: "Những quan điểm, tư tưởng xã hội và các thiết chế chính trị - xã hội tương ứng",
      isCorrect: true
    },
    {
      text: "Toàn bộ hệ thống máy móc và lực lượng sản xuất của xã hội",
      isCorrect: false
    },
    {
      text: "Quan hệ sở hữu, quan hệ tổ chức - quản lý và quan hệ phân phối",
      isCorrect: false
    },
    {
      text: "Môi trường tự nhiên và điều kiện dân số",
      isCorrect: false
    }
  ]
},
{
  id: 4,
  question: "Mối quan hệ biện chứng giữa Cơ sở hạ tầng (CSHT) và Kiến trúc thượng tầng (KTTT) mang tính chất gì?",
  explanation: "CSHT quyết định KTTT, đồng thời KTTT có tính độc lập tương đối và tác động ngược trở lại CSHT.",
  answers: [
    {
      text: "KTTT quyết định CSHT, CSHT hoàn toàn thụ động",
      isCorrect: false
    },
    {
      text: "CSHT quyết định KTTT, nhưng KTTT có tính độc lập tương đối và có tác động ngược trở lại CSHT",
      isCorrect: true
    },
    {
      text: "CSHT và KTTT tồn tại độc lập, không tác động lẫn nhau",
      isCorrect: false
    },
    {
      text: "KTTT sinh ra CSHT để phục vụ cho giai cấp thống trị",
      isCorrect: false
    }
  ]
},
{
  id: 5,
  question: "Sự tác động ngược trở lại của Kiến trúc thượng tầng đối với Cơ sở hạ tầng diễn ra theo những xu hướng nào?",
  explanation: "Kiến trúc thượng tầng có thể thúc đẩy hoặc kìm hãm sự phát triển của cơ sở hạ tầng.",
  answers: [
    {
      text: "Luôn luôn thúc đẩy cơ sở hạ tầng phát triển",
      isCorrect: false
    },
    {
      text: "Luôn luôn kìm hãm cơ sở hạ tầng phát triển",
      isCorrect: false
    },
    {
      text: "Có thể thúc đẩy hoặc kìm hãm sự phát triển của cơ sở hạ tầng",
      isCorrect: true
    },
    {
      text: "Chỉ làm thay đổi hình thức của cơ sở hạ tầng mà không thay đổi bản chất",
      isCorrect: false
    }
  ]
},
{
  id: 6,
  question: "C. Mác đã khẳng định sự vận động và phát triển của các hình thái kinh tế - xã hội là một quá trình gì?",
  explanation: "Theo C. Mác, sự phát triển của các hình thái kinh tế - xã hội là một quá trình lịch sử - tự nhiên.",
  answers: [
    {
      text: "Quá trình ngẫu nhiên",
      isCorrect: false
    },
    {
      text: "Quá trình phụ thuộc vào ý muốn chủ quan của con người",
      isCorrect: false
    },
    {
      text: "Quá trình lịch sử - tự nhiên",
      isCorrect: true
    },
    {
      text: "Quá trình tiến hóa sinh học thuần túy",
      isCorrect: false
    }
  ]
},
{
  id: 7,
  question: "Xét trong tính chất toàn bộ của nó, lịch sử nhân loại là quá trình thay thế tuần tự của các hình thái kinh tế - xã hội nào?",
  explanation: "Lịch sử nhân loại phát triển tuần tự từ công xã nguyên thủy đến cộng sản chủ nghĩa.",
  answers: [
    {
      text: "Công xã nguyên thủy -> Chiếm hữu nô lệ -> Phong kiến -> Tư bản chủ nghĩa -> Cộng sản chủ nghĩa",
      isCorrect: true
    },
    {
      text: "Công xã nguyên thủy -> Phong kiến -> Chiếm hữu nô lệ -> Tư bản chủ nghĩa -> Cộng sản chủ nghĩa",
      isCorrect: false
    },
    {
      text: "Chiếm hữu nô lệ -> Phong kiến -> Tư bản chủ nghĩa -> Công xã nguyên thủy -> Cộng sản chủ nghĩa",
      isCorrect: false
    },
    {
      text: "Công xã nguyên thủy -> Phong kiến -> Tư bản chủ nghĩa -> Xã hội chủ nghĩa -> Cộng sản chủ nghĩa",
      isCorrect: false
    }
  ]
},
{
  id: 8,
  question: "Điền vào chỗ trống quan điểm của C. Mác: 'Khi cơ sở kinh tế thay đổi thì toàn bộ cái [...] đồ sộ cũng bị đảo lộn ít nhiều nhanh chóng.'",
  explanation: "Theo C. Mác, khi cơ sở kinh tế thay đổi thì kiến trúc thượng tầng cũng thay đổi theo.",
  answers: [
    {
      text: "Phương thức sản xuất",
      isCorrect: false
    },
    {
      text: "Lực lượng sản xuất",
      isCorrect: false
    },
    {
      text: "Kiến trúc thượng tầng",
      isCorrect: true
    },
    {
      text: "Quan hệ sản xuất",
      isCorrect: false
    }
  ]
},
{
  id: 9,
  question: "Trong hệ thống kiến trúc thượng tầng của xã hội Việt Nam hiện nay, yếu tố nào đóng vai trò trung tâm?",
  explanation: "Hệ thống chính trị - xã hội gồm Đảng, Nhà nước và các tổ chức xã hội giữ vai trò trung tâm trong kiến trúc thượng tầng Việt Nam.",
  answers: [
    {
      text: "Các tổ chức phi chính phủ",
      isCorrect: false
    },
    {
      text: "Hệ thống thiết chế chính trị - xã hội bao gồm Đảng Cộng sản Việt Nam, Nhà nước và các tổ chức xã hội khác",
      isCorrect: true
    },
    {
      text: "Hệ thống giáo dục, y tế và khoa học công nghệ",
      isCorrect: false
    },
    {
      text: "Các quan điểm đạo đức, tôn giáo và nghệ thuật",
      isCorrect: false
    }
  ]
},
{
  id: 10,
  question: "Vận dụng lý luận vào thực tiễn: Vì sao hệ tư tưởng, giá trị sống của sinh viên (Gen Z) hiện nay lại có sự biến đổi mạnh mẽ so với các thế hệ trước?",
  explanation: "Sự thay đổi của nền kinh tế, công nghệ số và toàn cầu hóa làm biến đổi cơ sở hạ tầng xã hội, kéo theo thay đổi về tư tưởng và giá trị sống.",
  answers: [
    {
      text: "Do sự bùng nổ của mạng xã hội khiến con người tự do hơn",
      isCorrect: false
    },
    {
      text: "Do trình độ sản xuất và nền kinh tế - xã hội thay đổi mạnh mẽ bởi công nghệ số và toàn cầu hóa",
      isCorrect: true
    },
    {
      text: "Do sinh viên ngày nay không còn được giáo dục về truyền thống",
      isCorrect: false
    },
    {
      text: "Do sự thay đổi của tự nhiên và môi trường khí hậu",
      isCorrect: false
    }
  ]
}
];

