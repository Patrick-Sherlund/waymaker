interface ModeToggleProps {
  options: string[];
  selected: string;
  onChange: (option: string) => void;
}

export function ModeToggle({ options, selected, onChange }: ModeToggleProps) {
  return (
    <div className="inline-flex bg-[#151518] rounded-full p-1.5 border border-[#2A2A32]">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 relative ${
            selected === option
              ? 'bg-[#B91C1C] text-white shadow-[0_0_16px_rgba(185,28,28,0.4)]'
              : 'text-[#9CA3AF] hover:text-[#F9FAFB] hover:border hover:border-[#B91C1C]/50'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}