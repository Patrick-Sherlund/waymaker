import { useMode } from '../../contexts/ModeContext';

export function SearchGroupTalentRadar() {
  const { isHiringMode } = useMode();

  const metrics = isHiringMode
    ? [
        { label: "ACTIVE SEARCHES", value: "45+" },
        { label: "KEY HIRES CLOSED", value: "18" },
        { label: "AVG. TIME TO HIRE", value: "28d" },
      ]
    : [
        { label: "Cross-industry roles filled", value: "400+" },
        { label: "Years combined experience", value: "23" },
        { label: "Strategic ops overseen", value: "12" },
      ];

  return (
    <div className="relative rounded-2xl bg-white border border-[#E5E7EB] overflow-hidden shadow-lg">
      {/* Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DC2626] to-transparent opacity-60" />
      
      <div className="p-8 space-y-6">
        {/* Header */}
        <div className="space-y-3 text-center">
          <div className="text-[10px] uppercase tracking-[0.15em] text-[#DC2626]">
            SEARCH GROUP TALENT
          </div>
          <h3 className="text-3xl md:text-4xl text-[#111827] leading-tight">
            Talent in motion
          </h3>
          <p className="text-sm text-[#6B7280]">
            Live executive and technical roles across the hiring pipeline.
          </p>
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent h-px" />
        </div>

        {/* Pipeline Stages */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#DC2626] transition-colors">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-[#111827]">VP Engineering</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#FEE2E2] text-[#B91C1C] border border-[#DC2626]">SHORTLISTED</span>
              </div>
              <span className="text-[9px] text-[#9CA3AF]">SaaS</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#DC2626] transition-colors">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-[#111827]">Head of Product</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#FEFCE8] text-[#B45309] border border-[#F59E0B]">INTERVIEWING</span>
              </div>
              <span className="text-[9px] text-[#9CA3AF]">B2B</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#DC2626] transition-colors">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-[#111827]">Senior ML Engineer</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#DC2626] text-white">OFFER</span>
              </div>
              <span className="text-[9px] text-[#9CA3AF]">Consumer tech</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#DC2626] transition-colors">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-[#111827]">Director of Operations</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#FEE2E2] text-[#B91C1C] border border-[#DC2626]">SHORTLISTED</span>
              </div>
              <span className="text-[9px] text-[#9CA3AF]">Logistics</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent h-px" />
        </div>

        {/* Footer Metrics */}
        <div className="grid grid-cols-3 gap-4">
          {metrics.map((metric, i) => (
            <div key={i} className="text-center space-y-1">
              <p className="text-2xl text-[#DC2626]">
                {metric.value}
              </p>
              <p className="text-[10px] uppercase tracking-widest text-[#9CA3AF] leading-tight">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}