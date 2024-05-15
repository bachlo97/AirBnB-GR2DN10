import { useAppSelector } from "@/redux/hooks";
import { Select } from "antd";
import React from "react";

type Props = {
  name: string;
};

export function ProfileSelect({ name }: Props) {
  const user: any = useAppSelector((state) => state.authReducer.user);
  return (
    <>
      <Select
        className="mt-3  w-[50%] block"
        defaultValue={user && (user[name] ? 'Nam' : 'Nữ')}
        options={[
          {
            value: true,
            label: "Nam",
          },
          {
            value: false,
            label: "Nữ",
          },
        ]}
      />
      <button className="mt-4 rounded-xl   bg-[#222222] px-8 py-4 text-white hover:bg-[#000000]">
        Lưu
      </button>
    </>
  );
}
