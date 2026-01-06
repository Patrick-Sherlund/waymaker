import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  type = 'button',
  className = ''
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-full transition-all duration-300 text-sm uppercase tracking-wider';
  
  const variants = {
    primary: 'bg-[#B91C1C] text-white hover:bg-[#DC2626] hover:shadow-[0_0_24px_rgba(185,28,28,0.4)] active:scale-95',
    secondary: 'bg-transparent border-2 border-[#B91C1C] text-[#B91C1C] hover:bg-[#B91C1C]/10 hover:shadow-[0_0_24px_rgba(185,28,28,0.2)] active:scale-95',
    tertiary: 'bg-transparent text-[#9CA3AF] hover:text-[#F9FAFB] underline underline-offset-4'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
