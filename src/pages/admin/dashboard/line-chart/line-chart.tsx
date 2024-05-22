import React, { useState } from "react";
import { bookingData } from "../data";
import Chart from 'react-apexcharts'
import { redirect } from "react-router-dom";
import { useAppSelector } from "@/redux/hooks";
type Props = {};

export function LineChart({}: Props) {
  const {lineChartKeys,lineChartValues} = useAppSelector(state => state.dashBoardReducer.lineChart)
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
        categories: lineChartKeys,
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
        data: lineChartValues,
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