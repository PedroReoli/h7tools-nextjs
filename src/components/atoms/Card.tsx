import React from 'react';
import { cn } from '@/utils/cn';
import { CardVariant } from '@/types';

interface CardProps {
  variant?: CardVariant;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  children,
  className,
  onClick,
}) => {
  const baseStyles = 'rounded-lg overflow-hidden transition-all duration-300';
  
  const variants = {
    default: 'bg-white shadow-md hover:shadow-xl',
    transparent: 'bg-transparent border-2 border-secondary hover:bg-secondary/10',
    elevated: 'bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-1',
  };

  return (
    <div
      className={cn(
        baseStyles,
        variants[variant],
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};


