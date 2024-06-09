import { userValidator } from "@/utils";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import dayjs from "dayjs";
import { signup } from "@/services/user";

type TSignUpFormik = Omit<TPayloadSignup, "id" | "role" | "gender"> & {
  confirmPassword: string;
  gender: string;
};

export const useRegister = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    gender: "",
    phone: "",
    birthday: "",
  };

  const validationSchema = Yup.object({
    email: userValidator.email,
    password: userValidator.password,
    confirmPassword: userValidator.confirmPassword,
    name: userValidator.name,
    gender: userValidator.gender,
    phone: userValidator.phone,
    birthday: userValidator.birthday,
  });

  const onSubmit = (values: TSignUpFormik) => {
    const payload: TPayloadSignup = {
      id: 0,
      name: values.name,
      email: values.email,
      password: values.confirmPassword,
      phone: values.phone,
      birthday: dayjs(values.birthday).format("DD/MM/YYYY"),
      gender: Boolean(values.gender),
      role: "",
    };
    console.log(payload);
    signup(payload)
      .then((res) => {
        console.log({ res });
        navigate("/auth/signin");
      })
      .catch((e) => {
        alert(e.response.data.content);
      });
  };

  return [{ initialValues, validationSchema }, { onSubmit }];
};
