import React from "react";
import { Item } from "./item";
import { LiaComments } from "react-icons/lia";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineRoomPreferences } from "react-icons/md";
import { MdOutlineMyLocation } from "react-icons/md";
import { commentData } from "../data";
import { Rate } from "antd";
type Props = {};

export function OverView({}: Props) {
  const filteredComments = commentData.filter(comment => comment.saoBinhLuan >= 0 && comment.saoBinhLuan <= 5);
  return (
    <div className="grid grid-cols-4 gap-10">
      <Item
        bgIcon="bg-[#fc930a]"
        icon={<LiaComments />}
        title="Bình luận"
        unit="122 (lượt)"
        value="4,1"
        rate={<Rate value={4} disabled className="text-[12px]" />}
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