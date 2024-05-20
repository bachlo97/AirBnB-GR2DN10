import { useContext } from "react";
import { RowInfo } from "./row-info";
import { ProfileInput } from "./row-info/profile-input";
import { ProfileSelect } from "./row-info/profile-select";
import { ProfileDatePicker } from "./row-info/profile-datepicker";
import { ContextStore } from "../context";

type Props = {};

export default function AccountInfo({}: Props) {
  const [bgBlur] = useContext(ContextStore);
  return (
    <div
      className={`${bgBlur ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0  after:bg-[#ffffffd9] after:content-[""]' : ""} relative`}
    >
      <RowInfo
        type="email"
        label="Email"
        edited={true}
        rowInput={<ProfileInput name="email" />}
      />

      <RowInfo
        type="password"
        label="Password"
        edited={false}
        rowInput={<ProfileInput name="password" />}
      />
      <RowInfo
        type="name"
        label="Tên người dùng"
        edited={true}
        rowInput={<ProfileInput name="name" />}
      />
      <RowInfo
        type="phone"
        label="Số điện thoại"
        edited={true}
        rowInput={<ProfileInput name="phone" />}
      />

      <RowInfo
        type="birthday"
        label="Ngày sinh"
        edited={true}
        rowInput={<ProfileDatePicker name="birthday" />}
      />

      <RowInfo
        type="gender"
        label="Giới tính"
        edited={true}
        rowInput={<ProfileSelect name="gender" />}
      />
    </div>
  );
}
