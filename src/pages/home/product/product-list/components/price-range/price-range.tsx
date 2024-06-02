import { InputNumber, Slider } from "antd";
import { useRef, useState } from "react";
import "./index.css";
type Props = {};

export function PriceRange({}: Props) {
  const [inputValue, setInputValue] = useState<number[]>([20, 50]);
  const [borderInput1, setBorderInput1] = useState(false);
  const [borderInput2, setBorderInput2] = useState(false);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const handleChange = (value: number[]) => {
    if (value[1] <= 21) {
      setInputValue([20, 21]);
    } else if (value[0] >= 49) {
      setInputValue([49, 50]);
    } else {
      setInputValue(value);
    }
  };
  const handleFocus = (ref: any) => {
    ref.current.focus();
  };
  return (
    <div>
      <h2 className="text-[22px]">Khoảng giá</h2>
      <Slider
        range
        min={20}
        max={50}
        value={inputValue}
        classNames={{
          track: "track-custom",
          rail: "rail-custom",
          handle: "handle-custom",
        }}
        onChange={handleChange}
      />
      <div className="mt-10 flex items-center justify-between">
        <div
          className={`flex w-[40%] flex-col rounded-xl border-[1.5px] ${borderInput1 ? "border-gray-950" : "border-gray-300"} border-solid px-4 py-1`}
          onClick={() => {
            handleFocus(inputRef1);
          }}
        >
          <span className="text-md">Tối thiểu</span>
          <div className="flex items-center">
            <span>$</span>
            <InputNumber
              ref={inputRef1}
              className="w-full border-none focus-within:shadow-none"
              min={20}
              max={49}
              value={inputValue[0]}
              onFocus={() => setBorderInput1(true)}
              onBlur={() => setBorderInput1(false)}
              onChange={(value) => {
                if (value) {
                  const temp = [...inputValue];
                  temp[0] = value;
                  setInputValue(temp);
                }
              }}
            />
          </div>
        </div>
        <div className="h-[1px] w-[30px] bg-slate-400"></div>
        <div
          className={`flex w-[40%] flex-col rounded-xl border-[1.5px] ${borderInput2 ? "border-gray-950" : "border-gray-300"} border-solid px-4 py-1`}
          onClick={() => {
            handleFocus(inputRef2);
          }}
        >
          <span className="text-md">Tối đa</span>
          <div className="flex items-center">
            <span>$</span>
            <InputNumber
              ref={inputRef2}
              className="w-full border-none focus-within:shadow-none"
              min={21}
              max={50}
              value={inputValue[1]}
              onFocus={() => setBorderInput2(true)}
              onBlur={() => setBorderInput2(false)}
              onChange={(value) => {
                if (value) {
                  const temp = [...inputValue];
                  temp[1] = value;
                  setInputValue(temp);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
