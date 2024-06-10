import { InputNumber, Slider } from "antd";
import { useEffect, useRef, useState } from "react";
import "./index.css";
import { getRooms } from "@/services/room";
import { IIFE } from "@/utils";
import {
  choosePriceRange,
  countRoom,
} from "@/pages/home/actions/filter-room.actions";
import { useFilterRoom } from "@/pages/home/hooks/filter-rooms.hook";
import { handleFilter } from "@/pages/home/context/helper";
type Props = {};

export function PriceRange({}: Props) {
  const [
    { rangePrice, chooseRooms, chooseNecessities, rangeDefault },
    dispatch,
    // { setRangePrice, setCount },
  ] = useFilterRoom();
  const [borderInput1, setBorderInput1] = useState(false);
  const [borderInput2, setBorderInput2] = useState(false);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  console.log({ rangePrice });

  useEffect(() => {
    IIFE(async () => {
      try {
        const dataAPI = await getRooms();
        const roomData = dataAPI.content;
        const filteredData = handleFilter(
          { rangePrice, chooseRooms, chooseNecessities },
          roomData,
        );
        dispatch(countRoom(filteredData.length));
        // setCount(filteredData.length);
      } catch (e) {
        console.log(e);
      }
    });
  }, [borderInput1, borderInput2]);

  const handleChange = (value: number[]) => {
    if (rangeDefault)
      if (value[1] <= rangeDefault[0]) {
        dispatch(choosePriceRange([rangeDefault[0], rangeDefault[0] + 1]));
      } else if (value[0] >= rangeDefault[1]) {
        // setRangePrice([rangeDefault[1] - 1, rangeDefault[1]]);
        dispatch(choosePriceRange([rangeDefault[1] - 1, rangeDefault[1]]));
      } else {
        // setRangePrice(value);
        dispatch(choosePriceRange(value as [number, number]));
      }
    // dispatch(choosePriceRange(value as [number, number]));
  };

  const handleChangeComplete = async (value: number[]) => {
    try {
      let start = value[0];
      let end = value[1];
      if (value[0] == value[1]) {
        dispatch(choosePriceRange([value[0] - 1, value[0]]));
        // setRangePrice([value[0] - 1, value[0]]);
        start = value[0] - 1;
      }
      const rangePrice: [number, number] = [start, end];
      const dataAPI = await getRooms();
      const roomData = dataAPI.content;
      const filteredData = handleFilter(
        { rangePrice, chooseRooms, chooseNecessities },
        roomData,
      );
      // setCount(filteredData.length);
      dispatch(countRoom(filteredData.length));
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
        min={rangeDefault && rangeDefault[0]}
        max={rangeDefault && rangeDefault[1]}
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
              min={rangeDefault && rangeDefault[0]}
              max={rangeDefault && rangeDefault[1] - 1}
              value={rangePrice[0]}
              onFocus={() => setBorderInput1(true)}
              onBlur={() => {
                setBorderInput1(false);
              }}
              onChange={(value) => {
                if (value) {
                  const temp: [number, number] = [...rangePrice];
                  if (value >= temp[1]) {
                    temp[0] = temp[1] - 1;
                  } else {
                    temp[0] = value;
                  }
                  dispatch(choosePriceRange(temp));
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
              min={rangeDefault && rangeDefault[0] + 1}
              max={rangeDefault && rangeDefault[1]}
              value={rangePrice[1]}
              onFocus={() => setBorderInput2(true)}
              onBlur={() => {
                setBorderInput2(false);
              }}
              onChange={(value) => {
                if (value) {
                  const temp: [number, number] = [...rangePrice];
                  if (value <= temp[0]) {
                    temp[1] = temp[0] + 1;
                  } else {
                    temp[1] = value;
                  }
                  dispatch(choosePriceRange(temp));
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
