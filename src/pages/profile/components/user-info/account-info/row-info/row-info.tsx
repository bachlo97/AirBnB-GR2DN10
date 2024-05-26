import { useAppSelector } from "@/redux/hooks";
import {ReactElement, useContext, useEffect, useState } from "react";
import {ContextStore} from "../../context";

type Props = {
  label: string;
  edited: boolean;
  rowInput: ReactElement;
  type: string;
};

export function RowInfo({
  label,
  edited,
  rowInput,
  type,
}: Props) {
  const user: any = useAppSelector((state) => state.authReducer.user);
  const [open, setOpen] = useState<boolean>(false);
  const [bgBlur, setBgBlur] = useContext(ContextStore);

  useEffect(()=>{
    setOpen(false)
  },[user])
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
              setBgBlur(!open)
            }}
          >
            {bgBlur && open? "Huỷ" : "Chỉnh sửa"}
          </span>
        ) : null}
      </div>
      {open && bgBlur ? (
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
