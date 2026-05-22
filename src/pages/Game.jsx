import { useState } from 'react'
import '../styles/Game.css'

export default function Game({ setCurrentPage }) {
  const [gameMode, setGameMode] = useState('menu')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [answerList, setAnswerList] = useState([])

  const questions = [
    {
      question: "Cơ Sở Hạ Tầng Trong Chủ Nghĩa Duy Vật Lịch Sử Bao Gồm Những Yếu Tố Nào?",
      options: [
        "Tư tưởng, ý thức hình thái, lối sống",
        "Các điều kiện vật chất sản xuất, quan hệ sản xuất, lực lượng sản xuất",
        "Quy chế pháp luật, cơ sở chính trị",
        "Mạng xã hội, internet, công nghệ thông tin"
      ],
      correct: 1,
      explanation: "Cơ sở hạ tầng là nền tảng vật chất của xã hội, bao gồm các yếu tố kinh tế-xã hội cơ bản."
    },
    {
      question: "Giá Trị 'An Phận' Phát Sinh Từ Bối Cảnh Kinh Tế-Xã Hội Nào?",
      options: [
        "Xã hội thông tin hiện đại",
        "Xã hội nông nghiệp, khi con người phụ thuộc vào thiên nhiên",
        "Xã hội công nghiệp sơ kỳ",
        "Xã hội kinh tế tri thức"
      ],
      correct: 1,
      explanation: "Giá trị 'an phận' xuất phát từ xã hội nông nghiệp, khi con người bất lực trước thiên nhiên."
    },
    {
      question: "Tại Sao Giá Trị 'Tự Do Cá Nhân' Ngày Càng Phổ Biến Trong Thế Hệ Sinh Viên Hiện Đại?",
      options: [
        "Vì toàn bộ thanh niên đều nổi loạn",
        "Vì xã hội phát triển kinh tế → điều kiện sống tốt → không bị buộc chọn chỉ vì sống sót",
        "Vì internet khiến con người ngu dốt hơn",
        "Vì Mỹ áp đặt giá trị này cho Việt Nam"
      ],
      correct: 1,
      explanation: "Khi xã hội phát triển kinh tế, con người có đủ ăn mặc → nhu cầu cao hơn (tự do, tự thực hiện)."
    },
    {
      question: "Kiến Trúc Thượng Tầng Bao Gồm Những Thành Phần Nào?",
      options: [
        "Nông nghiệp, công nghiệp, dâu chuối",
        "Ý thức hình thái, quy chế pháp luật, cơ sở chính trị, hình thức tổ chức xã hội",
        "Điều kiện sản xuất vật chất",
        "Lực lượng vũ trang"
      ],
      correct: 1,
      explanation: "Kiến trúc thượng tầng là những yếu tố phi vật chất: tư tưởng, pháp luật, chính trị, tổ chức."
    },
    {
      question: "Giá Trị 'Ổn Định' Trong Thời Xã Hội Nông Nghiệp Và Hiện Đại Có Khác Nhau Ra Sao?",
      options: [
        "Không có khác gì, giá trị ổn định vẫn giống nhau",
        "Cũ: làm cùng 1 công ty 40 năm | Mới: có kỹ năng để không thất nghiệp (học tập suốt đời)",
        "Cũ: ít tiền | Mới: nhiều tiền",
        "Xã hội cũ không có giá trị 'ổn định'"
      ],
      correct: 1,
      explanation: "Giá trị thích nghi với bối cảnh: cũ là ổn định tuyệt đối, mới là khả năng thích ứng."
    },
    {
      question: "Mâu Thuẫn Chính Giữa Cha Mẹ Và Con Em Hiện Nay Xuất Phát Từ Nguyên Nhân Nào?",
      options: [
        "Con em không hiếu thảo",
        "Kinh tế phát triển không đồng bộ: thành phố phát triển nhanh → giá trị thay đổi nhanh | Nông thôn chậm → giá trị vẫn cũ",
        "Cha mẹ luôn sai",
        "Không có mâu thuẫn gì"
      ],
      correct: 1,
      explanation: "Phát triển không đồng bộ dẫn đến sự chênh lệch giá trị giữa các nhóm, thế hệ."
    },
    {
      question: "Biểu Hiện Nào Chứng Minh Giá Trị 'Đa Dạng Giới' Đang Phát Triển?",
      options: [
        "Phụ nữ độc lập kinh tế → không bị ép nhập cuộc hôn nhân",
        "LGBTQ+ có tiếng nói vì xã hội trở nên giàu có",
        "Công việc không phụ thuộc vào giới tính → phụ nữ có cơ hội bằng nam giới",
        "Tất cả các câu trên"
      ],
      correct: 3,
      explanation: "Giá trị đa dạng giới biểu hiện qua nhiều khía cạnh: kinh tế, chính trị, xã hội."
    },
    {
      question: "Theo Chủ Nghĩa Duy Vật Lịch Sử, Yếu Tố Nào Quyết Định Sự Thay Đổi Xã Hội?",
      options: [
        "Ý thức của con người",
        "Sự phát triển kinh tế - xã hội (cơ sở hạ tầng)",
        "Lý thuyết chính trị",
        "Sự khôn ngoan của các nhà lãnh đạo"
      ],
      correct: 1,
      explanation: "Cơ sở hạ tầng kinh tế-xã hội là yếu tố quyết định, tác động đến kiến trúc thượng tầng."
    },
    {
      question: "Giá Trị 'Nghe Lời Cha Mẹ' Có Hoàn Toàn Biến Mất Trong Xã Hội Hiện Đại Không?",
      options: [
        "Có, nó lỗi thời hoàn toàn",
        "Không, nó thích nghi: từ 'bất lợi tuyệt đối' → 'tôn trọng ý kiến, nhưng vẫn có quyền quyết định'",
        "Đó là câu hỏi sai",
        "Giá trị này chỉ tồn tại ở nông thôn"
      ],
      correct: 1,
      explanation: "Các giá trị cũ không biến mất mà thích nghi với bối cảnh mới - đây là điều luận biện chứng."
    },
    {
      question: "Nhu Cầu Nào Của Con Người LÀ NỀN TẢNG Theo Hệ Thống Phân Tầng Nhu Cầu Maslow?",
      options: [
        "Nhu cầu tự thực hiện bản thân",
        "Nhu cầu kế tiếp từ sau khi đáp ứng nhu cầu sinh lý và an toàn",
        "Nhu cầu sinh lý (ăn, ở, ngủ) và an toàn",
        "Nhu cầu xã hội"
      ],
      correct: 2,
      explanation: "Khi nhu cầu cơ bản được thỏa mãn, con người mới tìm tới tự do cá nhân và tự thực hiện."
    }
  ]

  const handleStartQuiz = () => {
    setGameMode('quiz')
    setCurrentQuestion(0)
    setScore(0)
    setAnswerList([])
    setShowResult(false)
    setGameOver(false)
  }

  const handleAnswerClick = (index) => {
    if (!selectedAnswer && !showResult) {
      setSelectedAnswer(index)
      setShowResult(true)
      
      const isCorrect = index === questions[currentQuestion].correct
      const newScore = isCorrect ? score + 1 : score
      
      setAnswerList([
        ...answerList,
        {
          question: questions[currentQuestion].question,
          selected: index,
          correct: questions[currentQuestion].correct,
          isCorrect
        }
      ])
      
      setScore(newScore)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setGameOver(true)
    }
  }

  const handleRestart = () => {
    setGameMode('menu')
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setGameOver(false)
    setAnswerList([])
  }

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage === 100) return "Xuất Sắc! Bạn là chuyên gia về chủ đề!"
    if (percentage >= 80) return "Rất Tốt! Bạn đã nắm vững kiến thức chủ yếu"
    if (percentage >= 60) return "Tốt! Bạn có kiến thức nhất định, cần ôn thêm"
    if (percentage >= 40) return "Bình Thường, Hãy ôn lại nội dung"
    return "Cố Gắng Tiếp! Nên đọc kỹ nội dung lại"
  }

  return (
    <div className="game">
      <nav className="navbar">
        <button className="back-btn" onClick={() => setCurrentPage('home')}>← Về Trang Chủ</button>
        <div className="logo">Trò Chơi Ôn Tập</div>
        <button className="nav-link" onClick={() => setCurrentPage('content')}>Xem Nội Dung →</button>
      </nav>

      <div className="game-container">
        {gameMode === 'menu' && (
          <div className="menu-section">
            <h1>Trò Chơi Ôn Tập Kiến Thức</h1>
            <p>Kiểm tra kiến thức của bạn về chủ nghĩa duy vật lịch sử thông qua các câu hỏi thú vị</p>
            <div className="menu-options">
              <div className="quiz-info">
                <h3>Quiz Trắc Nghiệm</h3>
                <p>Trả lời 10 câu hỏi để kiểm tra kiến thức</p>
                <button className="btn btn-primary" onClick={handleStartQuiz}>
                  Bắt Đầu Quiz
                </button>
              </div>
            </div>
          </div>
        )}

        {gameMode === 'quiz' && !gameOver && (
          <div className="quiz-section">
            <div className="quiz-header">
              <div className="quiz-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
                <span>Câu {currentQuestion + 1} / {questions.length}</span>
              </div>
              <div className="quiz-score">
                Điểm: {score}
              </div>
            </div>

            <div className="quiz-content">
              <h2>{questions[currentQuestion].question}</h2>
              <div className="options-grid">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className={`option-btn ${selectedAnswer === index ? 'selected' : ''} ${
                      showResult && index === questions[currentQuestion].correct ? 'correct' : ''
                    } ${
                      showResult && selectedAnswer === index && index !== questions[currentQuestion].correct ? 'incorrect' : ''
                    }`}
                    onClick={() => handleAnswerClick(index)}
                    disabled={showResult}
                  >
                    <span className="option-label">{String.fromCharCode(65 + index)}</span>
                    <span className="option-text">{option}</span>
                  </button>
                ))}
              </div>

              {showResult && (
                <div className={`result-box ${selectedAnswer === questions[currentQuestion].correct ? 'correct' : 'incorrect'}`}>
                  <h3>
                    {selectedAnswer === questions[currentQuestion].correct ? 'Đúng!' : 'Sai!'}
                  </h3>
                  <p className="explanation">{questions[currentQuestion].explanation}</p>
                  <button className="btn btn-next" onClick={handleNextQuestion}>
                    {currentQuestion === questions.length - 1 ? 'Xem Kết Quả' : 'Câu Tiếp Theo'}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {gameOver && (
          <div className="result-section">
            <div className="final-score">
              <h1>Kết Quả Cuối Cùng</h1>
              <div className="score-display">
                <span className="score-number">{score}</span>
                <span className="score-total">/ {questions.length}</span>
              </div>
              <div className="score-percentage">
                {((score / questions.length) * 100).toFixed(1)}%
              </div>
              <p className="score-message">{getScoreMessage()}</p>
            </div>

            <div className="review-section">
              <h3>Đáp Án Chi Tiết</h3>
              <div className="review-list">
                {answerList.map((item, index) => (
                  <div key={index} className={`review-item ${item.isCorrect ? 'correct' : 'incorrect'}`}>
                    <div className="review-header">
                      <span className="review-number">Câu {index + 1}</span>
                      <span className={`review-status ${item.isCorrect ? 'correct' : 'incorrect'}`}>
                        {item.isCorrect ? 'Đúng' : 'Sai'}
                      </span>
                    </div>
                    <p className="review-question">{item.question}</p>
                    <div className="review-answers">
                      <p><strong>Trả lời:</strong> {questions[index].options[item.selected]}</p>
                      {!item.isCorrect && (
                        <p><strong>Đáp án đúng:</strong> {questions[index].options[item.correct]}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="result-actions">
              <button className="btn btn-primary" onClick={handleRestart}>
                Làm Lại Quiz
              </button>
              <button className="btn btn-secondary" onClick={() => setCurrentPage('content')}>
                Xem Lại Nội Dung
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
