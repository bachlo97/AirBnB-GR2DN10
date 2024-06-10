import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { parseBirthday, printSuccessDialog, userValidator } from "@/utils";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import dayjs from "dayjs";
import { editUser } from "@/services/user";
import {
  closeModal,
  getUsersThunk,
} from "@/redux/admin/user-management/user-management.slice";
export const useUpdateUser = () => {
  const { selectedUser, modal }: any = useAppSelector(
    (state) => state.userManagementReducer,
  );
  const dispatch = useAppDispatch();
  const [key, setKey] = useState(false);

  useEffect(() => {
    setKey(!key);
  }, [modal]);
  console.log({ selectedUser });

  const initialValues = {
    name: selectedUser.name,
    email: selectedUser.email,
    birthday: parseBirthday(selectedUser.birthday)
      ? parseBirthday(selectedUser.birthday)
      : undefined,
    phone: selectedUser.phone,
    gender: selectedUser.gender,
    role: selectedUser.role,
  };

  const validationSchema = Yup.object({
    email: userValidator.email,
    name: userValidator.name,
    phone: userValidator.phone,
    birthday: userValidator.birthday,
  });

  const onSubmit = (values: any) => {
    // alert(JSON.stringify(values, null, 2));
    const payload = {
      ...values,
      id: selectedUser.id,
      birthday: dayjs(values.birthday).format("DD/MM/YYYY"),
    };
    console.log({ payload });
    editUser(payload, payload.id)
      .then((res) => {
        console.log({ res });
        dispatch(closeModal());
        dispatch(getUsersThunk());
        printSuccessDialog("Cập nhật user thành công");
      })
      .catch((e) => {
        console.log({ e });
      });
  };

  return [{ key, initialValues, validationSchema }, { onSubmit }];
};
