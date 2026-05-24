import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Trophy, ArrowRight, RotateCcw, Home, CheckCircle2, XCircle } from 'lucide-react';

export default function Game({ setCurrentPage }) {
  const [gameMode, setGameMode] = useState('menu');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    }
  ];

  const handleStartQuiz = () => {
    setGameMode('quiz');
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setGameOver(false);
    setSelectedAnswer(null);
  };

  const handleAnswerClick = (index) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(index);
      setShowResult(true);
      if (index === questions[currentQuestion].correct) {
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameOver(true);
    }
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "Xuất Sắc! Bạn đã nắm vững kiến thức.";
    if (percentage >= 80) return "Rất Tốt! Kiến thức của bạn rất vững chắc.";
    return "Cố gắng hơn! Hãy xem lại nội dung bài học.";
  };

  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar setCurrentPage={setCurrentPage} />

      <main className="max-w-4xl mx-auto pt-40 pb-20 px-6">
        <AnimatePresence mode="wait">
          {gameMode === 'menu' && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-accent/20">
                <Trophy className="w-10 h-10 text-accent" />
              </div>
              <h1 className="text-5xl font-bold mb-6 tracking-tight">Trò Chơi Ôn Tập</h1>
              <p className="text-xl text-secondary mb-12 max-w-lg mx-auto leading-relaxed">
                Thử thách bản thân với bộ câu hỏi trắc nghiệm về Chủ nghĩa Duy vật Lịch sử.
              </p>
              <Button onClick={handleStartQuiz} className="text-lg px-12 py-4">
                Bắt đầu ngay
              </Button>
            </motion.div>
          )}

          {gameMode === 'quiz' && !gameOver && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="mb-12">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-sm font-bold text-accent uppercase tracking-widest">
                    Câu hỏi {currentQuestion + 1} / {questions.length}
                  </span>
                  <span className="text-2xl font-bold">{score} Điểm</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-accent"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-10 leading-tight">
                {questions[currentQuestion].question}
              </h2>

              <div className="grid grid-cols-1 gap-4 mb-10">
                {questions[currentQuestion].options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === questions[currentQuestion].correct;
                  
                  let stateStyle = "bg-white/5 border-white/10 text-secondary hover:border-white/30";
                  if (showResult) {
                    if (isCorrect) stateStyle = "bg-green-500/10 border-green-500/50 text-green-400";
                    else if (isSelected) stateStyle = "bg-red-500/10 border-red-500/50 text-red-400";
                    else stateStyle = "bg-white/5 border-white/5 opacity-50";
                  } else if (isSelected) {
                    stateStyle = "bg-accent/10 border-accent text-white";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerClick(index)}
                      disabled={showResult}
                      className={`p-6 rounded-2xl border-2 text-left transition-all duration-200 flex items-center justify-between group ${stateStyle}`}
                    >
                      <span className="font-medium text-lg">{option}</span>
                      {showResult && isCorrect && <CheckCircle2 className="w-6 h-6" />}
                      {showResult && isSelected && !isCorrect && <XCircle className="w-6 h-6" />}
                    </button>
                  );
                })}
              </div>

              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-accent" /> Giải thích:
                    </h4>
                    <p className="text-secondary leading-relaxed">{questions[currentQuestion].explanation}</p>
                  </div>
                  <Button onClick={handleNextQuestion} className="w-full py-4 text-lg flex items-center justify-center gap-2">
                    {currentQuestion === questions.length - 1 ? "Xem kết quả" : "Câu tiếp theo"}
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </motion.div>
              )}
            </motion.div>
          )}

          {gameOver && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="luxury-card p-16 text-center"
            >
              <Trophy className="w-20 h-20 text-accent mx-auto mb-8" />
              <h2 className="text-4xl font-bold mb-4">Hoàn thành!</h2>
              <div className="text-7xl font-bold text-accent mb-6">
                {score} <span className="text-2xl text-secondary">/ {questions.length}</span>
              </div>
              <p className="text-xl text-secondary mb-12">{getScoreMessage()}</p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button onClick={handleStartQuiz} variant="secondary" className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4" /> Thử lại
                </Button>
                <Button onClick={() => setCurrentPage('home')} className="flex items-center gap-2">
                  <Home className="w-4 h-4" /> Về trang chủ
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
