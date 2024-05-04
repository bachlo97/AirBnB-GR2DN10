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
import SearchBarLoading from "./SearchBarLoading";
import { TLocaltion } from "@/services/localtion/Localtion.type";
import { IIFE } from "@/utils";
import { getLocaltion } from "@/services/localtion/Localtion.service";
import { converToLocations } from "./helper/ConvertToLocations";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/redux/hooks";
import { setStartDayRoom, setEndDayRoom } from "@/redux/room/Date.slice";
import { Dayjs } from "dayjs";
import moment from 'moment';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function HeaderSearchBar(props: any) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [activeField, setActiveField] = useState("");
  const [dataLocations, setDataLocations] = useState<TLocaltion[]>([]);
  const [valueId, setValueId] = useState(0);
  const [valueStartDay, setvalueStartDay] = useState("");
  const [valueEndDay, setvalueEndDay] = useState("");

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
  const handleDateChange = (selectedDate: Dayjs,name:string) => {
    const selectedDateValue = selectedDate && selectedDate.format("YYYY-MM-DD");
    
    if(name==='currentDay'){
         setvalueStartDay(selectedDateValue);
    }else{
   
      setvalueEndDay(selectedDateValue);
    }
  };
  const handleChange = (value: number) => {
    setValueId(value);

    
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: { preventDefault: () => void; }) => {
e.preventDefault();
  };

// dataOption
  const dataOption = dataLocations.map((item) => {
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
