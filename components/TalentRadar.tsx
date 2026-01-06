import { Card } from "./ui/Card";
import { useEffect, useState } from "react";

interface TalentRadarProps {
  mode: string;
  theme?: 'dark' | 'light';
}

interface Role {
  title: string;
  status: string;
  sublabel: string;
  angle: number; // Position around the circle in degrees
  ringIndex: number; // Which ring (0-4)
}

export function TalentRadar({ mode, theme = 'dark' }: TalentRadarProps) {
  const isHiringMode = mode === "FOR HIRING TEAMS";
  const [animationKey, setAnimationKey] = useState(0);
  const [expandedChip, setExpandedChip] =
    useState<string>("role-3"); // Default to Senior ML Engineer
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  // Reset animation when mode changes
  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
    setExpandedChip("role-3"); // Reset to default
    setIsAutoRotating(true);
  }, [mode]);

  // Auto-rotate through chips every 2 seconds
  useEffect(() => {
    if (!isAutoRotating) return;

    const allChips = [
      "role-0",
      "role-1",
      "role-2",
      "role-3",
      "blip-0",
      "blip-1",
      "blip-2",
      "blip-3",
      "blip-4",
      "blip-5",
      "blip-6",
      "blip-7",
    ];

    let currentIndex = allChips.indexOf(expandedChip);

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % allChips.length;
      setExpandedChip(allChips[currentIndex]);
    }, 2500);

    return () => clearInterval(interval);
  }, [isAutoRotating, expandedChip]);

  const handleManualHover = (chipId: string) => {
    setIsAutoRotating(false);
    setExpandedChip(chipId);

    // Resume auto-rotation after 5 seconds of no interaction
    setTimeout(() => {
      setIsAutoRotating(true);
    }, 5000);
  };

  // Roles positioned around the radar - different for each mode
  const roles: Role[] = isHiringMode
    ? [
        {
          title: "VP Engineering",
          status: "SHORTLISTED",
          sublabel: "TS/SCI",
          angle: 45,
          ringIndex: 3,
        },
        {
          title: "Head Of Product",
          status: "INTERVIEWING",
          sublabel: "Cleared",
          angle: 135,
          ringIndex: 2,
        },
        {
          title: "Cleared AI/ML Lead",
          status: "SOURCING",
          sublabel: "TS/SCI",
          angle: 225,
          ringIndex: 4,
        },
        {
          title: "Senior ML Engineer",
          status: "OFFER",
          sublabel: "Dual-use",
          angle: 315,
          ringIndex: 1,
        },
      ]
    : [
        {
          title: "Director, AI Systems",
          status: "MATCHED",
          sublabel: "$280K-$340K",
          angle: 45,
          ringIndex: 4,
        },
        {
          title: "VP Product, Defense",
          status: "SUBMITTED",
          sublabel: "$320K-$380K",
          angle: 135,
          ringIndex: 3,
        },
        {
          title: "Head Of Engineering",
          status: "INTERVIEWING",
          sublabel: "$350K-$420K",
          angle: 225,
          ringIndex: 2,
        },
        {
          title: "Chief Technology Officer",
          status: "OFFER",
          sublabel: "$450K-$550K",
          angle: 315,
          ringIndex: 1,
        },
      ];

  // Additional blips - smaller roles shown only on hover
  const blips: Role[] = isHiringMode
    ? [
        {
          title: "Security Architect",
          status: "SOURCING",
          sublabel: "TS/SCI",
          angle: 90,
          ringIndex: 4,
        },
        {
          title: "Data Engineer Lead",
          status: "SHORTLISTED",
          sublabel: "Cleared",
          angle: 180,
          ringIndex: 3,
        },
        {
          title: "Systems Engineer",
          status: "INTERVIEWING",
          sublabel: "Secret",
          angle: 270,
          ringIndex: 2,
        },
        {
          title: "DevOps Lead",
          status: "OFFER",
          sublabel: "Dual-use",
          angle: 0,
          ringIndex: 1,
        },
        {
          title: "Technical PM",
          status: "SOURCING",
          sublabel: "TS/SCI",
          angle: 160,
          ringIndex: 4,
        },
        {
          title: "Cloud Architect",
          status: "SHORTLISTED",
          sublabel: "Cleared",
          angle: 200,
          ringIndex: 3,
        },
        {
          title: "Backend Engineer",
          status: "INTERVIEWING",
          sublabel: "Secret",
          angle: 30,
          ringIndex: 2,
        },
        {
          title: "Infrastructure Lead",
          status: "SOURCING",
          sublabel: "TS/SCI",
          angle: 330,
          ringIndex: 4,
        },
      ]
    : [
        {
          title: "Senior Backend Engineer",
          status: "MATCHED",
          sublabel: "$220K-$260K",
          angle: 90,
          ringIndex: 4,
        },
        {
          title: "Staff Security Engineer",
          status: "SUBMITTED",
          sublabel: "$280K-$320K",
          angle: 180,
          ringIndex: 3,
        },
        {
          title: "Principal Engineer",
          status: "INTERVIEWING",
          sublabel: "$310K-$370K",
          angle: 270,
          ringIndex: 2,
        },
        {
          title: "VP Infrastructure",
          status: "OFFER",
          sublabel: "$380K-$440K",
          angle: 0,
          ringIndex: 1,
        },
        {
          title: "Lead DevOps Engineer",
          status: "MATCHED",
          sublabel: "$200K-$240K",
          angle: 160,
          ringIndex: 4,
        },
        {
          title: "Director Platform",
          status: "SUBMITTED",
          sublabel: "$290K-$340K",
          angle: 200,
          ringIndex: 3,
        },
        {
          title: "Senior Data Engineer",
          status: "INTERVIEWING",
          sublabel: "$240K-$290K",
          angle: 30,
          ringIndex: 2,
        },
        {
          title: "Head Of Security",
          status: "MATCHED",
          sublabel: "$320K-$380K",
          angle: 330,
          ringIndex: 4,
        },
      ];

  const metrics = isHiringMode
    ? [
        { label: "CLEARED ROLES FILLED", value: "400+" },
        { label: "COMBINED EXPERIENCE", value: "23y" },
        { label: "APPS UNDER OVERSIGHT", value: "12" },
      ]
    : [
        { label: "Cleared roles filled", value: "400+" },
        { label: "Years in tech + defense", value: "23" },
        { label: "Mission apps overseen", value: "12" },
      ];

  // Calculate position for role cards around the radar
  const getCardPosition = (angle: number, radius: number) => {
    const radian = (angle - 90) * (Math.PI / 180);
    return {
      x: 50 + radius * Math.cos(radian),
      y: 50 + radius * Math.sin(radian),
    };
  };

  const getStatusColor = (status: string, theme: 'light' | 'dark' = 'dark') => {
    if (theme === 'light') {
      switch (status) {
        case "OFFER":
          return "bg-[#B91C1C] text-white";
        case "INTERVIEWING":
          return "bg-[#FEF3C7] text-[#92400E] border border-[#FCD34D]";
        case "SHORTLISTED":
        case "SUBMITTED":
          return "bg-[#F3F4F6] text-[#6B7280] border border-[#E5E7EB]";
        case "MATCHED":
        case "SOURCING":
        default:
          return "bg-[#E5E7EB] text-[#6B7280]";
      }
    }
    
    switch (status) {
      case "OFFER":
        return "bg-[#B91C1C] text-white";
      case "INTERVIEWING":
        return "bg-[#B91C1C]/20 text-[#DC2626] border border-[#B91C1C]";
      case "SHORTLISTED":
      case "SUBMITTED":
        return "bg-[#2A2A32] text-[#9CA3AF]";
      case "MATCHED":
      case "SOURCING":
      default:
        return "bg-[#1F1F26] text-[#6B7280]";
    }
  };

  return (
    <Card
      className={`relative overflow-visible ${theme === 'light' ? 'bg-white border-[#E5E7EB]' : 'bg-[rgb(13,13,16)]'}`}
      hoverable={false}
    >
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />
      <div className="space-y-6 overflow-visible">
        {/* Noise texture overlay */}

        {/* Header */}
        <div className="space-y-3 text-center">
          {/* Micro-label */}
          <div className={`text-[10px] uppercase tracking-[0.15em] ${theme === 'light' ? 'text-[#DC2626]' : 'text-[#F87171]/60'}`}>
            {theme === 'light' ? 'SEARCH GROUP TALENT' : 'DEFENSE-TECH TALENT'}
          </div>

          {/* Main Title */}
          <h3 className={`text-3xl md:text-4xl leading-tight ${theme === 'light' ? 'text-[#111827]' : 'text-[#F9FAFB]'}`}>
            Talent in motion
          </h3>
          
          {theme === 'light' && (
            <p className="text-sm text-[#6B7280]">
              Live executive and technical roles across the hiring pipeline.
            </p>
          )}
        </div>
        <div className="relative">
          <div className={`absolute inset-0 h-px bg-gradient-to-r from-transparent to-transparent ${theme === 'light' ? 'via-[#E5E7EB]' : 'via-[#B91C1C]/20'}`} />
        </div>
        {/* Body - Radar Pipeline */}
        <div className="flex items-center justify-center">
          {/* Radar Visualization */}
          <div className="relative aspect-square max-h-[450px] w-full max-w-[450px] overflow-visible">
            {/* Radar Container */}
            <div className="absolute inset-0 flex items-center justify-center overflow-visible">
              <svg
                className="w-full h-full"
                viewBox="0 0 400 400"
              >
                <defs>
                  {/* Radial gradient for background glow */}
                  <radialGradient
                    id="radarGlow"
                    cx="50%"
                    cy="50%"
                    r="50%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#B91C1C"
                      stopOpacity="0.15"
                    />
                    <stop
                      offset="50%"
                      stopColor="#B91C1C"
                      stopOpacity="0.05"
                    />
                    <stop
                      offset="100%"
                      stopColor="#B91C1C"
                      stopOpacity="0"
                    />
                  </radialGradient>

                  {/* Gradient for sweep */}
                  <linearGradient
                    id="sweepGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#B91C1C"
                      stopOpacity="0"
                    />
                    <stop
                      offset="100%"
                      stopColor="#B91C1C"
                      stopOpacity="0.3"
                    />
                  </linearGradient>

                  {/* Circular paths for text - positioned below each ring */}
                  <path
                    id="arc-4"
                    d="M 38 200 A 162 162 0 0 1 362 200"
                    fill="none"
                  />
                  <path
                    id="arc-3"
                    d="M 62 200 A 138 138 0 0 1 338 200"
                    fill="none"
                  />
                  <path
                    id="arc-2"
                    d="M 86 200 A 114 114 0 0 1 314 200"
                    fill="none"
                  />
                  <path
                    id="arc-1"
                    d="M 110 200 A 90 90 0 0 1 290 200"
                    fill="none"
                  />
                </defs>

                {/* Background glow */}
                <circle
                  cx="200"
                  cy="200"
                  r="160"
                  fill="url(#radarGlow)"
                />

                {/* Concentric rings */}
                {[0.3, 0.5, 0.65, 0.8, 0.95].map(
                  (scale, index) => (
                    <circle
                      key={index}
                      cx="200"
                      cy="200"
                      r={160 * scale}
                      fill="none"
                      stroke={`rgba(185, 28, 28, ${0.15 + index * 0.08})`}
                      strokeWidth="1"
                      opacity="0.6"
                    />
                  ),
                )}

                {/* Grid lines - subtle crosshair */}
                <line
                  x1="40"
                  y1="200"
                  x2="360"
                  y2="200"
                  stroke="#2A2A32"
                  strokeWidth="1"
                  opacity="0.3"
                />
                <line
                  x1="200"
                  y1="40"
                  x2="200"
                  y2="360"
                  stroke="#2A2A32"
                  strokeWidth="1"
                  opacity="0.3"
                />
                <line
                  x1="85"
                  y1="85"
                  x2="315"
                  y2="315"
                  stroke="#2A2A32"
                  strokeWidth="1"
                  opacity="0.2"
                />
                <line
                  x1="315"
                  y1="85"
                  x2="85"
                  y2="315"
                  stroke="#2A2A32"
                  strokeWidth="1"
                  opacity="0.2"
                />

                {/* Sweep wedge - positioned at ~45 degrees */}
                <path
                  d="M 200 200 L 200 40 A 160 160 0 0 1 313 87 Z"
                  fill="url(#sweepGradient)"
                  opacity="0.4"
                />

                {/* Center dot */}
                <circle
                  cx="200"
                  cy="200"
                  r="4"
                  fill="#B91C1C"
                  opacity="0.8"
                />

                {/* Connection lines from roles to rings */}
                {roles.map((role, idx) => {
                  const ringRadius =
                    160 *
                    [0.3, 0.5, 0.65, 0.8, 0.95][role.ringIndex];
                  const radian =
                    (role.angle - 90) * (Math.PI / 180);
                  const ringX =
                    200 + ringRadius * Math.cos(radian);
                  const ringY =
                    200 + ringRadius * Math.sin(radian);

                  const cardRadius = 200;
                  const cardX =
                    200 + cardRadius * Math.cos(radian);
                  const cardY =
                    200 + cardRadius * Math.sin(radian);

                  // Create curved path
                  const midX = (ringX + cardX) / 2;
                  const midY = (ringY + cardY) / 2;
                  const controlX = midX + (midY - ringY) * 0.2;
                  const controlY = midY - (midX - ringX) * 0.2;

                  const pathD = `M ${ringX} ${ringY} Q ${controlX} ${controlY} ${cardX} ${cardY}`;

                  const isExpanded =
                    expandedChip === `role-${idx}`;

                  return (
                    <g key={`${animationKey}-${idx}`}>
                      {/* Connection line - only visible when expanded */}
                      <path
                        d={pathD}
                        stroke="#B91C1C"
                        strokeWidth="1"
                        fill="none"
                        opacity={isExpanded ? "0.3" : "0"}
                        className="transition-opacity duration-300 pointer-events-none"
                      />
                      {/* Dot at ring connection - always visible */}
                      <circle
                        cx={ringX}
                        cy={ringY}
                        r="8"
                        fill="transparent"
                        className="cursor-pointer"
                        onMouseEnter={() =>
                          handleManualHover(`role-${idx}`)
                        }
                        style={{
                          animation: `fadeIn 0.6s ease-out ${idx * 0.2 + 0.8}s forwards`,
                          opacity: 0,
                        }}
                      />
                      <circle
                        cx={ringX}
                        cy={ringY}
                        r="3"
                        fill="#B91C1C"
                        opacity={isExpanded ? "1" : "0.6"}
                        className="pointer-events-none transition-opacity duration-300"
                        style={{
                          animation: `fadeIn 0.6s ease-out ${idx * 0.2 + 0.8}s forwards`,
                          opacity: 0,
                        }}
                      />
                      {/* Endpoint dot - only visible when expanded */}
                      <circle
                        cx={cardX}
                        cy={cardY}
                        r="2"
                        fill="#B91C1C"
                        opacity={isExpanded ? "1" : "0"}
                        className="transition-opacity duration-300 pointer-events-none"
                      />
                    </g>
                  );
                })}

                {/* Ring labels - Arced text following the curve of each ring */}
                <text className="text-[9px] fill-[#6B6B75] uppercase tracking-widest">
                  <textPath
                    href="#arc-4"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    {isHiringMode ? "SOURCING" : "MATCHED"}
                  </textPath>
                </text>
                <text className="text-[9px] fill-[#5B5B65] uppercase tracking-widest">
                  <textPath
                    href="#arc-3"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    {isHiringMode ? "SHORTLISTED" : "SUBMITTED"}
                  </textPath>
                </text>
                <text className="text-[9px] fill-[#4B4B55] uppercase tracking-widest">
                  <textPath
                    href="#arc-2"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    {isHiringMode
                      ? "INTERVIEWING"
                      : "INTERVIEWING"}
                  </textPath>
                </text>
                <text className="text-[9px] fill-[#4B4B55] uppercase tracking-widest">
                  <textPath
                    href="#arc-1"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    {isHiringMode ? "OFFER" : "OFFER"}
                  </textPath>
                </text>

                {/* Center label - Hired/Placed */}
                <text
                  x="200"
                  y="190"
                  textAnchor="middle"
                  className="text-[10px] fill-[#B91C1C] uppercase tracking-widest"
                >
                  {isHiringMode ? "HIRED" : "PLACED"}
                </text>

                {/* Blip dots on radar - shown always, reveal card on hover */}
                {blips.map((blip, idx) => {
                  const ringRadius =
                    160 *
                    [0.3, 0.5, 0.65, 0.8, 0.95][blip.ringIndex];
                  const radian =
                    (blip.angle - 90) * (Math.PI / 180);
                  const blipX =
                    200 + ringRadius * Math.cos(radian);
                  const blipY =
                    200 + ringRadius * Math.sin(radian);

                  // Calculate card position - extend outward from blip
                  const cardRadius = 200; // Same as main role cards
                  const cardX =
                    200 + cardRadius * Math.cos(radian);
                  const cardY =
                    200 + cardRadius * Math.sin(radian);

                  // Create curved path for connection line
                  const midX = (blipX + cardX) / 2;
                  const midY = (blipY + cardY) / 2;
                  const controlX = midX + (midY - blipY) * 0.2;
                  const controlY = midY - (midX - blipX) * 0.2;
                  const pathD = `M ${blipX} ${blipY} Q ${controlX} ${controlY} ${cardX} ${cardY}`;

                  const isHovered =
                    expandedChip === `blip-${idx}`;

                  return (
                    <g key={`${animationKey}-blip-${idx}`}>
                      {/* Connection line - only visible on hover */}
                      <path
                        d={pathD}
                        stroke="#B91C1C"
                        strokeWidth="1"
                        fill="none"
                        opacity={isHovered ? "0.3" : "0"}
                        className="transition-opacity duration-300 pointer-events-none"
                      />

                      {/* Blip dot with hover area */}
                      <circle
                        cx={blipX}
                        cy={blipY}
                        r="8"
                        fill="transparent"
                        className="cursor-pointer"
                        onMouseEnter={() =>
                          handleManualHover(`blip-${idx}`)
                        }
                        style={{
                          animation: `fadeIn 0.7s ease-out ${1.8 + idx * 0.15}s forwards`,
                          opacity: 0,
                        }}
                      />
                      <circle
                        cx={blipX}
                        cy={blipY}
                        r="3"
                        fill="#B91C1C"
                        opacity={isHovered ? "1" : "0.6"}
                        className="pointer-events-none transition-opacity duration-300"
                        style={{
                          animation: `fadeIn 0.7s ease-out ${1.8 + idx * 0.15}s forwards`,
                          opacity: 0,
                        }}
                      />

                      {/* Endpoint dot - only visible on hover */}
                      <circle
                        cx={cardX}
                        cy={cardY}
                        r="2"
                        fill="#B91C1C"
                        opacity={isHovered ? "1" : "0"}
                        className="transition-opacity duration-300 pointer-events-none"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Blip cards - positioned at the end of connection lines */}
              {blips.map((blip, idx) => {
                const ringRadius =
                  160 *
                  [0.3, 0.5, 0.65, 0.8, 0.95][blip.ringIndex];
                const radian =
                  (blip.angle - 90) * (Math.PI / 180);
                const blipX =
                  200 + ringRadius * Math.cos(radian);
                const blipY =
                  200 + ringRadius * Math.sin(radian);

                // Card position - extend outward from blip
                const cardRadius = 200;
                const cardX =
                  200 + cardRadius * Math.cos(radian);
                const cardY =
                  200 + cardRadius * Math.sin(radian);
                const cardPercentX = (cardX / 400) * 100;
                const cardPercentY = (cardY / 400) * 100;

                const isHovered =
                  expandedChip === `blip-${idx}`;

                return (
                  <div
                    key={`${animationKey}-blip-card-${idx}`}
                    className="absolute z-50"
                    style={{
                      left: `${cardPercentX}%`,
                      top: `${cardPercentY}%`,
                      transform: "translate(-50%, -50%)",
                      opacity: isHovered ? 1 : 0,
                      pointerEvents: isHovered
                        ? "auto"
                        : "none",
                      transition:
                        "opacity 900ms, transform 900ms",
                    }}
                  >
                    {/* Card - only visible on hover */}
                    <div
                      className={`${isHovered ? "scale-100" : "scale-90"} transition-transform duration-[900ms]`}
                    >
                      <div className={`rounded-xl px-3 py-2.5 min-w-[140px] ${
                        theme === 'light'
                          ? 'bg-white border border-[#DC2626] shadow-lg'
                          : 'bg-[#151518] border border-[#B91C1C] shadow-[0_0_24px_rgba(185,28,28,0.4)]'
                      }`}>
                        <div className="space-y-2">
                          <p className={`text-xs whitespace-nowrap ${theme === 'light' ? 'text-[#111827]' : 'text-[#F9FAFB]'}`}>
                            {blip.title}
                          </p>
                          <div className="flex items-center gap-2 justify-between">
                            <span
                              className={`inline-block text-[8px] px-2 py-0.5 rounded-full uppercase tracking-wider ${getStatusColor(blip.status, theme)}`}
                            >
                              {blip.status}
                            </span>
                            <span className={`text-[9px] ${theme === 'light' ? 'text-[#6B7280]' : 'text-[#6B7280]'}`}>
                              {blip.sublabel}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Role cards positioned absolutely */}
              {roles.map((role, idx) => {
                const pos = getCardPosition(role.angle, 52); // 52% radius for card positioning
                const isExpanded =
                  expandedChip === `role-${idx}`;

                return (
                  <div
                    key={`${animationKey}-card-${idx}`}
                    className="absolute z-[100]"
                    style={{
                      left: `${pos.x}%`,
                      top: `${pos.y}%`,
                      transform: "translate(-50%, -50%)",
                      opacity: isExpanded ? 1 : 0,
                      pointerEvents: isExpanded
                        ? "auto"
                        : "none",
                      transition:
                        "opacity 900ms, transform 900ms",
                    }}
                  >
                    {/* Card - only visible when expanded */}
                    <div
                      className={`${isExpanded ? "scale-100" : "scale-90"} transition-transform duration-[900ms]`}
                    >
                      <div className={`rounded-xl px-3 py-2.5 min-w-[140px] ${
                        theme === 'light'
                          ? 'bg-white border border-[#DC2626] shadow-lg'
                          : 'bg-[#151518] border border-[#B91C1C] shadow-[0_0_24px_rgba(185,28,28,0.4)]'
                      }`}>
                        <div className="space-y-2">
                          <p className={`text-xs whitespace-nowrap ${theme === 'light' ? 'text-[#111827]' : 'text-[#F9FAFB]'}`}>
                            {role.title}
                          </p>
                          <div className="flex items-center gap-2 justify-between">
                            <span
                              className={`inline-block text-[8px] px-2 py-0.5 rounded-full uppercase tracking-wider ${getStatusColor(role.status, theme)}`}
                            >
                              {role.status}
                            </span>
                            <span className={`text-[9px] ${theme === 'light' ? 'text-[#6B7280]' : 'text-[#6B7280]'}`}>
                              {role.sublabel}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B91C1C]/20 to-transparent h-px" />
        </div>

        {/* Footer - Summary Metrics */}
        <div className="grid grid-cols-3 gap-4">
          {metrics.map((metric, i) => (
            <div key={i} className="text-center space-y-1">
              <p className="text-2xl text-[#B91C1C]">
                {metric.value}
              </p>
              <p className="text-[10px] uppercase tracking-widest text-[#9CA3AF] leading-tight">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}