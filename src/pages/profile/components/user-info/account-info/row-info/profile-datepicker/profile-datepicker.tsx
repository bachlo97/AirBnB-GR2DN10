import { DatePicker } from "antd";
import dayjs from "dayjs";
import { ErrorMessage, Form, Formik } from "formik";

import { useDatePickerProfile } from "./hook/profile-datepicker.hook";
import { useTranslation } from "react-i18next";
type Props = {
  name: string;
};

export function ProfileDatePicker({ name }: Props) {
  const [{ initialValues, validationSchema, user }, { handleSubmit }] =
    useDatePickerProfile(name);
  const {t} = useTranslation()
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit!}
    >
      {({ setFieldValue, setFieldTouched }) => {
        return (
          <Form>
            <DatePicker
              placeholder="Select your birth day"
              format={"DD/MM/YYYY"}
              allowClear
              className="mt-3 block w-[50%]"
              defaultValue={user && dayjs(user.birthday, "DD/MM/YYYY")}
              onChange={(date) => setFieldValue("birthday", date)}
              onBlur={() => setFieldTouched("birthday", true)}
              name="birthday"
            />
            <ErrorMessage
              name="birthday"
              render={(label) => (
                <div className="block italic text-red-500">{label}</div>
              )}
            />
            <button
              type="submit"
              className="mt-4 rounded-xl   bg-[#222222] px-8 py-4 text-white hover:bg-[#000000]"
            >
              {t("profile.save")}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
