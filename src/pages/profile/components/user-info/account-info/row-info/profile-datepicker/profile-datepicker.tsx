import { useAppSelector } from "@/redux/hooks";
import { DatePicker } from "antd";
import dayjs from 'dayjs';
import React from "react";

type Props = {
  name: string;
};

export function ProfileDatePicker({ name }: Props) {
  const user: any = useAppSelector((state) => state.authReducer.user);
  return (
    <>
      <DatePicker placeholder="Select your birth day" defaultValue={user && dayjs(user[name],'DD/MM/YYYY')} format={"DD/MM/YYYY"} allowClear className="w-[50%] block mt-3" />
      <button className="mt-4 rounded-xl   bg-[#222222] px-8 py-4 text-white hover:bg-[#000000]">
        Lưu
      </button>
    </>
  );
}
