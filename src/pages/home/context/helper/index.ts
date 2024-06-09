import {
    FilterParams,
    TNecessities,
    TRoomsCount,
  } from "../../types/context.type";
  
  
  export const handleRangeSlider = (data: TRoomAPI[] | any):[number,number] => {
    return [
      Math.min.apply(
        Math,
        data.map((room: TRoomAPI) => room.giaTien),
      ),
      Math.max.apply(
        Math,
        data.map((room: TRoomAPI) => room.giaTien),
      ),
    ];
  };
  
  export const handleFilter = (filter: FilterParams, data: TRoomAPI[]) => {
    const { chooseNecessities, chooseRooms, rangePrice } = filter;
    const [start, end] = rangePrice;
  
    let filteredData = data.filter(
      (item: TRoomAPI) => item.giaTien >= start && item.giaTien <= end,
    );
  
    const selectedNecessities = Object.keys(chooseNecessities).filter(
      (key) => chooseNecessities[key as keyof TNecessities],
    );
  
    if (selectedNecessities.length) {
      filteredData = filteredData.filter((item: TRoomAPI) => {
        return selectedNecessities.every(
          (necessity) => item[necessity as keyof TNecessities],
        );
      });
    }
    const filteredChooseRooms = Object.fromEntries(
      Object.entries(chooseRooms).filter(([_, value]) => value !== 0),
    );
  
    console.log(2222222, filteredChooseRooms);
    if (Object.keys(filteredChooseRooms).length) {
      filteredData = filteredData.filter((item: TRoomAPI) => {
        return Object.entries(filteredChooseRooms).every(([key, value]) => {
          return (
            item.hasOwnProperty(key) &&
            (item[key as keyof TRoomsCount] === value ||
              (value == 6 && item[key as keyof TRoomsCount] >= 6))
          );
        });
      });
    }
    return filteredData;
  };
  
  
  export const handleNumFilter = (
    filter: FilterParams,
    rangeDefault: number[],
  ) => {
    const { chooseNecessities, chooseRooms, rangePrice } = filter;
    let count = 0;
  
    const arraysEqual = (arr1: number[], arr2: number[]) => {
      return arr1.every((element, index) => element === arr2[index]);
    };
  
    if (!arraysEqual(rangePrice, rangeDefault)) {
      count++;
    }
  
    count += Object.values(chooseRooms).reduce(
      (acc, value) => acc + (value > 0 ? 1 : 0),
      0,
    );
    count += Object.values(chooseNecessities).reduce(
      (acc, value) => acc + (value ? 1 : 0),
      0,
    );
    return count;
  };