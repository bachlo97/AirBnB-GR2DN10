import {
  NavItem,
  SearchBar,
  SearchIcoin,
  SearchIconSubmi,
} from "./SearchBar.style";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { DatePicker, Select, Space } from "antd";
import "./style.css";
import { useEffect, useState } from "react";

import { setStartDayRoom, setEndDayRoom } from "@/redux/room/Date.slice";

import SearchBarLoading from "../loading/SearchBarLoading";
import { useSearchBarHook } from "../hooks/useSearchBarHook";
import { useTranslation } from "react-i18next";
import { useTransition, animated } from "@react-spring/web";
import { ROOM_LIST_PATH } from "@/router/router.config";

function HeaderSearchBar(props: any) {
  const { t } = useTranslation();

  const transitions = useTransition(props.scrollY, {
    from: {
      opacity: 0.5,
      transform: "scale(0.5) translateY(-40px)",
      display: "block",
    },
    enter: {
      opacity: 1,
      transform: "scale(1) translateY(0px)",
      display: "block",
    },
    leave: {
      opacity: 0,
      transform: "scale(0) translateY(-40px)",
      display: "none",
    },
    config: { duration: 300 },
  });

  const [isLoading, setIsLoading] = useState(true);
  const [valueGuess, setValueGuess] = useState(0);
  const {
    navigate,
    dispatch,
    isOpen,

    valueId,
    valueStartDay,
    valueEndDay,
    dataOption,
    searchBarRef,

    handleFieldClick,
    handleDateChange,
    handleChange,

    handleSubmit,
  } = useSearchBarHook();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const onSearch = (value: any) => {
    console.log("search:", value);
  };

  // Filter `option.label` match the user type `input`
  const filterOption = (input: string, option: { label: any }) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  if (isLoading) {
    return <SearchBarLoading scrollY={props.scrollY}></SearchBarLoading>;
  }

  return (
    <NavItem className="search-bar mb-5">
      {props.scrollY
        ? transitions((props) => (
            <animated.div style={props}>
              <SearchBar className="search-bar-nav" ref={searchBarRef}>
                <form
                  className="flex"
                  onSubmit={handleSubmit}
                  method="get"
                  action=""
                >
                  <SearchIcoin
                    className={`${isOpen.location ? "activeSearchbar" : ""} search-icon `}
                    onClick={() => {
                      handleFieldClick("location");
                    }}
                  >
                    <h5 className="ml-4 mt-3 text-[1.4rem]">
                      {t("header.anyWhere")}
                    </h5>
                    <p className="text-[1.5rem] text-gray-500">
                      <Select
                        placeholder={t("header.anyWhere")}
                        className="my-select w-[150px]"
                        allowClear
                        onChange={handleChange}
                        options={dataOption}
                        open={isOpen.location}
                        showSearch
                        onSearch={onSearch}
                        filterOption={filterOption}
                      />
                    </p>
                  </SearchIcoin>
                  <SearchIcoin
                    ref={searchBarRef}
                    className={`${isOpen.ngayden ? "activeSearchbar" : ""}  search-icon`}
                    onClick={() => {
                      handleFieldClick("ngayden");
                    }}
                  >
                    <h5 className="mt-3 text-[1.4rem]">
                      {t("header.startDay")}
                    </h5>
                    <p className="text-[1.5rem] text-gray-500">
                      <Space direction="vertical" className="verSpace">
                        <DatePicker
                          placeholder={t("header.startDay")}
                          onChange={(selectedDate) =>
                            handleDateChange(selectedDate, "currentDay")
                          }
                          name="currentDay"
                          open={isOpen.ngayden}
                          popupClassName="calendar-header"
                          disabledDate={(current) =>
                            current && current.valueOf() < Date.now()
                          }
                        />
                      </Space>
                    </p>
                  </SearchIcoin>
                  <SearchIcoin
                    className={`${isOpen.ngayVe ? "activeSearchbar" : ""} search-icon`}
                    onClick={() => {
                      handleFieldClick("ngayVe");
                    }}
                  >
                    <h5 className="mt-3 text-[1.4rem]">{t("header.endDay")}</h5>
                    <p className="text-[1.5rem] text-gray-500">
                      <Space direction="vertical">
                        <DatePicker
                          placeholder={t("header.endDay")}
                          className="date-picker-header"
                          onChange={(selectedDate) =>
                            handleDateChange(selectedDate, "nextDay")
                          }
                          name="nextDay"
                          open={isOpen.ngayVe}
                          popupClassName="calendar-header"
                          disabledDate={(current) =>
                            current && current.valueOf() < Date.now()
                          }
                        />
                      </Space>
                    </p>
                  </SearchIcoin>
                  <SearchIcoin
                    className={`${isOpen.soKhach ? "activeSearchbar" : ""} search-icon`}
                    onClick={() => {
                      handleFieldClick("soKhach");
                    }}
                  >
                    <h5 className="mt-3 text-[1.4rem]">
                      {t("header.addGuests")}{" "}
                    </h5>
                    <p className="flex items-center gap-3 text-[1.8rem] text-gray-500">
                      <button
                        onClick={() => {
                          valueGuess < 20
                            ? setValueGuess((value) => value + 1)
                            : valueGuess;
                        }}
                      >
                        +
                      </button>
                      {valueGuess}
                      <button
                        onClick={() => {
                          valueGuess > 0
                            ? setValueGuess((value) => value - 1)
                            : "0";
                        }}
                      >
                        -
                      </button>
                    </p>
                  </SearchIcoin>
                  <button
                    type="submit"
                    onClick={() => {
                      dispatch(setStartDayRoom(valueStartDay));
                      dispatch(setEndDayRoom(valueEndDay));
                      if(valueId>0){
                         navigate(`/roomlist/${valueId}`);
                      }
                     
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
            </animated.div>
          ))
        : null}
    </NavItem>
  );
}

export default HeaderSearchBar;
