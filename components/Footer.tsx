export function Footer({ theme = 'dark' }: { theme?: 'light' | 'dark' }) {
  return (
    <footer className={`border-t ${
      theme === 'light' 
        ? 'border-[#E5E7EB] bg-white' 
        : 'border-[#1C1C22] bg-[#050505]'
    }`}>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-8">
        <div className={`text-xs text-center ${
          theme === 'light' ? 'text-[#6B7280]' : 'text-[#4B4B55]'
        }`}>
          <p>{theme === 'light' ? 'Waymaker - Executive & Technical Search' : 'Waymaker - Executive & Defense Tech Recruiting'}</p>
          <p>© 2026 Waymaker · Austin, Texas · Website designed by Patrick Sherlund</p>
        </div>
      </div>
    </footer>
  );
}