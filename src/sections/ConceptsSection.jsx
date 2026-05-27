import { motion } from 'framer-motion';
import { Card } from '../components/Button';
import { Section, SectionHeader, AnimatedGrid, Container } from '../components/Layout';
import { conceptsData } from '../data/content';
import { staggerItem } from '../animations/variants';
import { Factory, Landmark } from 'lucide-react';

// Icon mapping for Concepts
const conceptIconMap = {
  Factory: <Factory size={48} className='text-red-600' strokeWidth={1.5} />,
  Landmark: <Landmark size={48} className='text-red-600' strokeWidth={1.5} />
};

const getConceptIcon = (iconName) => {
  return conceptIconMap[iconName] || null;
};

export const ConceptsSection = () => {
  return (
    <Section id='concepts' className='py-20 relative'>
      <Container>
        <SectionHeader
          title='Các Khái Niệm Cơ Bản'
          subtitle='Hiểu rõ về cơ sở hạ tầng và kiến trúc thượng tầng'
        />

        <AnimatedGrid columns={2} className='mt-12'>
          {conceptsData.map((concept, index) => (
            <motion.div
              key={concept.id}
              variants={staggerItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className='group'
            >
              <Card className='h-full hover:shadow-glow-red-lg transition-all duration-300'>
                {/* Header */}
                <div className='flex items-start gap-4 mb-4'>
                  <motion.div
                    className='flex-shrink-0'
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {getConceptIcon(concept.iconName)}
                  </motion.div>
                  
                  <div className='flex-1'>
                    <h3 className='text-2xl font-bold text-white mb-1'>
                      {concept.title}
                    </h3>
                    <p className='text-sm text-gray-400'>{concept.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className='text-gray-300 mb-6 leading-relaxed'>
                  {concept.description}
                </p>

                {/* Details */}
                <div className='space-y-2 mt-6 pt-6 border-t border-gray-700/50'>
                  <p className='text-xs text-gray-500 font-semibold uppercase tracking-wider'>
                    Thành Phần Chính
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {concept.details.map((detail, idx) => (
                      <motion.span
                        key={idx}
                        className='text-xs bg-marx-red-700/20 border border-marx-red-600/30 text-marx-red-300 px-3 py-1 rounded-full'
                        whileHover={{ scale: 1.05, borderColor: '#ff1744' }}
                      >
                        {detail}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover effect line */}
                <motion.div
                  className='absolute bottom-0 left-0 h-1 bg-gradient-to-r from-marx-red-700 to-red-600'
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Card>
            </motion.div>
          ))}
        </AnimatedGrid>

        {/* Additional info */}
      </Container>
    </Section>
  );
};
