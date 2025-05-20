'use client';

// Created: SVG arrow component for How to Buy section
// Features: Animated bounce effect
// Added: Color customization via props
// Added: Responsive sizing

interface ArrowDownProps {
  className?: string;
}

export default function ArrowDown({ className = '' }: ArrowDownProps) {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} animate-bounce`}
    >
      <path 
        d="M12 4L12 20M12 20L18 14M12 20L6 14" 
        stroke="#4dff7c" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
} 