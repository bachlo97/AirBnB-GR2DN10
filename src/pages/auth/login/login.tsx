import { EmailIcon } from "@/assets/icons";
import { AuthInput } from "../components/auth-input";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
type Props = {};

export function Login(props: Props) {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("invalid email address").required("required"),
        password: Yup.string()
          .min(6, "Must be from 6 to 10 characters")
          .max(10, "Must be from 6 to 10 characters")
          .required("requried"),
        gender: Yup.string().required("required"),
      })}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
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
          <span className="cursor-pointer font-[700] hover:underline mr-2">
            <NavLink to={"/auth/signup"}>Register</NavLink>
          </span>
          |
          <span className="cursor-pointer font-[700] hover:underline ml-2">
            <NavLink to={'/'}>Home</NavLink>
          </span>
        </div>
      </Form>
    </Formik>
  );
}
