import { useState } from 'react';
import { Card } from './ui/Card';
import { Chip } from './ui/Chip';
import { useMode } from '../contexts/ModeContext';
import { Briefcase, Code, Brain, Compass, Target, Server, ArrowLeft, Cog, TrendingUp } from 'lucide-react';

type LaneId = 'all' | 'executive' | 'engineering' | 'aiml' | 'product' | 'defense' | 'devops' | 'manufacturing' | 'gtm';

interface Lane {
  id: LaneId;
  label: string;
  icon: typeof Briefcase;
  description: string;
  bullets?: string[];
  examples: string[];
}

export function RolesWeOffer() {
  const [selectedLane, setSelectedLane] = useState<LaneId>('all');
  const { isHiringMode } = useMode();

  const lanes: Lane[] = [
    {
      id: 'executive',
      label: 'Executive leadership',
      icon: Briefcase,
      description: isHiringMode 
        ? 'C-suite, founders, GMs, and VP-level leaders for defense tech and dual-use companies.'
        : 'C-suite, founders, GMs, and VP-level opportunities in defense tech and dual-use companies.',
      bullets: isHiringMode 
        ? [
            'C-suite and VP roles in defense tech and dual-use companies.',
            'Operators who understand secure and regulated environments.',
            'Leaders who can scale both product and programs.'
          ]
        : [
            'Board-level compensation and equity packages.',
            'Companies with secure funding and mission-critical contracts.',
            'Roles where clearances and defense experience create value.'
          ],
      examples: ['CEO', 'CTO', 'CISO', 'VP Engineering', 'Head of Product', 'GM']
    },
    {
      id: 'engineering',
      label: 'Engineering & product',
      icon: Code,
      description: isHiringMode 
        ? 'Senior engineers, tech leads, and product leaders who own delivery.'
        : 'Senior engineers, tech leads, and product leaders shipping mission-critical systems.',
      bullets: isHiringMode 
        ? [
            'Staff+ engineers and technical leaders.',
            'Teams who ship mission-critical capabilities.',
            'Engineering managers who build and lead at scale.'
          ]
        : [
            'Staff+ and principal-level engineering roles.',
            'Work on systems that matter to national security.',
            'High autonomy with modern tech stacks.'
          ],
      examples: ['Staff Engineer', 'Principal Engineer', 'Tech Lead', 'Engineering Manager', 'Senior PM']
    },
    {
      id: 'aiml',
      label: 'AI/ML & data engineering',
      icon: Brain,
      description: isHiringMode 
        ? 'Machine learning engineers, data scientists, and platform specialists.'
        : 'Machine learning engineers, data scientists, and platform specialists in defense AI.',
      bullets: isHiringMode 
        ? [
            'ML engineers building production AI systems.',
            'Data platform and infrastructure specialists.',
            'Applied researchers translating models to mission.'
          ]
        : [
            'Production ML systems with real-world impact.',
            'Defense budgets and data at scale.',
            'Bridge commercial AI and national security applications.'
          ],
      examples: ['ML Engineer', 'Data Scientist', 'ML Ops', 'AI Research', 'Data Platform']
    },
    {
      id: 'product',
      label: 'Product leadership',
      icon: Compass,
      description: isHiringMode 
        ? 'Product managers and leaders who bridge technology and mission needs.'
        : 'Product managers and leaders bridging commercial software and defense missions.',
      bullets: isHiringMode 
        ? [
            'VP and director-level product leaders.',
            'Technical PMs who speak both code and mission.',
            'Product strategists for complex defense systems.'
          ]
        : [
            'VP and director-level product opportunities.',
            'Own roadmaps for mission-critical capabilities.',
            'Work directly with government and defense customers.'
          ],
      examples: ['VP Product', 'Sr. PM', 'Technical PM', 'Product Director']
    },
    {
      id: 'defense',
      label: 'Defense tech specialists',
      icon: Target,
      description: isHiringMode 
        ? 'Modeling & simulation, autonomy, C4ISR, cyber, and complex systems.'
        : 'Modeling & simulation, autonomy, C4ISR, cyber, and complex systems roles.',
      bullets: isHiringMode 
        ? [
            'Deep domain expertise in defense-specific tech.',
            'Cleared specialists with mission context.',
            'Engineers bridging legacy and modern systems.'
          ]
        : [
            'Leverage your clearances and defense background.',
            'Modern companies solving legacy defense problems.',
            'Deep technical work with mission impact.'
          ],
      examples: ['M&S Engineer', 'Autonomy Lead', 'C4ISR Architect', 'Cyber Engineer', 'Systems Engineer']
    },
    {
      id: 'devops',
      label: 'DevOps & infrastructure',
      icon: Server,
      description: isHiringMode
        ? 'Platform engineers and SREs who build and maintain critical systems.'
        : 'Platform engineers and SREs building secure, mission-critical infrastructure.',
      bullets: isHiringMode
        ? [
            'Platform engineers building secure infrastructure.',
            'SREs maintaining mission-critical uptime.',
            'Cloud architects for classified and unclassified systems.'
          ]
        : [
            'Build infrastructure for classified and unclassified systems.',
            'SRE roles with true mission-critical uptime requirements.',
            'Modern tooling in secure, regulated environments.'
          ],
      examples: ['DevOps Engineer', 'SRE', 'Platform Engineer', 'Cloud Architect']
    },
    {
      id: 'manufacturing',
      label: 'Manufacturing and robotics',
      icon: Cog,
      description: isHiringMode
        ? 'Senior manufacturing engineers, robotics specialists, and operations leaders who innovate in production and automation.'
        : 'Senior manufacturing engineers, robotics specialists, and operations leaders who innovate in production and automation.',
      bullets: isHiringMode
        ? [
            'Staff+ robotics and manufacturing experts.',
            'Teams who build scalable robotic systems.',
            'Operations managers who optimize production at scale.'
          ]
        : [
            'Staff+ robotics and manufacturing experts.',
            'Teams who build scalable robotic systems.',
            'Operations managers who optimize production at scale.'
          ],
      examples: ['Manufacturing Engineer', 'Robotics Engineer', 'Principal Automation Specialist', 'Operations Manager', 'Hardware Lead']
    },
    {
      id: 'gtm',
      label: 'Go-to-Market (GTM)',
      icon: TrendingUp,
      description: isHiringMode
        ? 'Senior sales, marketing, and customer leaders who drive revenue and growth.'
        : 'Senior sales, marketing, and customer leaders who drive revenue and growth.',
      bullets: isHiringMode
        ? [
            'Business operations and revenue architects.',
            'Teams who launch market-leading strategies.',
            'Sales managers who scale and optimize pipelines.'
          ]
        : [
            'Business operations and revenue architects.',
            'Teams who launch market-leading strategies.',
            'Sales managers who scale and optimize pipelines.'
          ],
      examples: ['Account Executive', 'Sales Director', 'Buesiness Development', 'Marketing Manager', 'Growth Lead', 'Customer Success Manager']
    }
  ];

  const selectedLaneData = lanes.find(lane => lane.id === selectedLane);

  return (
    <div id="roles" className="relative py-32 px-6 lg:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="space-y-12">
          
          {/* Section Header */}
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#B91C1C]">
              {isHiringMode ? 'Roles we fill' : 'Role categories'}
            </p>
            <h2 className="text-4xl lg:text-5xl text-[#F9FAFB] leading-[1.15]">
              {isHiringMode 
                ? 'From boardroom strategy to deployed systems.'
                : 'Curated opportunities in defense tech.'}
            </h2>
            <p className="text-lg text-[#9CA3AF] max-w-[560px]">
              {isHiringMode 
                ? 'Core lanes of defense-tech hiring. Select a lane to see example roles.'
                : 'Six core categories of defense-tech roles. Select a category to see opportunities.'}
            </p>
          </div>

          {/* Lane Selector */}
          <div className="overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0">
            <div className="flex flex-wrap gap-3 min-w-max lg:min-w-0">
              {/* All lanes chip */}
              <button
                onClick={() => setSelectedLane('all')}
                className={`
                  flex items-center gap-2 px-4 py-2.5 rounded-full text-sm transition-all duration-300
                  ${selectedLane === 'all'
                    ? 'bg-[#B91C1C] text-white shadow-[0_0_16px_rgba(185,28,28,0.4)]'
                    : 'bg-[#1C1C22] text-[#9CA3AF] border border-[#2A2A32] hover:border-[#B91C1C]/50 hover:text-[#F9FAFB]'
                  }
                `}
              >
                <span>All lanes</span>
              </button>

              {/* Individual lane chips */}
              {lanes.map((lane) => {
                const Icon = lane.icon;
                return (
                  <button
                    key={lane.id}
                    onClick={() => setSelectedLane(lane.id)}
                    className={`
                      flex items-center gap-2 px-4 py-2.5 rounded-full text-sm transition-all duration-300
                      ${selectedLane === lane.id
                        ? 'bg-[#B91C1C] text-white shadow-[0_0_16px_rgba(185,28,28,0.4)]'
                        : 'bg-[#1C1C22] text-[#9CA3AF] border border-[#2A2A32] hover:border-[#B91C1C]/50 hover:text-[#F9FAFB]'
                      }
                    `}
                  >
                    <Icon size={16} />
                    <span>{lane.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Area */}
          <div className="pt-4">
            {selectedLane === 'all' ? (
              /* Overview Grid - All Lanes */
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {lanes.map((lane) => {
                  const Icon = lane.icon;
                  return (
                    <button
                      key={lane.id}
                      onClick={() => setSelectedLane(lane.id)}
                      className="text-left group"
                    >
                      <Card 
                        className="h-full hover:border-[#B91C1C]/40 transition-all duration-300"
                        hoverable={true}
                      >
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-[#1C1C22] border border-[#2A2A32] flex items-center justify-center group-hover:border-[#B91C1C]/50 transition-colors">
                              <Icon size={20} className="text-[#9CA3AF] group-hover:text-[#B91C1C] transition-colors" />
                            </div>
                            <h3 className="text-lg text-[#F9FAFB] uppercase tracking-wide text-xs">
                              {lane.label}
                            </h3>
                          </div>
                          <p className="text-sm text-[#9CA3AF] leading-relaxed">
                            {lane.description}
                          </p>
                        </div>
                      </Card>
                    </button>
                  );
                })}
              </div>
            ) : (
              /* Detail Panel - Single Lane */
              selectedLaneData && (
                <div className="space-y-6">
                  {/* Back button */}
                  <button
                    onClick={() => setSelectedLane('all')}
                    className="flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors group"
                  >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Back to all lanes</span>
                  </button>

                  <Card className="border-[#2A2A32]" hoverable={false}>
                    <div className="grid lg:grid-cols-[1fr_1fr] gap-12">
                      
                      {/* Left Column: Description */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-3">
                          {(() => {
                            const Icon = selectedLaneData.icon;
                            return (
                              <div className="w-12 h-12 rounded-lg bg-[#B91C1C]/10 border border-[#B91C1C]/30 flex items-center justify-center">
                                <Icon size={24} className="text-[#B91C1C]" />
                              </div>
                            );
                          })()}
                          <h3 className="text-2xl text-[#F9FAFB]">
                            {selectedLaneData.label}
                          </h3>
                        </div>
                        
                        <p className="text-[#9CA3AF] leading-relaxed">
                          {selectedLaneData.description}
                        </p>

                        {/* Optional bullets */}
                        {selectedLaneData.bullets && (
                          <ul className="space-y-3 pt-2">
                            {selectedLaneData.bullets.map((bullet, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-[#9CA3AF]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C] mt-2 flex-shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* Right Column: Example Roles */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xs uppercase tracking-[0.2em] text-[#B91C1C] mb-4">
                            Example roles
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedLaneData.examples.map((example) => (
                              <Chip 
                                key={example} 
                                variant="tag"
                                className="hover:border-[#B91C1C]/50 hover:text-[#F9FAFB] transition-all duration-200"
                              >
                                {example}
                              </Chip>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
