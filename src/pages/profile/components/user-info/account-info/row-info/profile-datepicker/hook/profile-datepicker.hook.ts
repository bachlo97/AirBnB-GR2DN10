import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ContextStore } from "@/pages/profile/components/user-info/context";
import { useContext } from "react";
import dayjs from "dayjs";
import { updateUserThunk } from "@/redux/auth/auth.slice";
import { getLocalStorage, printSuccessDialog, userValidator } from "@/utils";
import { USER_ID } from "@/constant";
import * as Yup from "yup";
import _ from "lodash";

export const useDatePickerProfile = (name: string) => {
  const user: any = useAppSelector((state) => state.authReducer.user);
  const [, setBgBlur] = useContext(ContextStore);
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: any) => {
    let subUser = _.omit(user, ["avatar", "password"]);
    const payload = {
      ...subUser,
      [name]: dayjs(values.birthday).format("DD/MM/YYYY"),
    };
    await dispatch(updateUserThunk({ payload, id: getLocalStorage(USER_ID) }));
    setBgBlur(false);
    printSuccessDialog("Bạn đã cập nhật ngày sinh thành công");
  };

  const initialValues = {
    birthday: user && dayjs(user.birthday, "DD/MM/YYYY"),
  };

  const validationSchema = Yup.object({
    birthday: userValidator.birthday,
  });

  return [{ initialValues, validationSchema, user }, { handleSubmit }];
};
