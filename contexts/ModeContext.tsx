import { createContext, useContext, useState, ReactNode } from 'react';

type Mode = 'FOR HIRING TEAMS' | 'FOR CANDIDATES';

interface ModeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
  isHiringMode: boolean;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>('FOR HIRING TEAMS');

  return (
    <ModeContext.Provider value={{ 
      mode, 
      setMode, 
      isHiringMode: mode === 'FOR HIRING TEAMS' 
    }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
}
