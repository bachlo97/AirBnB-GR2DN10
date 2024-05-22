import React, { useState } from "react";
import { bookingData, roomData } from "../data";
import Chart from 'react-apexcharts'
import {useAppSelector } from "@/redux/hooks";
type Props = {};

export function ColumnChart({}: Props) {
  const {columnChartKeys,columnChartValues} = useAppSelector(state => state.dashBoardReducer.columnChart)

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
        categories: columnChartKeys,
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
        data: columnChartValues,
      },
    ],
  });
  return (
    <div className="min-w-0 flex-col h-[320px] break-words w-full rounded-[6px] border-0 bg-white px-7 py-3 text-[14px] text-[#333] shadow-[0_1px_4px_0_rgba(0,0,0,.14)] overflow-hidden">
      <Chart options={state.options} series={state.series} type="bar" height={300} />
    </div>
  );
}
