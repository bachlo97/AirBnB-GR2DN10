import { USER_ID } from "@/constant";
import { ContextStore } from "@/pages/profile/components/user-info/context";
import { updateUserThunk } from "@/redux/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getLocalStorage, printSuccessDialog, userValidator } from "@/utils";
import { useContext } from "react";
import * as Yup from "yup";
import { mappingProfile } from "../helper";
import _ from "lodash";

export const useInputProfile = (
  name: "name" | "email" | "phone" | "password",
) => {
  const user: any = useAppSelector((state) => state.authReducer.user);
  const dispatch = useAppDispatch();
  const [, setBgBlur] = useContext(ContextStore);

  const initialValues = { [name]: user && user[name] };
  const validationSchema = Yup.object({
    [name]: userValidator[name],
  });

  const handleSubmit = async (values: any) => {
    let subUser = _.omit(user, ["avatar", "password"]);
    const payload = {
      ...subUser,
      [name]: values[name],
    };
    await dispatch(updateUserThunk({ payload, id: getLocalStorage(USER_ID) }));
    setBgBlur(false);
    printSuccessDialog(`Bạn đã cập nhật ${mappingProfile[name]} thành công`);
  };

  return [{ initialValues }, { validationSchema, handleSubmit }];
};
