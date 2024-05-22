import React, { useState } from "react";
import { bookingData, roomData } from "../data";
import Chart from 'react-apexcharts'
type Props = {};

export function ColumnChart({}: Props) {
  // Lấy năm hiện tại
  const currentYear = new Date().getFullYear();

  const filteredReservations = bookingData
    .filter(
      (reservation) =>
        new Date(reservation.ngayDen).getFullYear() === currentYear,
    )
    .map(({ maPhong, ngayDen, soLuongKhach }) => ({
      maPhong,
      ngayDen,
      soLuongKhach,
    }));

  console.log(filteredReservations);

  const mapRoomData = new Map(roomData.map((item) => [item.id, item.giaTien]));
  console.log({ mapRoomData });
  const mergeWithRoom = filteredReservations.reduce((acc: any, itemA) => {
    const giaTien = mapRoomData.get(itemA.maPhong);
    if (giaTien) {
      acc.push({ ...itemA, giaTien });
    }
    return acc;
  }, []);
  console.log(mergeWithRoom);

  const monthlyTotals = mergeWithRoom.reduce(
    (acc: { [key: string]: number }, reservation: any) => {
      const month = new Date(reservation.ngayDen).toLocaleString("default", {
        month: "short",
      });
      const totalCost = reservation.soLuongKhach * reservation.giaTien;

      if (!acc[month]) {
        acc[month] = 0;
      }
      acc[month] += totalCost;

      return acc;
    },
    {},
  );

  console.log({ monthlyTotals });

  const allMonths = Array.from({ length: 12 }, (_, i) =>
    new Date(0, i).toLocaleString("default", { month: "short" }),
  ).reduce((acc: { [key: string]: number }, month) => {
    acc[month] = 0;
    return acc;
  }, {});

  Object.keys(monthlyTotals).forEach((month) => {
    allMonths[month] = monthlyTotals[month];
  });
  const months = Object.keys(allMonths);
  const values = Object.values(allMonths);
  console.log(months);
  console.log(values);

  const [state, setState] = useState({
    options: {
      chart: {
        zoom: {
            enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#F62682"],
      grid:{
        show:false,
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: months,
      },
      yaxis: {
        title: {
          text: "(USD)",
          style: {
            fontSize: "12px",
            fontWeight: 600,
            color: 'gray'
          },
        },
      },

      title: {
        text: "Doanh thu từng tháng 2024",
        align: "center",
        offsetY: 3,
      },
    },
    series: [
      {
        name: "series-1",
        data: values,
      },
    ],
  });
  return (
    <div className="min-w-0 flex-col h-[320px] break-words w-full rounded-[6px] border-0 bg-white px-7 py-3 text-[14px] text-[#333] shadow-[0_1px_4px_0_rgba(0,0,0,.14)] overflow-hidden">
      <Chart options={state.options} series={state.series} type="bar" height={300} />
    </div>
  );
}
