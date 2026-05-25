import { motion } from 'framer-motion';
import { cn } from '../utils/helpers';

// Animated background with particles
export const AnimatedBackground = ({ className = '' }) => {
  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)}>
      {/* Gradient background */}
      <div className='absolute inset-0 bg-gradient-dark-red'></div>
      
      {/* Animated grid */}
      <motion.svg
        className='absolute inset-0 w-full h-full opacity-10'
        viewBox='0 0 1200 600'
        preserveAspectRatio='xMidYMid slice'
        initial={{ opacity: 0.05 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
      >
        <defs>
          <pattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'>
            <path d='M 100 0 L 0 0 0 100' fill='none' stroke='#ff1744' strokeWidth='2' opacity='0.3'/>
          </pattern>
        </defs>
        <rect width='1200' height='600' fill='url(#grid)' />
      </motion.svg>

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute w-2 h-2 bg-marx-red-500 rounded-full'
          animate={{
            x: [0, 100 + i * 50, 0],
            y: [0, 50 + i * 30, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            repeatType: 'loop',
            delay: i * 0.5,
          }}
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 15}%`,
          }}
        />
      ))}

      {/* Gradient orbs */}
      <motion.div
        className='absolute w-96 h-96 bg-gradient-radial from-marx-red-700/20 to-transparent rounded-full blur-3xl'
        animate={{
          x: [-100, 100, -100],
          y: [-50, 50, -50],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'loop',
        }}
        style={{ left: '-10%', top: '-10%' }}
      />
      
      <motion.div
        className='absolute w-96 h-96 bg-gradient-radial from-red-700/10 to-transparent rounded-full blur-3xl'
        animate={{
          x: [100, -100, 100],
          y: [50, -50, 50],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'loop',
        }}
        style={{ right: '-10%', bottom: '-10%' }}
      />
    </div>
  );
};

// Animated text reveal
export const AnimatedText = ({ text, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
    >
      {text}
    </motion.div>
  );
};

// Glowing border container
export const GlowingContainer = ({ children, className = '', animated = true }) => {
  return (
    <motion.div
      className={cn(
        'relative p-1 rounded-xl overflow-hidden',
        className
      )}
      animate={animated ? {
        boxShadow: [
          '0 0 20px rgba(255, 23, 68, 0.3)',
          '0 0 40px rgba(255, 23, 68, 0.6)',
          '0 0 20px rgba(255, 23, 68, 0.3)',
        ],
      } : {}}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        repeatType: 'loop',
      }}
    >
      <div className='relative bg-dark-950 rounded-lg overflow-hidden'>
        {children}
      </div>
    </motion.div>
  );
};

// Floating element
export const FloatingElement = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-10, 10, -10],
        rotate: [0, 2, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
};

// Blur reveal on scroll
export const BlurReveal = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </motion.div>
  );
};
