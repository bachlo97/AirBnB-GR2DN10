import { NAME_REGEX } from "@/constant";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { DatePicker, Input, Select } from "antd";
import { ErrorMessage, Form, Formik } from "formik";
import React, { forwardRef, useEffect, useState } from "react";
import dayjs from "dayjs";
import * as Yup from "yup";
import { editUser } from "@/services/user";
import { closeModal, getUsersThunk } from "@/redux/admin/user-management/user-management.slice";
import { parseBirthday, printSuccessDialog } from "@/utils";
import { useUpdateUser } from "./hook/update-user.hook";
type Props = {};

export const UpdateUser = forwardRef(function UpdateUser(
  {}: Props,
  updateUserRef: any,
) {
  // const { selectedUser, modal }: any = useAppSelector(
  //   (state) => state.userManagementReducer,
  // );
  // const dispatch =  useAppDispatch()
  // const [key, setKey] = useState(false);

  // useEffect(() => {
  //   setKey(!key);
  // }, [modal]);
  // console.log({ selectedUser });
  const [{key,initialValues,validationSchema},{onSubmit}] = useUpdateUser()
  return (
    <Formik
      enableReinitialize
      key={key ? 1 : 0}
      initialValues={initialValues!}
      validationSchema={validationSchema}
      onSubmit={onSubmit!}
    >
      {({ values, setFieldValue, setFieldTouched }) => {
        console.log({ values });
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
                    Phone
                  </label>
                  <Input
                    allowClear
                    name="phone"
                    value={values.phone}
                    onChange={(e) => setFieldValue("phone", e.target.value)}
                    onBlur={() => {
                      setFieldTouched("phone", true);
                    }}
                  />
                  <ErrorMessage
                    name="phone"
                    render={(msg) => (
                      <div className="block italic text-red-500">{msg}</div>
                    )}
                  />
                </div>
                <div className="w-[50%]">
                  <label className="text-left" htmlFor="">
                    Birthday
                  </label>
                  <DatePicker
                    placeholder="Select your birth day"
                    format={"DD/MM/YYYY"}
                    allowClear
                    className="block"
                    name="birthday"
                    value={values.birthday}
                    onChange={(date) => {
                      setFieldValue("birthday", date);
                    }}
                    onBlur={() => setFieldTouched("birthday", true)}
                  />
                  <ErrorMessage
                    name="birthday"
                    render={(msg) => (
                      <div className="block italic text-red-500">{msg}</div>
                    )}
                  />
                </div>
              </div>

              <div className="mt-5 w-[100%]">
                <label htmlFor="">Name</label>
                <Input
                  name="name"
                  allowClear
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
                    Gender
                  </label>

                  <Select
                    className="block"
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
                    value={values.gender}
                    onChange={(value: any) => {
                      setFieldValue("gender", value);
                    }}
                    
                  />
                </div>
                <div className="w-[50%]">
                  <label className="text-left" htmlFor="">
                    Role
                  </label>
                  <Select
                    className="block"
                    placeholder="Select your gender"
                    options={[
                      {
                        value: "USER",
                        label: "USER",
                      },
                      {
                        value: "ADMIN",
                        label: "ADMIN",
                      },
                    ]}
                    value={values.role}
                    onChange={(value: any) => {
                      setFieldValue("role", value);
                    }}
                  />
                </div>
              </div>
            </div>
            <button
              className="hidden"
              type="submit"
              ref={updateUserRef}
            ></button>
          </Form>
        );
      }}
    </Formik>
  );
});
