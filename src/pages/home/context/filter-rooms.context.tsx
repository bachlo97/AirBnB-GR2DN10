import { ReactNode, createContext, useState } from "react";

type ContextType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];
export const ContextStore = createContext<ContextType>([false, () => {}]);

export function Provider({ children }: { children: ReactNode }) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const value: ContextType = [openModal, setOpenModal];
  return (
    <ContextStore.Provider value={value}>{children}</ContextStore.Provider>
  );
}
