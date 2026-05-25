import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi';
import { Card } from '../components/Button';
import { chatbotQuestions } from '../data/content';

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Xin chào! 👋 Tôi là AI tutor của bạn. Hỏi tôi bất cứ điều gì về triết học Mác - Lênin!',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto scroll to newest message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleQuestionClick = (question) => {
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: question.question,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        text: question.answer,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800 + Math.random() * 1200);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Find similar question or give generic response
    const similarQuestion = chatbotQuestions.find(q =>
      inputValue.toLowerCase().includes(q.question.toLowerCase().split('?')[0])
    );

    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        text: similarQuestion?.answer || 'Câu hỏi hay! Theo lý thuyết duy vật lịch sử, điều này liên quan chặt chẽ đến mối quan hệ giữa cơ sở hạ tầng và kiến trúc thượng tầng. Vui lòng chọn một câu hỏi gợi ý hoặc hỏi cụ thể hơn. 🤔',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800 + Math.random() * 1200);
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className='fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-r from-marx-red-700 to-red-600 shadow-glow-red-lg flex items-center justify-center text-white z-40 hover:shadow-glow-red-xl'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <FiX className='text-2xl' />
        ) : (
          <FiMessageCircle className='text-2xl' />
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className='fixed bottom-28 right-8 w-full max-w-sm h-96 rounded-2xl overflow-hidden shadow-2xl z-40'
          >
            <Card className='h-full flex flex-col border-2 border-marx-red-700 p-0'>
              {/* Header */}
              <div className='bg-gradient-to-r from-marx-red-700 to-red-600 p-4 text-white'>
                <h3 className='font-bold text-lg'>🤖 AI Tutor</h3>
                <p className='text-xs text-gray-200 opacity-80'>Hỗ trợ học tập</p>
              </div>

              {/* Messages */}
              <div className='flex-1 overflow-y-auto p-4 space-y-4 bg-dark-950/50'>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-marx-red-700 text-white rounded-br-none'
                          : 'bg-gray-800 text-gray-200 rounded-bl-none'
                      }`}
                    >
                      <p className='text-sm leading-relaxed whitespace-pre-wrap'>
                        {message.text}
                      </p>
                      <p className='text-xs opacity-60 mt-1'>
                        {message.timestamp.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className='flex gap-2 p-3 bg-gray-800 rounded-lg w-fit'
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className='w-2 h-2 bg-marx-red-500 rounded-full'
                        animate={{ y: [0, -8, 0] }}
                        transition={{ delay: i * 0.1, duration: 0.6, repeat: Infinity }}
                      />
                    ))}
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Suggested questions */}
              {messages.length <= 2 && (
                <div className='px-4 py-3 border-t border-gray-700/50 bg-dark-900/50'>
                  <p className='text-xs text-gray-500 mb-2 font-semibold'>Câu hỏi gợi ý:</p>
                  <div className='space-y-2 max-h-20 overflow-y-auto'>
                    {chatbotQuestions.slice(0, 2).map((q) => (
                      <motion.button
                        key={q.id}
                        onClick={() => handleQuestionClick(q)}
                        className='w-full text-left text-xs p-2 rounded bg-dark-800 hover:bg-dark-700 text-gray-400 hover:text-marx-red-400 transition-colors truncate'
                        whileHover={{ x: 5 }}
                      >
                        {q.question}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className='border-t border-gray-700/50 p-3 bg-dark-900 flex gap-2'>
                <input
                  type='text'
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder='Hỏi gì đó...'
                  className='flex-1 bg-dark-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-marx-red-600'
                />
                <motion.button
                  onClick={handleSendMessage}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='bg-marx-red-700 hover:bg-marx-red-800 text-white rounded-lg px-3 py-2 transition-colors'
                >
                  <FiSend />
                </motion.button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick questions floating panel when closed */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className='fixed bottom-8 right-28 space-y-2 hidden md:flex flex-col items-end'
          >
            {chatbotQuestions.slice(0, 3).map((q, index) => (
              <motion.button
                key={q.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  setIsOpen(true);
                  setTimeout(() => handleQuestionClick(q), 300);
                }}
                className='bg-dark-800/90 backdrop-blur text-gray-300 hover:text-marx-red-400 text-xs px-4 py-2 rounded-lg border border-gray-700/50 hover:border-marx-red-600 transition-all w-48 text-left truncate'
                whileHover={{ x: -5, scale: 1.05 }}
              >
                {q.question}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
