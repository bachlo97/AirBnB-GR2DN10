import { Select } from "antd";
import { Form, Formik } from "formik";
import _ from "lodash";
import { useSelectProfile } from "./hook/profile-select.hook";
import { useTranslation } from "react-i18next";
type Props = {
  name: string;
};

export function ProfileSelect({ name }: Props) {
  const [{ user, initialValues }, { handleSubmit }] = useSelectProfile(name);
  const {t} = useTranslation()
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit!}>
      {({ setFieldValue, values }) => {
        console.log({ values });
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
                  label: "Nữ"
                },
              ]}
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
