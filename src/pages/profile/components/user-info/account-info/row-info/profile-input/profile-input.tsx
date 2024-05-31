import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Input } from "antd";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import _ from "lodash";
import { updateUserThunk } from "@/redux/auth/auth.slice";
import { getLocalStorage, printSuccessDialog } from "@/utils";
import Swal from "sweetalert2";
import { USER_ID } from "@/constant";
import { useContext } from "react";
import { ContextStore } from "../../../context";
import { mappingProfile } from "./helper";
type Props = {
  name: 'email' | 'name' | 'phone' | 'password';
};

export function ProfileInput({ name }: Props) {
  const user: any = useAppSelector((state) => state.authReducer.user);
  const dispatch = useAppDispatch()
  const [,setBgBlur] = useContext(ContextStore)
  const hoTenRegex =
    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/u;
  const handleValidate = (): any => {
    switch (name) {
      case "name":
        return {
          [name]: Yup.string()
            .matches(hoTenRegex, "must be in letters")
            .required("Required"),
        };
      case "phone":
        return {
          [name]: Yup.string()
            .matches(/^\d{10,11}$/, "invalid")
            .required("Required"),
        };
      case "email":
        return {
          [name]: Yup.string()
            .email("invalid email address")
            .required("required"),
        };
    }
  };

  const handleSubmit = async (values: any) => {
    let subUser = _.omit(user,['avatar','password'])
    const payload = {
      ...subUser,
      [name] : values[name]
    }
     await dispatch(updateUserThunk({payload,id: getLocalStorage(USER_ID)}))
     setBgBlur(false)
     printSuccessDialog(`Bạn đã cập nhật ${mappingProfile[name]} thành công`)

  };
  return (
    <Formik
      initialValues={{ [name]: user && user[name] }}
      validationSchema={Yup.object(handleValidate())}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, setFieldTouched, values }) => {
        return (
          <Form>
            <Input
              className="mt-3 py-4"
              value={values[name]}
              allowClear
              name={name}
              onBlur={() => setFieldTouched(name, true)}
              onChange={(e) => setFieldValue(name, e.target.value)}
            />
            <ErrorMessage
              name={name}
              render={(msg) => (
                <div className="block italic text-red-500">{msg}</div>
              )}
            />
            <button className="mt-4 rounded-xl   bg-[#222222] px-8 py-4 text-white hover:bg-[#000000]">
              Lưu
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
