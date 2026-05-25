// Content data for the presentation

export const conceptsData = [
  {
    id: 1,
    title: "Cơ Sở Hạ Tầng",
    subtitle: "Infrastructure (Kinh tế - Cơ sở vật chất)",
    description: "Là tổng thể các lực lượng sản xuất, quan hệ sản xuất. Bao gồm: Công cụ lao động, đất đai, máy móc, tư liệu sản xuất, và mối quan hệ giữa các giai cấp trong quá trình sản xuất.",
    icon: "⚙️",
    color: "from-marx-red-700 to-marx-red-900",
    details: [
      "Lực lượng sản xuất",
      "Quan hệ sản xuất",
      "Chế độ sở hữu",
      "Quan hệ giai cấp"
    ]
  },
  {
    id: 2,
    title: "Kiến Trúc Thượng Tầng",
    subtitle: "Superstructure (Tư tưởng - Chính trị)",
    description: "Là tổng thể các quan hệ chính trị, pháp luật, tôn giáo, đạo đức, tư tưởng. Nó phản ánh cơ sở hạ tầng và có tác dụng phục vụ cho sự bảo vệ, ổn định cơ sở hạ tầng đó.",
    icon: "🏛️",
    color: "from-red-600 to-red-800",
    details: [
      "Quan hệ pháp luật",
      "Hệ thống chính trị",
      "Tư tưởng, đạo đức",
      "Tôn giáo, tập quán"
    ]
  }
];

export const dialecticalData = {
  title: "Biện Chứng Giữa Cơ Sở Và Thượng Tầng",
  description: "Mối quan hệ tương tác hai chiều",
  parts: [
    {
      id: 1,
      direction: "left-to-right",
      from: "Cơ Sở Hạ Tầng",
      to: "Kiến Trúc Thượng Tầng",
      relation: "Quyết định",
      description: "Cơ sở hạ tầng là yếu tố quyết định chính. Thay đổi cơ sở hạ tầng sẽ dẫn đến thay đổi thượng tầng.",
      examples: ["Cách mạng công nghiệp → Phát triển tư bản", "Kỹ thuật số → Thay đổi pháp luật"],
    },
    {
      id: 2,
      direction: "right-to-left",
      from: "Kiến Trúc Thượng Tầng",
      to: "Cơ Sở Hạ Tầng",
      relation: "Tác động ngược",
      description: "Thượng tầng cũng tác động ngược lại cơ sở. Chính sách, pháp luật, tư tưởng có thể thúc đẩy hoặc cản trở sự phát triển của cơ sở.",
      examples: ["Chính sách khuyến khích sáng tạo → Phát triển kỹ thuật", "Luật lao động → Cải thiện điều kiện sản xuất"],
    }
  ]
};

export const timelineData = [
  {
    id: 1,
    period: "Cộng Sản Nguyên Thủy",
    years: "Thời tiền sử",
    infrastructure: "Công cụ lao động sơ khai, sản xuất tập thể",
    superstructure: "Bộ lạc, tôn giáo tự nhiên, quan hệ bình đẳng",
    characteristics: "Không có giai cấp, tài sản chung",
    icon: "🔥"
  },
  {
    id: 2,
    period: "Chiếm Hữu Nô Lệ",
    years: "3000 TCN - 500 SCN",
    infrastructure: "Nông nghiệp, chăn nuôi, công cụ máy",
    superstructure: "Nhà nước, pháp luật, tôn giáo (La Mã)",
    characteristics: "Chủ nô, nô lệ; Sản phẩm để tích lũy",
    icon: "⚔️"
  },
  {
    id: 3,
    period: "Phong Kiến",
    years: "500 - 1500 SCN",
    infrastructure: "Nông nghiệp phong kiến, thủ công, thương mại địa phương",
    superstructure: "Phong kiến quân chủ, Công giáo, đạo đức trung thành",
    characteristics: "Địa chủ, nông dân; Kinh tế tự cấp",
    icon: "🏰"
  },
  {
    id: 4,
    period: "Tư Bản Chủ Nghĩa",
    years: "1500 - Nay",
    infrastructure: "Công nghiệp, máy móc, công nghệ, tài chính toàn cầu",
    superstructure: "Nhà nước tư sản, dân chủ, pháp luật tư bản",
    characteristics: "Chủ tư bản, công nhân; Lợi nhuận, thị trường",
    icon: "🏭"
  },
  {
    id: 5,
    period: "Xã Hội Chủ Nghĩa",
    years: "1917 - ",
    infrastructure: "Sở hữu công cộng, kinh tế kế hoạch & thị trường",
    superstructure: "Nhà nước công nhân, chủ nghĩa xã hội, tư tưởng khoa học",
    characteristics: "Công nhân, nông dân; Xóa bỏ giai cấp",
    icon: "🚀"
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
    emoji: "📱"
  },
  {
    id: 2,
    title: "Trí Tuệ Nhân Tạo & Lao Động",
    category: "AI Revolution",
    infrastructure: "Robot, AI, tự động hóa, công nghệ máy tính",
    superstructure: "Luật lao động, bảo hiểm xã hội, chính sách việc làm",
    impact: "Công nghệ tự động → Thất nghiệp → Cần cải cách luật lao động, phúc lợi xã hội",
    emoji: "🤖"
  },
  {
    id: 3,
    title: "Kinh Tế Số & Pháp Luật",
    category: "Digital Economy",
    infrastructure: "Blockchain, tiền kỹ thuật số, e-commerce, fintech",
    superstructure: "Pháp luật về tiền điện tử, thuế, bảo vệ người tiêu dùng",
    impact: "Tiền điện tử xuất hiện → Chính phủ phải tạo luật pháp mới để quản lý",
    emoji: "💰"
  },
  {
    id: 4,
    title: "Giáo Dục Trực Tuyến",
    category: "Education Tech",
    infrastructure: "Internet, nền tảng e-learning, công nghệ VR/AR",
    superstructure: "Chính sách giáo dục, cấp bằng kỹ thuật số, chuẩn mực chất lượng",
    impact: "Công nghệ giáo dục thay đổi → Phải cập nhật chương trình, cấp bằng, đánh giá",
    emoji: "🎓"
  },
  {
    id: 5,
    title: "Năng Lượng Xanh",
    category: "Green Tech",
    infrastructure: "Pin mặt trời, gió, công nghệ xanh, năng lượng tái tạo",
    superstructure: "Chính sách CỘng-giáp khí, quy định năng lượng, thuế carbon",
    impact: "Công nghệ xanh phát triển → Chính phủ ban hành chính sách môi trường, thay đổi ngành năng lượng",
    emoji: "♻️"
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
