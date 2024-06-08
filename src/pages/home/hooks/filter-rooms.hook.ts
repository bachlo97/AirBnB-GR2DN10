import { useContext} from "react";
import { ContextStore } from "../context/filter-rooms.context";


export const useFilterRoom = () => {
  const context = useContext(ContextStore);

  if (!context) {
    throw new Error(
      "Muốn sử dụng useFormik thì phải bọc component của bạn trong Formik",
    );
  }
  return context;
};