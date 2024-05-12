import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import './user-info.style.css'
import AccountInfo from "./account-info/account-info";
import BookingInfo from "./booking-info/booking-info";
type Props = {};

export default function UserInfo({}: Props) {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "THÔNG TIN TÀI KHOẢN",
      children: <AccountInfo/>,
    },
    {
      key: "2",
      label: "LỊCH SỬ ĐẶT PHÒNG",
      children: <BookingInfo/>,
    },
  ];

  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} className='tab-user'/>;
}
