import React from 'react';
import { cn } from '@/utils/cn';
import { TextVariant } from '@/types';

interface TextProps {
  variant?: TextVariant;
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  color?: 'primary' | 'secondary' | 'white' | 'gray';
  bold?: boolean;
}

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  children,
  className,
  as,
  color,
  bold = false,
}) => {
  const variants = {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold',
    h2: 'text-3xl md:text-4xl lg:text-5xl font-bold',
    h3: 'text-2xl md:text-3xl lg:text-4xl font-semibold',
    h4: 'text-xl md:text-2xl lg:text-3xl font-semibold',
    h5: 'text-lg md:text-xl lg:text-2xl font-medium',
    h6: 'text-base md:text-lg lg:text-xl font-medium',
    body: 'text-base',
    caption: 'text-sm',
    small: 'text-xs',
  };

  const colors = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    white: 'text-white',
    gray: 'text-gray-600',
  };

  const Component = as || (variant.startsWith('h') ? variant : 'p') as keyof JSX.IntrinsicElements;

  return (
    <Component
      className={cn(
        variants[variant],
        color && colors[color],
        bold && 'font-bold',
        className
      )}
    >
      {children}
    </Component>
  );
};


