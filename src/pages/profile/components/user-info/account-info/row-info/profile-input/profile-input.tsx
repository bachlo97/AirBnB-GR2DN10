import { useAppSelector } from "@/redux/hooks";
import { Input } from "antd";
import { ErrorMessage, Form, Formik } from "formik";
import React, { ReactElement } from "react";
import * as Yup from "yup";
type Props = {
  name: string;
};

export function ProfileInput({ name }: Props) {
  const user: any = useAppSelector((state) => state.authReducer.user);
  const hoTenRegex =
    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/u;
  const handleValidate = ():any => {
    switch (name) {
      case "name":
        return {
          name: Yup.string()
            .matches(hoTenRegex, "must be in letters")
            .required("Required"),
        };
      case "phone":
        return {
          phone: Yup.string()
            .matches(/^\d{10,11}$/, "invalid")
            .required("Required"),
        };
    }
  };

  const handleSubmit = () => {};
  return (
    <Formik
      initialValues={{ name: "" }}
      validationSchema={Yup.object(handleValidate())}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, errors, touched, setFieldTouched,values}) => {
        console.log({values})
        return (
          <Form>
            {name !== "password" ? (
              <Input
                className="mt-3 py-4"
                defaultValue={user && user[name]}
                allowClear
                name='name'
                onBlur={()=>setFieldTouched('name',true)}
                onChange={(e)=>setFieldValue('name',e.target.value)}
              />
            ) : (
              <Input.Password
                className="mt-3 py-4"
                defaultValue={user && user[name]}
                allowClear
                name={name}
              />
            )}

            <button  className="mt-4 rounded-xl   bg-[#222222] px-8 py-4 text-white hover:bg-[#000000]">
              Lưu
            </button>
            <ErrorMessage name='name'/>
          </Form>
        );
      }}
    </Formik>
  );
}
