import { DatePicker, Input, Select } from "antd";
import { ErrorMessage, Form, Formik } from "formik";
import { forwardRef } from "react";
import { useAddAdmin } from "./hook/add-admin.hook";
type Props = {};

export const AddAdmin = forwardRef(function AddAdmin(
  {}: Props,
  addUserRef: any,
) {
  const [{ initialValues, validationSchema }, { onSubmit }] = useAddAdmin();
  return (
    <Formik
      initialValues={initialValues!}
      validationSchema={validationSchema}
      onSubmit={onSubmit!}
    >
      {({ values, setFieldValue, setFieldTouched }) => {
        console.log(values);
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
                    allowClear
                    className="block"
                    value={values.gender}
                    onBlur={() => {
                      setFieldTouched("gender", true);
                    }}
                    onChange={(value: unknown) => {
                      if (typeof value == "boolean")
                        setFieldValue("gender", value);
                    }}
                    onClear={() => setFieldValue("gender", "")}
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
