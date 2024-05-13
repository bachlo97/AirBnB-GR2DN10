import { EmailIcon } from "@/assets/icons";
import { AuthInput } from "../components/auth-input";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "@/redux/hooks";
import { signin } from "@/services/user";
import { ACCESS_TOKEN, USER_ID } from "@/constant";
import { getLocalStorage, saveLocalStorage } from "@/utils";
import { getProfileThunk } from "@/redux/auth/auth.slice";
type Props = {};
export function Login(props: Props) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("invalid email address").required("required"),
        password: Yup.string()
          .min(6, "Must be from 6 to 10 characters")
          .max(10, "Must be from 6 to 10 characters")
          .required("requried"),
      })}
      onSubmit={(values: TPayloadSignin) => {
        signin(values).then((r) => {
          // ** Sau khi đăng nhập thành công thì lưu vào localStorage
          saveLocalStorage(ACCESS_TOKEN, r.data.content.token);
          saveLocalStorage(USER_ID,r.data.content.user.id)
          // ** di chuyển về trang home
          navigate("/");
          dispatch(getProfileThunk(getLocalStorage(USER_ID)))
        }).catch((e)=>{
          alert(e.response.data.content)
        });
      }}
    >
      <Form noValidate className="w-[300px]">
        <h1 className="text-center text-[2rem] text-white">LOGIN</h1>

        <AuthInput
          label="Email"
          icon={<EmailIcon />}
          type="text"
          name="email"
        />
        <div className="mt-[15px]">
          <AuthInput label="Password" type="password" name="password" />
        </div>

        <button className="es mt-10 h-[40px] w-full cursor-pointer rounded-xl border-none bg-[rgb(255,255,255,1)] text-[1.5rem] font-[600] outline-none transition-all duration-[0.4s] ease-linear hover:bg-[rgb(255,255,255,0.5)]">
          SIGN IN
        </button>

        <div className="m-[25px_0_20px] flex justify-center text-[1.25rem] text-white">
          <p className="mr-2">Don't have a account </p>
          <span className="mr-2 cursor-pointer font-[700] hover:underline">
            <NavLink to={"/auth/signup"}>Register</NavLink>
          </span>
          |
          <span className="ml-2 cursor-pointer font-[700] hover:underline">
            <NavLink to={"/"}>Home</NavLink>
          </span>
        </div>
      </Form>
    </Formik>
  );
}
