import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { AnimatedBackground, GlowingContainer } from '../components/Background';
import { Container } from '../components/Layout';
import { smoothScrollTo } from '../utils/helpers';
import { FaArrowDown } from 'react-icons/fa6';

export const HeroSection = () => {
  return (
    <section className='relative w-full h-screen flex items-center justify-center overflow-hidden'>
      {/* Background animation */}
      <AnimatedBackground />

      {/* Content */}
      <Container className='relative z-10'>
        <motion.div
          className='text-center space-y-8'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='space-y-4'
          >
            <h1 className='text-5xl md:text-7xl font-bold font-display leading-tight'>
              <span className='bg-gradient-to-r from-marx-red-400 via-red-500 to-marx-red-600 bg-clip-text text-transparent'>
                Biện Chứng
              </span>
              <br />
              <span className='text-gray-300'>Cơ Sở & Thượng Tầng</span>
            </h1>
            
            <p className='text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto'>
              Khám phá mối quan hệ tương tác giữa cơ sở hạ tầng kinh tế và kiến trúc thượng tầng xã hội
            </p>
          </motion.div>

          {/* Subtitle quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className='text-sm md:text-base text-gray-500 italic'
          >
            Chương 3: Chủ Nghĩa Duy Vật Lịch Sử - Học Thuyết Hình Thái Kinh Tế - Xã Hội
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className='flex flex-col md:flex-row gap-4 justify-center items-center pt-8'
          >
            <Button
              variant='primary'
              size='lg'
              onClick={() => smoothScrollTo('concepts')}
              className='px-8'
            >
              Khám Phá Bài Học
            </Button>
            
            <Button
              variant='secondary'
              size='lg'
              onClick={() => smoothScrollTo('dialectical')}
              className='px-8'
            >
              Xem Sơ Đồ Tư Duy
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className='flex flex-col items-center gap-2'>
          <span className='text-sm text-gray-500'>Cuộn để tiếp tục</span>
          <FaArrowDown className='text-marx-red-600 text-xl' />
        </div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className='absolute top-20 left-10 w-20 h-20 border border-marx-red-700/30 rounded-lg'
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'loop' }}
      />
      
      <motion.div
        className='absolute bottom-20 right-10 w-32 h-32 border border-marx-red-600/20 rounded-full'
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, repeatType: 'loop' }}
      />
    </section>
  );
};
