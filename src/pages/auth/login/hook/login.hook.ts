import { ACCESS_TOKEN, USER_ID } from "@/constant";
import { getProfileThunk } from "@/redux/auth/auth.slice";
import { useAppDispatch } from "@/redux/hooks";
import { signin } from "@/services/user";
import { getLocalStorage, saveLocalStorage, userValidator } from "@/utils";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
export const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const initialValues:TPayloadSignin = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: userValidator.email,
    password: userValidator.password,
  });

  const onSubmit = (values: TPayloadSignin) => {
    signin(values)
      .then((r) => {
        // ** Sau khi đăng nhập thành công thì lưu vào localStorage
        saveLocalStorage(ACCESS_TOKEN, r.data.content.token);
        saveLocalStorage(USER_ID, r.data.content.user.id);
        // ** di chuyển về trang home
        navigate("/");
        dispatch(getProfileThunk(getLocalStorage(USER_ID)));
      })
      .catch((e) => {
        alert(e.response.data.content);
      });
  };

  return [{ initialValues, validationSchema }, { onSubmit }];
};
