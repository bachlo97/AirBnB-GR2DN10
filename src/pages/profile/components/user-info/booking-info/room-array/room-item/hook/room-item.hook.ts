import { useNavigate } from "react-router-dom";
import _ from "lodash"
export const useRoomItem  = (data:TBookingHistory) => {
    const navigate = useNavigate();

    const convertEquiment: any = {
      mayGiat: "Máy giặt",
      banLa: "Bàn là",
      tivi: "Ti vi",
      dieuHoa: "Điều hoà",
      wifi: "wifi",
      bep: "Bếp",
      doXe: "Đỗ xe",
      hoBoi: "Hồ bơi",
      banUi: "Bàn ủi",
    };
    const convertRoomParts: any = {
      phongNgu: "Phòng ngủ",
      giuong: "Giường",
      phongTam: "Phòng tắm",
    };
    const renderEquiment = () => {
      const equipment = _.pick(data, [
        "mayGiat",
        "banLa",
        "tivi",
        "dieuHoa",
        "wifi",
        "bep",
        "doXe",
        "hoBoi",
        "banUi",
      ]);
      const filteredEqm = Object.entries(equipment)
        .filter(([_, value]) => value)
        .map(([key]) => convertEquiment[key]);
  
      return filteredEqm.join(" - ");
    };
    const renderRoomParts = () => {
      const parts = _.pick(data, ["phongNgu", "giuong", "phongTam"]);
      const filteredParts = Object.entries(parts)
        .filter(([key, value]) => value >= 1)
        .map(([key, value]) => `${value} ${convertRoomParts[key]}`);
  
      return filteredParts.join(" - ");
    };

    return [,{navigate,renderEquiment,renderRoomParts}]
}