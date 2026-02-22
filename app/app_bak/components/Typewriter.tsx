'use client';

import { motion } from 'framer-motion';
import { Cursor } from './Cursor';

interface TypewriterProps {
  text: string;
  className?: string;
  showCursor?: boolean;
}

export function Typewriter({ text, className = '', showCursor = true }: TypewriterProps) {
  const characters = text.split('');

  return (
    <span className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: index * 0.03,
          }}
        >
          {char}
        </motion.span>
      ))}
      {showCursor && <Cursor />}
    </span>
  );
}
