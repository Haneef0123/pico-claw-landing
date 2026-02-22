'use client';

interface ClawLogoProps {
  size?: number;
  className?: string;
}

export function ClawLogo({ size = 48, className = '' }: ClawLogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Lobster Claw SVG Path */}
      <path
        d="M12 8C12 8 8 12 8 20C8 28 12 36 24 40C36 36 40 28 40 20C40 12 36 8 36 8"
        stroke="#FF6B35"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M16 12C16 12 12 16 12 22C12 28 16 34 24 37C32 34 36 28 36 22C36 16 32 12 32 12"
        stroke="#E15928"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M20 16C20 16 17 19 17 23C17 27 20 31 24 33C28 31 31 27 31 23C31 19 28 16 28 16"
        stroke="#FF8A5C"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="24" cy="24" r="4" fill="#FF6B35" />
      <path
        d="M24 20C22 18 20 16 20 14"
        stroke="#FF6B35"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 20C26 18 28 16 28 14"
        stroke="#FF6B35"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
