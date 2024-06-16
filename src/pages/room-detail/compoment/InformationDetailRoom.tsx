import { ButtonPrimary } from "@/components/Button/Button";
import "../css/RoomDetail.css";

import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

import ModalRoomDetail from "../modal/ModalRoomDetail";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { TextPrimary } from "@/components/style-compoment/StyleCompoment";
import { useSearchBarHook } from "@/templates/user-template/components/header/hooks/useSearchBarHook";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setDisCount,
  setIdRoom,
  setImg,
  setName,
  setPrice,
} from "@/redux/cart/Cart.slice";
import {
  setCustomers,
  setEndDayRoom,
  setStartDayRoom,
} from "@/redux/room/Date.slice";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { MdBedroomChild, MdIron } from "react-icons/md";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { GiWashingMachine } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import { HiOutlineKey } from "react-icons/hi2";
import { BsCalendarDate } from "react-icons/bs";
import { AUTH_PATH, PAY_PATH } from "@/router/router.config";

type Props = any;

function InformationDetailRoom(props: Props) {
  const navigate = useNavigate();
  const [countClient, setCountClient] = useState(1);

  const [countDay, setCountDay] = useState(0);
  const [discount] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const user: any = useAppSelector((state) => state.authReducer.user);

  const dispatch = useAppDispatch();
  const {
    valueStartDay,
    valueEndDay,

    handleSubmit,
    handleDateChange,
  } = useSearchBarHook();
  const startDate = moment(valueStartDay);
  const endDate = moment(valueEndDay);

  useEffect(() => {
    if (startDate !== null && endDate !== null) {
      const diffInDays = endDate.diff(startDate, "days");
      setCountDay(diffInDays);
    }
  }, [startDate, endDate]);
  useEffect(() => {
    if (valueStartDay == "" && valueEndDay == "") {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [countClient, valueEndDay, valueStartDay]);

  return (
    <div className="relative mx-auto my-3 mt-8 justify-between 2sm:flex lg:w-[100%] 2xl:w-3/4">
      <div className="md:w-[50%] xl:w-[60%]">
        <h3 className="text-[2rem] font-bold">
          Toàn bộ căn hộ. Chủ nhà Sungwon
        </h3>
        <div className="flex gap-3 border-b border-solid border-gray-600 text-gray-600">
          <p>3 Khách</p>
          <p>3 Khách</p>
          <p>3 Khách</p>
        </div>
        <div className="border-b border-solid border-gray-600 pb-8">
          <div className="mt-8 flex gap-3">
            <MdBedroomChild className="text-6xl" />
            <div className="">
              <h4 className="font-bold">Phòng trong một căn hộ chung cư</h4>
              <p>
                Phòng riêng của bạn trong nhà, cộng với quyền sử dụng không gian
                chung.
              </p>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            <IoLocationOutline className="text-6xl" />
            <div className="">
              <h4 className="font-bold">Vị trí tuyệt vời</h4>
              <p>100% khách gần đây đã xếp hạng 5 sao cho địa điểm này.</p>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            <HiOutlineKey className="text-6xl" />
            <div className="">
              <h4 className="font-bold">Trải nghiệm check-in tuyệt vời</h4>
              <p>
                100% khách gần đây đã xếp hạng 5 sao cho quá trình nhận phòng.
              </p>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            <BsCalendarDate className="text-6xl" />
            <div className="">
              <h4 className="font-bold">Hủy miễn phí trước ngày 19 tháng 9</h4>
              <p>Được hoàn lại tiền đầy đủ nếu bạn thay đổi ý định.</p>
            </div>
          </div>
        </div>
        <div className="border-b border-solid border-gray-600 py-8">
          Một số thông tin đã được dịch tự động.{" "}
          <button className="font-bold">Hiển thị nguyên bản</button>
        </div>
        <div className="border-b border-solid border-gray-600 py-8">
          <h4 className="mb-3 text-3xl font-bold">Về địa điểm này</h4>
          <div>{props.data.moTa}</div>
        </div>

        <div className="py-8">
          <h4 className="mb-3 text-3xl font-bold">Địa điểm này có gì</h4>
          <div className="flex flex-wrap">
            {props.data.tivi ? (
              <div className="flex w-1/2 items-center gap-2 text-[2.1rem]">
                <PiTelevisionSimpleBold />
                TV
              </div>
            ) : (
              ""
            )}
            {props.data.banLa ? (
              <div className="flex w-1/2 items-center gap-2 text-[2.1rem]">
                <MdIron />
                Bàn Là
              </div>
            ) : (
              ""
            )}
            {props.data.wifi ? (
              <div className="flex w-1/2 items-center gap-2 text-[2.1rem]">
                <FaWifi />
                wifi
              </div>
            ) : (
              ""
            )}
            {props.data.mayGiat ? (
              <div className="flex w-1/2 items-center gap-2 text-[2.1rem]">
                <GiWashingMachine />
                Máy Giặt
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="mt-3">
            <ModalRoomDetail
              tivi={props.data.tivi}
              banLa={props.data.banLa}
              dieuHoa={props.data.dieuHoa}
              mayGiat={props.data.mayGiat}
              wifi={props.data.wifi}
              bep={props.data.bep}
              doXe={props.data.doXe}
              hoBoi={props.data.hoBoi}
              banUi={props.data.banUi}
            />
          </div>
        </div>
      </div>

      <div
        className=" h-[430px] border border-solid border-white  p-8 2sm:w-[40%] md:sticky md:right-0 md:top-36 lg:w-[35%] xl:w-[32%] 2xl:w-[38%] "
        style={{ boxShadow: " rgba(16, 20, 24, 0.2) 0px 8px 24px" }}
        id="dateSearchbar"
      >
        <div>
          <h3 className="mb-6 text-3xl font-semibold">
            ${props.data.giaTien}/ đêm{" "}
          </h3>
          <form action="" onSubmit={handleSubmit} className="search-bar">
            <div className="rounded-[1rem] border border-solid border-gray-400 ">
 
              <div className="w-[100%] border-b border-solid h-[50px]">
              
                <Space direction="vertical" className="w-[100%] px-3">
                
                   <RangePicker className="rangePicker w-[100%]"
                     onChange={(selectedDate:any)=>{
                      handleDateChange(selectedDate[0],'currentDay')
                      handleDateChange(selectedDate[1],'nextDay')
                     }}
                     
                     disabledDate={(current) => current && current.valueOf() < Date.now()}
                     popupClassName="popupRagePicker"

                   />
                </Space>
              </div>
              <div className="group-form px-4 py-3">
                <label htmlFor="" className="block text-[1.4rem] font-semibold">
                  Khach
                </label>
                <div className="flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (countClient > props.data.khach) {
                        return;
                      }
                      setCountClient(countClient + 1);
                    }}
                  >
                    <IoIosAdd className="text-[2.5rem]" />
                  </button>

                  <p>{countClient} Khách</p>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      countClient > 1
                        ? setCountClient(countClient - 1)
                        : countClient;
                    }}
                  >
                    {" "}
                    <IoIosRemove className="text-[2.5rem]" />
                  </button>
                </div>
              </div>
            </div>

            {isButtonDisabled ? (
              <ButtonPrimary
                width="100%"
                height={4}
                className="mt-5 rounded-[1rem] border border-solid"
                disabled
              >
                Xac Nhan
              </ButtonPrimary>
            ) : user ? (
              <ButtonPrimary
                width="100%"
                height={4}
                className="mt-5 rounded-[1rem] border border-solid"
                onClick={() => {
                  navigate(`/${PAY_PATH}`);
                  dispatch(setDisCount(discount));
                  dispatch(setPrice(props.data.giaTien));
                  dispatch(setStartDayRoom(valueStartDay));
                  dispatch(setEndDayRoom(valueEndDay));
                  dispatch(setCustomers(countClient));
                  dispatch(setImg(props.data.hinhAnh));
                  dispatch(setName(props.data.tenPhong));
                  dispatch(setIdRoom(props.data.id));
                }}
              >
                Xac Nhan
              </ButtonPrimary>
            ) : (
              <ButtonPrimary
                width="100%"
                height={4}
                className="mt-5 rounded-[1rem] border border-solid"
                onClick={() => {
                  navigate(`/${AUTH_PATH}/signin`);
                }}
              >
                Xac Nhan
              </ButtonPrimary>
            )}
          </form>
          <p className="text-center text-[1.6rem] text-gray-500">
            You won't be charged yet
          </p>

          {countDay > 0 ? (
            <div>
              <div className="border-b border-solid border-gray-400 py-4">
                <div className="flex justify-between">
                  <p>
                    {props.data.giaTien} CAD x {countDay} nights
                  </p>
                  <TextPrimary>${props.data.giaTien * countDay}</TextPrimary>
                </div>

                <form action="" className="my-3 flex justify-between">
                  <input
                    type="text"
                    placeholder="Nhập mã giảm giá"
                    className="h-[35px] w-[90%] border border-solid border-gray-400 px-3 outline-none"
                  />
                  <ButtonPrimary height={3.5} width="30%">
                    Xac Nhan
                  </ButtonPrimary>
                </form>

                <div className="flex justify-between">
                  <p>Giảm Giá</p>
                  <TextPrimary>-{discount}%</TextPrimary>
                </div>
              </div>
              <div>
                <div className="flex justify-between py-4">
                  <p>Tổng giá:</p>
                  <TextPrimary>
                    ${(props.data.giaTien * countDay * (100 - discount)) / 100}
                  </TextPrimary>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default InformationDetailRoom;
