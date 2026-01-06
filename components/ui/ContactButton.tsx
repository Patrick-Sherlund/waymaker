import { useState } from 'react';

interface TooltipProps {
  show: boolean;
}

function Tooltip({ show }: TooltipProps) {
  if (!show) return null;
  
  return (
    <div className="absolute top-full mt-2 right-0 z-50 pointer-events-none">
      <div className="bg-[#151518] border border-[#B91C1C]/30 rounded-lg px-3 py-2 shadow-[0_4px_16px_rgba(0,0,0,0.4)] min-w-[180px]">
        <div className="text-xs text-[#F9FAFB] mb-1">Talk to our team</div>
        <div className="text-[10px] text-[#9CA3AF] leading-relaxed">Schedule a conversation with our founders.</div>
      </div>
    </div>
  );
}

// Contact Icon - Chat bubble with person
function ContactIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Chat bubble */}
      <path 
        d="M2 6C2 4.34315 3.34315 3 5 3H15C16.6569 3 18 4.34315 18 6V12C18 13.6569 16.6569 15 15 15H11L7 18V15H5C3.34315 15 2 13.6569 2 12V6Z" 
        fill="white"
        opacity="0.9"
      />
      
      {/* Person icon inside bubble */}
      <circle cx="10" cy="8" r="1.5" fill="#B91C1C" />
      <path 
        d="M10 10C8.5 10 7.5 10.7 7.5 11.5V12.5H12.5V11.5C12.5 10.7 11.5 10 10 10Z" 
        fill="#B91C1C"
      />
    </svg>
  );
}

interface ContactButtonProps {
  onClick: () => void;
}

export function ContactButton({ onClick }: ContactButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="relative">
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-10 h-10 rounded-full bg-[#B91C1C] hover:bg-[#DC2626] flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_24px_rgba(185,28,28,0.4)] active:scale-95"
        aria-label="Talk to our team"
      >
        <ContactIcon />
      </button>
      
      <Tooltip show={isHovered} />
    </div>
  );
}
