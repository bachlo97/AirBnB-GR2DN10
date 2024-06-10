import { CountList } from "./count-list";

type Props = {};

export function CountRoom({}: Props) {
  return (
    <div>
      <h2 className="text-[22px]">Phòng và phòng ngủ</h2>
      <div>
        <p className="my-3 text-[15px] font-light tracking-wide">Phòng ngủ</p>
        <div className="flex gap-3">
          <CountList type="phongNgu" />
        </div>
      </div>

      <div>
        <p className="my-3 text-[15px] font-light tracking-wide">Giường</p>
        <div className="flex gap-3">
          <CountList type="giuong" />
        </div>
      </div>

      <div>
        <p className="my-3 text-[15px] font-light tracking-wide">Phòng tắm</p>
        <div className="flex gap-3">
          <CountList type="phongTam" />
        </div>
      </div>
    </div>
  );
}
