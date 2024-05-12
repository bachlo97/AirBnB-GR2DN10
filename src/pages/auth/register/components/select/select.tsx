import React, { ReactNode, useState } from "react";
import { Select } from "antd";
import { BsGenderFemale } from "react-icons/bs";
import './select.style.css'
type Props = {
    label: string;
    icon?: ReactNode;
    name: string;
    handleChange: (values: boolean) => void;
    handleBlur: () => void
    error: string | undefined;
    touch: undefined | boolean;
};

export function SelectCustom({ icon, label,handleChange,handleBlur,error,touch }: Props) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<boolean | undefined>(undefined);
    const onChange = (value: boolean) => {
        setValue(value);
        handleChange(value)
    };

    const check =
        (open && value === undefined) || (!open && value !== undefined);
    return (
        <div
            className={`relative mx-0 my-[10px] w-[55%] border-b-2 border-solid border-b-white`}
        >
            <div className=" absolute right-[8px] top-[17px] text-[1.2rem] text-white">
                {icon}
            </div>
            <Select
                className="select-auth"
                popupClassName="popup-select-auth"
                suffixIcon={
                    <BsGenderFemale className="left-2 h-7 w-7 text-white" />
                }
                allowClear
                optionFilterProp="children"
                onChange={onChange}
                onBlur={handleBlur}
                onDropdownVisibleChange={(value) => setOpen(value)}
                options={[
                    {
                        value: true,
                        label: "Male",
                    },
                    {
                        value: false,
                        label: "Female",
                    },
                ]}
            />
            <label
                htmlFor=""
                className={`absolute ${check ? "left-0 top-[-1px] text-[1.25rem] italic " : "left-[5px] top-[30%] text-[16px]"} text-white transition-all duration-500 ease-in-out`}
            >
                {label}
                {touch && error ? (
                    <span className="error ml-2 text-[12px] font-semibold italic text-orange-400">
                        {error}
                    </span>
                ) : null}
            </label>
        </div>
    );
}
