import { motion } from 'framer-motion';
import { useState } from 'react';
import { Section, SectionHeader, AnimatedGrid, Container } from '../components/Layout';
import { Card } from '../components/Button';
import { caseStudiesData } from '../data/content';

export const CaseStudiesSection = () => {
  const [flipped, setFlipped] = useState({});

  return (
    <Section className='py-20 relative'>
      <Container>
        <SectionHeader
          title='Phân Tích Thực Tiễn'
          subtitle='Các ví dụ về mối quan hệ cơ sở-thượng tầng trong thế giới hiện đại'
        />

        <AnimatedGrid columns={3} className='mt-12'>
          {caseStudiesData.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1 }}
              className='h-80'
              onHoverStart={() => setFlipped(prev => ({ ...prev, [caseStudy.id]: true }))}
              onHoverEnd={() => setFlipped(prev => ({ ...prev, [caseStudy.id]: false }))}
            >
              <motion.div
                className='relative w-full h-full'
                animate={{
                  rotateY: flipped[caseStudy.id] ? 180 : 0,
                }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front */}
                <motion.div
                  className='absolute w-full h-full'
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <Card className='h-full flex flex-col justify-between p-6'>
                    <div>
                      <div className='text-4xl mb-4'>{caseStudy.emoji}</div>
                      <h3 className='text-xl font-bold text-white mb-2'>
                        {caseStudy.title}
                      </h3>
                      <p className='text-xs text-gray-500 uppercase tracking-wider'>
                        {caseStudy.category}
                      </p>
                    </div>
                    
                    <p className='text-sm text-gray-400 text-center'>
                      Hover để xem chi tiết →
                    </p>
                  </Card>
                </motion.div>

                {/* Back */}
                <motion.div
                  className='absolute w-full h-full'
                  style={{
                    backfaceVisibility: 'hidden',
                    rotateY: 180,
                  }}
                >
                  <Card className='h-full flex flex-col justify-between p-6 bg-gradient-dark-red border-2 border-marx-red-600'>
                    <div className='space-y-3'>
                      <div>
                        <p className='text-xs text-gray-500 uppercase tracking-wider font-bold'>
                          ⚙️ Cơ Sở
                        </p>
                        <p className='text-sm text-gray-300 mt-1'>
                          {caseStudy.infrastructure}
                        </p>
                      </div>

                      <div>
                        <p className='text-xs text-gray-500 uppercase tracking-wider font-bold'>
                          🏛️ Thượng Tầng
                        </p>
                        <p className='text-sm text-gray-300 mt-1'>
                          {caseStudy.superstructure}
                        </p>
                      </div>
                    </div>

                    <div className='pt-3 border-t border-gray-600/50'>
                      <p className='text-xs text-gray-500 uppercase tracking-wider font-bold'>
                        💥 Tác Động
                      </p>
                      <p className='text-sm text-marx-red-300 mt-1 font-semibold'>
                        {caseStudy.impact}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatedGrid>

        {/* Summary */}
        <motion.div
          className='mt-16 p-8 glass rounded-xl border border-marx-red-700/30'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className='text-2xl font-bold text-white mb-6'>
            🔍 Nhận Xét Chung
          </h3>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='space-y-2'>
              <p className='text-marxed-600 font-semibold'>✓ Công Nghệ Dẫn Dắt</p>
              <p className='text-gray-400 text-sm'>
                Các công nghệ mới (Mạng xã hội, AI, Blockchain) là yếu tố cơ sở, tạo áp lực để thợp pháp luật thay đổi
              </p>
            </div>

            <div className='space-y-2'>
              <p className='text-marx-red-600 font-semibold'>✓ Pháp Luật Phản Ứng</p>
              <p className='text-gray-400 text-sm'>
                Nhà nước và pháp luật luôn phải "chạy theo" công nghệ, tìm cách quản lý, điều chỉnh
              </p>
            </div>

            <div className='space-y-2'>
              <p className='text-marx-red-600 font-semibold'>✓ Vòng Lặp Biện Chứng</p>
              <p className='text-gray-400 text-sm'>
                Khi pháp luật hoàn thiện, nó có thể khuyến khích hoặc cản trở phát triển công nghệ tiếp theo
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};
