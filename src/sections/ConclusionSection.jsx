import { motion } from 'framer-motion';
import { Section, SectionHeader, Container } from '../components/Layout';
import { Card, Badge } from '../components/Button';
import { conclusionData } from '../data/content';
import { FaQuoteLeft } from 'react-icons/fa6';

export const ConclusionSection = () => {
  return (
    <Section className='py-20 relative'>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-marx-red-400 to-red-600 bg-clip-text text-transparent mb-4'>
            {conclusionData.title}
          </h2>
        </motion.div>

        {/* Main quote */}
        <motion.div
          className='max-w-4xl mx-auto mb-16'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <Card className='border-2 border-marx-red-700 bg-gradient-dark-red'>
            <div className='flex gap-6 items-start'>
              <FaQuoteLeft className='text-3xl text-marx-red-600 flex-shrink-0' />
              <div>
                <p className='text-lg md:text-xl leading-relaxed text-gray-200 italic'>
                  {conclusionData.quote}
                </p>
                <p className='text-sm text-gray-500 mt-4'>— Karl Marx</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Main points grid */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {conclusionData.mainPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className='h-full text-center space-y-3'>
                <div className='text-3xl'>
                  {['🎯', '🔄', '🌍', '👥'][index]}
                </div>
                <h3 className='font-bold text-white'>{point.title}</h3>
                <p className='text-sm text-gray-400'>{point.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary */}
        <motion.div
          className='max-w-3xl mx-auto'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <Card className='text-center space-y-6'>
            <h3 className='text-2xl font-bold text-white'>
              📚 Tóm Tắt Bài Học
            </h3>

            <p className='text-gray-300 leading-relaxed text-lg'>
              {conclusionData.summary}
            </p>

            {/* Key takeaways */}
            <div className='border-t border-gray-700/50 pt-6 mt-6 space-y-3 text-left'>
              <p className='font-semibold text-marx-red-400 text-center mb-4'>
                💡 Những Điểm Quan Trọng Cần Nhớ:
              </p>

              <div className='space-y-3'>
                <p className='flex items-start gap-3'>
                  <Badge className='flex-shrink-0 mt-1'>1</Badge>
                  <span className='text-gray-300'>
                    <strong>Cơ sở hạ tầng là nền tảng:</strong> Sản xuất vật chất quyết định mọi khía cạnh của xã hội
                  </span>
                </p>

                <p className='flex items-start gap-3'>
                  <Badge className='flex-shrink-0 mt-1'>2</Badge>
                  <span className='text-gray-300'>
                    <strong>Thượng tầng phản ánh cơ sở:</strong> Luật pháp, chính trị, tư tưởng đều xuất phát từ kinh tế
                  </span>
                </p>

                <p className='flex items-start gap-3'>
                  <Badge className='flex-shrink-0 mt-1'>3</Badge>
                  <span className='text-gray-300'>
                    <strong>Biện chứng hai chiều:</strong> Mặc dù cơ sở quyết định, thượng tầng cũng có tác động ngược lại
                  </span>
                </p>

                <p className='flex items-start gap-3'>
                  <Badge className='flex-shrink-0 mt-1'>4</Badge>
                  <span className='text-gray-300'>
                    <strong>Hiểu quy luật để hành động:</strong> Nhận thức được quy luật giúp con người hành động có chủ đích
                  </span>
                </p>

                <p className='flex items-start gap-3'>
                  <Badge className='flex-shrink-0 mt-1'>5</Badge>
                  <span className='text-gray-300'>
                    <strong>Ứng dụng trong thực tế:</strong> Công nghệ, chính sách, và xã hội luôn biến động theo quy luật này
                  </span>
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Footer message */}
        <motion.div
          className='text-center mt-16'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className='text-gray-500 text-sm'>
            Hãy tiếp tục tìm hiểu để hiểu rõ hơn về cách xã hội hoạt động! 🚀
          </p>
        </motion.div>
      </Container>
    </Section>
  );
};
