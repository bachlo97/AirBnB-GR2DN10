import React, { useState } from "react";
import { bookingData, roomData, locationData } from "../data";
import Chart from 'react-apexcharts'
import { truncateText } from "@/utils";
import { useAppSelector } from "@/redux/hooks";
type Props = {};

export function BarChart({}: Props) {
  const {barChartKeys,barChartValues} = useAppSelector(state => state.dashBoardReducer.barChart)
  const [state, setState] = useState({
    series: [
      {
        data: barChartValues,
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
        categories: barChartKeys,
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
