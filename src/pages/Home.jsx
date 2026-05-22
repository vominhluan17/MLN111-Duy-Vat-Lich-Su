import '../styles/Home.css'

export default function Home({ setCurrentPage }) {
  return (
    <div className="home">
      <nav className="navbar">
        <div className="logo">Triết Học - Duy Vật Lịch Sử</div>
        <div className="nav-links">
          <button onClick={() => setCurrentPage('content')} className="nav-btn">Nội Dung</button>
          <button onClick={() => setCurrentPage('game')} className="nav-btn">Ôn Tập</button>
        </div>
      </nav>

      <header className="hero-section">
        <div className="hero-content">
          <h1>Hành Trình Khám Phá Triết Học Mác - Lênin<br/>Chủ Nghĩa Duy Vật Lịch Sử</h1>
          <h2>Giá Trị Truyền Thống vs Giá Trị Hiện Đại Trong Thế Hệ Sinh Viên</h2>
          <p className="subtitle">Phân tích từ mối quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng</p>
        </div>
        <div className="hero-decoration">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>
      </header>

      <section className="content-section">
        <div className="content-container">
          <article className="content-article">
            <h2 className="section-title">1. Khái Niệm Cốt Lõi Về Chủ Nghĩa Duy Vật Lịch Sử</h2>
            
            <div className="content-box">
              <h3>Định Nghĩa</h3>
              <p>Chủ nghĩa duy vật lịch sử là hệ thống quan điểm duy vật biện chứng về xã hội của triết học Mác-Lênin, dùng để nghiên cứu đời sống xã hội và lịch sử nhân loại.</p>
            </div>

            <div className="content-box">
              <h3>Phạm Vi Nghiên Cứu</h3>
              <p>Nó không nghiên cứu những vấn đề cục bộ, mà nghiên cứu toàn bộ xã hội như một thể thống nhất để vạch ra những quy luật chung nhất, phổ biến nhất của sự vận động và phát triển xã hội.</p>
            </div>

            <div className="content-box">
              <h3>Cốt Lõi Của Học Thuyết</h3>
              <p>Cốt lõi của học thuyết này là lý giải sự tiến hóa của xã hội loài người bằng sự phát triển của trình độ sản xuất. Các nhà sáng lập chủ nghĩa Mác khẳng định rằng, <strong>động lực phát triển của lịch sử xã hội trước hết là do thực tiễn sản xuất vật chất của con người</strong>.</p>
            </div>

            <h2 className="section-title">2. Ứng Dụng Lý Thuyết - Mối Quan Hệ Biện Chứng</h2>
            
            <div className="content-box highlight-box">
              <h3>Sự Thay Đổi Bắt Nguồn Từ "Cơ Sở Hạ Tầng"</h3>
              <p><strong>Theo chủ nghĩa duy vật lịch sử:</strong> Sản xuất vật chất là cơ sở của sự tồn tại và phát triển xã hội. Trình độ sản xuất thay đổi sẽ kéo theo sự thay đổi về quan hệ sản xuất và các mối quan hệ xã hội.</p>
              <p className="highlight-text"><strong>⟹ Áp dụng vào đời sống sinh viên:</strong> Sinh viên ngày nay sống trong thời đại kinh tế phát triển, công nghệ số và hội nhập quốc tế sâu rộng. Đây chính là sự thay đổi căn bản về mặt "tồn tại xã hội" và "cơ sở hạ tầng".</p>
            </div>

            <div className="content-box highlight-box">
              <h3>"Cơ Sở Hạ Tầng" Quyết Định "Kiến Trúc Thượng Tầng"</h3>
              <p><strong>Quy Luật Cơ Bản:</strong> Cơ sở hạ tầng (kinh tế) quyết định kiến trúc thượng tầng (bao gồm chính trị, pháp luật, triết học, đạo đức, hệ tư tưởng...). Khi cơ sở hạ tầng đã thay đổi thì toàn bộ kiến trúc thượng tầng sớm muộn cũng thay đổi theo. <strong>Tồn tại xã hội quyết định ý thức xã hội</strong>.</p>
              <p className="highlight-text"><strong>⟹ Áp dụng:</strong> Vì điều kiện sống (tồn tại xã hội) tốt hơn, nên tư tưởng, đạo đức, lối sống (ý thức xã hội) của sinh viên tất yếu phải thay đổi. Những giá trị mới như "tự do cá nhân", "cân bằng công việc - cuộc sống" sinh ra là để phù hợp với nền kinh tế hiện đại.</p>
            </div>

            <div className="content-box highlight-box">
              <h3>Sự Đấu Tranh Và Thích Nghi (Tính Độc Lập Tương Đối)</h3>
              <p><strong>Câu Hỏi:</strong> Tại sao các giá trị cũ như "an phận", "nghe lời" vẫn tồn tại và xảy ra xung đột với giá trị mới?</p>
              <p><strong>Giải Thích:</strong> Chủ nghĩa duy vật lịch sử giải thích rằng ý thức xã hội có tính độc lập tương đối; nó thường có xu hướng lạc hậu hơn so với tồn tại xã hội do sức mạnh của thói quen, truyền thống và tập quán. Tuy nhiên, ý thức xã hội cũng có thể tác động ngược trở lại cơ sở hạ tầng (tích cực hoặc tiêu cực) và có tính kế thừa.</p>
              <p className="highlight-text"><strong>⟹ Áp dụng:</strong> Điều này giải thích cho sự "chất vấn" và "đấu tranh thế hệ". Các giá trị truyền thống chưa biến mất ngay mà đang trong quá trình đấu tranh, chọn lọc để thích nghi với điều kiện kinh tế - xã hội mới.</p>
            </div>

            <h2 className="section-title">3. Phương Pháp Tương Tác Trên Website</h2>
            
            <div className="content-box">
              <p><strong>Nội Dung Chi Tiết:</strong> Khám phá các khái niệm cốt lõi và ứng dụng thực tiễn</p>
              <p><strong>Thanh Trượt "Xưa & Nay":</strong> So sánh sự thay đổi từ nông nghiệp/bao cấp sang kinh tế thị trường/hội nhập toàn cầu, và từ giá trị "ổn định, an phận" sang "tự do cá nhân, đa dạng giới"</p>
              <p><strong>Đối Thoại Thế Hệ:</strong> Tìm hiểu lý do tại sao cha mẹ (truyền thống) và con cái (phát triển) có góc nhìn khác nhau</p>
              <p><strong>Ôn Tập Trò Chơi:</strong> Kiểm tra kiến thức thông qua quiz thú vị và tương tác</p>
            </div>
          </article>
        </div>
      </section>

      <section className="cta-section">
        <h3>Sẵn sàng khám phá?</h3>
        <div className="cta-buttons">
          <button 
            className="btn btn-primary"
            onClick={() => setCurrentPage('content')}
          >
            Xem Nội Dung Thuyết Trình
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => setCurrentPage('game')}
          >
            Bắt Đầu Ôn Tập
          </button>
        </div>
      </section>

      <footer className="footer">
        <p>Bài thuyết trình môn Triết Học - Chủ Nghĩa Duy Vật Lịch Sử | 2024</p>
      </footer>
    </div>
  )
}
