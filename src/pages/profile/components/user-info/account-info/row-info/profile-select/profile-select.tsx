import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Select } from "antd";
import {Form, Formik } from "formik";
import { useContext } from "react";
import { ContextStore } from "../../../context";
import { getLocalStorage, printSuccessDialog } from "@/utils";
import { USER_ID } from "@/constant";
import { updateUserThunk } from "@/redux/auth/auth.slice";
import _ from "lodash";
type Props = {
  name: string;
};

export function ProfileSelect({ name }: Props) {
  const user: any = useAppSelector((state) => state.authReducer.user);
  const [, setBgBlur] = useContext(ContextStore)
  const dispatch = useAppDispatch()
  const handleSubmit = async (values: any) => {
    let subUser = _.omit(user,['avatar','password'])
    const payload = {
      ...subUser,
      [name] : values[name]
    }
     await dispatch(updateUserThunk({payload,id: getLocalStorage(USER_ID)}))
     setBgBlur(false)
      printSuccessDialog('Bạn đã cập nhật giới tính thành công')
  };
  return (
    <Formik
      initialValues={{ gender: user?.gender }}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue,values}) => {
        console.log({values})
        return (
          <Form>
            <Select
              className="mt-3  block w-[50%]"
              defaultValue={user && (user[name] ? "Nam" : "Nữ")}
              onChange={(value) => setFieldValue("gender", value)}
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
            <button
              type="submit"
              className="mt-4 rounded-xl   bg-[#222222] px-8 py-4 text-white hover:bg-[#000000]"
            >
              Lưu
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
