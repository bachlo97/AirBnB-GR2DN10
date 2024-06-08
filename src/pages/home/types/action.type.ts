import { TNecessities, TRoomsCount } from "./context.type";

//action type
export const CHANGE_NECESSITIES = "CHANGE_NECESSITIES";
export const CHOOSE_NECESSITIES = "CHOOSE_NECESSITIES";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLEAR_FORM = "CLEAR_FORM";
export const CHOSSE_NUM_ROOM = "CHOOSE_NUM_ROOM";
export const CHOOSE_PRICE_RANGE = "CHOOSE_PRICE_RANGE";
export const CHANGE_DEFAULT_RANGE = "CHANGE_DEFAULT_RANGE";
export const COUNT_ROOM = "COUNT_ROOM";
export const RESET_CHOOSE_ROOM = "RESET_CHOOSE_ROOM";
export const RESET_CHOOSE_CHANGE_NECESSITIES =
  "RESET_CHOOSE_CHANGE_NECESSITIES";
export const GET_DATA_ROOM = "GET_DATA_ROOM";
//action creator
export type necessitieName =
  | "wifi"
  | "mayGiat"
  | "dieuHoa"
  | "bep"
  | "tivi"
  | "banUi";

type getDataRoomAction = {
  type: typeof GET_DATA_ROOM;
  payload: TRoomAPI[];
};

type changeNecessitiesAction = {
  type: typeof CHANGE_NECESSITIES;
  payload: {
    check: boolean;
    name: necessitieName;
  };
};

type chooseNecessitiesAction = {
  type: typeof CHOOSE_NECESSITIES;
  payload: TNecessities;
};

type checkModalAction = {
  type: typeof OPEN_MODAL;
  payload: boolean;
};

type clearFormAction = {
  type: typeof CLEAR_FORM;
  payload: boolean;
};

type chooseNumRoomAction = {
  type: typeof CHOSSE_NUM_ROOM;
  payload: TRoomsCount;
};

type choosePriceRangeAction = {
  type: typeof CHOOSE_PRICE_RANGE;
  payload: [number, number];
};

type changeDefaultRangeAction = {
  type: typeof CHANGE_DEFAULT_RANGE;
  payload: [number, number];
};

type countRoomAction = {
  type: typeof COUNT_ROOM;
  payload: number;
};

type resetChooseRoomAction = {
  type: typeof RESET_CHOOSE_ROOM;
};

type resetChooseNecessitiesAction = {
  type: typeof RESET_CHOOSE_CHANGE_NECESSITIES;
};

export type Action =
  getDataRoomAction
  | changeNecessitiesAction
  | chooseNecessitiesAction
  | checkModalAction
  | clearFormAction
  | chooseNumRoomAction
  | choosePriceRangeAction
  | changeDefaultRangeAction
  | countRoomAction
  | resetChooseRoomAction
  | resetChooseNecessitiesAction;