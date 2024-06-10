import { useAppDispatch } from "@/redux/hooks";
import { printSuccessDialog, userValidator } from "@/utils";
import * as Yup from "yup"
import dayjs from "dayjs"
import { addUser } from "@/services/user";
import { getUsersThunk } from "@/redux/admin/user-management/user-management.slice";
export const useAddAdmin = () => {
  const dispatch = useAppDispatch();

  const initialValues = {
    email: "",
    password: "",
    name: "",
    gender: undefined,
    phone: "",
    birthday: undefined,
  };

  const validationSchema = Yup.object({
    email: userValidator.email,
    password: userValidator.password,
    name: userValidator.name,
    gender: userValidator.gender,
    phone: userValidator.phone,
    birthday:userValidator.birthday,
  })

  const onSubmit = (values:any, { resetForm }:any) => {
    // alert(JSON.stringify(values, null, 2));
    const payload: TPayloadSignup = {
      ...values,
      id: 0,
      role: "ADMIN",
      birthday: dayjs(values.birthday).format("DD/MM/YYYY"),
      gender: Boolean(values.gender),
    };
    console.log({ payload });
    addUser(payload)
      .then((res) => {
        console.log({ res });
        dispatch(getUsersThunk());
        resetForm();
        printSuccessDialog("Thêm quản trị viên thành công");
      })
      .catch((e) => {
        alert(e.response.data.content)
      });
  }


  return [{initialValues,validationSchema},{onSubmit}]

};
