import { motion } from 'framer-motion';
import { useState } from 'react';
import { Section, SectionHeader, Container } from '../components/Layout';
import { Card } from '../components/Button';
import { timelineData } from '../data/content';

export const TimelineSection = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);

  return (
    <Section className='py-20 relative'>
      <Container>
        <SectionHeader
          title='Timeline Phát Triển Xã Hội'
          subtitle='Từ cộng sản nguyên thủy đến xã hội chủ nghĩa'
        />

        {/* Timeline visualization */}
        <motion.div
          className='mt-16'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Horizontal timeline */}
          <div className='relative mb-12'>
            {/* Timeline line */}
            <div className='absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-marx-red-700 to-transparent transform -translate-y-1/2'></div>

            {/* Timeline points */}
            <div className='flex justify-between relative z-10 md:flex-row flex-col gap-8'>
              {timelineData.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveTimeline(index)}
                  className='flex-1 text-center'
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Point */}
                  <motion.div
                    className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold transition-all ${
                      activeTimeline === index
                        ? 'bg-marx-red-700 text-white shadow-glow-red border-2 border-marx-red-500'
                        : 'bg-dark-800 text-gray-400 border-2 border-gray-700 hover:border-marx-red-700'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.icon}
                  </motion.div>

                  {/* Label */}
                  <p className='text-sm font-semibold text-gray-400 md:text-base'>{item.period}</p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Active timeline details */}
          <motion.div
            key={activeTimeline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className='overflow-hidden'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {/* Left side */}
                <div className='space-y-6'>
                  <div>
                    <p className='text-sm text-gray-500 uppercase tracking-wider'>Thời Kỳ</p>
                    <h3 className='text-3xl font-bold text-white mt-2'>
                      {timelineData[activeTimeline].period}
                    </h3>
                    <p className='text-gray-400 text-sm mt-2'>
                      {timelineData[activeTimeline].years}
                    </p>
                  </div>

                  <div>
                    <p className='text-xs text-gray-500 uppercase tracking-wider font-semibold'>
                      🔧 Cơ Sở Hạ Tầng
                    </p>
                    <p className='text-gray-300 mt-2'>
                      {timelineData[activeTimeline].infrastructure}
                    </p>
                  </div>
                </div>

                {/* Right side */}
                <div className='space-y-6'>
                  <div>
                    <p className='text-xs text-gray-500 uppercase tracking-wider font-semibold'>
                      🏛️ Kiến Trúc Thượng Tầng
                    </p>
                    <p className='text-gray-300 mt-2'>
                      {timelineData[activeTimeline].superstructure}
                    </p>
                  </div>

                  <div className='pt-4 border-t border-gray-700/50'>
                    <p className='text-xs text-gray-500 uppercase tracking-wider font-semibold'>
                      📌 Đặc Điểm
                    </p>
                    <p className='text-gray-300 mt-2'>
                      {timelineData[activeTimeline].characteristics}
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress indicator */}
              <div className='mt-6 h-1 bg-dark-800 rounded-full overflow-hidden'>
                <motion.div
                  className='h-full bg-gradient-to-r from-marx-red-600 to-red-600'
                  initial={{ width: 0 }}
                  animate={{ width: `${((activeTimeline + 1) / timelineData.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </Card>
          </motion.div>

          {/* Navigation buttons */}
          <div className='flex gap-4 justify-center mt-8'>
            <motion.button
              onClick={() => setActiveTimeline(Math.max(0, activeTimeline - 1))}
              disabled={activeTimeline === 0}
              className='px-6 py-2 glass rounded-lg border border-gray-700 text-gray-300 hover:border-marx-red-600 hover:text-marx-red-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Trước
            </motion.button>
            
            <motion.button
              onClick={() => setActiveTimeline(Math.min(timelineData.length - 1, activeTimeline + 1))}
              disabled={activeTimeline === timelineData.length - 1}
              className='px-6 py-2 glass rounded-lg border border-gray-700 text-gray-300 hover:border-marx-red-600 hover:text-marx-red-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sau →
            </motion.button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};
