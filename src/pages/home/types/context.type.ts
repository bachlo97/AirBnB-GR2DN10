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
    rangePrice: [number,number];
    rangeDefault: [number,number];
    chooseRooms: TRoomsCount;
    chooseNecessities: TNecessities;
    clear: boolean;
    count: number;
  };
  export type FilterParams = Pick<
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
    setRangeDefault: React.Dispatch<React.SetStateAction<number[]>>;
  };
  
  export type ContextType = [TPopUpProp, TPopUpMethod];

  export interface User {
    id: number;
    name: string;
    email: string;
  }