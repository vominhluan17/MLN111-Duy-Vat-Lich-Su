import React from 'react'
import '../styles/academic.css'

export default function AcademicLayout({ setCurrentPage }) {
  const handleMenuClick = (key) => {
    // map items to pages
    if (key === 'game') return setCurrentPage('game')
    if (key === 'content') return setCurrentPage('content')
    return setCurrentPage('content')
  }

  return (
    <div className="academic-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-title">MỤC LỤC</div>
          <div className="sidebar-subtitle">Chủ Nghĩa Duy Vật Lịch Sử</div>
        </div>

        <div className="menu-section">
          <div className="menu-section-title">Lý Luận</div>
          <div className="menu-item active" onClick={() => handleMenuClick('content')}>Chủ nghĩa duy vật lịch sử</div>
          <div className="menu-item" onClick={() => handleMenuClick('content')}>Cơ sở hạ tầng & Kiến trúc thượng tầng</div>
          <div className="menu-item" onClick={() => handleMenuClick('content')}>Biện chứng của sự phát triển</div>
        </div>

        <div className="menu-section">
          <div className="menu-section-title">Thực Tiễn</div>
          <div className="menu-item" onClick={() => handleMenuClick('content')}>Bối cảnh kinh tế hiện nay</div>
          <div className="menu-item" onClick={() => handleMenuClick('content')}>Sự chuyển dịch hệ giá trị Gen Z</div>
          <div className="menu-item" onClick={() => handleMenuClick('content')}>Đối thoại thế hệ (Xưa & Nay)</div>
          <div className="menu-item" onClick={() => handleMenuClick('content')}>Bản đồ tương tác</div>
        </div>
      </aside>

      <main className="main-content">
        <div className="hero-banner">
          <div className="hero-content">
            <h1 className="hero-title">Cơ Sở Hạ Tầng<br/> &amp; Hệ Giá Trị Sinh Viên</h1>
            <div className="hero-decorations">
              <div className="hero-decoration" />
              <div className="hero-decoration-center">
                <div className="hero-decoration-dot" />
                <div className="hero-decoration-dot small" />
                <div className="hero-decoration-dot" />
              </div>
              <div className="hero-decoration" />
            </div>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="cards-container">
            <article className="content-card">
              <div className="card-image">
                <div className="card-tag">01</div>
                <div className="card-image-content">
                  <div className="card-image-number">I</div>
                  <div className="card-image-label">Kinh Tế &amp; Công Nghệ</div>
                </div>
              </div>
              <div className="card-content">
                <div>
                  <div className="card-meta">Phần 1: Tồn Tại Xã Hội</div>
                  <h2 className="card-title">Sự Thay Đổi của Cơ Sở Hạ Tầng</h2>
                  <p className="card-description">Phân tích sự chuyển đổi từ xã hội nông nghiệp sang kinh tế thị trường hiện đại, vai trò của internet và công nghệ số trong việc tạo điều kiện sống tốt hơn cho thế hệ sinh viên ngày nay.</p>
                </div>
                <div className="card-cta" onClick={() => handleMenuClick('content')}>Nghiên cứu</div>
              </div>
            </article>

            <article className="content-card">
              <div className="card-image">
                <div className="card-tag">02</div>
                <div className="card-image-content">
                  <div className="card-image-number">II</div>
                  <div className="card-image-label">Xung Đột Giá Trị</div>
                </div>
              </div>
              <div className="card-content">
                <div>
                  <div className="card-meta">Phần 2: Ý Thức Xã Hội</div>
                  <h2 className="card-title">Kiến Trúc Thượng Tầng Rạn Nứt</h2>
                  <p className="card-description">Các giá trị truyền thống như "an phận", "nghe lời cha mẹ" và "ổn định là tốt" đang bị chất vấn, dẫn tới đối thoại thế hệ.</p>
                </div>
                <div className="card-cta" onClick={() => handleMenuClick('content')}>Nghiên cứu</div>
              </div>
            </article>

            {/* Video Card - placed under Thực Tiện / Đối thoại Thế hệ */}
            <article className="content-card video-card">
              <div className="card-image">
                <div className="card-tag">VT</div>
                <div className="card-image-content">
                  <div className="card-image-number">V</div>
                  <div className="card-image-label">Video Thực Tiễn</div>
                </div>
              </div>
              <div className="card-content">
                <div>
                  <div className="card-meta">Chuyên Mục: Đối Thoại Thế Hệ</div>
                  <h2 className="card-title">Câu chuyện Làng Vĩnh An: Khi "Ổn định" nhường chỗ cho "Đặc quyền lựa chọn"</h2>
                  <p className="card-description">Video kể về Làng Vĩnh An — minh hoạ mâu thuẫn giữa giá trị "ổn định" của ông Tư và sự trỗi dậy của nhu cầu lựa chọn ở thế hệ trẻ. Đoạn phim là điểm nối thực tiễn để phân tích theo góc nhìn duy vật lịch sử: cơ sở vật chất và điều kiện sinh hoạt thay đổi tạo ra chuyển dịch trong kiến trúc thượng tầng, dẫn tới biến đổi hệ giá trị.</p>
                  <div className="video-wrapper">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/5wPtaLLdQKk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                  <p className="video-caption">Caption: "Ổn định" của ông Tư liên hệ trực tiếp đến khái niệm 'an phận' — video cho thấy khác biệt bối cảnh sản sinh ra khác biệt nhận thức giữa các thế hệ. Hãy xem video và suy nghĩ: khi điều kiện tồn tại thay đổi, liệu đánh giá về giá trị có thể bền vững hay phải biến đổi?</p>
                </div>
                <div className="card-cta" onClick={() => handleMenuClick('content')}>Xem thêm</div>
              </div>
            </article>

            <article className="content-card">
              <div className="card-image">
                <div className="card-tag">03</div>
                <div className="card-image-content">
                  <div className="card-image-number">III</div>
                  <div className="card-image-label">Giá Trị Mới</div>
                </div>
              </div>
              <div className="card-content">
                <div>
                  <div className="card-meta">Phần 3: Nhu Cầu Cao Hơn</div>
                  <h2 className="card-title">Sự Hình Thành Giá Trị Mới</h2>
                  <p className="card-description">Khi nhu cầu cơ bản được thỏa mãn, sinh viên đòi hỏi tự do cá nhân, đa dạng giới và cân bằng công việc-cuộc sống.</p>
                </div>
                <div className="card-cta" onClick={() => handleMenuClick('content')}>Nghiên cứu</div>
              </div>
            </article>

            <article className="content-card">
              <div className="card-image">
                <div className="card-tag">04</div>
                <div className="card-image-content">
                  <div className="card-image-number">IV</div>
                  <div className="card-image-label">Biện Chứng</div>
                </div>
              </div>
              <div className="card-content">
                <div>
                  <div className="card-meta">Phần 4: Độc Lập Tương Đối</div>
                  <h2 className="card-title">Tính Độc Lập của Ý Thức Xã Hội</h2>
                  <p className="card-description">Ý thức xã hội có tính độc lập tương đối; giá trị cũ thích nghi và hòa nhập với điều kiện mới.</p>
                </div>
                <div className="card-cta" onClick={() => handleMenuClick('content')}>Nghiên cứu</div>
              </div>
            </article>

          </div>
        </div>
      </main>
    </div>
  )
}
