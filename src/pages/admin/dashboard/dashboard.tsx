import { OverView } from "./overview";
import { LineChart } from "./line-chart";
import { ColumnChart } from "./column-chart";
import { BarChart } from "./bar-chart";
import { Breadcrumb } from "antd";

type Props = {};

export default function DashBoard({}: Props) {
  console.log("first");
  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: "Admin",
          },

          {
            title: "Dashboard",
          },
        ]}
      />
      <OverView />
      <LineChart />

      <div className="mt-10 flex gap-3">
        <ColumnChart />
        <BarChart />
      </div>
    </div>
  );
}
