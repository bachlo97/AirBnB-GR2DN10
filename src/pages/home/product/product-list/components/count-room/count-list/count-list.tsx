import {
  ContextStore,
  ContextType,
} from "@/pages/home/context/filter-rooms.context";

import { useContext, useEffect, useState } from "react";

type Props = {
  type: "phongNgu" | "giuong" | "phongTam";
};
export function CountList({ type }: Props) {
  const [{ chooseRooms, openModal,clear }, { setChooseRooms }] =
    useContext<ContextType>(ContextStore);
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
  console.log(chooseRooms);
  useEffect(() => {
    const temp = { ...chooseRooms };
    temp[type] = statuses.every((status, index) =>
      index === 0 ? true : !status,
    )
      ? 0
      : value;
    setChooseRooms(temp);
  }, [statuses]);
  useEffect(() => {
    setStatuses([false, false, false, false, false, false, false]);
  }, [openModal,clear]);
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
        className={`rounded-full ${statuses.every((status, index) => (index === 0 ? true : !status)) ? "bg-slate-950 text-white" : ""} border-[1px] border-solid ipad:px-8 ipad:py-3 mobile:px-3 mobile:py-3`}
        onClick={() => handleStatuses(0)}
      >
        Bất kì
      </button>

      {Array.from({ length: 6 }, (_, index) => (
        <button
          key={index}
          className={`${statuses[index + 1] ? "bg-slate-950 text-white" : ""} rounded-full border-[1px] border-solid ipad:px-8 ipad:py-3 mobile:px-4 mobile:py-1`}
          onClick={() => handleStatuses(index + 1)}
        >
          {index + 1}
          {index === 5 ? "+" : ""}
        </button>
      ))}
    </>
  );
}
