import { ReactNode } from "react";
type Props = {
  bgIcon: string;
  icon: ReactNode;
  title: string;
  value: string;
  rate?: ReactNode;
  unit: string;
};

export function Item({ bgIcon, icon, title, value, rate, unit }: Props) {
  return (
    <div>
      <div className="relative my-[30px] flex min-h-[150px] w-full min-w-0 flex-col break-words rounded-[6px] border-0 bg-white text-[14px] text-[#333] shadow-[0_1px_4px_0_rgba(0,0,0,.14)]">
        <div className="my-5 flex items-center justify-center  gap-10">
          <div
            className={`flex h-[90px] w-[90px] items-center justify-center   rounded-md ${bgIcon} shadow-xl `}
          >
            <div className="text-[30px] text-white">{icon}</div>
          </div>
          <div className="flex flex-col items-center gap-4 text-right">
            <p className="text-[15px] font-medium text-[#999]">{title}</p>
            <h3 className="text-[25px] font-semibold tracking-widest text-black">
              {value}
            </h3>
            {rate}
            <p className="text-[14px] italic">{unit}</p>
            {rate ? "" : <div className="mb-5"></div>}
          </div>
        </div>
      </div>
    </div>
  );
}
