import React, { useState } from "react";
import { bookingData } from "../data";
import Chart from 'react-apexcharts'
import { redirect } from "react-router-dom";
type Props = {};

export function LineChart({}: Props) {
  const currentYear = new Date().getFullYear();
  const filtered = bookingData.filter((bookingData) => {
    const year = new Date(bookingData.ngayDen).getFullYear();
    return year === currentYear;
  });

  const monthCounts = filtered.reduce((acc: { [key: string]: number }, reservation) => {
    const month = new Date(reservation.ngayDen).toLocaleString("default", {
      month: "short",
    });

    if (!acc[month]) {
      acc[month] = 0;
    }
    acc[month]++;

    return acc;
  }, {});

  const allMonths = Array.from({ length: 12 }, (_, i) =>
    new Date(0, i).toLocaleString("default", { month: "short" }),
  ).reduce((acc:{ [key: string]: number }, month) => {
    acc[month] = 0;
    return acc;
  }, {});

  Object.keys(monthCounts).forEach((month) => {
    allMonths[month] = monthCounts[month];
  });

  const months = Object.keys(allMonths);
  const values = Object.values(allMonths);


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
      colors: ["#546E7A"],
      stroke: {
        width: 3,
        curve: "smooth",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: months,
      },
      yaxis: {
        title: {
          text: "Số lượng đặt phòng",
          style: {
            fontSize: "12px",
            fontWeight: 600,
            color: 'gray'
          },
        },
      },

      title: {
        text: "Đặt phòng năm 2024",
        align: "left",
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
    <div className="w-full min-w-0 flex-col break-words rounded-[6px] border-0 bg-white p-7 text-[14px] text-[#333] shadow-[0_1px_4px_0_rgba(0,0,0,.14)] overflow-hidden">
      <div id="chart" >
        <Chart
          options={state.options}
          series={state.series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
}