// Animation variants for Framer Motion
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
};

export const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.6 }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }
};

export const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -60 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
};

export const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 60 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const revealText = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

// Scroll animation variants
export const parallax = (value) => ({
  y: value * 0.5,
  transition: { type: "spring", damping: 20 }
});

export const blur = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
  transition: { duration: 0.7, ease: "easeOut" }
};

export const glowAnimation = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(255, 23, 68, 0.3)",
      "0 0 40px rgba(255, 23, 68, 0.6)",
      "0 0 20px rgba(255, 23, 68, 0.3)"
    ],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      repeatType: "loop"
    }
  }
};

export const floatingAnimation = {
  animate: {
    y: [0, -15, 0],
    rotate: [0, 2, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut"
    }
  }
};

// Container variants
export const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

export const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};
