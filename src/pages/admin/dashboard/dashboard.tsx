import React, { useEffect } from "react";
import { OverView } from "./overview";
import { LineChart } from "./line-chart";
import { ColumnChart } from "./column-chart";
import { BarChart } from "./bar-chart";
import { useAppDispatch } from "@/redux/hooks";
import { getDashBoardInfoThunk } from "@/redux/admin/dashboard/dashboard.slice";

type Props = {};

export default function DashBoard({}: Props) {
  console.log("first")
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
