'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function AnimatedSection({ children, className = '', delay = 0, direction = 'up' }: AnimatedSectionProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'left': return { opacity: 0, x: -50, y: 0 };
      case 'right': return { opacity: 0, x: 50, y: 0 };
      case 'down': return { opacity: 0, x: 0, y: -30 };
      case 'up':
      default: return { opacity: 0, x: 0, y: 30 };
    }
  };

  const getFinalPosition = () => {
    return { opacity: 1, x: 0, y: 0 };
  };

  return (
    <motion.div
      className={className}
      initial={getInitialPosition()}
      whileInView={getFinalPosition()}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
}
