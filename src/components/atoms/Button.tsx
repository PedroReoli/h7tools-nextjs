import React from 'react';
import { cn } from '@/utils/cn';
import { ButtonVariant } from '@/types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  children,
  fullWidth = false,
  className,
  ...props
}, ref) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-secondary text-primary hover:bg-secondary-dark shadow-lg hover:shadow-xl focus:ring-secondary',
    secondary: 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl focus:ring-primary',
    outline: 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary focus:ring-secondary',
    ghost: 'text-primary hover:bg-gray-100 focus:ring-gray-300',
  };

  return (
    <button
      ref={ref}
      className={cn(
        baseStyles,
        variants[variant],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';


