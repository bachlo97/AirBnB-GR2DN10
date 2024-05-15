import { useAppSelector } from "@/redux/hooks";
import { Input } from "antd";
import React, { useState } from "react";
import { RowInfo } from "./row-info";
import { ProfileInput } from "./row-info/profile-input";
import { ProfileSelect } from "./row-info/profile-select";
import { ProfileDatePicker } from "./row-info/profile-datepicker";

type Props = {};

export default function AccountInfo({}: Props) {
  const user: any = useAppSelector((state) => state.authReducer.user);
  const [bgBlur, setBgBlur] = useState<boolean>(false);
  const handleBgBlur = (value: boolean) => {
    setBgBlur(value);
  };
  return (
    <div
      className={`${bgBlur ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0  after:bg-[#ffffffd9] after:content-[""]' : ""} relative`}
    >
      <RowInfo
        type="email"
        label="Email"
        edited={false}
        rowInput={<ProfileInput name="email" />}
        handleBgBlur={handleBgBlur}
      />

      <RowInfo
        type="password"
        label="Password"
        edited={true}
        rowInput={<ProfileInput name="password" />}
        handleBgBlur={handleBgBlur}
      />
      <RowInfo
        type="name"
        label="Tên người dùng"
        edited={true}
        rowInput={<ProfileInput name="name" />}
        handleBgBlur={handleBgBlur}
      />
      <RowInfo
        type="phone"
        label="Số điện thoại"
        edited={true}
        rowInput={<ProfileInput name="phone" />}
        handleBgBlur={handleBgBlur}
      />

      <RowInfo
        type="birthday"
        label="Ngày sinh"
        edited={true}
        rowInput={<ProfileDatePicker name="birthday" />}
        handleBgBlur={handleBgBlur}
      />

      <RowInfo
        type="gender"
        label="Giới tính"
        edited={true}
        rowInput={<ProfileSelect   name="gender" />}
        handleBgBlur={handleBgBlur}
      />
    </div>
  );
}
