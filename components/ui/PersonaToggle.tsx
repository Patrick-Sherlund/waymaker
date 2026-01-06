import { useState, useContext, createContext, ReactNode } from 'react';
import { useMode } from '../../contexts/ModeContext';

// Create a theme context to pass down light/dark theme
const ThemeContext = createContext<'light' | 'dark'>('dark');

export const useTheme = () => useContext(ThemeContext);

interface TooltipProps {
  show: boolean;
  title: string;
  description: string;
  theme?: 'light' | 'dark';
}

function Tooltip({ show, title, description, theme = 'dark' }: TooltipProps) {
  if (!show) return null;
  
  return (
    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
      <div className={`rounded-lg px-3 py-2 min-w-[200px] ${
        theme === 'light'
          ? 'bg-white border border-[#E5E7EB] shadow-lg'
          : 'bg-[#151518] border border-[#B91C1C]/30 shadow-[0_4px_16px_rgba(0,0,0,0.4)]'
      }`}>
        <div className={`text-xs mb-1 ${theme === 'light' ? 'text-[#111827]' : 'text-[#F9FAFB]'}`}>{title}</div>
        <div className={`text-[10px] leading-relaxed ${theme === 'light' ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`}>{description}</div>
      </div>
    </div>
  );
}

// Hiring Teams Icon - Group of three people
function HiringTeamsIcon({ isSelected, theme = 'dark' }: { isSelected: boolean; theme?: 'light' | 'dark' }) {
  const fillColor = isSelected 
    ? '#FFFFFF' 
    : theme === 'light' ? '#6B7280' : '#6B7280';
  
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Front person */}
      <circle cx="10" cy="7" r="2.5" fill={fillColor} opacity={isSelected ? "1" : "0.8"} />
      <path 
        d="M10 10.5C7.5 10.5 5.5 12 5.5 14V16H14.5V14C14.5 12 12.5 10.5 10 10.5Z" 
        fill={fillColor} 
        opacity={isSelected ? "1" : "0.8"}
      />
      
      {/* Left person (smaller, behind) */}
      <circle cx="4.5" cy="6" r="2" fill={fillColor} opacity={isSelected ? "0.7" : "0.5"} />
      <path 
        d="M4.5 9C2.5 9 1 10.2 1 11.5V13H5V11.5C5 10.5 4.8 9.7 4.5 9Z" 
        fill={fillColor} 
        opacity={isSelected ? "0.7" : "0.5"}
      />
      
      {/* Right person (smaller, behind) */}
      <circle cx="15.5" cy="6" r="2" fill={fillColor} opacity={isSelected ? "0.7" : "0.5"} />
      <path 
        d="M15.5 9C17.5 9 19 10.2 19 11.5V13H15V11.5C15 10.5 15.2 9.7 15.5 9Z" 
        fill={fillColor} 
        opacity={isSelected ? "0.7" : "0.5"}
      />
    </svg>
  );
}

// Candidate Icon - Single person with graduation cap
function CandidateIcon({ isSelected, theme = 'dark' }: { isSelected: boolean; theme?: 'light' | 'dark' }) {
  const fillColor = isSelected 
    ? '#FFFFFF' 
    : theme === 'light' ? '#6B7280' : '#6B7280';
  
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Person head */}
      <circle cx="10" cy="8" r="3" fill={fillColor} opacity={isSelected ? "1" : "0.8"} />
      
      {/* Person body */}
      <path 
        d="M10 12C6.5 12 4 13.5 4 15.5V18H16V15.5C16 13.5 13.5 12 10 12Z" 
        fill={fillColor} 
        opacity={isSelected ? "1" : "0.8"}
      />
      
      {/* Graduation cap */}
      <path 
        d="M10 2L3 5L10 8L17 5L10 2Z" 
        fill={fillColor}
      />
      <path 
        d="M16.5 5.5V9C16.5 9.5 13.5 11 10 11C6.5 11 3.5 9.5 3.5 9V5.5" 
        stroke={fillColor} 
        strokeWidth="1" 
        fill="none"
        opacity="0.6"
      />
      {/* Tassel */}
      <circle cx="17" cy="5" r="0.8" fill={fillColor} opacity="0.8" />
    </svg>
  );
}

export function PersonaToggle({ theme = 'dark' }: { theme?: 'light' | 'dark' }) {
  const { mode, setMode } = useMode();
  const [hoveredIcon, setHoveredIcon] = useState<'hiring' | 'candidate' | null>(null);
  
  const isHiringMode = mode === 'FOR HIRING TEAMS';
  
  return (
    <div className={`flex items-center gap-1 rounded-full p-1 ${
      theme === 'light'
        ? 'bg-[#F3F4F6] border border-[#E5E7EB]'
        : 'bg-[#111116] border border-[#2A2A32]'
    }`}>
      {/* Hiring Teams Button */}
      <div className="relative">
        <button
          onClick={() => setMode('FOR HIRING TEAMS')}
          onMouseEnter={() => setHoveredIcon('hiring')}
          onMouseLeave={() => setHoveredIcon(null)}
          className={`relative h-9 rounded-full flex items-center justify-center gap-2 transition-all duration-300 ${
            isHiringMode
              ? 'bg-[#B91C1C] px-3'
              : theme === 'light'
              ? 'hover:bg-white hover:border hover:border-[#E5E7EB] w-9'
              : 'hover:bg-[#1C1C22] hover:border hover:border-[#4B4B55] w-9'
          }`}
          aria-label="Switch to hiring teams view"
        >
          <HiringTeamsIcon isSelected={isHiringMode} theme={theme} />
          {isHiringMode && (
            <span className="text-xs text-white whitespace-nowrap">
              Hiring Teams
            </span>
          )}
        </button>
        
        <Tooltip
          show={hoveredIcon === 'hiring'}
          title="Hiring teams"
          description="View the site tailored for companies and hiring managers."
          theme={theme}
        />
      </div>
      
      {/* Candidate Button */}
      <div className="relative">
        <button
          onClick={() => setMode('FOR CANDIDATES')}
          onMouseEnter={() => setHoveredIcon('candidate')}
          onMouseLeave={() => setHoveredIcon(null)}
          className={`relative h-9 rounded-full flex items-center justify-center gap-2 transition-all duration-300 ${
            !isHiringMode
              ? 'bg-[#B91C1C] px-3'
              : theme === 'light'
              ? 'hover:bg-white hover:border hover:border-[#E5E7EB] w-9'
              : 'hover:bg-[#1C1C22] hover:border hover:border-[#4B4B55] w-9'
          }`}
          aria-label="Switch to candidates view"
        >
          <CandidateIcon isSelected={!isHiringMode} theme={theme} />
          {!isHiringMode && (
            <span className="text-xs text-white whitespace-nowrap">
              Candidates
            </span>
          )}
        </button>
        
        <Tooltip
          show={hoveredIcon === 'candidate'}
          title="Candidates"
          description="View the site tailored for talent and job seekers."
          theme={theme}
        />
      </div>
    </div>
  );
}