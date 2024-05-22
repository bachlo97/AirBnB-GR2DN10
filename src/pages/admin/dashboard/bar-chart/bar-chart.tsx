import React, { useState } from "react";
import { bookingData, roomData, locationData } from "../data";
import Chart from 'react-apexcharts'
import { truncateText } from "@/utils";
type Props = {};

export function BarChart({}: Props) {
  const currentYear = new Date().getFullYear();
  const filteredAndMappedData = bookingData
    .filter(
      (reservation) =>
        new Date(reservation.ngayDen).getFullYear() === currentYear,
    )
    .map((reservation) => {
      return {
        maPhong: reservation.maPhong,
        soLuongKhach: reservation.soLuongKhach,
      };
    });

  const filteredroomData = new Map(
    roomData.map((item) => [item.id, item.maViTri]),
  );

  const mergeRoom = filteredAndMappedData.reduce((acc: any, itemA) => {
    const maViTri = filteredroomData.get(itemA.maPhong);
    if (maViTri) {
      acc.push({ ...itemA, maViTri });
    }
    return acc;
  }, []);

  // Tạo một map từ arrayC để tra cứu nhanh tinhThanh theo id
  const mapLocation = new Map(
    locationData.map((item) => [item.id, item.tinhThanh]),
  );

  const filteredLocation = mergeRoom.reduce((acc: any, item: any) => {
    const tinhThanh = mapLocation.get(item.maViTri);
    if (tinhThanh) {
      acc.push({ ...item, tinhThanh });
    }
    return acc;
  }, []);

  const sumByTinhThanh = filteredLocation.reduce((acc: any, item: any) => {
    if (!acc[item.tinhThanh]) {
      acc[item.tinhThanh] = 0;
    }
    acc[item.tinhThanh] += item.soLuongKhach;
    return acc;
  }, {});

  // Chuyển đổi đối tượng kết quả thành mảng
  const result = Object.entries(sumByTinhThanh).map(([tinhThanh, soLuong]) => ({
    tinhThanh,
    soLuong,
  }));

  result.sort((a: any, b: any) => b.soLuong - a.soLuong);

  // Lấy 5 phần tử đầu tiên
  const top5 = result.slice(0, 5);

  // Tạo hai mảng tinhThanh và soLuongTuongUng
  const tinhThanh = top5.map((item) => truncateText(item.tinhThanh,20));

  const values = top5.map((item) => item.soLuong);
  console.log(tinhThanh);
  console.log(values);

  const [state, setState] = useState({
    series: [
      {
        data: values,
      },
    ],
    options: {
      chart: {
        zoom: {
            enabled: false,
        },
        toolbar: {
            show: false,
          },
      },
      title: {
        text: "Top 5 tỉnh thành có lượng khách du lịch cao nhất",
        align: "center",
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "end",
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid:{
        show:false,
      },
      xaxis: {
        categories: tinhThanh,
        title:{
            text: 'Số lượng người'
        }
      },
    },
  });

  return (
    <div className="min-w-0 flex-col h-[320px] break-words w-full rounded-[6px] border-0 bg-white px-7 py-3 text-[14px] text-[#333] shadow-[0_1px_4px_0_rgba(0,0,0,.14)] overflow-hidden">
    <Chart options={state.options} series={state.series} type="bar" height={300} />
  </div>
  );
}
