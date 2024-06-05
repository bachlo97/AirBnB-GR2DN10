import { getRooms } from "@/services/room";
import { ReactNode, createContext, useEffect, useState } from "react";
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
  count: number;
};
type FilterParams = Pick<
  TPopUpProp,
  "rangePrice" | "chooseRooms" | "chooseNecessities"
>;

type THandleFilter = (filter: FilterParams, data: TRoomAPI[]) => any;

export type TPopUpMethod = {
  setDataRooms: React.Dispatch<React.SetStateAction<TRoomAPI[]>>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setChooseRooms: React.Dispatch<React.SetStateAction<TRoomsCount>>;
  setChooseNecessities: React.Dispatch<React.SetStateAction<TNecessities>>;
  setClear: React.Dispatch<React.SetStateAction<boolean>>;
  setRangePrice: React.Dispatch<React.SetStateAction<number[]>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  handleFilter: THandleFilter;
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
    count: -1,
    clear: false,
  },

  {
    setDataRooms: () => {},
    setOpenModal: () => {},
    setChooseRooms: () => {},
    setChooseNecessities: () => {},
    setClear: () => {},
    setRangePrice: () => {},
    setCount: () => {},
    handleFilter: () => {},
  },
]);

export const handleRangeSlider = (data: TRoomAPI[] | any) => {
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


export const handleFilter = (filter: FilterParams, data: TRoomAPI[]) => {
  const { chooseNecessities, chooseRooms, rangePrice } = filter;
  const [start, end] = rangePrice;

  let filteredData = data.filter(
    (item: TRoomAPI) => item.giaTien >= start && item.giaTien <= end,
  );

  const selectedNecessities = Object.keys(chooseNecessities).filter(
    (key) => chooseNecessities[key as keyof TNecessities],
  );

  if (selectedNecessities.length) {
    filteredData = filteredData.filter((item: TRoomAPI) => {
      return selectedNecessities.every(
        (necessity) => item[necessity as keyof TNecessities],
      );
    });
  }
  const filteredChooseRooms = Object.fromEntries(
    Object.entries(chooseRooms).filter(([_, value]) => value !== 0),
  );

  console.log(2222222,filteredChooseRooms)
  if (Object.keys(filteredChooseRooms).length) {

    filteredData = filteredData.filter((item: TRoomAPI) => {
      return Object.entries(filteredChooseRooms).every(([key, value]) => {
        return item.hasOwnProperty(key) && (item[key as keyof TRoomsCount] === value || (value == 6 && item[key as keyof TRoomsCount] >= 6))
      });
    });
  }
  return filteredData
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
  const [count, setCount] = useState(-1);

  const [clear, setClear] = useState(false);

  useEffect(() => {
    IIFE(async () => {
      try {
        const data = await getRooms();
        const content = data.content;
        setDataRooms(content);
        setRangePrice(handleRangeSlider(content));
      } catch (e) {
        console.log(e);
      }
    });
  }, []);

  useEffect(() => {
    IIFE(async () => {
      try {
        const dataAPI = await getRooms();
        const roomData = dataAPI.content;
        const filteredData = handleFilter(
          { rangePrice, chooseRooms, chooseNecessities },
          roomData,
        );
        console.log(111111, filteredData);
        setCount(filteredData.length);
      } catch (e) {
        console.log(e);
      }
    });
  }, [chooseRooms,rangePrice,chooseNecessities]);

  

  const value: ContextType = [
    {
      dataRooms,
      openModal,
      rangePrice,
      chooseRooms,
      chooseNecessities,
      clear,
      count,
    },
    {
      setDataRooms,
      setOpenModal,
      setChooseRooms,
      setChooseNecessities,
      setClear,
      setRangePrice,
      setCount,
      handleFilter,
    },
  ];

  return (
    <ContextStore.Provider value={value}>{children}</ContextStore.Provider>
  );
}

// const filteredData: TRoomAPI[] = [];

// const hasValue6 = Object.values(filteredChooseRooms).includes(6);

// filteredData = filteredData.filter((item) => {
//   for (const [key, value] of Object.entries(filteredChooseRooms)) {
//     if (hasValue6 && item[key] >= 6) return true;
//     if (!hasValue6 && item[key] === value) return true;
//   }
//   return false;
// });

// console.log(filteredData);

