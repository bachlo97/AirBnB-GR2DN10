import React, { createContext, useState, ReactNode } from 'react';


type ContextType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

export const ContextStore = createContext<ContextType>([false, () => {}]);

export function Provider({ children }: { children: ReactNode }) {
  const [bgBlur, setBgBlur] = useState<boolean>(false);
  const value: ContextType = [bgBlur, setBgBlur];

  return (
    <ContextStore.Provider value={value}>
      {children}
    </ContextStore.Provider>
  );
}

export default ContextStore;


