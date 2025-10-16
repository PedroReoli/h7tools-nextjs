import React from 'react';
import { cn } from '@/utils/cn';

interface StarProps {
  filled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Star: React.FC<StarProps> = ({
  filled = false,
  size = 'md',
  className,
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <svg
      className={cn(
        sizes[size],
        filled ? 'text-secondary fill-current' : 'text-gray-300 fill-current',
        className
      )}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
    </svg>
  );
};


