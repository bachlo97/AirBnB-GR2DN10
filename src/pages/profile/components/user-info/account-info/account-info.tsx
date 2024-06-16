import { useContext } from "react";
import { RowInfo } from "./row-info";
import { ProfileInput } from "./row-info/profile-input";
import { ProfileSelect } from "./row-info/profile-select";
import { ProfileDatePicker } from "./row-info/profile-datepicker";
import { ContextStore } from "../context";
import { useTranslation } from "react-i18next";

type Props = {};

export default function AccountInfo({}: Props) {
  const [bgBlur] = useContext(ContextStore);
  const {t} = useTranslation()
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
        label={t('profile.pw')}
        edited={false}
        rowInput={<ProfileInput name="password" />}
      />
      <RowInfo
        type="name"
        label={t('profile.userName')}
        edited={true}
        rowInput={<ProfileInput name="name" />}
      />
      <RowInfo
        type="phone"
        label={t('profile.phone')}
        edited={true}
        rowInput={<ProfileInput name="phone" />}
      />

      <RowInfo
        type="birthday"
        label={t('profile.birth')}
        edited={true}
        rowInput={<ProfileDatePicker name="birthday" />}
      />

      <RowInfo
        type="gender"
        label={t('profile.gender')}
        edited={true}
        rowInput={<ProfileSelect name="gender" />}
      />
    </div>
  );
}
