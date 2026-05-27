import { motion } from 'framer-motion';
import { useState } from 'react';
import { Section, Container } from '../components/Layout';
import { GlowText } from '../components/Button';
import { dialecticalData } from '../data/content';
import { Settings, Landmark } from 'lucide-react';

// Icon mapping for Dialectical icons
const dialecticalIconMap = {
  Settings: <Settings size={40} className='text-red-600' strokeWidth={1.5} />,
  Landmark: <Landmark size={40} className='text-red-600' strokeWidth={1.5} />
};

const getDialecticalIcon = (iconName) => {
  return dialecticalIconMap[iconName] || null;
};

export const DialecticalSection = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Section id='dialectical' className='py-20 relative'>
      <Container>
        {/* Section Header */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className='text-5xl md:text-6xl font-bold text-center mb-4 tracking-wider leading-[1.3]'>
            <span className='text-marx-red-500'>{dialecticalData.title}</span>
          </h2>
          <p className='text-xl text-gray-400 font-light'>{dialecticalData.description}</p>
        </motion.div>

        {/* 2-Column Grid Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
          {dialecticalData.parts.map((part, index) => (
            <motion.div
              key={part.id}
              className='flex flex-col'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Card Container */}
              <div className='p-8 rounded-2xl border-2 border-marx-red-900/60 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm hover:border-marx-red-600/80 hover:shadow-[0_0_40px_rgba(211,47,47,0.15)] transition-all duration-300 flex flex-col flex-grow'>
                {/* Label */}
                <div className='mb-8 pb-4 border-b border-marx-red-900/40'>
                  <h3 className='text-2xl font-bold text-marx-red-500 flex items-center gap-2'>
                    {part.label}
                  </h3>
                </div>

                {/* Diagram Section */}
                <div className='mb-8 py-6'>
                  <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                    {/* From Box */}
                    <div className='flex flex-col items-center gap-3 flex-1 min-w-0'>
                      <div className='w-16 h-16 flex items-center justify-center'>
                        {getDialecticalIcon(part.fromIconName)}
                      </div>
                      <p className='text-gray-300 font-semibold text-center text-sm md:text-base'>
                        {part.from}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className='flex-shrink-0 px-2 md:px-4'>
                      <motion.div
                        animate={{ x: part.direction === 'left-to-right' ? [0, 8, 0] : [0, -8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <svg className='w-12 h-12 md:w-16 md:h-16 text-marx-red-600' viewBox='0 0 100 100' fill='none'>
                          <line
                            x1={part.direction === 'left-to-right' ? '20' : '80'}
                            y1='50'
                            x2={part.direction === 'left-to-right' ? '80' : '20'}
                            y2='50'
                            stroke='currentColor'
                            strokeWidth='3'
                          />
                          <polygon
                            points={
                              part.direction === 'left-to-right'
                                ? '75,45 85,50 75,55'
                                : '25,45 15,50 25,55'
                            }
                            fill='currentColor'
                          />
                        </svg>
                      </motion.div>
                    </div>

                    {/* To Box */}
                    <div className='flex flex-col items-center gap-3 flex-1 min-w-0'>
                      <div className='w-16 h-16 flex items-center justify-center'>
                        {getDialecticalIcon(part.toIconName)}
                      </div>
                      <p className='text-gray-300 font-semibold text-center text-sm md:text-base'>
                        {part.to}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Theory Section */}
                <div className='mb-8 space-y-3 flex-grow'>
                  <p className='text-lg font-bold text-white leading-relaxed'>
                    {part.mainTheory}
                  </p>
                  <p className='text-gray-400 text-sm leading-relaxed'>
                    {part.description}
                  </p>
                </div>

                {/* Accordion Button */}
                <motion.button
                  onClick={() => toggleExpand(part.id)}
                  className='w-full mt-auto p-4 rounded-lg border border-marx-red-700/50 bg-transparent hover:bg-marx-red-900/20 transition-all duration-300 text-left'
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className='flex items-center gap-2'>
                    <motion.span
                      animate={{ rotate: expandedId === part.id ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                      className='text-marx-red-400 font-bold'
                    >
                      ▶
                    </motion.span>
                    <span className='font-semibold text-marx-red-400'>Chi Tiết</span>
                  </div>

                  {/* Expandable Content */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: expandedId === part.id ? 'auto' : 0,
                      opacity: expandedId === part.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className='overflow-hidden'
                  >
                    <div className='mt-4 pt-4 border-t border-gray-700/50'>
                      <p className='text-gray-100 text-sm leading-relaxed font-light'>
                        {part.detailsText}
                      </p>
                    </div>
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important Points Section */}
        <motion.div
          className='mt-16 p-8 glass rounded-xl border border-marx-red-700/30'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className='text-xl font-bold text-white mb-4'>Điểm Quan Trọng</h3>
          <div className='space-y-3 text-gray-300'>
            <p>
              • <GlowText>Cơ sở hạ tầng là nền tảng</GlowText> - Quyết định toàn bộ cấu trúc và diện mạo của xã hội.
            </p>
            <p>
              • <GlowText>Thượng tầng phản ánh cơ sở</GlowText> - Chính trị, pháp luật, hệ tư tưởng, đạo đức đều sinh ra và biến đổi dựa trên nền tảng kinh tế.
            </p>
            <p>
              • <GlowText>Tác động hai chiều</GlowText> - Cơ sở hạ tầng mang tính quyết định, nhưng kiến trúc thượng tầng có tính độc lập tương đối và tác động ngược trở lại.
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};
