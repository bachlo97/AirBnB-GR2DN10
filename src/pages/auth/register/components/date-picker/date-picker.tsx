import { DatePicker } from "antd";
import {useState } from "react";
import dayjs from 'dayjs';
import './date-picker.style.css'
type Props = {
    label: string;
    name: string;
    error: string | undefined;
    touch: undefined | boolean;
    handleDatePicker: (value: any) => void;
    handleBlur: () => void;
};

export function DatePickerCustom({ handleDatePicker,handleBlur,label,touch,error }: Props) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const check = open || (!open && value !== "");

    const handleChange = (date: any, dateString: string | string[]) => {
        setValue(dateString as string);
        handleDatePicker(date);
    };
    return (
        <>
            <div
                className={`relative mx-0 my-[10px] mobile:w-[100%] ipad:w-[55%] border-b-2 border-solid border-b-white`}
            >
                <DatePicker
                    placeholder=""
                    className="date-picker-auth"
                    onOpenChange={(value) => setOpen(value)}
                    popupClassName="calendar-auth"
                    format={"DD/MM/YYYY"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <label
                    htmlFor=""
                    className={`absolute ${check ? "left-0 top-[-1px] ipad:text-[1.25rem]  mobile:text-[0.75rem] italic " : "left-[5px] top-[30%] ipad:text-[16px] mobile:text-[10px]"} text-white transition-all duration-500 ease-in-out`}
                >
                    {label}
                    {touch && error ? (
                        <span className="error ml-2 ipad:text-[12px] mobile:text-[7px] font-semibold italic text-orange-400">
                            {error}
                        </span>
                    ) : null}
                </label>
            </div>
        </>
    );
}
