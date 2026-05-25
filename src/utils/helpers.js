// Utility functions for common tasks

export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// Smooth scroll to element
export const smoothScrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// Get random color from theme
export const getRandomThemeColor = () => {
  const colors = [
    'from-marx-red-700 to-marx-red-900',
    'from-red-600 to-red-800',
    'from-marx-red-800 to-red-700',
    'from-red-700 to-marx-red-900',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Format text with animation delay
export const formatDelay = (index, baseDelay = 0.05) => {
  return baseDelay * index;
};

// Check if element is mobile
export const isMobile = () => {
  return typeof window !== 'undefined' && window.innerWidth < 768;
};

// Format percentage for progress bars
export const formatPercent = (value, max) => {
  return Math.round((value / max) * 100);
};

// Debounce function
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Calculate scroll progress
export const getScrollProgress = () => {
  if (typeof window === 'undefined') return 0;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrolled = window.scrollY;
  const total = documentHeight - windowHeight;
  return total > 0 ? (scrolled / total) * 100 : 0;
};

// Map range
export const mapRange = (value, inputMin, inputMax, outputMin, outputMax) => {
  return ((value - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin) + outputMin;
};

// Clamp value
export const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};
