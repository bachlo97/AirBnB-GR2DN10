import { ReactNode, createContext, useState } from "react";


type TRoomsCount = {
  phongNgu : number,
  giuong: number,
  phongTam: number,
}
type TPopUp = {
  openModal: boolean;
  chooseRooms: TRoomsCount;
};

type ContextType = (TPopUp | any)[];
export const ContextStore = createContext<ContextType>([
  { openModal: false, chooseRooms: 0 },
  {
    setOpenModal: ()=>{},
    setChooseRoom: ()=>{},
  },
]);

export function Provider({ children }: { children: ReactNode }) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [chooseRooms, setChooseRooms] = useState({});
  const value: ContextType = [
    {
      openModal,
      chooseRooms,
    },
    { setOpenModal, setChooseRooms },
  ];
  return (
    <ContextStore.Provider value={value}>{children}</ContextStore.Provider>
  );
}
