import { motion } from 'framer-motion';
import { useState } from 'react';
import { Section, SectionHeader, Container } from '../components/Layout';
import { Card } from '../components/Button';
import { timelineData } from '../data/content';
import { Flame, Swords, Castle, Factory, Rocket, Wrench, Building2, Lightbulb } from 'lucide-react';

// Icon mapping
const iconMap = {
  Flame,
  Swords,
  Castle,
  Factory,
  Rocket
};

const getIcon = (iconName) => {
  const IconComponent = iconMap[iconName];
  return IconComponent ? <IconComponent size={28} className='text-amber-500' /> : null;
};

export const TimelineSection = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);

  return (
    <Section id='timeline' className='py-20 relative'>
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
                  {/* Point with Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center transition-all border-2 ${
                      activeTimeline === index
                        ? 'bg-gradient-to-br from-amber-600 to-amber-700 border-amber-400 shadow-lg'
                        : 'bg-dark-800/60 border-gray-700 hover:border-amber-600'
                    }`}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {getIcon(item.iconName)}
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
                    <div className='flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider font-semibold'>
                      <Wrench size={16} className='text-amber-500' />
                      <span>Cơ Sở Hạ Tầng</span>
                    </div>
                    <p className='text-gray-300 mt-2'>
                      {timelineData[activeTimeline].infrastructure}
                    </p>
                  </div>
                </div>

                {/* Right side */}
                <div className='space-y-6'>
                  <div>
                    <div className='flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider font-semibold'>
                      <Building2 size={16} className='text-amber-500' />
                      <span>Kiến Trúc Thượng Tầng</span>
                    </div>
                    <p className='text-gray-300 mt-2'>
                      {timelineData[activeTimeline].superstructure}
                    </p>
                  </div>

                  <div className='pt-4 border-t border-gray-700/50'>
                    <div className='flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider font-semibold'>
                      <Lightbulb size={16} className='text-amber-500' />
                      <span>Đặc Điểm</span>
                    </div>
                    <p className='text-gray-300 mt-2'>
                      {timelineData[activeTimeline].characteristics}
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress indicator */}
              <div className='mt-6 h-1 bg-dark-800 rounded-full overflow-hidden'>
                <motion.div
                  className='h-full bg-gradient-to-r from-amber-600 to-orange-600'
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
              className='px-6 py-2 glass rounded-lg border border-gray-700 text-gray-300 hover:border-amber-600 hover:text-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Trước
            </motion.button>
            
            <motion.button
              onClick={() => setActiveTimeline(Math.min(timelineData.length - 1, activeTimeline + 1))}
              disabled={activeTimeline === timelineData.length - 1}
              className='px-6 py-2 glass rounded-lg border border-gray-700 text-gray-300 hover:border-amber-600 hover:text-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all'
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
