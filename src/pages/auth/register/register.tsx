import { EmailIcon, PhoneIcon, UserIcon } from "@/assets/icons";

import { AuthInput } from "../components/auth-input";
import { DatePickerCustom } from "./components/date-picker";
import { SelectCustom } from "./components/select";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { signup } from "@/services/user";
import dayjs from "dayjs";
type Props = {};

export function Register(props: Props) {
  const navigate = useNavigate()  
  const hoTenRegex =
    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/u;
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
        userName: "",
        gender: "",
        phone: "",
        birthDay: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string().email("invalid email address").required("required"),
        password: Yup.string()
          .min(6, "Must be from 6 to 10 characters")
          .max(10, "Must be from 6 to 10 characters")
          .required("required"),
        confirmPassword: Yup.string()
          .required("required")
          .oneOf([Yup.ref("password")], "Passwords must match"),
        userName: Yup.string()
          .matches(hoTenRegex, "must be in letters")
          .required("Required"),
        gender: Yup.string().required("required"),
        phone: Yup.string()
          .matches(/^\d{10,11}$/, "invalid")
          .required("Required"),
        birthDay: Yup.date()
          .min(
            new Date(new Date().getFullYear() - 150, 0, 1),
            "must be over 150 yrs",
          )
          .max(
            new Date(new Date().getFullYear() - 4, 11, 31),
            "must be over 3 yrs",
          )
          .required("required"),
      })}
      onSubmit={(values) => {
        const payload:TPayloadSignup ={
          id: 0,
          name: values.userName,
          email: values.email,
          password: values.confirmPassword,
          phone: values.phone,
          birthday: dayjs(values.birthDay).format("DD/MM/YYYY"),
          gender: Boolean(values.gender),
          role: "",
        }
        console.log(payload)
        signup(payload)
        .then((res)=>{
            console.log({res})
            navigate('/auth/signin')
        }).catch((e)=>{
          alert(e.response.data.content);
        })
      }}
    >
      {({ setFieldValue, errors, touched, setFieldTouched }) => {
        console.log("touched", touched);
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
                name="userName"
              />
              <SelectCustom
                label="Gender"
                name="gender"
                handleChange={(value) => {
                  setFieldValue("gender", value);
                }}
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
                name="birthDay"
                handleDatePicker={(value) => setFieldValue("birthDay", value)}
                error={errors.birthDay}
                touch={touched.birthDay}
                handleBlur={() => setFieldTouched("birthDay", true)}
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
