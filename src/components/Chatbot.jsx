import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FiMessageCircle, FiX, FiSend, FiRefreshCw } from 'react-icons/fi';
import { chatbotQuestions } from '../data/content';
import { sendMessageToGemini, resetChatSession } from '../utils/gemini';
import ReactMarkdown from 'react-markdown';

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Xin chào! Tôi là AI tutor Gemini của bạn.\n\nHãy hỏi tôi bất cứ điều gì về Triết học Mác - Lênin và Chủ nghĩa Duy vật Lịch sử!',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll xuống tin nhắn mới nhất
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Focus input khi mở chatbox
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const askGemini = async (userText) => {
    setIsTyping(true);
    try {
      const aiResponse = await sendMessageToGemini(userText);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, type: 'bot', text: aiResponse, timestamp: new Date() },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: 'bot',
          text: `Lỗi: ${err.message || 'Không thể kết nối Gemini API'}`,
          timestamp: new Date(),
          isError: true,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuestionClick = (question) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), type: 'user', text: question.question, timestamp: new Date() },
    ]);
    askGemini(question.question);
  };

  const handleSendMessage = () => {
    const text = inputValue.trim();
    if (!text || isTyping) return;
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), type: 'user', text, timestamp: new Date() },
    ]);
    setInputValue('');
    askGemini(text);
  };

  const handleReset = () => {
    resetChatSession();
    setMessages([
      {
        id: Date.now(),
        type: 'bot',
        text: 'Cuộc trò chuyện mới bắt đầu!  Hỏi tôi bất cứ điều gì về Triết học Mác - Lênin nhé!',
        timestamp: new Date(),
      },
    ]);
  };

  const showSuggestions = messages.length <= 2 && !isTyping;

  return (
    <>
      {/* ===== NÚT MỞ CHATBOT ===== */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-marx-red-700 to-red-600 flex items-center justify-center text-white z-[60] shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        style={{ boxShadow: '0 0 20px rgba(185,28,28,0.5)' }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <FiX size={22} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <FiMessageCircle size={22} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* ===== CỬA SỔ CHAT ===== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            // Dùng fixed + bottom/right + height cố định + flex column
            style={{
              position: 'fixed',
              bottom: '88px',
              right: '32px',
              width: '360px',
              height: '520px',
              zIndex: 60,
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(185,28,28,0.4)',
              background: '#0a0a0f',
            }}
          >
            {/* ── HEADER (không co giãn) ── */}
            <div
              style={{
                flexShrink: 0,
                background: 'linear-gradient(135deg, #991b1b, #b91c1c)',
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontWeight: 700, fontSize: '15px', color: '#fff' }}>AI Tutor</span>
                  <span
                    style={{
                      fontSize: '10px',
                      background: 'rgba(255,255,255,0.2)',
                      color: '#fff',
                      padding: '2px 8px',
                      borderRadius: '999px',
                    }}
                  >
                    Gemini
                  </span>
                </div>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', marginTop: '2px' }}>
                  Triết học Mác - Lênin
                </p>
              </div>
              <motion.button
                onClick={handleReset}
                title="Cuộc trò chuyện mới"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '6px',
                  color: '#fff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                }}
                whileHover={{ rotate: 180, background: 'rgba(255,255,255,0.2)' }}
                transition={{ duration: 0.35 }}
              >
                <FiRefreshCw size={15} />
              </motion.button>
            </div>

            {/* ── VÙNG TIN NHẮN (co giãn + scroll) ── */}
            <div
              data-lenis-prevent
              onWheel={(e) => e.stopPropagation()}
              style={{
                flex: 1,
                overflowY: 'auto',
                overflowX: 'hidden',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                background: 'rgba(10,10,15,0.95)',
              }}
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22 }}
                  style={{
                    display: 'flex',
                    justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start',
                    alignItems: 'flex-end',
                    gap: '8px',
                  }}
                >
                  {/* Avatar bot */}
                  {msg.type === 'bot' && (
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #991b1b, #dc2626)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '13px',
                        flexShrink: 0,
                      }}
                    >
                      AI
                    </div>
                  )}

                  {/* Bubble tin nhắn */}
                  <div
                    style={{
                      maxWidth: '85%',
                      padding: '12px 14px',
                      borderRadius:
                        msg.type === 'user'
                          ? '16px 16px 4px 16px'
                          : '16px 16px 16px 4px',
                      fontSize: '13px',
                      lineHeight: '1.7',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      background:
                        msg.type === 'user'
                          ? 'linear-gradient(135deg, #991b1b, #b91c1c)'
                          : msg.isError
                            ? 'rgba(127,29,29,0.4)'
                            : 'rgba(30,30,40,0.95)',
                      color:
                        msg.type === 'user'
                          ? '#fff'
                          : msg.isError
                            ? '#fca5a5'
                            : '#e2e8f0',
                      border: msg.isError
                        ? '1px solid rgba(185,28,28,0.4)'
                        : '1px solid rgba(255,255,255,0.04)',
                    }}
                  >
                    {msg.type === 'bot' ? (
                      <div
                        style={{
                          fontSize: '13px',
                        }}
                        className="markdown-content"
                      >
                        <ReactMarkdown>
                          {msg.text}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      msg.text
                    )}

                    <div
                      style={{
                        fontSize: '10px',
                        opacity: 0.45,
                        marginTop: '8px',
                        textAlign: 'right',
                      }}
                    >
                      {msg.timestamp.toLocaleTimeString('vi-VN', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}
                  >
                    <div
                      style={{
                        width: '28px', height: '28px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #991b1b, #dc2626)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '13px', flexShrink: 0,
                      }}
                    >
                      AI
                    </div>
                    <div
                      style={{
                        display: 'flex', gap: '5px', padding: '12px 14px',
                        background: 'rgba(30,30,40,0.95)',
                        borderRadius: '16px 16px 16px 4px',
                        alignItems: 'center',
                      }}
                    >
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          style={{
                            width: '7px', height: '7px',
                            borderRadius: '50%',
                            background: '#b91c1c',
                          }}
                          animate={{ y: [0, -6, 0] }}
                          transition={{ delay: i * 0.15, duration: 0.55, repeat: Infinity, ease: 'easeInOut' }}
                        />
                      ))}
                    </div>
                    <span style={{ fontSize: '11px', color: '#6b7280', fontStyle: 'italic', paddingBottom: '4px' }}>
                      Đang trả lời...
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Anchor để auto-scroll */}
              <div ref={messagesEndRef} />
            </div>

            {/* ── CÂU HỎI GỢI Ý (không co giãn, ẩn sau khi có nhiều tin nhắn) ── */}
            <AnimatePresence>
              {showSuggestions && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    flexShrink: 0,
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    background: 'rgba(10,10,20,0.9)',
                    padding: '10px 12px',
                    overflow: 'hidden',
                  }}
                >
                  <p style={{ fontSize: '10px', color: '#6b7280', fontWeight: 600, marginBottom: '6px' }}>
                    Câu hỏi gợi ý:
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    {chatbotQuestions.slice(0, 3).map((q) => (
                      <motion.button
                        key={q.id}
                        onClick={() => handleQuestionClick(q)}
                        style={{
                          textAlign: 'left',
                          fontSize: '11px',
                          padding: '6px 10px',
                          borderRadius: '8px',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: '#9ca3af',
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                        whileHover={{ x: 4, color: '#ef4444', borderColor: 'rgba(185,28,28,0.4)' }}
                      >
                        {q.question}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── INPUT (không co giãn) ── */}
            <div
              style={{
                flexShrink: 0,
                borderTop: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(8,8,14,0.98)',
                padding: '10px 12px',
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                placeholder={isTyping ? 'Gemini đang xử lý...' : 'Hỏi về triết học Mác-Lênin...'}
                disabled={isTyping}
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '10px',
                  padding: '9px 13px',
                  fontSize: '13px',
                  color: '#e2e8f0',
                  outline: 'none',
                  opacity: isTyping ? 0.5 : 1,
                  cursor: isTyping ? 'not-allowed' : 'text',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(185,28,28,0.6)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
              />
              <motion.button
                onClick={handleSendMessage}
                disabled={isTyping || !inputValue.trim()}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: isTyping || !inputValue.trim()
                    ? 'rgba(255,255,255,0.06)'
                    : 'linear-gradient(135deg, #991b1b, #b91c1c)',
                  border: 'none',
                  color: isTyping || !inputValue.trim() ? '#4b5563' : '#fff',
                  cursor: isTyping || !inputValue.trim() ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'background 0.2s, color 0.2s',
                }}
              >
                <FiSend size={16} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== QUICK CHIPS KHI CHATBOX ĐÓNG ===== */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            style={{
              position: 'fixed',
              bottom: '36px',
              right: '68px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '6px',
              zIndex: 50,
            }}
            className="hidden md:flex"
          >
            {chatbotQuestions.slice(0, 3).map((q, index) => (
              <motion.button
                key={q.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                onClick={() => {
                  setIsOpen(true);
                  setTimeout(() => handleQuestionClick(q), 350);
                }}
                style={{
                  background: 'rgba(10,10,20,0.9)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '10px',
                  padding: '6px 12px',
                  fontSize: '11px',
                  color: '#9ca3af',
                  cursor: 'pointer',
                  maxWidth: '210px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  textAlign: 'left',
                }}
                whileHover={{ x: -5, color: '#ef4444', borderColor: 'rgba(185,28,28,0.5)' }}
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
