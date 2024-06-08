
import { ReactNode, createContext, useEffect, useReducer } from "react";
import { filterRoomReducer, initialState } from "./filter-rooms.reducer";
import { Action } from "../types/action.type";
import { TPopUpProp } from "../types/context.type";
import { IIFE, getLocalStorage } from "@/utils";
import { getRooms } from "@/services/room";
import { handleFilter, handleRangeSlider } from "./helper";
import { changDefaultRange, chooseNumRoom, choosePriceRange, countRoom, getDataRoom, resetChooseNecessities, resetChooseRoom, selectNecessities } from "../actions/filter-room.actions";
import { ROOM_FILTER } from "@/constant";

export type ContextType = [TPopUpProp, React.Dispatch<Action>];
export const ContextStore = createContext<ContextType>([
  {
    dataRooms: [],
    openModal: false,
    rangePrice: [0, 1],
    rangeDefault: [0, 1],
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
  () => {},
]);

export function Provider({ children }: { children: ReactNode }) {

  const [state, dispatch] = useReducer(filterRoomReducer, initialState);

  const { openModal, chooseRooms, chooseNecessities, clear ,rangePrice} = state


  useEffect(() => {
    IIFE(async () => {
      try {
        const data = await getRooms();
        let { content } = data;
        let range = handleRangeSlider(content);
        await dispatch(changDefaultRange(range));
        if (getLocalStorage(ROOM_FILTER)) {
          content = handleFilter(getLocalStorage(ROOM_FILTER), content);

          const { rangePrice, chooseRooms, chooseNecessities } =
            getLocalStorage(ROOM_FILTER);

          dispatch(choosePriceRange(rangePrice));
          dispatch(chooseNumRoom(chooseRooms));
          dispatch(selectNecessities(chooseNecessities));
        } else {
          dispatch(resetChooseRoom());
          dispatch(resetChooseNecessities());
          dispatch(choosePriceRange(range));
        }
        dispatch(getDataRoom(content));
      } catch (e) {
        console.log(e);
      }
    });
  }, [openModal]);

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
        dispatch(countRoom(filteredData.length))
      } catch (e) {
        console.log(e);
      }
    });
  }, [chooseNecessities,chooseRooms]);

  useEffect(() => {
    IIFE(async () => {
      try {
        const data = await getRooms();
        const { content } = data;
        console.log({ content });
        const range = handleRangeSlider(content);
        dispatch(choosePriceRange(range))
        dispatch(resetChooseRoom())
        dispatch(resetChooseNecessities())

      } catch (e) {
        console.log(e);
      }
    });
  }, [clear]);
  return (
    <ContextStore.Provider value={[state, dispatch]}>
      {children}
    </ContextStore.Provider>
  );
}