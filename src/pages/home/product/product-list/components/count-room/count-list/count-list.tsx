import {
  ContextStore,
  ContextType,
  handleFilter,
} from "@/pages/home/context/filter-rooms.context";
import { getRooms } from "@/services/room";
import { IIFE } from "@/utils";

import { useContext, useEffect, useState } from "react";

type Props = {
  type: "phongNgu" | "giuong" | "phongTam";
};
export function CountList({ type }: Props) {
  const [
    { chooseRooms, openModal, clear, rangePrice, chooseNecessities,count },
    { setChooseRooms, setCount },
  ] = useContext<ContextType>(ContextStore);
  const [value, setValue] = useState(0);
  const [statuses, setStatuses] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  console.log(123456789,chooseRooms);
  useEffect(() => {
    const temp = { ...chooseRooms };
    console.log('asdasdasdasd',temp)
    temp[type] = statuses.every((status, index) =>
      index === 0 ? true : !status,
    )
      ? 0
      : value;
    setChooseRooms(temp);
  }, [statuses]);
  useEffect(() => {
    setStatuses([false, false, false, false, false, false, false]);
    // setChooseRooms({
    //   phongNgu: 0,
    //   giuong: 0,
    //   phongTam: 0,
    // })
  }, [openModal, clear]);

  // useEffect(() => {
  //   IIFE(async () => {
  //     try {
  //       const dataAPI = await getRooms();
  //       const roomData = dataAPI.content;
  //       const filteredData = handleFilter(
  //         { rangePrice, chooseRooms, chooseNecessities },
  //         roomData,
  //       );
  //       console.log(111111, filteredData);
  //       setCount(filteredData.length);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   });
  // }, [chooseRooms]);
  const handleStatuses = (idx: number) => {
    setValue(idx);
    setStatuses((prevStatuses) => {
      if (idx === 0) {
        return [false, false, false, false, false, false, false];
      } else {
        return prevStatuses.map((status, index) =>
          idx === index ? !status : false,
        );
      }
    });
  };

  return (
    <>
      <button
        className={`rounded-full ${statuses.every((status, index) => (index === 0 ? true : !status)) ? "bg-slate-950 text-white" : ""} border-[1px] border-solid mobile:px-3 mobile:py-3 ipad:px-8 ipad:py-3`}
        onClick={() => handleStatuses(0)}
      >
        Bất kì
      </button>

      {Array.from({ length: 6 }, (_, index) => (
        <button
          key={index}
          className={`${statuses[index + 1] ? "bg-slate-950 text-white" : ""} rounded-full border-[1px] border-solid mobile:px-4 mobile:py-1 ipad:px-8 ipad:py-3`}
          onClick={() => handleStatuses(index + 1)}
        >
          {index + 1}
          {index === 5 ? "+" : ""}
        </button>
      ))}
    </>
  );
}
