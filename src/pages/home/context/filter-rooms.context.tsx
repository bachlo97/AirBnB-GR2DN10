import { getRooms } from "@/services/room";
import { ReactNode, createContext, useEffect, useState } from "react";
import { converToRooms } from "../product/product-list/helpers/ConverToRooms";
import { IIFE } from "@/utils";

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
  dataRooms: TRoomAPI[];
  openModal: boolean;
  rangePrice: number[];
  chooseRooms: TRoomsCount;
  chooseNecessities: TNecessities;
  clear: boolean;
};
export type TPopUpMethod = {
  setDataRooms: React.Dispatch<React.SetStateAction<TRoomAPI[]>>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setChooseRooms: React.Dispatch<React.SetStateAction<TRoomsCount>>;
  setChooseNecessities: React.Dispatch<React.SetStateAction<TNecessities>>;
  setClear: React.Dispatch<React.SetStateAction<boolean>>;
  setRangePrice: React.Dispatch<React.SetStateAction<number[]>>;
};

export type ContextType = [TPopUpProp, TPopUpMethod];
export const ContextStore = createContext<ContextType>([
  {
    dataRooms: [],
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
    setDataRooms: () => {},
    setOpenModal: () => {},
    setChooseRooms: () => {},
    setChooseNecessities: () => {},
    setClear: () => {},
    setRangePrice: () => {},
  },
]);

export const handleRangeSlider = (data: TRoomAPI[] |any) => {
  return [
    Math.min.apply(
      Math,
      data.map((room: TRoomAPI) => room.giaTien),
    ),
    Math.max.apply(
      Math,
      data.map((room: TRoomAPI) => room.giaTien),
    ),
  ];
};

export function Provider({ children }: { children: ReactNode }) {

  const [dataRooms, setDataRooms] = useState<TRoomAPI[]>([]);
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

  useEffect(() => {
    IIFE(async () => {
      try {
        const data = await getRooms();
        const content = data.content;
        setDataRooms(content);
        setRangePrice(handleRangeSlider(content))
      } catch (e) {
        console.log(e);
      }
    });
  }, []);

  const value: ContextType = [
    {
      dataRooms,
      openModal,
      rangePrice,
      chooseRooms,
      chooseNecessities,
      clear,
    },
    {
      setDataRooms,
      setOpenModal,
      setChooseRooms,
      setChooseNecessities,
      setClear,
      setRangePrice,
    },
  ];
  const dataTest = [
    {
      name: 'A',
      giaTien: 3,
    },
    {
      name: 'B',
      giaTien: 5,
    },
    {
      name: 'C',
      giaTien: 31,
    },    {
      name: 'D',
      giaTien: 2,
    }
  ]


  const resultTest = handleRangeSlider(dataTest)
  console.log({resultTest})
  console.log({dataRooms})
  console.log({rangePrice})
  return (
    <ContextStore.Provider value={value}>{children}</ContextStore.Provider>
  );
}
