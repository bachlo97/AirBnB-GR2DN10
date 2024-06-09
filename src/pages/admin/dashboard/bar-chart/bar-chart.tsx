
import Chart from "react-apexcharts";
import { useAppSelector } from "@/redux/hooks";
type Props = {};

export function BarChart({}: Props) {
  const { barChart } = useAppSelector((state) => state.dashBoardReducer);
  const chartData = barChart?.length ? barChart : [];
  const series = [
    {
      name: "Số lượng khách",
      data: chartData.map((item: any) => item.soLuong),
    },
  ];
  const options = {
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
    grid: {
      show: false,
    },
    xaxis: {
      categories: chartData.map((item: any) => item.tinhThanh),
      title: {
        text: "Số lượng người",
      },
    },
  };
  return (
    <div className="h-[320px] w-full min-w-0 flex-col overflow-hidden break-words rounded-[6px] border-0 bg-white px-7 py-3 text-[14px] text-[#333] shadow-[0_1px_4px_0_rgba(0,0,0,.14)]">
      <Chart
        options={options}
        series={series}
        type="bar"
        height={300}
      />
    </div>
  );
}
