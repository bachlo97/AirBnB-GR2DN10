import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useContext } from "react";
import { ContextStore } from "@/pages/profile/components/user-info/context";
import { updateUserThunk } from "@/redux/auth/auth.slice";
import { getLocalStorage, printSuccessDialog } from "@/utils";
import { USER_ID } from "@/constant";
import _ from "lodash";
export const useSelectProfile = (name: string) => {
  const user: any = useAppSelector((state) => state.authReducer.user);
  const [, setBgBlur] = useContext(ContextStore);
  const dispatch = useAppDispatch();

  const initialValues = { gender: user?.gender }
  const handleSubmit = async (values: any) => {
    let subUser = _.omit(user, ["avatar", "password"]);
    const payload = {
      ...subUser,
      [name]: values[name],
    };
    await dispatch(updateUserThunk({ payload, id: getLocalStorage(USER_ID) }));
    setBgBlur(false);
    printSuccessDialog("Bạn đã cập nhật giới tính thành công");
  };
  return [{user,initialValues},{handleSubmit}]
};
