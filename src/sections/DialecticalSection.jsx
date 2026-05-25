import { motion } from 'framer-motion';
import { useState } from 'react';
import { Section, SectionHeader, Container } from '../components/Layout';
import { Card } from '../components/Button';
import { dialecticalData } from '../data/content';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';

export const DialecticalSection = () => {
  const [activeRelation, setActiveRelation] = useState(null);

  return (
    <Section id='dialectical' className='py-20 relative'>
      <Container>
        <SectionHeader
          title={dialecticalData.title}
          subtitle={dialecticalData.description}
        />

        {/* Interactive Diagram */}
        <motion.div
          className='mt-16 relative min-h-96'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className='space-y-12'>
            {dialecticalData.parts.map((part, index) => (
              <motion.div
                key={part.id}
                className='space-y-4'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Title */}
                <div className='flex items-center gap-4 mb-6'>
                  {part.direction === 'left-to-right' ? (
                    <FaArrowRight className='text-marx-red-600 text-2xl' />
                  ) : (
                    <FaArrowLeft className='text-marx-red-600 text-2xl' />
                  )}
                  <h3 className='text-xl font-bold text-marx-red-400'>
                    Mối Quan Hệ: {part.relation}
                  </h3>
                </div>

                {/* Diagram */}
                <div className='flex flex-col md:flex-row items-center gap-8'>
                  {/* From */}
                  <motion.div
                    className='flex-1 aspect-square'
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className='h-full flex items-center justify-center bg-gradient-dark-red border-2 border-marx-red-700 hover:border-marx-red-500 hover:shadow-glow-red-lg'>
                      <div className='text-center'>
                        <div className='text-4xl mb-3'>
                          {part.direction === 'left-to-right' ? '⚙️' : '🏛️'}
                        </div>
                        <p className='text-lg font-bold text-white'>{part.from}</p>
                      </div>
                    </Card>
                  </motion.div>

                  {/* Arrow with animation */}
                  <motion.div
                    className='flex-shrink-0'
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <svg className='w-16 h-16 md:h-20 md:w-20 text-marx-red-600' viewBox='0 0 100 100'>
                      <defs>
                        <marker
                          id='arrowhead'
                          markerWidth='10'
                          markerHeight='10'
                          refX='9'
                          refY='3'
                          orient='auto'
                        >
                          <polygon points='0 0, 10 3, 0 6' fill='#d32f2f' />
                        </marker>
                      </defs>
                      <line
                        x1='10'
                        y1='50'
                        x2='80'
                        y2='50'
                        stroke='currentColor'
                        strokeWidth='3'
                        markerEnd='url(#arrowhead)'
                      />
                      <text
                        x='50'
                        y='35'
                        textAnchor='middle'
                        className='text-xs fill-marx-red-400'
                        fontSize='12'
                      >
                        {part.relation}
                      </text>
                    </svg>
                  </motion.div>

                  {/* To */}
                  <motion.div
                    className='flex-1 aspect-square'
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className='h-full flex items-center justify-center bg-gradient-dark-red border-2 border-marx-red-700 hover:border-marx-red-500 hover:shadow-glow-red-lg'>
                      <div className='text-center'>
                        <div className='text-4xl mb-3'>
                          {part.direction === 'left-to-right' ? '🏛️' : '⚙️'}
                        </div>
                        <p className='text-lg font-bold text-white'>{part.to}</p>
                      </div>
                    </Card>
                  </motion.div>
                </div>

                {/* Expandable details */}
                <motion.button
                  onClick={() => setActiveRelation(activeRelation === part.id ? null : part.id)}
                  className='w-full mt-4 p-4 glass rounded-lg border border-marx-red-600/50 text-left transition-all hover:border-marx-red-500 hover:shadow-glow-red'
                  whileHover={{ scale: 1.02 }}
                >
                  <div className='flex items-center justify-between'>
                    <span className='font-semibold text-marx-red-400'>
                      {activeRelation === part.id ? '▼' : '▶'} Chi Tiết
                    </span>
                  </div>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: activeRelation === part.id ? 'auto' : 0,
                      opacity: activeRelation === part.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className='overflow-hidden'
                  >
                    <div className='mt-4 pt-4 border-t border-gray-700/50 space-y-3'>
                      <p className='text-gray-300'>{part.description}</p>
                      <div className='space-y-2'>
                        <p className='text-sm text-gray-500'>Ví dụ:</p>
                        {part.examples.map((example, idx) => (
                          <p key={idx} className='text-sm text-gray-400 flex items-center gap-2'>
                            <span className='text-marx-red-500'>•</span>
                            {example}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary box */}
        <motion.div
          className='mt-16 p-8 glass rounded-xl border border-marx-red-700/30'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className='text-2xl font-bold text-white mb-6 text-center'>
            🔄 Biện Chứng Hai Chiều
          </h3>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='space-y-3'>
              <p className='text-marx-red-400 font-semibold'>👇 Cơ Sở Quyết Định (Chủ Yếu)</p>
              <p className='text-gray-300'>
                Thay đổi công nghệ, khoa học, năng lực sản xuất → Thay đổi quan hệ sản xuất → Luật pháp, chính sách phải thích ứng
              </p>
            </div>
            
            <div className='space-y-3'>
              <p className='text-red-400 font-semibold'>👆 Thượng Tầng Tác Động Ngược (Phụ Yếu)</p>
              <p className='text-gray-300'>
                Chính sách tiến bộ, luật pháp nhân văn → Khuyến khích sáng tạo → Phát triển công nghệ mới
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};
