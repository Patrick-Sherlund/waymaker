import { TalentRadar } from '../TalentRadar';
import { useMode } from '../../contexts/ModeContext';

export function SearchGroupWhyWayMaker() {
  const { mode } = useMode();

  return (
    <div id="why" className="relative py-32 px-6 lg:px-12">
      <div className="max-w-[1600px] mx-auto space-y-16">
        {/* Row 1: Heading + Narrative (Left) + Radar (Right) */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading + Narrative */}
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#DC2626]">
              Why Waymaker
            </p>

            <h2 className="text-4xl lg:text-5xl text-[#111827] leading-[1.15]">
              Executive search by people who've built modern software and teams.
            </h2>

            <p className="text-lg text-[#4B5563] leading-relaxed max-w-[560px]">
              We combine 13+ years of executive and technical recruiting with
              a decade of leading modern software initiatives inside highly
              regulated, mission-driven organizations. That means we speak both
              languages—operations and engineering—when we evaluate talent for you.
            </p>

            {/* Support bullets */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                <span className="text-sm text-[#6B7280]">
                  Executive and technical search across critical industries
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                <span className="text-sm text-[#6B7280]">
                  Hands-on experience building modern software teams
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                <span className="text-sm text-[#6B7280]">
                  Search process tuned for high-signal shortlists, not resume volume
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Radar Pipeline Card */}
          <div className="lg:sticky lg:top-32">
            <TalentRadar mode={mode} theme="light" />
          </div>
        </div>
      </div>
    </div>
  );
}