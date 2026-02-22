'use client';

interface CursorProps {
  blink?: boolean;
  className?: string;
}

export function Cursor({ blink = true, className = '' }: CursorProps) {
  return (
    <span 
      className={`inline-block w-2 h-5 bg-claw-orange ${blink ? 'cursor-blink' : ''} ${className}`}
      aria-hidden="true"
    />
  );
}
