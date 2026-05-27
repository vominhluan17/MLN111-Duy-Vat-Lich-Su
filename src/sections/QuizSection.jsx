import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import { Section, SectionHeader, Container } from '../components/Layout';
import { quizData } from '../data/content';
import { staggerItem } from '../animations/variants';

export const QuizSection = () => {
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, answerIndex) => {
    if (!answers[questionId]) {
      setAnswers({
        ...answers,
        [questionId]: answerIndex
      });
    }
  };

  const getAnswerStatus = (questionId, answerIndex, isCorrect) => {
    if (answers[questionId] === undefined) {
      return 'unanswered';
    }
    if (answers[questionId] === answerIndex) {
      return isCorrect ? 'correct' : 'incorrect';
    }
    return 'other';
  };

  const answerCount = Object.keys(answers).length;
  const correctCount = Object.keys(answers).filter(qId => {
    const question = quizData.find(q => q.id === parseInt(qId));
    const selectedAnswerIndex = answers[qId];
    return question.answers[selectedAnswerIndex]?.isCorrect;
  }).length;

  return (
    <Section id='quiz' className='py-20 relative'>
      <Container>
        <SectionHeader
          title='Câu Hỏi Ôn Tập & Thảo Luận'
          subtitle='Kiểm tra kiến thức của bạn về biện chứng cơ sở-thượng tầng'
        />

        {/* Progress Bar */}
        {answerCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className='mb-12 p-6 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50'
          >
            <div className='flex items-center justify-between mb-3'>
              <span className='text-gray-300 font-semibold'>
                Tiến độ: {answerCount}/{quizData.length}
              </span>
              <span className='text-yellow-600 font-bold'>
                {correctCount} câu đúng
              </span>
            </div>
            <div className='w-full bg-gray-700/50 rounded-full h-3 overflow-hidden border border-gray-600/50'>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(answerCount / quizData.length) * 100}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className='h-full bg-gradient-to-r from-yellow-600 to-yellow-500'
              />
            </div>
          </motion.div>
        )}

        {/* Quiz Questions */}
        <div className='space-y-8'>
          {quizData.map((question, index) => (
            <motion.div
              key={question.id}
              variants={staggerItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className='group'
            >
              {/* Question Card */}
              <div className='p-6 rounded-lg bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300'>
                {/* Question Header */}
                <div className='mb-6'>
                  <div className='flex items-start gap-3 mb-3'>
                    <div className='flex items-center justify-center w-8 h-8 rounded-full bg-yellow-600/20 border border-yellow-600/50 flex-shrink-0'>
                      <span className='text-yellow-500 font-bold text-sm'>{index + 1}</span>
                    </div>
                    <h3 className='text-lg md:text-xl font-bold text-gray-100'>
                      {question.question}
                    </h3>
                  </div>
                </div>

                {/* Answer Options */}
                <div className='space-y-3 mb-6'>
                  {question.answers.map((answer, answerIndex) => {
                    const status = getAnswerStatus(question.id, answerIndex, answer.isCorrect);
                    const isSelected = answers[question.id] === answerIndex;

                    return (
                      <motion.button
                        key={answerIndex}
                        onClick={() => handleAnswer(question.id, answerIndex)}
                        disabled={answers[question.id] !== undefined}
                        whileHover={
                          answers[question.id] === undefined
                            ? { scale: 1.02 }
                            : {}
                        }
                        whileTap={
                          answers[question.id] === undefined
                            ? { scale: 0.98 }
                            : {}
                        }
                        className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-300 flex items-center gap-3 ${
                          status === 'unanswered'
                            ? 'bg-gray-700/30 border-gray-600/50 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500/50 cursor-pointer'
                            : status === 'correct' && isSelected
                            ? 'bg-green-900/30 border-green-600/80 text-green-300'
                            : status === 'incorrect' && isSelected
                            ? 'bg-red-900/30 border-red-600/80 text-red-300'
                            : 'bg-gray-700/10 border-gray-600/30 text-gray-400'
                        }`}
                      >
                        {/* Icon */}
                        <div className='flex-shrink-0'>
                          {status === 'correct' && isSelected && (
                            <CheckCircle size={20} className='text-green-500' strokeWidth={2.5} />
                          )}
                          {status === 'incorrect' && isSelected && (
                            <XCircle size={20} className='text-red-500' strokeWidth={2.5} />
                          )}
                          {status === 'unanswered' && (
                            <div className='w-5 h-5 rounded-full border-2 border-gray-500' />
                          )}
                          {status === 'other' && (
                            <div className='w-5 h-5 rounded-full border-2 border-gray-600' />
                          )}
                        </div>

                        {/* Answer Text */}
                        <span className='flex-1 font-medium text-sm md:text-base'>
                          {answer.text}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Feedback */}
                <AnimatePresence>
                  {answers[question.id] !== undefined && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className='overflow-hidden'
                    >
                      {/* Result Message */}
                      <div className='mb-4 flex items-start gap-2'>
                        {question.answers[answers[question.id]]?.isCorrect ? (
                          <div className='flex items-start gap-2 pt-1'>
                            <CheckCircle size={18} className='text-green-500 flex-shrink-0 mt-0.5' strokeWidth={2.5} />
                            <span className='text-green-400 font-medium text-sm'>
                              Chính xác!
                            </span>
                          </div>
                        ) : (
                          <div className='flex items-start gap-2 pt-1'>
                            <XCircle size={18} className='text-red-500 flex-shrink-0 mt-0.5' strokeWidth={2.5} />
                            <span className='text-red-400 font-medium text-sm'>
                              Chưa chính xác, hãy xem lại lý thuyết nhé!
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Explanation */}
                      <div className='p-4 rounded-lg bg-gray-900/50 border border-gray-700/50'>
                        <p className='text-gray-300 text-sm leading-relaxed'>
                          <span className='font-semibold text-gray-200'>Giải thích: </span>
                          {question.explanation}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        {answerCount === quizData.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className='mt-12 p-8 rounded-lg bg-gradient-to-br from-yellow-900/20 to-red-900/20 border border-yellow-600/30 text-center'
          >
            <h3 className='text-2xl font-bold text-gray-100 mb-3'>
              Hoàn Thành!
            </h3>
            <p className='text-lg text-gray-300 mb-2'>
              Bạn trả lời đúng <span className='font-bold text-yellow-400'>{correctCount}/{quizData.length}</span> câu
            </p>
            <p className='text-gray-400 text-sm'>
              {correctCount === quizData.length
                ? '🎉 Xuất sắc! Bạn đã nắm vững kiến thức!'
                : correctCount >= 4
                ? '👍 Tốt! Bạn đã hiểu rõ phần lớn nội dung.'
                : correctCount >= 2
                ? '📚 Bạn cần ôn tập thêm một số phần.'
                : '💪 Hãy xem lại lý thuyết và cố gắng thêm nhé!'}
            </p>
          </motion.div>
        )}
      </Container>
    </Section>
  );
};
