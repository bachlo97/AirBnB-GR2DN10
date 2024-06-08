import React from "react";
import { CheckBoxFilter } from "./checkbox-filter";

type Props = {};

export function Necessities({}: Props) {
  return (
    <div>
      <h2 className="text-[22px]">Tiện nghi</h2>
      <h3 className="mt-2 font-normal">Đồ dùng thiết yếu</h3>

      <div className="grid grid-cols-2 ipad:gap-0 mobile:gap-10">
        <div>
          <div className="my-5 flex items-center gap-3">
            <CheckBoxFilter name="wifi" title="Wi-fi" />
          </div>

          <div className="my-5 flex items-center gap-3">
            <CheckBoxFilter name="mayGiat" title="Máy giặt" />
          </div>

          <div className="my-5 flex items-center gap-3">
            <CheckBoxFilter name="dieuHoa" title="Điều hòa nhiệt độ" />
          </div>
        </div>

        <div>
          <div className="my-5 flex items-center gap-3">
            <CheckBoxFilter name="bep" title="Bếp" />
          </div>

          <div className="my-5 flex items-center gap-3">
            <CheckBoxFilter name="tivi" title="Ti vi" />
          </div>

          <div className="my-5 flex items-center gap-3">
            <CheckBoxFilter name="banUi" title="Bàn ủi" />
          </div>
        </div>
      </div>
    </div>
  );
}
