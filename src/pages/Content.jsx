import { useState } from 'react'
import '../styles/Content.css'

export default function Content({ setCurrentPage }) {
  const [expandedSection, setExpandedSection] = useState('overview')

  const contentSections = {
    overview: {
      title: '📋 Tổng Quan',
      content: `
        <h3>Đề Bài Thuyết Trình</h3>
        <p>Sinh viên ngày nay có điều kiện sống cao hơn, tiếp cận quốc tế nhiều hơn. Nhiều giá trị cũ (như "an phận", "nghe lời cha mẹ", "ổn định là tốt") đang bị chất vấn. Một số giá trị mới như tự do cá nhân, đa dạng giới, cân bằng công việc - cuộc sống... ngày càng phổ biến.</p>
        <h3>Phương Pháp Tiếp Cận</h3>
        <p>Phân tích từ mối quan hệ biện chứng giữa:</p>
        <ul>
          <li><strong>Cơ Sở Hạ Tầng:</strong> Trình độ phát triển kinh tế - xã hội</li>
          <li><strong>Kiến Trúc Thượng Tầng:</strong> Tư tưởng, lối sống, hệ giá trị</li>
          <li><strong>Mục Tiêu:</strong> Làm rõ khả năng thay đổi, đấu tranh và thích nghi của các giá trị truyền thống</li>
        </ul>
      `
    },
    theory: {
      title: '🔬 Lý Thuyết Chủ Nghĩa Duy Vật Lịch Sử',
      content: `
        <h3>Khái Niệm Cơ Bản</h3>
        <p>Chủ nghĩa duy vật lịch sử là phương pháp phân tích xã hội dựa trên cơ sở rằng sự phát triển kinh tế-xã hội là nhân tố quyết định sự thay đổi xã hội.</p>
        
        <h3>Mối Quan Hệ Giữa Cơ Sở Hạ Tầng và Kiến Trúc Thượng Tầng</h3>
        <div class="formula-box">
          <strong>Cơ Sở Hạ Tầng (Base)</strong>
          <p>⬇️ Tác động ⬇️</p>
          <strong>Kiến Trúc Thượng Tầng (Superstructure)</strong>
        </div>
        
        <h3>Thành Phần Cơ Sở Hạ Tầng</h3>
        <ul>
          <li>Các điều kiện vật chất sản xuất</li>
          <li>Các quan hệ sản xuất</li>
          <li>Lực lượng sản xuất</li>
          <li>Phương thức sản xuất</li>
        </ul>
        
        <h3>Thành Phần Kiến Trúc Thượng Tầng</h3>
        <ul>
          <li>Ý thức hình thái: tư tưởng, lối sống, giá trị quan</li>
          <li>Quy chế pháp luật</li>
          <li>Cơ sở chính trị</li>
          <li>Những hình thức tổ chức xã hội</li>
        </ul>
      `
    },
    oldValues: {
      title: '👴 Giá Trị Truyền Thống',
      content: `
        <h3>Các Giá Trị Cũ Đang Bị Chất Vấn</h3>
        
        <div class="value-card">
          <h4>1️⃣ "An Phận"</h4>
          <p><strong>Định Nghĩa:</strong> Chấp nhận số phận, không cố gắng thay đổi, hài lòng với những gì hiện có</p>
          <p><strong>Bối Cảnh Lịch Sử:</strong> Phát sinh trong xã hội nông nghiệp, khi con người phụ thuộc vào thiên nhiên và tầng lớp phong kiến kiên định</p>
          <p><strong>Tác Động Kinh Tế:</strong> Duy trì ổn định xã hội trong điều kiện sản xuất bị hạn chế, các mối quan hệ sản xuất chậm phát triển</p>
          <p><strong>Tại Sao Bị Chất Vấn?</strong> Khi xã hội phát triển, cơ hội kinh tế tăng, giáo dục phổ cập, con người muốn kiểm soát vận mệnh của mình</p>
        </div>
        
        <div class="value-card">
          <h4>2️⃣ "Nghe Lời Cha Mẹ"</h4>
          <p><strong>Định Nghĩa:</strong> Tuyệt đối tuân theo quyết định của cha mẹ, không có tiếng nói riêng</p>
          <p><strong>Bối Cảnh Lịch Sử:</strong> Xã hội Phong Kiến - Nông Nghiệp: Gia đình là đơn vị sản xuất cơ bản, cha mẹ là những người kinh nghiệm nhất</p>
          <p><strong>Cơ Sở Kinh Tế:</strong> Cơ sở hạ tầng kinh tế đơn giản = hệ thống giá trị dựa trên quyền lực cấp bậc (cha - con, nam - nữ, già - trẻ)</p>
          <p><strong>Tại Sao Bị Chất Vấn?</strong> Xã hội hiện đại: Giáo dục nâng cao, công nghệ thông tin phát triển, cơ hội việc làm độc lập = thanh niên có tiếng nói riêng</p>
        </div>
        
        <div class="value-card">
          <h4>3️⃣ "Ổn Định Là Tốt"</h4>
          <p><strong>Định Nghĩa:</strong> Giá trị cao nhất là có một việc làm lâu dài, ổn định, không mạo hiểm</p>
          <p><strong>Bối Cảnh Lịch Sử:</strong> Thế kỷ 20 - Xã hội chuyển đổi: Mô hình công nghiệp ổn định, việc làm còn hạn chế</p>
          <p><strong>Điều Kiện Kinh Tế Xã Hội:</strong> Tình trạng thiếu nước, thiếu thốc, chưa phát triển → ổn định = sống sót, có bảo hiểm xã hội</p>
          <p><strong>Tại Sao Bị Chất Vấn?</strong> Nền kinh tế tri thức: Cơ hội việc làm phong phú, người trẻ mong muốn phát triển bản thân hơn là sợ mất việc</p>
        </div>
      `
    },
    newValues: {
      title: '🌟 Giá Trị Mới Nổi Lên',
      content: `
        <h3>Các Giá Trị Mới Ngày Càng Phổ Biến</h3>
        
        <div class="value-card">
          <h4>🎯 Tự Do Cá Nhân</h4>
          <p><strong>Định Nghĩa:</strong> Quyền lựa chọn của cá nhân: công việc, sở thích, lối sống, quan điểm chính trị</p>
          <p><strong>Bối Cảnh Kinh Tế-Xã Hội:</strong></p>
          <ul>
            <li>GDP tăng → điều kiện sống tốt hơn → không bị buộc chọn chỉ vì sống sót</li>
            <li>Thị trường lao động đa dạng → có nhiều việc làm để lựa chọn</li>
            <li>Tốc độ internet, mạng xã hội → con người có cơ hội tiếp cận thông tin toàn cầu</li>
          </ul>
          <p><strong>Biểu Hiện Thực Tế:</strong> Sinh viên từ chối công việc có lương cao nhưng ngột ngạt, chọn khởi nghiệp, làm việc tự do</p>
        </div>
        
        <div class="value-card">
          <h4>🌈 Đa Dạng Giới</h4>
          <p><strong>Định Nghĩa:</strong> Tôn trọng và công nhận sự đa dạng về giới tính, bộ máy tình cảm, quan hệ tình dục</p>
          <p><strong>Bối Cảnh Kinh Tế-Xã Hội:</strong></p>
          <ul>
            <li>Xã hội nông nghiệp: nam = lao động thể chất + quân sự, nữ = sinh con, chăm sóc gia đình</li>
            <li>Xã hội hiện đại: Công việc không phụ thuộc vào giới tính → phụ nữ độc lập kinh tế → không bị ép nhập cuộc hôn nhân</li>
            <li>Nền kinh tế tri thức: Cần năng lực, sáng tạo → giới tính không quan trọng</li>
            <li>Quyền lực kinh tế = quyền phát ngôn → LGBTQ+ có tiếng nói trong xã hội</li>
          </ul>
          <p><strong>Biểu Hiện Thực Tế:</strong> Sinh viên nữ xây dựng sự nghiệp trước khi lập gia đình, LGBTQ+ có không gian để sống đúng bản chất mình</p>
        </div>
        
        <div class="value-card">
          <h4>⚖️ Cân Bằng Công Việc - Cuộc Sống (Work-Life Balance)</h4>
          <p><strong>Định Nghĩa:</strong> Không hy sinh toàn bộ cuộc sống cá nhân cho công việc, cần thời gian cho bản thân, gia đình, sở thích</p>
          <p><strong>Bối Cảnh Kinh Tế-Xã Hội:</strong></p>
          <ul>
            <li>Cha ông chúng ta: Làm việc 12-14 tiếng để sống sót → công việc = cuộc sống</li>
            <li>Ngày nay: Người dân có đủ ăn, đủ mặc → có nhu cầu khác (xã hội, tâm lý, tự thực hiện)</li>
            <li>Công nghệ tự động hóa: Giảm giờ làm việc là xu hướng</li>
            <li>Sinh viên được nuôi dạy bởi cha mẹ đã trải qua kỷ nguyên khó khăn → mong muốn con em được sống hạnh phúc hơn</li>
          </ul>
          <p><strong>Biểu Hiện Thực Tế:</strong> Sinh viên từ chối đơn vị có văn hóa làm việc quá tải, tìm các công ty có chế độ làm việc linh hoạt</p>
        </div>
      `
    },
    analysis: {
      title: '🔍 Phân Tích Biện Chứng',
      content: `
        <h3>Mối Quan Hệ Giữa Kinh Tế - Xã Hội và Giá Trị</h3>
        
        <h4>Giai Đoạn 1: Xã Hội Nông Nghiệp (Trước Thế Chiến II)</h4>
        <div class="timeline-box">
          <div class="timeline-item">
            <strong>Cơ Sở Hạ Tầng:</strong> Sản xuất nông nghiệp, bị ảnh hưởng thiên nhiên, lực lượng sản xuất yếu
          </div>
          <div class="timeline-item">
            <strong>Giá Trị Thượng Tầng:</strong> An phận, phục tùng, ổn định, tuân thủ
          </div>
          <div class="timeline-item">
            <strong>Lý Do Liên Hệ:</strong> Không thể kiểm soát tự nhiên → chấp nhận → "an phận là lành"
          </div>
        </div>
        
        <h4>Giai Đoạn 2: Xã Hội Công Nghiệp Sơ Kỳ (1950-1990)</h4>
        <div class="timeline-box">
          <div class="timeline-item">
            <strong>Cơ Sở Hạ Tầng:</strong> Công nghiệp hóa, nhưng chưa phát triển đầy đủ, tài nguyên còn hạn chế
          </div>
          <div class="timeline-item">
            <strong>Giá Trị Thượng Tầng:</strong> Sự chuyển đổi: Vẫn còn chủ nghĩa tập thể, nhưng bắt đầu có cạnh tranh cá nhân
          </div>
          <div class="timeline-item">
            <strong>Biểu Hiện:</strong> Cha mẹ vẫn ra lệnh, nhưng con em bắt đầu có tiếng nói hơn
          </div>
        </div>
        
        <h4>Giai Đoạn 3: Xã Hội Thông Tin - Tri Thức (2000 - Hiện Tại)</h4>
        <div class="timeline-box">
          <div class="timeline-item">
            <strong>Cơ Sở Hạ Tầng:</strong> Kinh tế tri thức, công nghệ phát triển, GDP cao, tài nguyên phong phú
          </div>
          <div class="timeline-item">
            <strong>Giá Trị Thượng Tầng:</strong> Tự do cá nhân, đa dạng, cân bằng cuộc sống, innovation
          </div>
          <div class="timeline-item">
            <strong>Lý Do Liên Hệ:</strong> Khi đáp ứng được nhu cầu cơ bản → con người tìm tới tự thực hiện, tự do cá nhân</li>
          </div>
        </div>
        
        <h3>Biện Chứng: Sự Xung Đột Và Tiếp Thích</h3>
        <p><strong>Mâu Thuẫn 1: Phát Triển Không Đồng Bộ</strong></p>
        <ul>
          <li>Kinh tế phát triển nhanh (thành phố) → Giá trị nhanh thay đổi (tự do cá nhân)</li>
          <li>Khu vực nông thôn vẫn chậm → Giá trị vẫn truyền thống (an phận)</li>
          <li>→ Xung đột giữa thế hệ (cha mẹ từ nông thôn ≠ con em ở thành phố)</li>
        </ul>
        
        <p><strong>Mâu Thuẫn 2: Sự Thích Nghi Của Giá Trị Cũ</strong></p>
        <ul>
          <li>Giá trị cũ không biến mất hoàn toàn, mà "tiến hóa"</li>
          <li>Ví dụ: "Ổn định" cũ = làm cùng 1 công ty 40 năm</li>
          <li>Ổn định mới = có kỹ năng để không bao giờ thất nghiệp (học tập suốt đời)</li>
          <li>Ví dụ: "Nghe lời cha mẹ" cũ = bất lợi tuyệt đối</li>
          <li>"Nghe lời cha mẹ" mới = tôn trọng ý kiến, nhưng vẫn có quyền quyết định</li>
        </ul>
        
        <p><strong>Mâu Thuẫn 3: Câu Hỏi Về Bền Vững</strong></p>
        <ul>
          <li>Sinh viên ngày nay: Nhiều tự do, đa dạng → Nhưng có tăng áp lực tâm lý không?</li>
          <li>Nhu cầu không có hết → liệu "cân bằng công việc-cuộc sống" có khả thi không?</li>
          <li>→ Sự phát triển kinh tế có bền vững không?</li>
        </ul>
      `
    },
    conclusion: {
      title: '✅ Kết Luận',
      content: `
        <h3>Những Điểm Chính</h3>
        <ol>
          <li><strong>Cơ Sở Hạ Tầng Tác Động Đến Giá Trị:</strong> Sự phát triển kinh tế - xã hội quyết định những giá trị được ưu tiên trong xã hội</li>
          <li><strong>Giá Trị Thay Đổi Với Nhu Cầu:</strong> Khi xã hội phát triển, con người có nhu cầu cao hơn → giá trị thay đổi tương ứng</li>
          <li><strong>Sự Tiếp Thích Thay Vì Tiêu Biến:</strong> Giá trị cũ không biến mất, mà thích nghi với bối cảnh mới</li>
          <li><strong>Biện Chứng Và Mâu Thuẫn:</strong> Xã hội luôn chứa đựng mâu thuẫn (phát triển - bền vững, tự do - trách nhiệm)</li>
        </ol>
        
        <h3>Ứng Dụng Thực Tiễn</h3>
        <div class="practical-box">
          <p><strong>Cho Sinh Viên:</strong> Hiểu rõ giá trị của mình đến từ đâu, không phải là "bản tính" mà là sản phẩm của thời đại</p>
          <p><strong>Cho Cha Mẹ & Thế Hệ Già:</strong> Hiểu rằng con em không "hư" mà chỉ là sản phẩm của xã hội phát triển</p>
          <p><strong>Cho Nhà Nước & Xã Hội:</strong> Chính sách phải thích nghi với sự thay đổi giá trị, không áp dụng cách cũ</p>
          <p><strong>Cho Tương Lai:</strong> Dự đoán giá trị nào sẽ nổi lên dựa trên xu hướng phát triển kinh tế - xã hội</p>
        </div>
      `
    }
  }

  return (
    <div className="content">
      <nav className="navbar">
        <button className="back-btn" onClick={() => setCurrentPage('home')}>← Về Trang Chủ</button>
        <div className="logo">Nội Dung Bài Thuyết Trình</div>
        <button className="nav-link" onClick={() => setCurrentPage('game')}>Ôn Tập →</button>
      </nav>

      <div className="content-container">
        <aside className="content-sidebar">
          <h3>Nội Dung Chính</h3>
          <nav className="section-nav">
            {Object.entries(contentSections).map(([key, section]) => (
              <button
                key={key}
                className={`section-btn ${expandedSection === key ? 'active' : ''}`}
                onClick={() => setExpandedSection(key)}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </aside>

        <main className="content-main">
          {expandedSection && (
            <article className="section-content">
              <h2>{contentSections[expandedSection].title}</h2>
              <div dangerouslySetInnerHTML={{ __html: contentSections[expandedSection].content }} />
            </article>
          )}
        </main>
      </div>
    </div>
  )
}
