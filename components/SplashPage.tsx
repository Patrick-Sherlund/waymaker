import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Lock } from 'lucide-react';

const logoImage = '/assets/logo-splash-big.png';

interface SplashPageProps {
  onEnterDefense: () => void;
  onEnterSearch?: () => void;
}

interface TooltipProps {
  show: boolean;
  title: string;
  description: string;
}

function Tooltip({ show, title, description }: TooltipProps) {
  if (!show) return null;
  
  return (
    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
      <div className="bg-white border border-[#E5E7EB] shadow-lg rounded-lg px-3 py-2 min-w-[200px]">
        <div className="text-xs mb-1 text-[#111827]">{title}</div>
        <div className="text-[10px] leading-relaxed text-[#6B7280]">{description}</div>
      </div>
    </div>
  );
}

export function SplashPage({ onEnterDefense, onEnterSearch }: SplashPageProps) {
  const [hoveredButton, setHoveredButton] = useState<'search' | 'defense' | null>(null);
  const defenseVideoRef = useRef<HTMLVideoElement>(null);
  const searchVideoRef = useRef<HTMLVideoElement>(null);

  // Preload videos when component mounts
  useEffect(() => {
    if (defenseVideoRef.current) {
      defenseVideoRef.current.load();
    }
    if (searchVideoRef.current) {
      searchVideoRef.current.load();
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#F3F4F6]">
      
      {/* Preload videos for instant loading - hidden video elements that actually load the content */}
      <div className="hidden">
        <video ref={defenseVideoRef} preload="auto">
          <source src="https://github.com/Patrick-Sherlund/waymaker/raw/refs/heads/master/WAYMAKER-DEFENSE.mp4" type="video/mp4" />
        </video>
        <video ref={searchVideoRef} preload="auto">
          <source src="https://github.com/Patrick-Sherlund/waymaker/raw/refs/heads/master/WAYMAKER-PRIVATE.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Subtle Background Glow on Hover */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: hoveredButton === 'search' 
            ? 'radial-gradient(circle at 45% 50%, rgba(229, 231, 235, 0.5) 0%, transparent 40%)'
            : hoveredButton === 'defense'
            ? 'radial-gradient(circle at 55% 50%, rgba(254, 226, 226, 0.5) 0%, transparent 40%)'
            : 'transparent',
          opacity: hoveredButton ? 1 : 0
        }}
      />

      {/* Main Content - Centered */}
      <main className="relative flex flex-col items-center justify-center min-h-screen px-6" style={{ paddingTop: '5vh', paddingBottom: '10vh' }}>
        
        {/* Hero / Content Stack - 8pt spacing system */}
        <div className="flex flex-col items-center">
          
          {/* Logo - Scaled up for better visual weight */}
          <div className="mb-10"> {/* Increased from 24px to 40px spacing */}
            <img src={logoImage} alt="Waymaker" className="h-[80px] lg:h-[104px] w-auto" />
          </div>

          {/* Eyebrow Label - Intentional micro-label */}
          <p className="text-[12px] uppercase tracking-[0.14em] text-[#6B7280] font-semibold mb-6"> {/* Increased from 12px to 24px spacing */}
            Choose Your Path
          </p>
          
          {/* Hero / Headline Wrap */}
          <div className="max-w-[740px] text-center mb-10"> {/* Increased from 26px to 40px spacing */}
            <h1 className="text-[3rem] lg:text-[56px] leading-[1.12] text-[#0A0A0A] font-bold tracking-[-0.01em]">
              Where do you want to start?
            </h1>
          </div>

          {/* Button Group - DO NOT MODIFY BUTTON STYLING */}
          <div 
            className="relative w-full max-w-[720px] lg:max-w-[720px] max-w-[90%] bg-gradient-to-b from-[#FFFFFF] to-[#F3F4F6] border border-[#E5E7EB] rounded-[28px] lg:rounded-full p-2 shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition-all duration-300"
            style={{
              boxShadow: hoveredButton === 'defense' 
                ? '0 20px 50px rgba(220, 38, 38, 0.15), 0 18px 40px rgba(15,23,42,0.08)'
                : hoveredButton === 'search'
                ? '0 20px 50px rgba(220, 38, 38, 0.08), 0 18px 40px rgba(15,23,42,0.08)'
                : '0 18px 40px rgba(15,23,42,0.08)'
            }}
          >
            <div className="flex flex-col lg:flex-row w-full gap-2 lg:gap-0">
              
              {/* Segment 1: Waymaker Search Group */}
              <div className="relative flex-1">
                <button
                  onClick={onEnterSearch}
                  onMouseEnter={() => setHoveredButton('search')}
                  onMouseLeave={() => setHoveredButton(null)}
                  className={`
                    group w-full h-[54px] rounded-full
                    flex items-center justify-center px-6
                    transition-all duration-300 ease-out
                    ${hoveredButton === 'search' ? 'scale-[1.02] z-10' : 'scale-100 z-0'}
                  `}
                  style={{
                    background: hoveredButton === 'search'
                      ? 'linear-gradient(to right, #FFFFFF, #F9FAFB)'
                      : 'linear-gradient(to right, #FAFAFA, #F3F4F6)',
                    border: hoveredButton === 'search' 
                      ? '1.5px solid #DC2626'
                      : '1.5px solid #E5E7EB',
                    boxShadow: hoveredButton === 'search'
                      ? 'inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 4px 12px rgba(220, 38, 38, 0.15)'
                      : 'inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 2px 6px rgba(0, 0, 0, 0.03)'
                  }}
                >
                  <span className={`font-medium text-center transition-colors duration-300 ${
                    hoveredButton === 'search' ? 'text-[#B91C1C]' : 'text-[#DC2626]'
                  }`}>
                    Enter — Waymaker
                  </span>
                </button>
                
                <Tooltip
                  show={hoveredButton === 'search'}
                  title="Waymaker"
                  description="Executive and technical recruiting across all industries—commercial, dual-use, and cross-sector placements."
                />
              </div>

              {/* Segment 2: Waymaker Defense */}
              <div className="relative flex-1">
                <button
                  onClick={onEnterDefense}
                  onMouseEnter={() => setHoveredButton('defense')}
                  onMouseLeave={() => setHoveredButton(null)}
                  className={`
                    group w-full h-[54px] rounded-full
                    flex items-center justify-center px-6
                    transition-all duration-300 ease-out
                    ${hoveredButton === 'defense' ? 'scale-[1.02] z-10' : 'scale-100 z-0'}
                  `}
                  style={{
                    background: hoveredButton === 'defense'
                      ? 'linear-gradient(to right, #EF4444, #B91C1C)'
                      : 'linear-gradient(to right, #DC2626, #B91C1C)',
                    boxShadow: hoveredButton === 'defense'
                      ? 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 4px 12px rgba(220, 38, 38, 0.3)'
                      : 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 2px 8px rgba(220, 38, 38, 0.15)'
                  }}
                >
                  <span className="text-white font-medium text-center">
                    Enter — Waymaker Defense
                  </span>
                </button>
                
                <Tooltip
                  show={hoveredButton === 'defense'}
                  title="Waymaker Defense"
                  description="Specialized recruiting for defense tech, aerospace, and national security—cleared and dual-use talent placement."
                />
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* Footer - Minimal */}
      <footer className="relative py-6">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9CA3AF]">
          <div>© 2026 Waymaker</div>
          <div>
            <a href="#privacy" className="hover:text-[#DC2626] hover:underline transition-all duration-300">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}