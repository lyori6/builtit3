import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
}
export function Button({
  children,
  variant = 'primary',
  fullWidth = false,
  onClick,
  className = ''
}: ButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-primary text-text-primary hover:bg-primary/90 shadow-[0_0_15px_rgba(112,0,255,0.2)] hover:shadow-[0_0_20px_rgba(112,0,255,0.4)]',
    secondary: 'bg-surface text-text-primary border border-border hover:border-primary hover:bg-surface/90',
    outline: 'bg-transparent text-primary border border-primary hover:bg-primary/10',
    accent: 'bg-accent text-background hover:bg-accent/90 font-semibold'
  };

  return (
    <button 
      onClick={onClick} 
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
}