import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useContext } from "react";
import { ContextStore } from "../../../context";
import { updateUserThunk } from "@/redux/auth/auth.slice";
import { getLocalStorage, printSuccessDialog } from "@/utils";
import { USER_ID } from "@/constant";
import _ from "lodash";
type Props = {
  name: string;
};

export function ProfileDatePicker({ name }: Props) {
  const user: any = useAppSelector((state) => state.authReducer.user);
  const [, setBgBlur] = useContext(ContextStore);
  const dispatch = useAppDispatch()
  const handleSubmit = async (values: any) => {
    let subUser = _.omit(user,['avatar','password'])
    const payload = {
      ...subUser,
      [name] : dayjs(values.birthday).format('DD/MM/YYYY')
    }
     await dispatch(updateUserThunk({payload,id: getLocalStorage(USER_ID)}))
     setBgBlur(false)
     printSuccessDialog('Bạn đã cập nhật ngày sinh thành công')
  };
  return (
    <Formik
      initialValues={{birthday: user && dayjs(user.birthday,'DD/MM/YYYY') }}
      validationSchema={Yup.object({
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
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, setFieldTouched }) => {
        return (
          <Form>
            <DatePicker
              placeholder="Select your birth day"
              format={"DD/MM/YYYY"}
              allowClear
              className="mt-3 block w-[50%]"
              defaultValue={user && dayjs(user.birthday,'DD/MM/YYYY')}
              onChange={date => setFieldValue("birthday",date)}
              onBlur = {() => setFieldTouched('birthday',true)}
              name='birthday'
            />
            <ErrorMessage name='birthday' render={label => <div className="text-red-500 italic block">{label}</div>}/>
            <button type='submit' className="mt-4 rounded-xl   bg-[#222222] px-8 py-4 text-white hover:bg-[#000000]">
              Lưu
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
