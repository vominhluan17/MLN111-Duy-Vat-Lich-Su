import { motion } from 'framer-motion';
import { cn } from '../utils/helpers';
import { fadeInUp, staggerContainer, staggerItem } from '../animations/variants';

// Section wrapper with animation
export const Section = ({ children, className = '', id = '' }) => {
  return (
    <motion.section
      id={id}
      className={cn('py-20 px-4 md:px-8 relative overflow-hidden', className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, margin: '-100px' }}
    >
      {children}
    </motion.section>
  );
};

// Section header
export const SectionHeader = ({ title, subtitle = '', align = 'center' }) => {
  return (
    <motion.div
      className={cn(
        'mb-16 max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        align === 'left' && 'text-left'
      )}
      variants={staggerContainer}
      initial='initial'
      whileInView='animate'
      viewport={{ once: true, margin: '-100px' }}
    >
      <motion.h2
        className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-marx-red-400 to-red-600 bg-clip-text text-transparent'
        variants={staggerItem}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className='text-gray-400 text-lg'
          variants={staggerItem}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

// Animated container for grid items
export const AnimatedGrid = ({ children, columns = 2, className = '' }) => {
  return (
    <motion.div
      className={cn(
        `grid gap-8`,
        columns === 2 && 'grid-cols-1 md:grid-cols-2',
        columns === 3 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        columns === 4 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
        className
      )}
      variants={staggerContainer}
      initial='initial'
      whileInView='animate'
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </motion.div>
  );
};

// Divider with animation
export const AnimatedDivider = ({ className = '' }) => {
  return (
    <motion.div
      className={cn('h-1 bg-gradient-to-r from-transparent via-marx-red-600 to-transparent', className)}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    />
  );
};

// Icon with background
export const IconBox = ({ icon, size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-12 h-12 text-2xl',
    md: 'w-16 h-16 text-3xl',
    lg: 'w-24 h-24 text-5xl',
  };

  return (
    <motion.div
      className={cn(
        'flex items-center justify-center rounded-lg glass border border-marx-red-700/30',
        sizeClasses[size],
        className
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.div>
  );
};

// Container with max width
export const Container = ({ children, className = '' }) => {
  return (
    <div className={cn('max-w-7xl mx-auto w-full', className)}>
      {children}
    </div>
  );
};

// Page section with full width background
export const PageSection = ({ children, background = 'dark', className = '' }) => {
  const bgClasses = {
    dark: 'bg-gradient-dark-red',
    darker: 'bg-dark-950',
    transparent: 'bg-transparent',
  };

  return (
    <div className={cn('w-full', bgClasses[background], className)}>
      <Container>{children}</Container>
    </div>
  );
};

// Staggered list item
export const StaggerListItem = ({ children, delay = 0 }) => {
  return (
    <motion.li
      variants={staggerItem}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.li>
  );
};
