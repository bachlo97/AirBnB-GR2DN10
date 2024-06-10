import { Item } from "./item";
import { LiaComments } from "react-icons/lia";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineRoomPreferences } from "react-icons/md";
import { MdOutlineMyLocation } from "react-icons/md";
import { Rate } from "antd";
import { useAppSelector } from "@/redux/hooks";
type Props = {};

export function OverView({}: Props) {
  const overView = useAppSelector((state) => state.dashBoardReducer.overView);
  console.log({ overView });

  const getFirstDecimalDigit = (num: number) => {
    const decimalPart = num % 1;
    const firstDecimalDigit = Math.floor(decimalPart * 10);
    return Math.floor(num) + "." + firstDecimalDigit;
  };
  const averageStars = getFirstDecimalDigit(
    +overView.totalStars / +overView.totalComments,
  );

  return (
    <div className="grid grid-cols-4 gap-10">
      <Item
        bgIcon="bg-[#fc930a]"
        icon={<LiaComments />}
        title="Bình luận"
        unit={`${overView.totalComments} (lượt)`}
        value={averageStars}
        rate={
          <Rate
            value={Math.round(+averageStars)}
            disabled
            className="text-[12px]"
          />
        }
      />

      <Item
        bgIcon="bg-[#58b05c]"
        icon={<FaUserFriends />}
        title="Người dùng"
        unit="(lượt đăng ký)"
        value={overView.totalUser}
      />

      <Item
        bgIcon="bg-[#ea4642]"
        icon={<MdOutlineRoomPreferences />}
        title="Phòng"
        unit="(phòng)"
        value={overView.totalRoom}
      />

      <Item
        bgIcon="bg-[#0eb5ca]"
        icon={<MdOutlineMyLocation />}
        title="Địa điểm"
        unit="(vị trí)"
        value={overView.totalLocation}
      />
    </div>
  );
}
