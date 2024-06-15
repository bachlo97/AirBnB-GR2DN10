import { Breadcrumb } from "antd";

import TableComment from "./component/TableComment";

export default function CommentManagement() {
  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: "Admin",
          },

          {
            title: "Quản lý bình luận",
          },
        ]}
      />
      <h3 className="text-center text-[1.9rem] font-medium">
        Quản lý bình luận
      </h3>
      <div className="flex items-center justify-between"></div>

      <TableComment />
    </div>
  );
}
