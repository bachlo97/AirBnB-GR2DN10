import React from "react";

type Props = {};

export function Necessities({}: Props) {
  return (
    <div>
      <h2 className="text-[22px]">Tiện nghi</h2>
      <h3 className="mt-2 font-normal">Đồ dùng thiết yếu</h3>

      <div className="grid grid-cols-2">
        <div>
          <div className="my-5 flex items-center gap-3">
            <input
              id="default-checkbox"
              type="checkbox"
              className="h-[24px] w-[24px] rounded accent-black"
              value={""}
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-[16px] text-gray-900"
            >
              Wi-fi
            </label>
          </div>

          <div className="my-5 flex items-center gap-3">
            <input
              id="default-checkbox"
              type="checkbox"
              className="h-[24px] w-[24px] rounded accent-black"
              value={""}
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-[16px] text-gray-900"
            >
              Máy giặt
            </label>
          </div>

          <div className="my-5 flex items-center gap-3">
            <input
              id="default-checkbox"
              type="checkbox"
              className="h-[24px] w-[24px] rounded accent-black"
              value={""}
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-[16px] text-gray-900"
            >
              Điều hòa nhiệt độ
            </label>
          </div>
        </div>

        <div>
          <div className="my-5 flex items-center gap-3">
            <input
              id="default-checkbox"
              type="checkbox"
              className="h-[24px] w-[24px] rounded accent-black"
              value={""}
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-[16px] text-gray-900"
            >
              Bếp
            </label>
          </div>

          <div className="my-5 flex items-center gap-3">
            <input
              id="default-checkbox"
              type="checkbox"
              className="h-[24px] w-[24px] rounded accent-black"
              value={""}
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-[16px] text-gray-900"
            >
             Ti vi
            </label>
          </div>

          <div className="my-5 flex items-center gap-3">
            <input
              id="default-checkbox"
              type="checkbox"
              className="h-[24px] w-[24px] rounded accent-black"
              value={""}
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-[16px] text-gray-900"
            >
              Bàn ủi
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
