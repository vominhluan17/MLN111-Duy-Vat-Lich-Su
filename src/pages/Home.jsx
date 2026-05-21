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
          <h1>Chủ Nghĩa Duy Vật Lịch Sử</h1>
          <h2>Giá Trị Truyền Thống vs Giá Trị Hiện Đại Trong Thế Hệ Sinh Viên</h2>
          <p className="subtitle">Phân tích từ mối quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng</p>
        </div>
        <div className="hero-decoration">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>
      </header>

      <section className="intro-section">
        <div className="intro-card">
          <h3>📚 Bài Thuyết Trình Sáng Tạo</h3>
          <p>Khám phá cách thức sự phát triển kinh tế - xã hội tác động đến sự thay đổi của các giá trị và quan điểm sống của thế hệ sinh viên hiện đại.</p>
        </div>

        <div className="intro-card">
          <h3>🔍 Tiếp Cận Khoa Học</h3>
          <p>Áp dụng phương pháp biện chứng lịch sử để phân tích sự xung đột giữa giá trị truyền thống và giá trị mới trong xã hội đương đại.</p>
        </div>

        <div className="intro-card">
          <h3>🎮 Ôn Tập Tương Tác</h3>
          <p>Trò chơi quiz thú vị giúp bạn kiểm tra và ôn tập kiến thức về chủ đề một cách hiệu quả.</p>
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
