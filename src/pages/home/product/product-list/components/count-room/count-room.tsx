import React from "react";

type Props = {};

export function CountRoom({}: Props) {
  return (
    <div>
      <h2 className="text-[22px]">Phòng và phòng ngủ</h2>
      <div>
        <p className="my-3 text-[15px] font-light tracking-wide">Phòng ngủ</p>
        <div className="flex gap-3">
          <button className="rounded-full bg-slate-950 px-8 py-3 text-white">
            Bất kì
          </button>
          <button className="rounded-full border-[1px] border-solid bg-white px-8 py-3">
            1
          </button>
          <button className="rounded-full border-[1px] border-solid bg-white px-8 py-3">
            2
          </button>
          <button className="rounded-full border-[1px] border-solid bg-white px-8 py-3">
            3
          </button>
          <button className="rounded-full border-[1px] border-solid bg-white px-8 py-3">
            4
          </button>
          <button className="rounded-full border-[1px] border-solid bg-white px-8 py-3">
            5
          </button>
          <button className="rounded-full border-[1px] border-solid bg-white px-8 py-3">
            6+
          </button>
        </div>
      </div>

      <div>
        <p className="my-3 text-[15px] font-light tracking-wide">Giường</p>
        <div className="flex gap-3">
          <button className="rounded-full bg-slate-950 px-8 py-3 text-white">
            Bất kì
          </button>
          <button className="rounded-full border-[1px] border-solid bg-white px-8 py-3">
            1
          </button>
          <button className="rounded-full border-[1px] border-solid bg-white px-8 py-3">
            2
          </button>
          <button className="rounded-full border-[1px] border-solid bg-white px-8 py-3">
            3
          </button>
          <button className="rounded-full border-[1px] border-solid bg-white px-8 py-3">
            4
          </button>
          <button className="rounded-full border-[1px] border-solid bg-white px-8 py-3">
            5
          </button>
          <button className="rounded-full border-[1px] border-solid bg-white px-8 py-3">
            6+
          </button>
        </div>
      </div>

      <div>
        <p className="my-3 text-[15px] font-light tracking-wide">Phòng tắm</p>
        <div className="flex gap-3">
          <button className="rounded-full bg-slate-950 px-8 py-3 text-white">
            Bất kì
          </button>
          <button className="rounded-full border-[1px] border-solid bg-white px-8 py-3">
            1
          </button>
          <button className="rounded-full border-[1px] border-solid bg-white px-8 py-3">
            2
          </button>
          <button className="rounded-full border-[1px] border-solid bg-white px-8 py-3">
            3
          </button>
          <button className="rounded-full border-[1px] border-solid bg-white px-8 py-3">
            4
          </button>
          <button className="rounded-full border-[1px] border-solid bg-white px-8 py-3">
            5
          </button>
          <button className="rounded-full border-[1px] border-solid bg-white px-8 py-3">
            6+
          </button>
        </div>
      </div>
    </div>
  );
}
