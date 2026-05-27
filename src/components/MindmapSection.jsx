import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import mindmapImage from '../assets/mindmap.jpg'

export default function MindmapSection() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  const handleScrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
    float: {
      y: [-10, 10, -10],
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
    },
  }

  const glowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
    pulse: {
      opacity: [0.4, 0.8, 0.4],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
    },
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden py-20 px-4 md:px-8"
    >
      {/* Background Gradients & Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-slate-900/10 to-green-900/20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />

        {/* Glow orbs */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header Section */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">
            Tổng Quan Học Thuyết Hình Thái Kinh Tế - Xã Hội
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Sơ đồ thể hiện mối quan hệ biện chứng giữa lực lượng sản xuất, quan hệ sản xuất, cơ sở hạ tầng và kiến trúc thượng tầng trong quá trình phát triển lịch sử xã hội.
          </p>
        </motion.div>

        {/* Mindmap Image Container */}
        <motion.div
          className="relative mb-12 md:mb-16"
          variants={itemVariants}
        >
          {/* Glow background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-green-500/20 rounded-2xl blur-2xl"
            variants={glowVariants}
            initial="hidden"
            whileInView="visible"
            animate="pulse"
            viewport={{ once: true }}
          />

          {/* Image wrapper with glassmorphism */}
          <motion.div
            className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(239, 68, 68, 0.3)' }}
            transition={{ duration: 0.3 }}
          >
            {/* Image */}
            <motion.img
              src={mindmapImage}
              alt="Sơ đồ tư duy Học thuyết hình thái kinh tế - xã hội"
              className="w-full h-auto object-cover rounded-xl"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              animate="float"
              viewport={{ once: true }}
            />

            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent rounded-xl" />
          </motion.div>

          {/* Corner accents */}
          <div className="absolute -top-2 -left-2 w-20 h-20 border-t-2 border-l-2 border-red-500/50 rounded-tl-2xl" />
          <div className="absolute -bottom-2 -right-2 w-20 h-20 border-b-2 border-r-2 border-green-500/50 rounded-br-2xl" />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          variants={itemVariants}
        >
          <motion.button
            onClick={handleScrollToContent}
            className="relative group px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button background */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-green-600 rounded-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Button glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-green-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300" />

            {/* Button text */}
            <span className="relative text-white flex items-center gap-2">
              Xem phân tích chi tiết
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>

        {/* Info cards below */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 md:mt-28"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              title: 'Lực Lượng Sản Xuất',
              description: 'Yếu tố quyết định sự phát triển của xã hội nhân loại',
              icon: '',
              color: 'from-blue-500 to-cyan-500',
            },
            {
              title: 'Cơ Sở Hạ Tầng',
              description: 'Xác định chính trị, pháp luật và ý thức xã hội',
              icon: '',
              color: 'from-red-500 to-orange-500',
            },
            {
              title: 'Kiến Trúc Thượng Tầng',
              description: 'Phản ánh và phục vụ yêu cầu của cơ sở hạ tầng',
              icon: '',
              color: 'from-green-500 to-emerald-500',
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 overflow-hidden hover:border-white/20 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(255, 255, 255, 0.1)' }}
            >
              {/* Background glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Reference anchor for smooth scroll */}
      <div ref={contentRef} className="absolute inset-x-0 top-full" />
    </section>
  )
}
