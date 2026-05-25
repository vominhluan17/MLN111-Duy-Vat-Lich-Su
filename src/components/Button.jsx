import { motion } from 'framer-motion';
import { cn } from '../utils/helpers';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 cursor-pointer';
  
  const variants = {
    primary: 'bg-marx-red-700 hover:bg-marx-red-800 text-white shadow-lg hover:shadow-glow-red-lg glow-red',
    secondary: 'bg-transparent border-2 border-marx-red-700 text-marx-red-400 hover:bg-marx-red-700/10',
    outline: 'bg-transparent border border-gray-600 text-gray-300 hover:border-marx-red-700 hover:text-marx-red-400',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const Card = ({ children, className = '', hoverable = true, ...props }) => {
  return (
    <motion.div
      whileHover={hoverable ? { y: -10 } : {}}
      className={cn(
        'glass p-6 rounded-xl border border-gray-700 transition-all duration-300',
        hoverable && 'hover:border-marx-red-600 hover:shadow-glow-red',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-marx-red-700/30 border border-marx-red-600 text-marx-red-300',
    primary: 'bg-marx-red-700 text-white',
    outline: 'border border-marx-red-600 text-marx-red-400',
  };

  return (
    <span className={cn(
      'inline-block px-3 py-1 rounded-full text-sm font-medium',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};

export const GlowText = ({ children, className = '', as: Component = 'span' }) => {
  return (
    <Component className={cn('text-glow text-marx-red-400', className)}>
      {children}
    </Component>
  );
};
