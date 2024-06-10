import { Modal, Space, Switch, Tooltip } from "antd";
import { useState } from "react";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { putRoomThunk } from "@/redux/room/Room.slice";
import { ButtonPrimary } from "@/components/Button/Button";
import { VscEdit } from "react-icons/vsc";
import useAlertHook from "@/hooks/notification/Alert";

function ModalEditRoom(props: any) {
  const { alertSuccessCenter } = useAlertHook();

  const [open, setOpen] = useState(false);
  const listLocation: any = useAppSelector(
    (state) => state.locationSlice.listLocation,
  );
  const dispatch = useAppDispatch();

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

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
        title="Chỉnh sửa sản phẩm"
        onOk={handleOk}
        onCancel={handleCancel}
        className="modalSetup"
      >
        <Formik
          initialValues={{
            id: props.data.id,
            tenPhong: props.data.tenPhong,
            giaTien: props.data.giaTien,
            hinhAnh: props.data.hinhAnh,
            khach: props.data.khach,
            phongNgu: props.data.phongNgu,
            giuong: props.data.giuong,
            phongTam: props.data.phongTam,
            quocGia: props.data.quocGia,
            moTa: props.data.moTa,
            mayGiat: props.data.mayGiat,
            banLa: props.data.banLa,
            tivi: props.data.tivi,
            dieuHoa: props.data.dieuHoa,
            wifi: props.data.wifi,
            bep: props.data.bep,
            doXe: props.data.doXe,
            banUi: props.data.banUi,
          }}
          onSubmit={(values) => {
            console.log(values);

            setOpen(false);
            dispatch(putRoomThunk(values));
            alertSuccessCenter("Cập nhật dữ liệu thành công");
          }}
        >
          {({ handleSubmit, setFieldValue, values }) => (
            <Form onSubmit={handleSubmit}>
              <div className="flex gap-3 ">
                <div className="w-[50%]">
                  <label htmlFor="name">Tên Phòng:</label>
                  <Field
                    type="text"
                    id="tenPhong"
                    name="tenPhong"
                    className="mb-3 block h-[30px] w-[100%] border px-3 outline-none"
                  />
                  <ErrorMessage
                    name="tenPhong"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="w-[50%]">
                  <label htmlFor="hinhAnh">Giá Tiền:</label>

                  <Field
                    type="text"
                    id="giaTien"
                    name="giaTien"
                    className="mb-3 block h-[30px] w-[100%] border px-3 outline-none"
                  />
                  <ErrorMessage
                    name="giaTien"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="mt-1">
                <label htmlFor="hinhAnh">Hình Ảnh:</label>

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
              <div className="flex gap-3">
                <div className="w-[50%]">
                  <label htmlFor="tinhThanh">Khách:</label>

                  <Field
                    type="text"
                    id="khach"
                    name="khach"
                    className="mb-3 block h-[30px] w-[100%] border px-3 outline-none"
                  />
                  <ErrorMessage
                    name="khach"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="w-[50%]">
                  <label htmlFor="quocGia">Phòng Ngủ:</label>
                  <Field
                    type="text"
                    id="phongNgu"
                    name="phongNgu"
                    className="mb-3 block h-[30px] w-[100%] border px-3 outline-none"
                  />

                  <ErrorMessage
                    name="phongNgu"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 w-[50%]">
                  <label htmlFor="hinhAnh">Gường:</label>

                  <Field
                    type="text"
                    id="giuong"
                    name="giuong"
                    className="mb-3 block h-[30px] w-[100%] border px-3 outline-none"
                  />
                  <ErrorMessage
                    name="giuong"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="mt-1 w-[50%]">
                  <label htmlFor="hinhAnh">Phòng Tắm:</label>

                  <Field
                    type="text"
                    id="phongTam"
                    name="phongTam"
                    className="mb-3 block h-[30px] w-[100%] border px-3 outline-none"
                  />
                  <ErrorMessage
                    name="phongTam"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              <div className="mt-1">
                <label htmlFor="hinhAnh">Mô tả:</label>

                <Field
                  type="text"
                  id="hinhAnh"
                  name="moTa"
                  className="mb-3 block h-[30px] w-[100%] border px-3 outline-none"
                />
                <ErrorMessage
                  name="moTa"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label htmlFor="quocGia">Vị Trí:</label>
                <Field
                  as="select"
                  id="quocGia"
                  name="quocGia"
                  className="mb-3 block h-[30px] w-[100%] border px-3 outline-none"
                >
                  <option value="">Chọn quốc gia</option>
                  {listLocation.map((item: any, index: number) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.tenViTri},{item.tinhThanh},{item.quocGia}
                      </option>
                    );
                  })}
                </Field>
                <ErrorMessage
                  name="quocGia"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="w-[23%]">
                  <label htmlFor="mayGiat" className="block">
                    Máy giặt:
                  </label>
                  <Field name="mayGiat">
                    {({ field }: any) => (
                      <Switch
                        {...field}
                        checked={values.mayGiat}
                        onChange={(checked) =>
                          setFieldValue("mayGiat", checked)
                        }
                      />
                    )}
                  </Field>
                </div>
                <div className="w-[23%]">
                  <label htmlFor="banLa" className="block">
                    Bàn Là:
                  </label>
                  <Field name="banLa">
                    {({ field }: any) => (
                      <Switch
                        {...field}
                        checked={values.banLa}
                        onChange={(checked) => setFieldValue("banLa", checked)}
                      />
                    )}
                  </Field>
                </div>
                <div className="w-[23%]">
                  <label htmlFor="tivi" className="block">
                    Tivi:
                  </label>
                  <Field name="tivi">
                    {({ field }: any) => (
                      <Switch
                        {...field}
                        checked={values.tivi}
                        onChange={(checked) => setFieldValue("tivi", checked)}
                      />
                    )}
                  </Field>
                </div>
                <div className="w-[23%]">
                  <label htmlFor="dieuHoa" className="block">
                    Điều hoà:
                  </label>
                  <Field name="dieuHoa">
                    {({ field }: any) => (
                      <Switch
                        {...field}
                        checked={values.dieuHoa}
                        onChange={(checked) =>
                          setFieldValue("dieuHoa", checked)
                        }
                      />
                    )}
                  </Field>
                </div>
                <div className="w-[23%]">
                  <label htmlFor="wifi" className="block">
                    Wifi:
                  </label>
                  <Field name="wifi">
                    {({ field }: any) => (
                      <Switch
                        {...field}
                        checked={values.wifi}
                        onChange={(checked) => setFieldValue("wifi", checked)}
                      />
                    )}
                  </Field>
                </div>
                <div className="w-[23%]">
                  <label htmlFor="bep" className="block">
                    Bếp:
                  </label>
                  <Field name="bep">
                    {({ field }: any) => (
                      <Switch
                        {...field}
                        checked={values.bep}
                        onChange={(checked) => setFieldValue("bep", checked)}
                      />
                    )}
                  </Field>
                </div>
                <div className="w-[23%]">
                  <label htmlFor="doXe" className="block">
                    Đỗ xe:
                  </label>
                  <Field name="doXe">
                    {({ field }: any) => (
                      <Switch
                        {...field}
                        checked={values.doXe}
                        onChange={(checked) => setFieldValue("doXe", checked)}
                      />
                    )}
                  </Field>
                </div>
                <div className="w-[23%]">
                  <label htmlFor="banUi" className="block">
                    Bàn ủi:
                  </label>
                  <Field name="banUi">
                    {({ field }: any) => (
                      <Switch
                        {...field}
                        checked={values.banUi}
                        onChange={(checked) => setFieldValue("banUi", checked)}
                      />
                    )}
                  </Field>
                </div>
              </div>

              <div className="mt-5 flex items-end justify-end gap-3">
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

export default ModalEditRoom;
