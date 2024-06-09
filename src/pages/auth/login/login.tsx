import { EmailIcon } from "@/assets/icons";
import { AuthInput } from "../components/auth-input";
import { Formik, Form } from "formik";
import { NavLink } from "react-router-dom";

import { useLogin } from "./hook/login.hook";

export function Login() {
  const [{ initialValues, validationSchema }, { onSubmit }] = useLogin();
  return (
    <Formik
      initialValues={initialValues!}
      validationSchema={validationSchema}
      onSubmit={onSubmit!}
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
