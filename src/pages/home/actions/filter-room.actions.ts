import {
  Action,
  CHANGE_DEFAULT_RANGE,
  CHANGE_NECESSITIES,
  CHOOSE_NECESSITIES,
  CHOOSE_PRICE_RANGE,
  CHOSSE_NUM_ROOM,
  CLEAR_FORM,
  COUNT_ROOM,
  GET_DATA_ROOM,
  OPEN_MODAL,
  RESET_CHOOSE_CHANGE_NECESSITIES,
  RESET_CHOOSE_ROOM,
  necessitieName,
} from "../types/action.type";
import { TNecessities, TRoomsCount } from "../types/context.type";

export const getDataRoom = (payload: TRoomAPI[]): Action => ({
  type: GET_DATA_ROOM,
  payload,
});

export const changeNecessities = (
  event: React.ChangeEvent<HTMLInputElement>,
  name: necessitieName,
): Action => ({
  type: CHANGE_NECESSITIES,
  payload: {
    check: event.target.checked,
    name,
  },
});

export const selectNecessities = (payload: TNecessities): Action => ({
  type: CHOOSE_NECESSITIES,
  payload,
});

export const checkModal = (status: boolean): Action => ({
  type: OPEN_MODAL,
  payload: status,
});

export const clearForm = (status: boolean): Action => ({
  type: CLEAR_FORM,
  payload: status,
});

export const chooseNumRoom = (payload: TRoomsCount): Action => ({
  type: CHOSSE_NUM_ROOM,
  payload,
});

export const choosePriceRange = (payload: [number, number]): Action => ({
  type: CHOOSE_PRICE_RANGE,
  payload,
});

export const changDefaultRange = (payload: [number, number]): Action => ({
  type: CHANGE_DEFAULT_RANGE,
  payload,
});

export const countRoom = (payload: number): Action => ({
  type: COUNT_ROOM,
  payload,
});

export const resetChooseRoom = (): Action => ({
  type: RESET_CHOOSE_ROOM,
});

export const resetChooseNecessities = (): Action => ({
  type: RESET_CHOOSE_CHANGE_NECESSITIES,
});
