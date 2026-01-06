import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  selected?: boolean;
  hoverable?: boolean;
  className?: string;
  onClick?: () => void;
}

export function Card({ 
  children, 
  selected = false, 
  hoverable = true,
  className = '',
  onClick 
}: CardProps) {
  const baseStyles = 'bg-[#0D0D10] rounded-xl p-6 transition-all duration-300';
  
  const interactiveStyles = hoverable
    ? 'hover:bg-[#1C1C22] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
    : '';
    
  const selectedStyles = selected
    ? 'border-2 border-[#B91C1C] shadow-[0_0_24px_rgba(185,28,28,0.3)] bg-[#1C1C22]'
    : 'border border-[#2A2A32]';

  const Component = onClick ? 'button' : 'div';

  return (
    <Component
      onClick={onClick}
      className={`${baseStyles} ${interactiveStyles} ${selectedStyles} ${onClick ? 'cursor-pointer text-left w-full' : ''} ${className}`}
    >
      {children}
    </Component>
  );
}