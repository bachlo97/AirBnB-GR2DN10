import { Breadcrumb } from "antd";
import React from "react";
import {
  ButtonPrimary,
  ButtonPrimaryTwo,
} from "../../../components/Button/Button";
import TableRender from "./component/TableRender";
import { NavLink } from "react-router-dom";
import ModalLocation from "./component/ModalLocation";

type Props = {};

export default function LocationManagement({}: Props) {
  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: "Admin",
          },

          {
            title: "Quản lý thông tin vị trí",
          },
        ]}
      />

      <h3 className="text-center text-[1.9rem] font-medium">Quản lý vị trí</h3>
      <div className="flex items-center justify-between">
        <ModalLocation />
      </div>

      <TableRender />
    </div>
  );
}
