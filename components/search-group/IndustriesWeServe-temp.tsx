// Temporary file for education SVG redesign
education: () => (
  <svg viewBox="0 0 240 180" className="w-full h-full" fill="none">
    {/* UNIT progression - perfectly centered and aligned */}
    <g>
      {/* Unit 1 - Completed */}
      <g transform="translate(16, 70)">
        <rect x="0" y="0" width="50" height="50" rx="12" fill="#F0FDF4" stroke="#16A34A" strokeWidth="2.5" />
        <rect x="3" y="3" width="44" height="44" rx="10" fill="#DCFCE7" fillOpacity="0.2" />
        <text x="25" y="16" className="text-[8px]" fill="#15803D" textAnchor="middle" fontWeight="700" letterSpacing="0.8">UNIT 1</text>
        {/* Centered checkmark */}
        <g transform="translate(25, 32)">
          <circle cx="0" cy="0" r="9" fill="#16A34A" fillOpacity="0.15" />
          <path d="M-4 0 L-1.5 2.5 L4 -3" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
      
      {/* Connection line 1-2 */}
      <path d="M66 95 L82 95" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" opacity="0.4">
        <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1.5s" repeatCount="indefinite" />
      </path>
      
      {/* Unit 2 - In Progress (Active) - PERFECTLY CENTERED */}
      <g transform="translate(82, 70)">
        <rect x="0" y="0" width="50" height="50" rx="12" fill="#FEF2F2" stroke="#DC2626" strokeWidth="3" />
        <rect x="3.5" y="3.5" width="43" height="43" rx="10" fill="#DC2626" fillOpacity="0.03" />
        <text x="25" y="16" className="text-[8px]" fill="#DC2626" textAnchor="middle" fontWeight="700" letterSpacing="0.8">UNIT 2</text>
        {/* Perfectly centered progress circle */}
        <g transform="translate(25, 32)">
          <circle cx="0" cy="0" r="10.5" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="53 13" opacity="0.3" transform="rotate(-90)">
            <animateTransform attributeName="transform" type="rotate" from="-90 0 0" to="270 0 0" dur="2s" repeatCount="indefinite" />
          </circle>
          <text x="0" y="1" className="text-[9px]" fill="#DC2626" textAnchor="middle" dominantBaseline="middle" fontWeight="800">67%</text>
        </g>
      </g>
      
      {/* Connection line 2-3 */}
      <path d="M132 95 L148 95" stroke="#D1D5DB" strokeWidth="2" opacity="0.3" />
      
      {/* Unit 3 - Locked */}
      <g transform="translate(148, 70)">
        <rect x="0" y="0" width="50" height="50" rx="12" fill="#FAFAFA" stroke="#D1D5DB" strokeWidth="2.5" />
        <rect x="3" y="3" width="44" height="44" rx="10" fill="#F9FAFB" fillOpacity="0.5" />
        <text x="25" y="16" className="text-[8px]" fill="#9CA3AF" textAnchor="middle" fontWeight="600" letterSpacing="0.8">UNIT 3</text>
        {/* Centered lock icon */}
        <g transform="translate(25, 32)">
          <rect x="-6" y="-2" width="12" height="10" rx="2" fill="#FFFFFF" stroke="#9CA3AF" strokeWidth="1.5" />
          <path d="M-4 -2 L-4 -5 C-4 -7.5 -2.5 -9 0 -9 C2.5 -9 4 -7.5 4 -5 L4 -2" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <circle cx="0" cy="3" r="1.5" fill="#9CA3AF" />
        </g>
      </g>
      
      {/* Unit 4 - Minimal locked */}
      <g transform="translate(210, 70)">
        <rect x="0" y="0" width="16" height="50" rx="8" fill="#FAFAFA" stroke="#D1D5DB" strokeWidth="2" opacity="0.3" />
        <text x="8" y="28" className="text-[6px]" fill="#D1D5DB" textAnchor="middle" fontWeight="600" transform="rotate(-90 8 28)">UNIT 4</text>
      </g>
    </g>
    
    {/* PERFORMANCE card - top left with perfect alignment */}
    <g transform="translate(8, 8)">
      <rect x="0" y="0" width="100" height="54" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
      <rect x="3" y="3" width="94" height="48" rx="10" fill="#FAFAFA" fillOpacity="0.25" />
      
      {/* Header with live indicator */}
      <text x="50" y="18" className="text-[8px]" fill="#9CA3AF" textAnchor="middle" fontWeight="700" letterSpacing="0.8">PERFORMANCE</text>
      <circle cx="92" cy="11" r="2.5" fill="#16A34A" opacity="0.25" />
      <circle cx="92" cy="11" r="1.8" fill="#16A34A">
        <animate attributeName="opacity" values="1;0.3;1" dur="2.5s" repeatCount="indefinite" />
      </circle>
      
      {/* Metric rows - perfectly aligned */}
      <g transform="translate(0, 28)">
        <text x="12" y="0" className="text-[8px]" fill="#6B7280" dominantBaseline="middle" fontWeight="600">GPA</text>
        <text x="88" y="0" className="text-[14px]" fill="#16A34A" textAnchor="end" dominantBaseline="middle" fontWeight="800">3.8</text>
      </g>
      
      <g transform="translate(0, 42)">
        <text x="12" y="0" className="text-[8px]" fill="#6B7280" dominantBaseline="middle" fontWeight="600">Progress</text>
        <text x="88" y="0" className="text-[14px]" fill="#DC2626" textAnchor="end" dominantBaseline="middle" fontWeight="800">67%</text>
      </g>
    </g>
    
    {/* OBJECTIVES card - top right with perfect alignment */}
    <g transform="translate(132, 8)">
      <rect x="0" y="0" width="100" height="54" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
      <rect x="3" y="3" width="94" height="48" rx="10" fill="#FAFAFA" fillOpacity="0.25" />
      
      {/* Header */}
      <text x="50" y="18" className="text-[8px]" fill="#9CA3AF" textAnchor="middle" fontWeight="700" letterSpacing="0.8">OBJECTIVES</text>
      
      {/* Objective 1 - completed */}
      <g transform="translate(12, 30)">
        <circle cx="0" cy="0" r="6" fill="#16A34A" fillOpacity="0.12" stroke="#16A34A" strokeWidth="2" />
        <path d="M-2.5 0 L-0.5 2 L2.5 -2" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="12" y="0.5" className="text-[8px]" fill="#15803D" dominantBaseline="middle" fontWeight="600">Master concepts</text>
      </g>
      
      {/* Objective 2 - in progress */}
      <g transform="translate(12, 44)">
        <circle cx="0" cy="0" r="6" fill="#DC2626" fillOpacity="0.12" stroke="#DC2626" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="2.2" fill="#DC2626" />
        <text x="12" y="0.5" className="text-[8px]" fill="#DC2626" dominantBaseline="middle" fontWeight="700">Complete project</text>
      </g>
    </g>
    
    {/* SUBJECTS card - bottom left with perfect alignment */}
    <g transform="translate(8, 128)">
      <rect x="0" y="0" width="62" height="44" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
      
      {/* Header */}
      <text x="31" y="16" className="text-[8px]" fill="#9CA3AF" textAnchor="middle" fontWeight="700" letterSpacing="0.8">SUBJECTS</text>
      
      {/* Progress bar 1 */}
      <g transform="translate(10, 25)">
        <rect x="0" y="0" width="42" height="5" rx="2.5" fill="#F3F4F6" />
        <rect x="0" y="0" width="35" height="5" rx="2.5" fill="#DC2626" fillOpacity="0.75" />
      </g>
      
      {/* Progress bar 2 */}
      <g transform="translate(10, 34)">
        <rect x="0" y="0" width="42" height="5" rx="2.5" fill="#F3F4F6" />
        <rect x="0" y="0" width="38" height="5" rx="2.5" fill="#16A34A" fillOpacity="0.75" />
      </g>
    </g>
    
    {/* GRADES card - bottom right with perfect alignment */}
    <g transform="translate(170, 128)">
      <rect x="0" y="0" width="62" height="44" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
      
      {/* Header */}
      <text x="31" y="16" className="text-[8px]" fill="#9CA3AF" textAnchor="middle" fontWeight="700" letterSpacing="0.8">GRADES</text>
      
      {/* Grade badges perfectly centered */}
      <g transform="translate(31, 31)">
        <circle cx="-12" cy="0" r="8.5" fill="#16A34A" fillOpacity="0.12" stroke="#16A34A" strokeWidth="2.5" />
        <text x="-12" y="0.5" className="text-[12px]" fill="#16A34A" textAnchor="middle" dominantBaseline="middle" fontWeight="800">A</text>
        
        <circle cx="12" cy="0" r="8.5" fill="#DC2626" fillOpacity="0.12" stroke="#DC2626" strokeWidth="2.5" />
        <text x="12" y="0.5" className="text-[12px]" fill="#DC2626" textAnchor="middle" dominantBaseline="middle" fontWeight="800">B</text>
      </g>
    </g>
  </svg>
),
