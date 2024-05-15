import { useAppSelector } from "@/redux/hooks";
import { Input } from "antd";
import React, { ReactElement, useState } from "react";

type Props = {
  label: string;
  edited: boolean;
  rowInput: ReactElement;
  handleBgBlur?: (value: boolean) => void;
  type: string;
};

export function RowInfo({
  label,
  edited,
  rowInput,
  type,
  handleBgBlur,
}: Props) {
  const user: any = useAppSelector((state) => state.authReducer.user);
  const [open, setOpen] = useState<boolean>(false);
  const renderContent = () => {
    if(user){
        switch(type){
            case 'password':
                return '********'
            case 'gender':
                return user.gender ? 'Nam' : 'Nữ'
            default:
                return user[type]
        }
    }
  }
  return (
    <div className={`${open ? "relative z-30" : null} mt-5 w-[55%]`}>
      <div className="flex items-center justify-between">
        <h4 className="text-[18px] text-gray-700">{label}</h4>
        {edited ? (
          <span
            className="cursor-pointer text-[15px] font-semibold underline"
            onClick={() => {
              setOpen(!open);
              handleBgBlur && handleBgBlur(!open);
            }}
          >
            {open ? "Huỷ" : "Chỉnh sửa"}
          </span>
        ) : null}
      </div>
      {open ? (
        rowInput
      ) : (
        <p className="text-[15px] text-gray-500">
          {renderContent()}
        </p>
      )}

      <hr className="mt-6" />
    </div>
  );
}
