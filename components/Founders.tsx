import { useState } from 'react';
import { Chip } from './ui/Chip';
import { useMode } from '../contexts/ModeContext';

const benImage = '/assets/ben.png';
const mattImage = '/assets/matt.png';

export function Founders() {
  const [hoveredFounder, setHoveredFounder] = useState<number | null>(null);
  const { isHiringMode } = useMode();

  const founders = [
    {
      name: 'Matt Robinson',
      title: 'CO-FOUNDER',
      tagline: 'USMC officer & defense tech leader',
      bio: '10 years as a Marine Corps infantry officer, with a focus on defense technology in the last six. Deputy Director helping stand up the Marine Corps Software Factory in Austin, overseeing 12 applications across the services. Master\'s in Modeling & Simulation and a Finance degree.',
      tags: ['USMC', 'Defense tech', 'Software factory'],
      image: mattImage
    },
    {
      name: 'Ben Robinson',
      title: 'CO-FOUNDER',
      tagline: '13+ years in tech recruiting',
      bio: isHiringMode
        ? 'Eight-figure recruiting transactions and hundreds of engineers placed in software, data, AI/ML, QA, and DevOps across Fortune 10 enterprises and early-stage startups. Finance background; metrics-first approach to every search.'
        : 'Over a decade of experience managing mission-critical recruiting initiatives for Fortune 10 enterprises all the way to early-stage startups.  Career highlights include the placement of hundreds of top professionals in areas of software engineering, AI/ML, QA, DevOps, GTM, Engineering and related disciplines. Produced multiple eight figures of recruiting transactions.',
      tags: isHiringMode
        ? ['Executive search', 'Tech recruiting', 'AI/ML hiring']
        : ['Executive search', 'Tech recruiting', '400+ candidate offers accepted'],
      image: benImage
    }
  ];

  return (
    <div id="founders" className="relative py-32 px-6 lg:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="space-y-12">
          
          {/* Section Header */}
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#B91C1C]">
              Founders
            </p>
            <h2 className="text-4xl lg:text-5xl text-[#F9FAFB] leading-[1.15] max-w-[760px]">
              Led by people who understand both worlds.
            </h2>
            <p className="text-lg text-[#9CA3AF] max-w-[560px]">
              A Marine Corps officer and professional tech recruiter partnering to build the right teams for defense tech.
            </p>
          </div>

          {/* Main Co-Founders Card */}
          <div className="relative rounded-2xl bg-[#151518] border border-[#2A2A32] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[0_8px_48px_rgba(185,28,28,0.1)]">
            
            {/* Top Red Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B91C1C] to-transparent opacity-60" />
            
            {/* Card Content */}
            <div className="p-8 lg:p-12">
              
              {/* Shared Header Row */}
              <div className="space-y-4 mb-12 pb-8 border-b border-[#2A2A32]">
                <div className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
                  Waymaker Defense Leadership
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <h3 className="text-2xl lg:text-3xl text-[#F9FAFB]">
                    Matt and Ben Robinson — Co-founders
                  </h3>
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-[#B91C1C]/30 bg-[#B91C1C]/5 w-fit">
                    <span className="text-xs text-[#9CA3AF]">USMC defense tech + Tech recruiting</span>
                  </div>
                </div>
              </div>

              {/* Portrait Band - Featured Photos (Desktop Only) */}
              <div className="hidden lg:block mb-12 pb-12 border-b border-[#2A2A32]">
                {/* Subtle connecting background */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full max-w-3xl h-32 bg-gradient-to-r from-transparent via-[#1C1C22]/50 to-transparent rounded-full blur-2xl" />
                  </div>

                  {/* Two Portrait Blocks */}
                  <div className="relative grid grid-cols-2 gap-16">
                    
                    {/* Ben Robinson Portrait Block */}
                    <div 
                      className="flex flex-col items-center text-center space-y-4"
                      onMouseEnter={() => setHoveredFounder(0)}
                      onMouseLeave={() => setHoveredFounder(null)}
                    >
                      {/* Large Portrait */}
                      <div className="relative">
                        <div className={`w-36 h-36 rounded-xl overflow-hidden border-4 transition-all duration-300 ${
                          hoveredFounder === 0 
                            ? 'border-[#B91C1C] shadow-[0_0_32px_rgba(185,28,28,0.5)]' 
                            : 'border-[#2A2A32]'
                        }`}>
                          <img
                            src={founders[0].image}
                            alt={founders[0].name}
                            className={`w-full h-full object-cover transition-all duration-300 ${
                              hoveredFounder === 0 ? 'grayscale-0 scale-105' : 'grayscale'
                            }`}
                            style={{ objectPosition: 'center calc(-10% + 10px)', transform: 'scale(1.5)' }}
                          />
                        </div>
                      </div>

                      {/* Name & Credentials */}
                      <div className="space-y-2">
                        <h4 className={`text-2xl transition-colors duration-300 ${
                          hoveredFounder === 0 ? 'text-[#F9FAFB]' : 'text-[#D1D5DB]'
                        }`}>
                          {founders[0].name}
                        </h4>
                        <p className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
                          {founders[0].title}
                        </p>
                        <p className="text-sm text-[#B91C1C] font-medium">
                          {founders[0].tagline}
                        </p>
                      </div>
                    </div>

                    {/* Matt Robinson Portrait Block */}
                    <div 
                      className="flex flex-col items-center text-center space-y-4"
                      onMouseEnter={() => setHoveredFounder(1)}
                      onMouseLeave={() => setHoveredFounder(null)}
                    >
                      {/* Large Portrait */}
                      <div className="relative">
                        <div className={`w-36 h-36 rounded-xl overflow-hidden border-4 transition-all duration-300 ${
                          hoveredFounder === 1 
                            ? 'border-[#B91C1C] shadow-[0_0_32px_rgba(185,28,28,0.5)]' 
                            : 'border-[#2A2A32]'
                        }`}>
                          <img
                            src={founders[1].image}
                            alt={founders[1].name}
                            style={{ objectPosition: 'center -15px' }}
                            className={`w-full h-full object-cover transition-all duration-300 ${
                              hoveredFounder === 1 ? 'grayscale-0 scale-105' : 'grayscale'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Name & Credentials */}
                      <div className="space-y-2">
                        <h4 className={`text-2xl transition-colors duration-300 ${
                          hoveredFounder === 1 ? 'text-[#F9FAFB]' : 'text-[#D1D5DB]'
                        }`}>
                          {founders[1].name}
                        </h4>
                        <p className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
                          {founders[1].title}
                        </p>
                        <p className="text-sm text-[#B91C1C] font-medium">
                          {founders[1].tagline}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile View - Complete Founder Blocks */}
              <div className="lg:hidden space-y-12 mb-12 pb-12 border-b border-[#2A2A32]">
                
                {/* Ben Robinson - Complete Block */}
                <div 
                  className="space-y-6"
                  onMouseEnter={() => setHoveredFounder(0)}
                  onMouseLeave={() => setHoveredFounder(null)}
                >
                  {/* Portrait */}
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative">
                      <div className={`w-32 h-32 rounded-xl overflow-hidden border-4 transition-all duration-300 ${
                        hoveredFounder === 0 
                          ? 'border-[#B91C1C] shadow-[0_0_32px_rgba(185,28,28,0.5)]' 
                          : 'border-[#2A2A32]'
                      }`}>
                        <img
                          src={founders[0].image}
                          alt={founders[0].name}
                          className={`w-full h-full object-cover transition-all duration-300 ${
                            hoveredFounder === 0 ? 'grayscale-0 scale-105' : 'grayscale'
                          }`}
                          style={{ objectPosition: 'center -10%', transform: 'scale(1.5)' }}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className={`text-2xl transition-colors duration-300 ${
                        hoveredFounder === 0 ? 'text-[#F9FAFB]' : 'text-[#D1D5DB]'
                      }`}>
                        {founders[0].name}
                      </h4>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
                        {founders[0].title}
                      </p>
                      <p className="text-sm text-[#B91C1C] font-medium">
                        {founders[0].tagline}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-[#9CA3AF] leading-relaxed text-center">
                    {founders[0].bio}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {founders[0].tags.map((tag) => (
                      <Chip 
                        key={tag} 
                        variant="tag"
                        className={`transition-all duration-300 ${
                          hoveredFounder === 0 
                            ? 'border-[#B91C1C]/50 text-[#F9FAFB]' 
                            : ''
                        }`}
                      >
                        {tag}
                      </Chip>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-[#2A2A32] to-transparent" />

                {/* Matt Robinson - Complete Block */}
                <div 
                  className="space-y-6"
                  onMouseEnter={() => setHoveredFounder(1)}
                  onMouseLeave={() => setHoveredFounder(null)}
                >
                  {/* Portrait */}
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative">
                      <div className={`w-32 h-32 rounded-xl overflow-hidden border-4 transition-all duration-300 ${
                        hoveredFounder === 1 
                          ? 'border-[#B91C1C] shadow-[0_0_32px_rgba(185,28,28,0.5)]' 
                          : 'border-[#2A2A32]'
                      }`}>
                        <img
                          src={founders[1].image}
                          alt={founders[1].name}
                          style={{ objectPosition: 'center -15px' }}
                          className={`w-full h-full object-cover transition-all duration-300 ${
                            hoveredFounder === 1 ? 'grayscale-0 scale-105' : 'grayscale'
                          }`}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className={`text-2xl transition-colors duration-300 ${
                        hoveredFounder === 1 ? 'text-[#F9FAFB]' : 'text-[#D1D5DB]'
                      }`}>
                        {founders[1].name}
                      </h4>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
                        {founders[1].title}
                      </p>
                      <p className="text-sm text-[#B91C1C] font-medium">
                        {founders[1].tagline}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-[#9CA3AF] leading-relaxed text-center">
                    {founders[1].bio}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {founders[1].tags.map((tag) => (
                      <Chip 
                        key={tag} 
                        variant="tag"
                        className={`transition-all duration-300 ${
                          hoveredFounder === 1 
                            ? 'border-[#B91C1C]/50 text-[#F9FAFB]' 
                            : ''
                        }`}
                      >
                        {tag}
                      </Chip>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bio Band - Two Text Columns (Desktop Only) */}
              <div className="hidden lg:block relative mb-12">
                <div className="grid grid-cols-2 gap-16">
                  
                  {/* Ben's Bio Column */}
                  <div 
                    className="space-y-6"
                    onMouseEnter={() => setHoveredFounder(0)}
                    onMouseLeave={() => setHoveredFounder(null)}
                  >
                    {/* Bio Text */}
                    <p className="text-sm text-[#9CA3AF] leading-relaxed">
                      {founders[0].bio}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {founders[0].tags.map((tag) => (
                        <Chip 
                          key={tag} 
                          variant="tag"
                          className={`transition-all duration-300 ${
                            hoveredFounder === 0 
                              ? 'border-[#B91C1C]/50 text-[#F9FAFB]' 
                              : ''
                          }`}
                        >
                          {tag}
                        </Chip>
                      ))}
                    </div>
                  </div>

                  {/* Vertical Divider (Desktop Only) */}
                  <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#2A2A32] to-transparent" />

                  {/* Horizontal Divider (Mobile Only) */}
                  <div className="lg:hidden h-px bg-gradient-to-r from-transparent via-[#2A2A32] to-transparent my-4" />

                  {/* Matt's Bio Column */}
                  <div 
                    className="space-y-6"
                    onMouseEnter={() => setHoveredFounder(1)}
                    onMouseLeave={() => setHoveredFounder(null)}
                  >
                    {/* Bio Text */}
                    <p className="text-sm text-[#9CA3AF] leading-relaxed">
                      {founders[1].bio}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {founders[1].tags.map((tag) => (
                        <Chip 
                          key={tag} 
                          variant="tag"
                          className={`transition-all duration-300 ${
                            hoveredFounder === 1 
                              ? 'border-[#B91C1C]/50 text-[#F9FAFB]' 
                              : ''
                          }`}
                        >
                          {tag}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Joint Metrics Strip */}
              <div className="pt-8 border-t border-[#2A2A32]">
                <div className="grid grid-cols-3 gap-8">
                  
                  {/* Metric 1 */}
                  <div className="text-center space-y-2">
                    <div className="text-2xl lg:text-3xl text-[#B91C1C] font-medium">
                      23+
                    </div>
                    <div className="text-xs uppercase tracking-[0.15em] text-[#9CA3AF]">
                      Years combined in<br />tech & defense
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="text-center space-y-2">
                    <div className="text-2xl lg:text-3xl text-[#B91C1C] font-medium">
                      8-figure
                    </div>
                    <div className="text-xs uppercase tracking-[0.15em] text-[#9CA3AF]">
                      Recruiting transaction<br />volume
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div className="text-center space-y-2">
                    <div className="text-2xl lg:text-3xl text-[#B91C1C] font-medium">
                      12
                    </div>
                    <div className="text-xs uppercase tracking-[0.15em] text-[#9CA3AF]">
                      Mission-critical<br />apps overseen
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}