import { ReactNode, createContext, useState } from "react";

export type TRoomsCount = {
  phongNgu: number;
  giuong: number;
  phongTam: number;
};
export type TNecessities = {
  wifi: boolean;
  mayGiat: boolean;
  dieuHoa: boolean;
  bep: boolean;
  tivi: boolean;
  banUi: boolean;
};
export type TPopUpProp = {
  openModal: boolean;
  rangePrice: number[];
  chooseRooms: TRoomsCount;
  chooseNecessities: TNecessities;
  clear: boolean;
};
export type TPopUpMethod = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setChooseRooms: React.Dispatch<React.SetStateAction<TRoomsCount>>;
  setChooseNecessities: React.Dispatch<React.SetStateAction<TNecessities>>;
  setClear: React.Dispatch<React.SetStateAction<boolean>>;
  setRangePrice: React.Dispatch<React.SetStateAction<number[]>>;
};

export type ContextType = [TPopUpProp, TPopUpMethod];
export const ContextStore = createContext<ContextType>([
  {
    openModal: false,
    rangePrice: [20, 50],
    chooseRooms: { phongNgu: 0, phongTam: 0, giuong: 0 },
    chooseNecessities: {
      wifi: false,
      mayGiat: false,
      dieuHoa: false,
      bep: false,
      tivi: false,
      banUi: false,
    },
    clear: false,
  },

  {
    setOpenModal: () => {},
    setChooseRooms: () => {},
    setChooseNecessities: () => {},
    setClear: () => {},
    setRangePrice: () => {},
  },
]);

export function Provider({ children }: { children: ReactNode }) {
  const [openModal, setOpenModal] = useState(false);
  const [rangePrice, setRangePrice] = useState([20, 50]);
  const [chooseRooms, setChooseRooms] = useState({
    phongNgu: 0,
    giuong: 0,
    phongTam: 0,
  });
  const [chooseNecessities, setChooseNecessities] = useState({
    wifi: false,
    mayGiat: false,
    dieuHoa: false,
    bep: false,
    tivi: false,
    banUi: false,
  });

  const [clear, setClear] = useState(false);

  const value: ContextType = [
    {
      openModal,
      rangePrice,
      chooseRooms,
      chooseNecessities,
      clear,
    },
    {
      setOpenModal,
      setChooseRooms,
      setChooseNecessities,
      setClear,
      setRangePrice,
    },
  ];
  return (
    <ContextStore.Provider value={value}>{children}</ContextStore.Provider>
  );
}
