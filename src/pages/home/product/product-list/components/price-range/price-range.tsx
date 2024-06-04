import { InputNumber, Slider } from "antd";
import { useContext, useEffect, useRef, useState } from "react";
import "./index.css";
import {
  ContextStore,
  handleRangeSlider,
} from "@/pages/home/context/filter-rooms.context";
import { getRooms } from "@/services/room";
import { IIFE, getLocalStorage } from "@/utils";
import { getProfile } from "@/services/user";
import { USER_ID } from "@/constant";
type Props = {};

export function PriceRange({}: Props) {
  const [{ rangePrice, openModal, clear }, { setRangePrice, setCount }] =
    useContext(ContextStore);
  const [borderInput1, setBorderInput1] = useState(false);
  const [borderInput2, setBorderInput2] = useState(false);
  const [defaultValue, setDefaultValue] = useState<number[]>();
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  console.log({ rangePrice });
  useEffect(() => {
    IIFE(async () => {
      try {
        const data = await getRooms();
        const { content } = data;
        console.log({ content });
        const range = handleRangeSlider(content);
        setRangePrice(range);
        setDefaultValue(range);
      } catch (e) {
        console.log(e);
      }
    });
  }, [openModal, clear]);

  useEffect(() => {
    IIFE(async () => {
      const data = await getRooms();
      const filterData = data.content.filter(
        (item: TRoomAPI) =>
          item.giaTien >= rangePrice[0] && item.giaTien <= rangePrice[1],
      );
      setCount(filterData.length);
    });
  }, [borderInput1, borderInput2]);

  const handleChange = (value: number[]) => {
    if (defaultValue)
      if (value[1] <= defaultValue[0]) {
        setRangePrice([defaultValue[0], defaultValue[0] + 1]);
      } else if (value[0] >= defaultValue[1]) {
        setRangePrice([defaultValue[1] - 1, defaultValue[1]]);
      } else {
        setRangePrice(value);
      }
  };

  const handleChangeComplete = async (value: number[]) => {
    try {
      const data = await getRooms();
      let start = value[0]
      let end = value[1]
      if (value[0] == value[1]) {
        setRangePrice([value[0] - 1, value[0]]);
        start = value[0] - 1
      }
      console.log(12345,value)
      
      console.log(data.content)
      const filterData = data.content.filter(
        (item: TRoomAPI) =>
          item.giaTien >= start && item.giaTien <= end,
      );
      setCount(filterData.length);
    } catch (e) {
      console.log(e);
    }
  };
  const handleFocus = (ref: any) => {
    ref.current.focus();
  };

  return (
    <div>
      <h2 className="text-[22px]">Khoảng giá</h2>
      <Slider
        range
        min={defaultValue && defaultValue[0]}
        max={defaultValue && defaultValue[1]}
        value={rangePrice}
        classNames={{
          track: "track-custom",
          rail: "rail-custom",
          handle: "handle-custom",
        }}
        onChange={handleChange}
        onChangeComplete={handleChangeComplete}
      />
      <div className="mt-10 flex items-center justify-between">
        <div
          className={`flex w-[40%] flex-col rounded-xl border-[1.5px] ${borderInput1 ? "border-gray-950" : "border-gray-300"} border-solid px-4 py-1`}
          onClick={() => {
            handleFocus(inputRef1);
          }}
        >
          <span className="text-md">Tối thiểu</span>
          <div className="flex items-center">
            <span>$</span>
            <InputNumber
              ref={inputRef1}
              className="w-full border-none focus-within:shadow-none"
              min={defaultValue && defaultValue[0]}
              max={defaultValue && defaultValue[1] - 1}
              value={rangePrice[0]}
              onFocus={() => setBorderInput1(true)}
              onBlur={() => {
                setBorderInput1(false);
              }}
              onChange={(value) => {
                if (value) {
                  const temp = [...rangePrice];
                  if (value >= temp[1]) {
                    temp[0] = temp[1] - 1;
                  } else {
                    temp[0] = value;
                  }
                  setRangePrice(temp);
                }
              }}
            />
          </div>
        </div>
        <div className="h-[1px] w-[30px] bg-slate-400"></div>
        <div
          className={`flex w-[40%] flex-col rounded-xl border-[1.5px] ${borderInput2 ? "border-gray-950" : "border-gray-300"} border-solid px-4 py-1`}
          onClick={() => {
            handleFocus(inputRef2);
          }}
        >
          <span className="text-md">Tối đa</span>
          <div className="flex items-center">
            <span>$</span>
            <InputNumber
              ref={inputRef2}
              className="w-full border-none focus-within:shadow-none"
              min={defaultValue && defaultValue[0] + 1}
              max={defaultValue && defaultValue[1]}
              value={rangePrice[1]}
              onFocus={() => setBorderInput2(true)}
              onBlur={() => {
                setBorderInput2(false);
              }}
              onChange={(value) => {
                if (value) {
                  const temp = [...rangePrice];
                  if (value <= temp[0]) {
                    temp[1] = temp[0] + 1;
                  } else {
                    temp[1] = value;
                  }
                  setRangePrice(temp);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
