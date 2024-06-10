import { ClosedEyeIcon, OpendEyeIcon } from "@/assets/icons";
import { ReactNode, useState } from "react";
import { useField } from "formik";
type Props = {
    type?: string;
    label: string;
    icon?: ReactNode;
    name: string;
};

export const AuthInput = ({ type, label, icon, ...props }: Props) => {
    const [field, meta] = useField(props);
    const [hide, setHide] = useState(true);
    return (
        <div
            className={`relative mx-0 my-[10px] border-b-2 border-solid border-b-white`}
        >
            <div className=" absolute mobile:right-[-3px] ipad:right-[8px] top-[17px] text-[1.2rem] text-white">
                {icon ? (
                    icon
                ) : (
                    <div
                        onClick={() => {
                            setHide(!hide);
                        }}
                    >
                        {hide ? <ClosedEyeIcon /> : <OpendEyeIcon />}
                    </div>
                )}
            </div>
            <input
                type={hide ? type : "text"}
                required
                autoComplete="off"
                className="peer h-[50px] w-full border-none bg-transparent p-[0_35px_0_5px] ipad:text-[17px] mobile:text-[12px] text-white outline-none focus:shadow-none"
                {...field} {...props}
            />
            <label
                htmlFor=""
                className="peer pointer-events-none absolute left-[5px] top-[30%] mobile:text-[10px] ipad:text-[16px] text-white transition-all duration-500 ease-in-out peer-valid:left-0 peer-valid:top-[-1px] ipad:peer-valid:text-[0.75em] mobile:peer-valid:text-[0.5em] peer-valid:italic peer-focus:left-0 peer-focus:top-[-1px] mobile:peer-focus:text-[0.5em] ipad:peer-focus:text-[0.75em] peer-focus:italic"
            >
                {label}
                {meta.touched && meta.error ? (
                <span className="error text-orange-400 ipad:text-[12px] mobile:text-[8px] italic font-semibold ml-2">{meta.error}</span>
            ) : null}
            </label>

        </div>
    );
};
