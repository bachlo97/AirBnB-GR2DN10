import { Breadcrumb } from "antd";
import TableRender from "./component/TableRender";
import ModalLocation from "./component/ModalLocation";
import ScrollToTopButton from "@/components/button-to-top/ButtonToTop";

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
