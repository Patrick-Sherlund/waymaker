import { useState, useEffect, useRef } from 'react';
import { useMode } from '../contexts/ModeContext';

export function Process({ theme = 'dark' }: { theme?: 'light' | 'dark' }) {
  const [activeStep, setActiveStep] = useState(0);
  const { isHiringMode } = useMode();
  const sectionRef = useRef<HTMLDivElement>(null);
  const step0Ref = useRef<HTMLDivElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);

  const hiringSteps = [
    {
      number: '01',
      title: 'Align & Engage',
      summary: 'We align on your mission, roles, and success criteria.',
      bullets: [
        'Sign a master service agreement (MSA) or Executive Retained Search Agreement.',
        'Clarify hiring priorities, roles, and success criteria.',
        'Agree on cadence, decision-makers, and communication channels.'
      ],
      timing: 'Days 0–3'
    },
    {
      number: '02',
      title: 'Search & Evaluate',
      summary: 'We source, grade, and present a high-signal slate of candidates.',
      bullets: [
        'Activate existing network and specialized recruiting software.',
        'Source, screen, and shortlist candidates against agreed criteria.',
        'Deliver a curated slate with clear notes and recommendations.'
      ],
      timing: 'Weeks 1–3'
    },
    {
      number: '03',
      title: 'Hire & Onboard',
      summary: 'We drive the process through interviews, offers, and start date.',
      bullets: [
        'Coordinate interviews and feedback loops with hiring managers.',
        'Manage offers, negotiation, and closing.',
        'Support a smooth handoff into your team and future hiring.'
      ],
      timing: 'Weeks 3–6+'
    }
  ];

  const candidateSteps = [
    {
      number: '01',
      title: 'Initial Conversation',
      summary: 'We learn about your background, clearances, and career goals.',
      bullets: [
        'Share your background, clearances, and career goals.',
        'We evaluate fit for our current opportunities.',
        'No resume blasting-only targeted, relevant roles.'
      ],
      timing: 'Days 0–3'
    },
    {
      number: '02',
      title: 'Opportunity Matching',
      summary: 'We present curated roles aligned to your experience.',
      bullets: [
        'We present curated roles aligned to your experience and clearances.',
        'You decide which opportunities to pursue.',
        'We prepare you with company intel and interview coaching.'
      ],
      timing: 'Weeks 1–2'
    },
    {
      number: '03',
      title: 'Interview & Close',
      summary: 'We guide you through interviews, offers, and transition.',
      bullets: [
        'We coordinate logistics and provide ongoing feedback.',
        'We advocate for your compensation and role clarity.',
        'We support through offer negotiation and transition.'
      ],
      timing: 'Weeks 2–4+'
    }
  ];

  const steps = isHiringMode ? hiringSteps : candidateSteps;

  useEffect(() => {
    const handleScroll = () => {
      const stepRefs = [step0Ref, step1Ref, step2Ref];
      const viewportCenter = window.innerHeight / 2;

      let newActiveStep = 0;
      let minDistance = Infinity;

      stepRefs.forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
          const distance = Math.abs(cardCenter - viewportCenter);

          if (distance < minDistance) {
            minDistance = distance;
            newActiveStep = index;
          }
        }
      });

      setActiveStep(newActiveStep);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="how-it-works" ref={sectionRef} className={`relative py-32 px-6 lg:px-12 ${
      theme === 'light' ? 'bg-transparent' : 'bg-[#050505]'
    }`}>
      <div className="max-w-[1600px] mx-auto">
        
        {/* Section Header */}
        <div className="space-y-6 mb-24">
          <p className={`text-xs uppercase tracking-[0.2em] ${theme === 'light' ? 'text-[#DC2626]' : 'text-[#B91C1C]'}`}>
            How it works
          </p>
          <h2 className={`text-4xl lg:text-5xl leading-[1.15] ${theme === 'light' ? 'text-[#111827]' : 'text-[#F9FAFB]'}`}>
            {isHiringMode 
              ? 'A clear, rigorous hiring pipeline.'
              : 'A white-glove candidate experience.'}
          </h2>
          <p className={`text-lg max-w-[560px] ${theme === 'light' ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
            {isHiringMode
              ? 'Scroll to move from first conversation to hired.'
              : 'Scroll to see your journey from introduction to new role.'}
          </p>
        </div>

        {/* Desktop: Two-Column Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-[35%_65%] gap-16 relative">
            
            {/* Left Column: Sticky Spine */}
            <div className="relative">
              <div className="sticky top-32 h-[60vh] flex flex-col justify-between py-12">
                
                {/* Pipeline Label */}
                <div className={`absolute -top-8 left-8 text-[10px] uppercase tracking-[0.3em] ${
                  theme === 'light' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'
                }`}>
                  Pipeline
                </div>

                {/* Vertical Spine */}
                <div className="absolute left-8 top-0 bottom-0 w-px">
                  <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-transparent ${
                    theme === 'light' ? 'via-[#D1D5DB]' : 'via-[#2A2A32]'
                  }`} />
                  <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-transparent blur-sm ${
                    theme === 'light' ? 'via-[#DC2626]/15' : 'via-[#B91C1C]/20'
                  }`} />
                </div>

                {/* Step Markers */}
                <div className="relative flex flex-col justify-between h-full">
                  {steps.map((step, index) => (
                    <div key={index} className="relative flex items-center">
                      
                      {/* Marker Node */}
                      <div className="relative z-10">
                        {/* Outer Glow */}
                        <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                          activeStep === index 
                            ? theme === 'light' 
                              ? 'bg-[#DC2626]/30 blur-xl scale-[2]'
                              : 'bg-[#B91C1C]/40 blur-xl scale-[2]'
                            : 'bg-transparent'
                        }`} />
                        
                        {/* Node Circle */}
                        <div className={`relative w-16 h-16 rounded-full transition-all duration-500 flex items-center justify-center ${
                          activeStep === index
                            ? theme === 'light'
                              ? 'bg-[#DC2626] shadow-[0_0_32px_rgba(220,38,38,0.4)]'
                              : 'bg-[#B91C1C] shadow-[0_0_32px_rgba(185,28,28,0.6)]'
                            : theme === 'light'
                              ? 'bg-white border-2 border-[#E5E7EB]'
                              : 'bg-[#151518] border-2 border-[#2A2A32]'
                        }`}>
                          <span className={`text-lg font-medium transition-colors duration-500 ${
                            activeStep === index 
                              ? 'text-white' 
                              : theme === 'light' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'
                          }`}>
                            {step.number}
                          </span>
                        </div>
                      </div>

                      {/* Step Label (only show for active) */}
                      <div className={`ml-6 transition-all duration-500 ${
                        activeStep === index 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 -translate-x-4 pointer-events-none'
                      }`}>
                        <div className={`text-xl font-medium ${
                          theme === 'light' ? 'text-[#111827]' : 'text-[#F9FAFB]'
                        }`}>
                          {step.title}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Scrolling Step Cards */}
            <div className="space-y-[30vh]">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                const stepRef = index === 0 ? step0Ref : index === 1 ? step1Ref : step2Ref;
                
                return (
                  <div 
                    key={index}
                    ref={stepRef}
                    className={`relative rounded-2xl p-12 transition-all duration-700 ${
                      isActive
                        ? theme === 'light'
                          ? 'bg-white border-2 border-[#DC2626]/40 shadow-[0_8px_48px_rgba(220,38,38,0.12)] opacity-100 scale-100'
                          : 'bg-[#1C1C22] border-2 border-[#B91C1C]/40 shadow-[0_8px_48px_rgba(185,28,28,0.2)] opacity-100 scale-100'
                        : theme === 'light'
                          ? 'bg-[#F9FAFB] border border-[#E5E7EB] opacity-60 scale-95'
                          : 'bg-[#151518] border border-[#2A2A32] opacity-60 scale-95'
                    }`}
                  >
                    {/* Background Number */}
                    <div className={`absolute top-8 right-8 text-[180px] leading-none font-bold transition-all duration-700 select-none ${
                      isActive 
                        ? theme === 'light' ? 'text-[#DC2626]/8' : 'text-[#B91C1C]/10'
                        : theme === 'light' ? 'text-[#E5E7EB]/50' : 'text-[#2A2A32]/50'
                    }`}>
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="relative space-y-8">
                      
                      {/* Header */}
                      <div className="space-y-3">
                        <div className={`text-xs uppercase tracking-[0.2em] ${
                          theme === 'light' ? 'text-[#DC2626]' : 'text-[#B91C1C]'
                        }`}>
                          Step {step.number}
                        </div>
                        <h3 className={`text-3xl ${
                          theme === 'light' ? 'text-[#111827]' : 'text-[#F9FAFB]'
                        }`}>
                          {step.title}
                        </h3>
                      </div>

                      {/* Summary */}
                      <p className={`text-lg leading-relaxed max-w-[600px] ${
                        theme === 'light' ? 'text-[#4B5563]' : 'text-[#D1D5DB]'
                      }`}>
                        {step.summary}
                      </p>

                      {/* Bullets */}
                      <ul className="space-y-4">
                        {step.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-4">
                            <span className={`w-2 h-2 rounded-full mt-2.5 flex-shrink-0 ${
                              theme === 'light' ? 'bg-[#DC2626]' : 'bg-[#B91C1C]'
                            }`} />
                            <span className={`leading-relaxed ${
                              theme === 'light' ? 'text-[#6B7280]' : 'text-[#9CA3AF]'
                            }`}>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Timing */}
                      <div className={`pt-6 border-t ${
                        theme === 'light' ? 'border-[#E5E7EB]' : 'border-[#2A2A32]'
                      }`}>
                        <p className={`text-xs uppercase tracking-[0.15em] ${
                          theme === 'light' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'
                        }`}>
                          {step.timing}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: Single Column Vertical Timeline */}
        <div className="lg:hidden">
          <div className="relative pl-12">
            
            {/* Vertical Spine */}
            <div className="absolute left-6 top-0 bottom-0 w-px">
              <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-transparent ${
                theme === 'light' ? 'via-[#D1D5DB]' : 'via-[#2A2A32]'
              }`} />
              <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-transparent blur-sm ${
                theme === 'light' ? 'via-[#DC2626]/15' : 'via-[#B91C1C]/20'
              }`} />
            </div>

            {/* Steps */}
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  
                  {/* Node */}
                  <div className="absolute -left-12 top-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                      theme === 'light'
                        ? 'bg-white border-[#E5E7EB]'
                        : 'bg-[#1C1C22] border-[#2A2A32]'
                    }`}>
                      <span className={`text-sm font-medium ${
                        theme === 'light' ? 'text-[#9CA3AF]' : 'text-[#9CA3AF]'
                      }`}>
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`rounded-xl p-8 border ${
                    theme === 'light'
                      ? 'bg-white border-[#E5E7EB]'
                      : 'bg-[#151518] border-[#2A2A32]'
                  }`}>
                    
                    {/* Header */}
                    <div className="space-y-2 mb-6">
                      <div className={`text-xs uppercase tracking-[0.2em] ${
                        theme === 'light' ? 'text-[#DC2626]' : 'text-[#B91C1C]'
                      }`}>
                        Step {step.number}
                      </div>
                      <h3 className={`text-2xl ${
                        theme === 'light' ? 'text-[#111827]' : 'text-[#F9FAFB]'
                      }`}>
                        {step.title}
                      </h3>
                    </div>

                    {/* Summary */}
                    <p className={`leading-relaxed mb-6 ${
                      theme === 'light' ? 'text-[#4B5563]' : 'text-[#D1D5DB]'
                    }`}>
                      {step.summary}
                    </p>

                    {/* Bullets */}
                    <ul className="space-y-3 mb-6">
                      {step.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                            theme === 'light' ? 'bg-[#DC2626]' : 'bg-[#B91C1C]'
                          }`} />
                          <span className={`text-sm leading-relaxed ${
                            theme === 'light' ? 'text-[#6B7280]' : 'text-[#9CA3AF]'
                          }`}>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Timing */}
                    <div className={`pt-4 border-t ${
                      theme === 'light' ? 'border-[#E5E7EB]' : 'border-[#2A2A32]'
                    }`}>
                      <p className={`text-xs uppercase tracking-[0.15em] ${
                        theme === 'light' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'
                      }`}>
                        {step.timing}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}