import { Card } from "./ui/Card";
import { Chip } from "./ui/Chip";
import { TalentRadar } from "./TalentRadar";
import { useMode } from "../contexts/ModeContext";

export function WhyWayMaker() {
  const { mode, isHiringMode } = useMode();

  const hiringReasons = [
    {
      title: "Deep tech recruiting",
      description:
        "Eight-figure recruiting transactions and hundreds of engineers placed across software, data, AI/ML, QA, and DevOps-from Fortune 10s to 10-person startups.",
      tags: ["AI/ML", "DevOps", "Data", "Product"],
    },
    {
      title: "Defense-first perspective",
      description:
        "Hands-on experience launching and overseeing mission-critical applications for the armed services, including Marine Corps Software Factory initiatives.",
      tags: [
        "USMC",
        "Modeling & Simulation",
        "Software Factory",
      ],
    },
    {
      title: "Boutique, founder-led partnership",
      description:
        "Founder-led, high-touch partnership that aligns to your hiring strategy instead of acting like a transactional agency.",
      tags: ["Founder-led", "High-touch", "Strategic search"],
    },
  ];

  const candidateReasons = [
    {
      title: "Curated opportunities only",
      description:
        "We don't blast your resume. Every role is vetted, cleared-friendly, and mission-aligned-typically VP-level+ or critical technical roles in defense tech.",
      tags: ["Executive", "Technical Lead", "Cleared Roles"],
    },
    {
      title: "Defense expertise you can trust",
      description:
        "We understand clearance timelines, dual-use tech, and the unique challenges of transitioning from traditional defense to modern software companies.",
      tags: ["TS/SCI", "Dual-Use Tech", "Mission Aligned"],
    },
    {
      title: "White-glove candidate experience",
      description:
        "You work directly with founders who respect your time, advocate for your value, and provide transparent feedback throughout the process.",
      tags: [
        "Direct Communication",
        "Transparent",
        "Long-term Partnership",
      ],
    },
  ];

  const reasons = isHiringMode
    ? hiringReasons
    : candidateReasons;

  return (
    <div id="why" className="relative py-32 px-6 lg:px-12">
      <div className="max-w-[1600px] mx-auto space-y-16">
        {/* Row 1: Heading + Narrative (Left) + Radar (Right) */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading + Narrative */}
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#B91C1C]">
              Why Waymaker
            </p>

            <h2 className="text-4xl lg:text-5xl text-[#F9FAFB] leading-[1.15]">
              Defense-tech recruiting by people who've built in
              defense-tech.
            </h2>

            <p className="text-lg text-[#9CA3AF] leading-relaxed max-w-[560px]">
              We combine 13+ years of deep tech recruiting with
              a decade of Marine Corps leadership building
              modern software for the services. That means we
              speak both languages-modern engineering and
              mission-when we evaluate talent for you.
            </p>

            {/* Support bullets */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C]" />
                <span className="text-sm text-[#9CA3AF]">
                  Executive and technical search
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C]" />
                <span className="text-sm text-[#9CA3AF]">
                  Defense-native perspective
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C]" />
                <span className="text-sm text-[#9CA3AF]">
                  Cleared and mission-aligned talent
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Radar Pipeline Card */}
          <div className="lg:sticky lg:top-32">
            <TalentRadar mode={mode} />
          </div>
        </div>
      </div>
    </div>
  );
}