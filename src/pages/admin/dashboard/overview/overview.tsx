import React, { useEffect } from "react";
import { Item } from "./item";
import { LiaComments } from "react-icons/lia";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineRoomPreferences } from "react-icons/md";
import { MdOutlineMyLocation } from "react-icons/md";
import { commentData } from "../data";
import { Rate } from "antd";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getDashBoardInfoThunk } from "@/redux/admin/dashboard/dashboard.slice";
type Props = {};

export function OverView({}: Props) {
  const dispatch = useAppDispatch()
  const overView = useAppSelector(state => state.dashBoardReducer.overView)
  console.log({overView})
  useEffect(()=>{
    dispatch(getDashBoardInfoThunk())
  },[])
  const filteredComments = commentData.filter(comment => comment.saoBinhLuan >= 0 && comment.saoBinhLuan <= 5);
  const totalStars = filteredComments.reduce((sum, comment) => sum + comment.saoBinhLuan, 0);
  const getFirstDecimalDigit = (num:number) => {
    const decimalPart = num % 1;
    const firstDecimalDigit = Math.floor(decimalPart * 10);
    return Math.floor(num) + '.' + firstDecimalDigit;
  }
  console.log({totalStars})
  console.log({filteredComments})
  const averageStars = getFirstDecimalDigit(totalStars / filteredComments.length )

  return (
    <div className="grid grid-cols-4 gap-10">
      <Item
        bgIcon="bg-[#fc930a]"
        icon={<LiaComments />}
        title="Bình luận"
        unit={`${filteredComments.length} (lượt)`}
        value={averageStars}
        rate={<Rate value={Math.round(+averageStars)} disabled className="text-[12px]" />}
      />

      <Item
        bgIcon="bg-[#58b05c]"
        icon={<FaUserFriends />}
        title="Người dùng"
        unit="(lượt đăng ký)"
        value="300"
      />

      <Item
        bgIcon="bg-[#ea4642]"
        icon={<MdOutlineRoomPreferences />}
        title="Phòng"
        unit="(phòng)"
        value="200"
      />

      <Item
        bgIcon="bg-[#0eb5ca]"
        icon={<MdOutlineMyLocation />}
        title="Địa điểm"
        unit="(vị trí)"
        value="200"
      />
    </div>
  );
}