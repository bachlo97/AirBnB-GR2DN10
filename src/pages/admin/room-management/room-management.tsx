import { Breadcrumb } from "antd";
import TableRoom from "./component/TableRoom";
import ModalAddRoom from "./Modal/ModalAddRoom";

export default function RoomManagement() {
  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: "Admin",
          },

          {
            title: "Quản lý thông tin phòng",
          },
        ]}
      />

      <h3 className="text-center text-[1.9rem] font-medium">
        Quản lý thông tin phòng
      </h3>
      <div className="flex items-center justify-between">
        <ModalAddRoom />
      </div>

      <TableRoom />
    </div>
  );
}
