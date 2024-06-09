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
  } from "../types/action.type";
  import { TPopUpProp } from "../types/context.type";
  
  export const initialState: TPopUpProp = {
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
  };
  
  export const filterRoomReducer = (
    state: TPopUpProp,
    action: Action,
  ): TPopUpProp => {
    switch (action.type) {
      case GET_DATA_ROOM:
        if (state.dataRooms !== action.payload) {
          return { ...state, dataRooms: action.payload };
        }
        return state
      case CHANGE_NECESSITIES:
        const { name, check } = action.payload;
        const chooseNecessities = { ...state.chooseNecessities };
        chooseNecessities[name] = check;
  
        return { ...state, chooseNecessities };
  
      case OPEN_MODAL:
        return { ...state, openModal: action.payload };
  
      case CLEAR_FORM:
        return { ...state, clear: action.payload };
  
      case CHOSSE_NUM_ROOM:
        return { ...state, chooseRooms: action.payload };
  
      case CHOOSE_PRICE_RANGE:
        return { ...state, rangePrice: action.payload };
  
      case CHANGE_DEFAULT_RANGE:
        return { ...state, rangeDefault: action.payload };
  
      case COUNT_ROOM:
        return { ...state, count: action.payload };
  
      case RESET_CHOOSE_ROOM:
        const chooseRoomDefault = {
          phongNgu: 0,
          giuong: 0,
          phongTam: 0,
        };
        return { ...state, chooseRooms: chooseRoomDefault };
  
      case RESET_CHOOSE_CHANGE_NECESSITIES:
        const chooseNecessitiesDefault = {
          wifi: false,
          mayGiat: false,
          dieuHoa: false,
          bep: false,
          tivi: false,
          banUi: false,
        };
        return { ...state, chooseNecessities: chooseNecessitiesDefault };
  
      case CHOOSE_NECESSITIES:
        return { ...state, chooseNecessities: action.payload };
  
      default:
        return state;
    }
  };