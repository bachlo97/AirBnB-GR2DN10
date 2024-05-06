import {
  NavItem,
  SearchBar,
  SearchIcoin,
  SearchIconSubmi,
} from "./SearchBar.style";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { DatePicker, Select, Space } from "antd";
import "./style.css";
import {  useEffect, useState } from "react";

import { setStartDayRoom, setEndDayRoom } from "@/redux/room/Date.slice";

import SearchBarLoading from "../loading/SearchBarLoading";
import { useSearchBarHook } from "../hooks/useSearchBarHook";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function HeaderSearchBar(props: any) {

  const [isLoading, setIsLoading] = useState(true);
  const {  navigate,
    dispatch,
    activeField,
   
    valueId,
    valueStartDay,
    valueEndDay,
    dataOption,
    handleFieldClick,
    handleDateChange,
    handleChange,
    handleSubmit}=useSearchBarHook();
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);



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
                  options={dataOption}
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
                    onChange={(selectedDate) => handleDateChange(selectedDate,'currentDay')}
                    name="currentDay"
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
                  <DatePicker placeholder="Ngày về" 
                    onChange={(selectedDate) => handleDateChange(selectedDate,'nextDay')}
                  name="nextDay"
                  />
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
               
                dispatch(setStartDayRoom(valueStartDay));
                dispatch(setEndDayRoom(valueEndDay));
                navigate(`/roomlist/${valueId}`);
                
                
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
