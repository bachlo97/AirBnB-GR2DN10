import { Modal, Space, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { VscEdit } from "react-icons/vsc";

import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useAppDispatch } from "@/redux/hooks";
import {
  getAdminLocationThunk,
  putAdminLocationThunk,
} from "@/redux/admin-location/AdminLocation.slice";

import { ButtonPrimary } from "@/components/Button/Button";
import useAlertHook from "@/hooks/notification/Alert";

function ModalLocationEdit(props: any) {
  const { alertSuccessCenter } = useAlertHook();

  const [open, setOpen] = useState(false);
  const [key, setKey] = useState(false);
  useEffect(() => {
    setKey(!key);
  }, [open]);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const dispatch = useAppDispatch();

  const SignupSchema = Yup.object().shape({
    tenViTri: Yup.string().min(2).max(50).required("Tên vị trí là bắt buộc"),

    tinhThanh: Yup.string().required("Tên tỉnh thành là bắt buộc"),
    quocGia: Yup.string().required("Tên quốc gia được bỏ trống"),
    hinhAnh: Yup.string().required("Hình ảnh được bỏ trống"),
  });

  return (
    <>
      <Space>
        <div
          className="cursor-pointer self-center text-blue-500"
          onClick={showModal}
        >
          <Tooltip title="Sửa">
            <VscEdit />
          </Tooltip>
        </div>
      </Space>
      <Modal
        open={open}
        title="Chỉnh sửa vị trí"
        onOk={handleOk}
        onCancel={handleCancel}
        className="modalSetup"
      >
        <Formik
          key={key ? 1 : 0}
          initialValues={{
            id: props.data.id,

            tenViTri: props.data.tenViTri,
            tinhThanh: props.data.tinhThanh,
            quocGia: props.data.quocGia,
            hinhAnh: props.data.hinhAnh,
          }}
          onSubmit={(values: object) => {
            setOpen(false);
            dispatch(putAdminLocationThunk(values));
            dispatch(getAdminLocationThunk(""));
            alertSuccessCenter("Cập nhật dữ liệu thành công");
          }}
          validationSchema={SignupSchema}
        >
          {({ handleSubmit, handleChange }) => (
            <Form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Vị Trí:</label>
                <Field
                  type="text"
                  onChange={handleChange}
                  id="tenViTri"
                  name="tenViTri"
                  className="mb-3 block h-[30px] w-[100%] border px-3 outline-none"
                />
                <ErrorMessage
                  name="tenViTri"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mt-1">
                <label htmlFor="tinhThanh">Tỉnh Thành:</label>

                <Field
                  type="text"
                  id="tinhThanh"
                  name="tinhThanh"
                  className="mb-3 block h-[30px] w-[100%] border px-3 outline-none"
                />
                <ErrorMessage
                  name="tinhThanh"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label htmlFor="quocGia">Quốc Gia:</label>
                <Field
                  as="select"
                  id="quocGia"
                  name="quocGia"
                  className="mb-3 block h-[30px] w-[100%] border px-3 outline-none"
                  defaultValue="vietNam"

                >
                  <option value="">Chọn quốc gia</option>
                  <option value="vietNam">Việt Nam</option>
                  <option value="amerian">Mỹ</option>
                </Field>
                <ErrorMessage
                  name="quocGia"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mt-1">
                <label htmlFor="hinhAnh">Tỉnh Thành:</label>

                <Field
                  type="text"
                  id="hinhAnh"
                  name="hinhAnh"
                  className="mb-3 block h-[30px] w-[100%] border px-3 outline-none"
                />
                <ErrorMessage
                  name="hinhAnh"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="flex items-end justify-end gap-3">
                <div
                  onClick={handleCancel}
                  className="h-[3rem] w-[50px] cursor-pointer border border-solid text-center"
                  style={{ lineHeight: "2.5rem" }}
                >
                  Huỷ
                </div>
                <ButtonPrimary width="50px" height={3} type="submit">
                  Gửi
                </ButtonPrimary>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
}

export default ModalLocationEdit;
