import { useAppSelector } from "@/redux/hooks";
import ReactApexChart from "react-apexcharts";
type Props = {};

export function LineChart({}: Props) {
  const { lineChart } = useAppSelector((state) => state.dashBoardReducer);
  const chartData = lineChart?.length ? lineChart : [];
  const options = {
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
      categories: chartData.map((item: any) => item.category),
    },
    yaxis: {
      title: {
        text: "Số lượng đặt phòng",
        style: {
          fontSize: "12px",
          fontWeight: 600,
          color: "gray",
        },
      },
    },

    title: {
      text: "Đặt phòng năm 2024",
      align: "left",
    },
  };
  const series = [
    {
      name: "số lượng đặt phòng",
      data: chartData.map((item: any) => item.value),
    },
  ];

  return (
    <div className="w-full min-w-0 flex-col overflow-hidden break-words rounded-[6px] border-0 bg-white p-7 text-[14px] text-[#333] shadow-[0_1px_4px_0_rgba(0,0,0,.14)]">
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
}
