import { motion } from 'framer-motion';
import { Container } from '../components/Layout';
import { Card } from '../components/Button';
import { staggerContainer, staggerItem } from '../animations/variants';
import {
  FaPlay,
  FaChartLine,
  FaGlobe,
  FaScaleBalanced
} from 'react-icons/fa6';

export const CaseStudyVideoSection = ({ videoUrl = 'https://www.youtube.com/embed/5wPtaLLdQKk' }) => {
  // Extract video ID from URL if needed
  const getEmbedUrl = (url) => {
    if (url.includes('embed')) return url;
    if (url.includes('youtu.be')) {
      const videoId = url.split('youtu.be/')[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes('youtube.com/watch')) {
      const videoId = new URLSearchParams(new URL(url).search).get('v');
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  const analysisPoints = [
    {
      id: 1,
      icon: FaChartLine,
      title: 'Kinh Tế Phát Triển',
      description: 'Nền kinh tế hiện đại, toàn cầu hóa, xu hướng tiêu thụ cao tạo nên cơ sở hạ tầng mới',
      color: 'from-blue-600 to-blue-400',
    },
    {
      id: 2,
      icon: FaGlobe,
      title: 'Toàn Cầu Hóa & Internet',
      description: 'Công nghệ số, mạng xã hội, kết nối toàn cầu thay đổi mối quan hệ kinh tế và xã hội',
      color: 'from-purple-600 to-purple-400',
    },
    {
      id: 3,
      icon: FaScaleBalanced,
      title: 'Xung Đột Giá Trị',
      description: 'Truyền thống vs hiện đại, cá nhân vs tập thể, vật chất vs tinh thần',
      color: 'from-red-600 to-red-400',
    },
    {
      id: 4,
      icon: FaChartLine,
      title: 'Thích Nghi Xã Hội',
      description: 'Sinh viên phải thích nghi, tìm kiếm ý nghĩa, xác định giá trị sống mới',
      color: 'from-green-600 to-green-400',
    },
  ];

  return (
    <section className='relative w-full py-24 px-4 overflow-hidden bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {/* Floating blur circles */}
        <motion.div
          className='absolute top-10 left-10 w-96 h-96 bg-gradient-radial from-marx-red-700/20 to-transparent rounded-full blur-3xl'
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        />

        <motion.div
          className='absolute bottom-20 right-10 w-96 h-96 bg-gradient-radial from-blue-700/15 to-transparent rounded-full blur-3xl'
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'loop',
            delay: 2,
          }}
        />

        {/* Grid pattern overlay */}
        <motion.svg
          className='absolute inset-0 w-full h-full opacity-5'
          viewBox='0 0 1200 600'
          preserveAspectRatio='xMidYMid slice'
          initial={{ opacity: 0.03 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        >
          <defs>
            <pattern id='case-grid' width='100' height='100' patternUnits='userSpaceOnUse'>
              <path d='M 100 0 L 0 0 0 100' fill='none' stroke='#ff1744' strokeWidth='2' opacity='0.3' />
            </pattern>
          </defs>
          <rect width='1200' height='600' fill='url(#case-grid)' />
        </motion.svg>
      </div>

      {/* Content */}
      <Container className='relative z-10'>
        {/* Header */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <span className='bg-gradient-to-r from-marx-red-400 via-red-500 to-marx-red-600 bg-clip-text text-transparent'>
              Biến Đổi Giá Trị Sống
            </span>
            <br />
            <span className='text-gray-300'>của Sinh Viên Hiện Nay</span>
          </motion.h2>

          <motion.p
            className='text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mt-6 leading-relaxed'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Cơ sở hạ tầng thay đổi kéo theo sự biến đổi của hệ tư tưởng, lối sống và giá trị xã hội.
            <br />
            <span className='text-marx-red-400 font-semibold'>Khám phá biện chứng này qua lăng kính triết học Mác-Lênin</span>
          </motion.p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          className='mb-16'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.div
            className='relative rounded-2xl overflow-hidden group cursor-pointer'
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Border glow effect */}
            <motion.div
              className='absolute inset-0 rounded-2xl bg-gradient-to-r from-marx-red-600 via-red-600 to-marx-red-600 p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300'
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 100 }}
            >
              <div className='absolute inset-0 rounded-2xl bg-dark-950' />
            </motion.div>

            {/* Glow shadow */}
            <motion.div
              className='absolute inset-0 rounded-2xl bg-gradient-to-r from-marx-red-700/0 via-marx-red-600/20 to-marx-red-700/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 pointer-events-none'
            />

            {/* Video iframe container */}
            <div className='relative rounded-2xl overflow-hidden glass border border-gray-700/50 group-hover:border-marx-red-600/50 transition-colors duration-300'>
              {/* Aspect ratio wrapper 16:9 */}
              <div className='relative w-full' style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className='absolute top-0 left-0 w-full h-full rounded-xl'
                  src={embedUrl}
                  title='Phan tich gia tri song sinh vien'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowFullScreen
                />

                {/* Overlay gradient on hover */}
                <motion.div
                  className='absolute inset-0 rounded-xl bg-gradient-to-t from-dark-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'
                />
              </div>
            </div>
          </motion.div>

          {/* Video title and description */}
          <motion.div
            className='mt-6 text-center'
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className='text-sm text-gray-500 flex items-center justify-center gap-2'>
              <FaPlay className='text-marx-red-500' />
              Nhan play de xem phan tich chi tiet
            </p>
          </motion.div>
        </motion.div>

        {/* Analysis Points Grid */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
          variants={staggerContainer}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true, margin: '-100px' }}
        >
          {analysisPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <motion.div
                key={point.id}
                variants={staggerItem}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className='h-full glass border border-gray-700/50 hover:border-gray-600 group transition-all duration-300'
                  hoverable={true}
                >
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-br ${point.color} flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <IconComponent className='text-2xl text-white' />
                  </motion.div>

                  {/* Title */}
                  <h3 className='text-lg font-bold text-white mb-2'>
                    {point.title}
                  </h3>

                  {/* Description */}
                  <p className='text-sm text-gray-400 leading-relaxed mb-4'>
                    {point.description}
                  </p>

                  {/* Bottom accent */}
                  <motion.div
                    className={`h-1 bg-gradient-to-r ${point.color} rounded-full w-0 group-hover:w-full transition-all duration-300`}
                  />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className='mt-20 text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className='inline-block p-6 glass rounded-xl border border-marx-red-700/30 hover:border-marx-red-600/50 transition-all duration-300'>
            <p className='text-gray-300 text-sm md:text-base'>
              <span className='text-marx-red-400 font-semibold'>Nhan xet:</span> Bien doi kinh te-xa hoi quyet dinh su thay doi trong he tu tuong. Sinh vien hien nay sinh song trong boi canh cong nghe-toan cau-thi truong, nen gia tri song cua ho cung thay doi theo.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
