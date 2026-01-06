import { ReactNode } from 'react';

interface ChipProps {
  children: ReactNode;
  selected?: boolean;
  onClick?: () => void;
  variant?: 'default' | 'status' | 'tag';
  className?: string;
}

export function Chip({ 
  children, 
  selected = false, 
  onClick, 
  variant = 'default',
  className = '' 
}: ChipProps) {
  const baseStyles = 'px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300';
  
  const variants = {
    default: selected
      ? 'bg-[#B91C1C] text-white shadow-[0_0_16px_rgba(185,28,28,0.4)]'
      : 'bg-[#1C1C22] text-[#9CA3AF] hover:bg-[#2A2A32] hover:text-[#F9FAFB] border border-[#4B4B55]',
    status: 'bg-transparent border border-[#B91C1C] text-[#B91C1C] text-[10px]',
    tag: 'bg-[#1C1C22] text-[#9CA3AF] border border-[#4B4B55] text-[10px]'
  };

  const Component = onClick ? 'button' : 'span';

  return (
    <Component
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </Component>
  );
}
