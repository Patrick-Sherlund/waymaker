interface ProgressRailProps {
  activeSection: string;
}

export function ProgressRail({ activeSection }: ProgressRailProps) {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'why', label: 'Why' },
    { id: 'roles', label: 'Roles' },
    { id: 'process', label: 'Process' },
    { id: 'founders', label: 'Founders' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-6">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="flex items-center gap-3 group"
        >
          <span
            className={`text-xs uppercase tracking-wider transition-all duration-300 ${
              activeSection === section.id
                ? 'text-[#B91C1C] opacity-100'
                : 'text-[#4B4B55] opacity-0 group-hover:opacity-100'
            }`}
          >
            {section.label}
          </span>
          <div
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-[#B91C1C] scale-125 shadow-[0_0_12px_rgba(185,28,28,0.6)]'
                : 'bg-[#4B4B55] group-hover:bg-[#9CA3AF]'
            }`}
          />
        </button>
      ))}
    </div>
  );
}
