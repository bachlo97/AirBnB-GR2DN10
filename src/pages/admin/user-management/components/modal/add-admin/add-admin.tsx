import { NAME_REGEX } from "@/constant";
import { printSuccessDialog } from "@/utils";
import { DatePicker, Input, Select } from "antd";
import { ErrorMessage, Form, Formik } from "formik";
import dayjs from "dayjs";
import { forwardRef } from "react";
import * as Yup from "yup";
import { addUser } from "@/services/user";
import { getUsersThunk } from "@/redux/admin/user-management/user-management.slice";
import { useAppDispatch } from "@/redux/hooks";
type Props = {};

export const AddAdmin = forwardRef(function AddAdmin(
  {}: Props,
  addUserRef: any,
) {
  const dispatch = useAppDispatch();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        name: "",
        gender: undefined,
        phone: "",
        birthday: undefined,
      }}
      validationSchema={Yup.object({
        email: Yup.string().email("invalid email address").required("required"),
        password: Yup.string()
          .min(6, "Must be from 6 to 10 characters")
          .max(10, "Must be from 6 to 10 characters")
          .required("required"),
        name: Yup.string()
          .matches(NAME_REGEX, "must be in letters")
          .required("Required"),
        gender: Yup.string().required("required"),
        phone: Yup.string()
          .matches(/^\d{10,11}$/, "invalid")
          .required("Required"),
        birthday: Yup.date()
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
      onSubmit={(values, { resetForm }) => {
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
            console.log({ e });
          });

      }}
    >
      {({ values, setFieldValue, setFieldTouched }) => {
        return (
          <Form>
            <div className="mb-10">
              <div className="mt-5 flex justify-center gap-8">
                <div className="w-[100%]">
                  <label htmlFor="">Email</label>
                  <Input
                    allowClear
                    name="email"
                    value={values.email}
                    onChange={(e) => setFieldValue("email", e.target.value)}
                    onBlur={() => {
                      setFieldTouched("email", true);
                    }}
                  />
                  <ErrorMessage
                    name="email"
                    render={(msg) => (
                      <div className="block italic text-red-500">{msg}</div>
                    )}
                  />
                </div>
              </div>

              <div className="mt-5 flex gap-8">
                <div className="w-[50%]">
                  <label className="text-left" htmlFor="">
                    Password
                  </label>
                  <Input.Password
                    allowClear
                    name="password"
                    onBlur={() => {
                      setFieldTouched("password", true);
                    }}
                    value={values.password}
                    onChange={(e) => setFieldValue("password", e.target.value)}
                  />
                  <ErrorMessage
                    name="password"
                    render={(msg) => (
                      <div className="block italic text-red-500">{msg}</div>
                    )}
                  />
                </div>
                <div className="w-[50%]">
                  <label className="text-left" htmlFor="">
                    Phone
                  </label>
                  <Input
                    allowClear
                    name="phone"
                    onBlur={() => {
                      setFieldTouched("phone", true);
                    }}
                    value={values.phone}
                    onChange={(e) => setFieldValue("phone", e.target.value)}
                  />
                  <ErrorMessage
                    name="phone"
                    render={(msg) => (
                      <div className="block italic text-red-500">{msg}</div>
                    )}
                  />
                </div>
              </div>

              <div className="mt-5 w-[100%]">
                <label htmlFor="">Name</label>
                <Input
                  allowClear
                  name="name"
                  onBlur={() => {
                    setFieldTouched("name", true);
                  }}
                  value={values.name}
                  onChange={(e) => setFieldValue("name", e.target.value)}
                />
                <ErrorMessage
                  name="name"
                  render={(msg) => (
                    <div className="block italic text-red-500">{msg}</div>
                  )}
                />
              </div>

              <div className="mt-5 flex gap-8">
                <div className="w-[50%]">
                  <label className="text-left" htmlFor="">
                    Birthday
                  </label>
                  <DatePicker
                    placeholder="Select your birth day"
                    format={"DD/MM/YYYY"}
                    className="block"
                    name="birthday"
                    value={values.birthday}
                    onChange={(date) => setFieldValue("birthday", date)}
                    onBlur={() => setFieldTouched("birthday", true)}
                  />
                  <ErrorMessage
                    name="birthday"
                    render={(msg) => (
                      <div className="block italic text-red-500">{msg}</div>
                    )}
                  />
                </div>

                <div className="w-[50%]">
                  <label className="text-left" htmlFor="">
                    Gender
                  </label>
                  <Select
                    className="block"
                    value={values.gender}
                    onBlur={() => {
                      setFieldTouched("gender", true);
                    }}
                    onChange={(value: any) => {
                      setFieldValue("gender", value);
                    }}
                    placeholder="Select your gender"
                    options={[
                      {
                        value: true,
                        label: "Nam",
                      },
                      {
                        value: false,
                        label: "Nữ",
                      },
                    ]}
                  />
                  <ErrorMessage
                    name="gender"
                    render={(msg) => (
                      <div className="block italic text-red-500">{msg}</div>
                    )}
                  />
                </div>
              </div>
            </div>
            <button className="hidden" type="submit" ref={addUserRef}></button>
          </Form>
        );
      }}
    </Formik>
  );
});