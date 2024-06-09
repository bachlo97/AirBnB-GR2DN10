import { Input } from "antd";
import { ErrorMessage, Form, Formik } from "formik";

import { useInputProfile } from "./hook/profilt-input.hook";
type Props = {
  name: 'email' | 'name' | 'phone' | 'password';
};

export function ProfileInput({ name }: Props) {
  const [{initialValues},{validationSchema,handleSubmit}] = useInputProfile(name)
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit!}
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
