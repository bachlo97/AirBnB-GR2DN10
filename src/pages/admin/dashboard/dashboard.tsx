import React from "react";
import { OverView } from "./overview";
import { LineChart } from "./line-chart";
import { ColumnChart } from "./column-chart";
import { BarChart } from "./bar-chart";

type Props = {};

export default function DashBoard({}: Props) {
  return (
    <div>
      <OverView />
      <LineChart />

      <div className="flex gap-3 mt-10">
        <ColumnChart />
        <BarChart/>
      </div>
    </div>
  );
}
