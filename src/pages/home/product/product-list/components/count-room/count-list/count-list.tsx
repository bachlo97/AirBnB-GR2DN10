import { ContextStore } from "@/pages/home/context/filter-rooms.context";
import React, { useContext, useState } from "react";

type Props = {
  type: string;
};

export function CountList({ type }: Props) {
  const [{ chooseRooms }, { setChooseRooms }] = useContext(ContextStore);
  const [statuses, setStatuses] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  console.log({ statuses });
  const handleChooseRoom = (value: number) => {
    const temp = { ...chooseRooms };
    temp[type] = value;
    setChooseRooms(temp);
    console.log(temp);
  };
  const handleStatuses = (idx:number) => {
    if (idx === 0) {
      setStatuses([false, false, false, false, false, false, false]);
    } else {
      const updatedStatuses = statuses.map((status, index) => 
        idx === index ? !status : false
      );
      setStatuses(updatedStatuses);
    }
  };
  
  const checkRoom = (arr: boolean[]) => {
    // Kiểm tra nếu tất cả các phần tử từ index 1 đến index cuối cùng đều là false
    return arr.slice(1).every((elem) => elem === false);
  };
  return (
    <>
      <button
        className={`rounded-full ${checkRoom(statuses) ? "bg-slate-950 text-white " : ""}  border-[1px] border-solid px-8 py-3  `}
        onClick={() => {
          handleChooseRoom(0);
          handleStatuses(0);
        }}
      >
        Bất kì
      </button>

      {Array.from({ length: 6 }, (_, index) => (
        <button
          key={index}
          className={`${statuses[index + 1] ? "bg-slate-950 text-white" : ""} rounded-full border-[1px]  border-solid px-8 py-3`}
          onClick={() => {
            handleChooseRoom(index + 1);
            handleStatuses(index + 1);
          }}
        >
          {index + 1}
          {index === 5 ? "+" : ""}
        </button>
      ))}

      {/* <button className="rounded-full border-[1px] border-solid bg-white px-8 py-3">
        1
      </button>
      <button className="rounded-full border-[1px] border-solid bg-white px-8 py-3">
        2
      </button>
      <button className="rounded-full border-[1px] border-solid bg-white px-8 py-3">
        3
      </button>
      <button className="rounded-full border-[1px] border-solid bg-white px-8 py-3">
        4
      </button>
      <button className="rounded-full border-[1px] border-solid bg-white px-8 py-3">
        5
      </button>
      <button className="rounded-full border-[1px] border-solid bg-white px-8 py-3">
        6+
      </button> */}
    </>
  );
}
