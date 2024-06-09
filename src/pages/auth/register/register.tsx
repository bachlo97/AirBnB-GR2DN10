import { EmailIcon, PhoneIcon, UserIcon } from "@/assets/icons";

import { AuthInput } from "../components/auth-input";
import { DatePickerCustom } from "./components/date-picker";
import { SelectCustom } from "./components/select";
import { Formik, Form } from "formik";
import { NavLink } from "react-router-dom";
import { useRegister } from "./hook/register.hook";

export function Register() {
  const [{ initialValues, validationSchema }, { onSubmit }] = useRegister();
  return (
    <Formik
      initialValues={initialValues!}
      validationSchema={validationSchema}
      onSubmit={onSubmit!}
    >
      {({ setFieldValue, errors, touched, setFieldTouched, values }) => {
        console.log("values", values);
        return (
          <Form noValidate className="w-[400px]">
            <h1 className="text-center text-[2rem] text-white">
              Create Account
            </h1>

            <AuthInput
              label="Email"
              icon={<EmailIcon />}
              type="text"
              name="email"
            />
            <div className="mt-8">
              <AuthInput label="Password" type="password" name="password" />
            </div>
            <div className="mt-8">
              <AuthInput
                label="Confirm password"
                type="password"
                name="confirmPassword"
              />
            </div>
            <div className="flex gap-10">
              <AuthInput
                label="Name"
                type="text"
                icon={<UserIcon />}
                name="name"
              />
              <SelectCustom
                label="Gender"
                name="gender"
                handleChange={(value: unknown) => {
                  if (typeof value == "boolean") setFieldValue("gender", value);
                }}
                onClear={() => setFieldValue("gender", "")}
                handleBlur={() => setFieldTouched("gender", true)}
                error={errors.gender}
                touch={touched.gender}
              />
            </div>
            <div className="flex gap-10">
              <AuthInput
                label="Phone"
                type="text"
                icon={<PhoneIcon />}
                name="phone"
              />
              <DatePickerCustom
                label="Birthday"
                name="birthday"
                handleDatePicker={(value) => setFieldValue("birthday", value)}
                error={errors.birthday}
                touch={touched.birthday}
                handleBlur={() => setFieldTouched("birthday", true)}
              />
            </div>

            <button
              className="es mt-8 h-[40px] w-full cursor-pointer rounded-xl border-none bg-[rgb(255,255,255,1)] text-[1.5rem] font-[600] outline-none transition-all duration-[0.4s] ease-linear hover:bg-[rgb(255,255,255,0.5)]"
              type="submit"
            >
              SIGN UP
            </button>

            <div className="m-[25px_0_20px] flex justify-center text-[1.25rem] text-white">
              <p className="mr-2">Do have a account </p>
              <span className="mr-2 cursor-pointer font-[700] hover:underline">
                <NavLink to={"/auth/signin"}>Login</NavLink>
              </span>
              |
              <span className="ml-2 cursor-pointer font-[700] hover:underline">
                <NavLink to={"/"}>Home</NavLink>
              </span>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
