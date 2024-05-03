import {
  NavItem,
  SearchBar,
  SearchIcoin,
  SearchIconSubmi,
} from "./SearchBar.style";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { DatePicker, Select, Space } from "antd";
import "./style.css";
import { SetStateAction, useEffect, useState } from "react";
import SearchBarLoading from "./SearchBarLoading";
import { TLocaltion } from "@/services/localtion/Localtion.type";
import { IIFE } from "@/utils";
import { getLocaltion } from "@/services/localtion/Localtion.service";
import { converToLocations } from "./helper/ConvertToLocations";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/redux/hooks";
import { setNextDayRoom, setPrevDayRoom } from "@/redux/Room/Room";
import { Dayjs } from "dayjs";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function HeaderSearchBar(props: any) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [activeField, setActiveField] = useState("");
  const [dataLocations, setDataLocations] = useState<TLocaltion[]>([]);
  const [valueId, setValueId] = useState(0);
  const [valueDayId, setValueDayId] = useState("");

  const handleFieldClick = (fieldName: string) => {
    setActiveField(fieldName);
  };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  useEffect(() => {
    IIFE(async () => {
      try {
        const data = await getLocaltion();
        const content = data.content;
        setDataLocations(converToLocations(content));
      } catch (e) {
        console.log({ e });
      }
    });
  }, []);
  const handleDateChange = (selectedDate: Dayjs) => {
    const selectedDateValue = selectedDate && selectedDate.format("YYYY-MM-DD");
    setValueDayId(selectedDateValue);
  };
  const handleChange = (value: number) => {
    setValueId(value);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (value: any) => {
    dispatch(setNextDayRoom(valueDayId))
  };

  const dataoption = dataLocations.map((item) => {
    return {
      value: item.id,
      label: item.tenViTri + "," + item.tinhThanh,
    };
  });

  if (isLoading) {
    return <SearchBarLoading scrollY={props.scrollY}></SearchBarLoading>;
  }

  return (
    <NavItem className="mb-5">
      {props.scrollY ? (
        <SearchBar>
          <form className="flex" onSubmit={handleSubmit} method="get" action="">
            <SearchIcoin
              className={`${activeField === "location" ? "active" : ""} search-icon`}
              onClick={() => {
                handleFieldClick("location");
              }}
            >
              <h5 className="ml-4 mt-3 text-[1.4rem]">Địa điểm</h5>
              <p className="text-[1.5rem] text-gray-500">
                <Select
                  placeholder="Địa điểm"
                  className="my-select w-[150px]"
                  allowClear
                  onChange={handleChange}
                  options={dataoption}
                />
              </p>
            </SearchIcoin>
            <SearchIcoin
              className={`${activeField === "ngayden" ? "active" : ""} search-icon`}
              onClick={() => {
                handleFieldClick("ngayden");
              }}
            >
              <h5 className="mt-3 text-[1.4rem]">Ngày đến</h5>
              <p className="text-[1.5rem] text-gray-500">
                <Space direction="vertical">
                  <DatePicker
                    placeholder="Ngày tới"
                    onChange={(selectedDate) => handleDateChange(selectedDate)}
                  />
                </Space>
              </p>
            </SearchIcoin>
            <SearchIcoin
              className={`${activeField === "ngayVe" ? "active" : ""} search-icon`}
              onClick={() => {
                handleFieldClick("ngayVe");
              }}
            >
              <h5 className="mt-3 text-[1.4rem]">Ngày về</h5>
              <p className="text-[1.5rem] text-gray-500">
                <Space direction="vertical">
                  <DatePicker placeholder="Ngày về" />
                </Space>
              </p>
            </SearchIcoin>
            <SearchIcoin
              className={`${activeField === "soKhach" ? "active" : ""} search-icon`}
              onClick={() => {
                handleFieldClick("soKhach");
              }}
            >
              <h5 className="mt-3 text-[1.4rem]">Số khách </h5>
              <p className="text-[1.5rem] text-gray-500">
                <input
                  type="number"
                  placeholder="Số Khách"
                  style={{ width: "100%" }}
                  className="outline-none"
                />
              </p>
            </SearchIcoin>
            <button
              type="submit"
              onClick={(e) => {
                navigate(`/roomlist/${valueId}`);
                dispatch(setNextDayRoom(valueDayId));
              }}
            >
              <SearchIconSubmi>
                <div className="flex items-center justify-center">
                  <FaMagnifyingGlass />
                </div>
              </SearchIconSubmi>
            </button>
          </form>
        </SearchBar>
      ) : (
        ``
      )}
    </NavItem>
  );
}

export default HeaderSearchBar;
