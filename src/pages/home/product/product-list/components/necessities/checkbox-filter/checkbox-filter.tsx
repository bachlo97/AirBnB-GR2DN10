import { ContextStore } from "@/pages/home/context/filter-rooms.context";
import React, { useContext, useEffect } from "react";

type Props = {
  name: "wifi" | "mayGiat" | "dieuHoa" | "bep" | "tivi" | "banUi";
  title: string;
};

export function CheckBoxFilter({ name, title }: Props) {
  const [{ chooseNecessities, openModal,clear }, { setChooseNecessities }] =
    useContext(ContextStore);
  console.log({ chooseNecessities });
  const handleChange = (e: any) => {
    const temp = { ...chooseNecessities };
    temp[name] = e.target.checked;
    setChooseNecessities(temp);
  };
  useEffect(() => {
    setChooseNecessities({
      wifi: false,
      mayGiat: false,
      dieuHoa: false,
      bep: false,
      tivi: false,
      banUi: false,
    });
  }, [openModal,clear]);
  return (    
    <>
      <input
        id={name}
        type="checkbox"
        className="h-[24px] w-[24px] rounded accent-black"
        onChange={handleChange}
        checked={chooseNecessities[name]}
      />
      <label
        htmlFor={name}
        className="ms-2 ipad:text-[16px] mobile:text-[13px] font-thin text-gray-900"
      >
        {title}
      </label>
    </>
  );
}
