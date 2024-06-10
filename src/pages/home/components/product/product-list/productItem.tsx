import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { MdBedroomChild } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { SProductItemText } from "./Product.style";
import { TRoom } from "@/services/room/Room.type";
import { NavLink } from "react-router-dom";
import Star from "@/components/star/Star";

function ProductItem(props: TRoom) {
  const truncateText = (text: string) => {
    if (text.length <= 30) {
      return text;
    } else {
      return text.substring(0, 25) + "...";
    }
  };
  return (
    <NavLink className="block" to={`roomdetail/${props.id}`}>
      <div>
        <div className="relative">
          <img
            className="h-[200px] w-[300px] rounded-[1rem]"
            src={props.hinhAnh}
            alt=""
          />
          <FaRegHeart className="absolute right-[5%] top-[5%] text-[2.5rem] text-white" />
        </div>

        <SProductItemText className="text p-3">
          <h4 className="text-[1.8rem] font-semibold">
            {truncateText(`${props.tenPhong}`)}
          </h4>
          <Star roomId={props.id} />
          <p className="text-[1.8rem] font-bold">${props.giaTien}/Đêm</p>
          <div className="product-icons flex gap-3">
            <div className="flex items-center">
              <IoBedOutline />: {props.giuong}
            </div>
            <div className="flex items-center">
              {" "}
              <MdBedroomChild />: {props.phongNgu}
            </div>
            <div className="flex items-center">
              {" "}
              <MdOutlineBathroom />: {props.phongTam}
            </div>
            <div className="flex items-center">
              {" "}
              <FaRegUser />: {props.khach}
            </div>
          </div>
        </SProductItemText>
      </div>
    </NavLink>
  );
}

export default ProductItem;
