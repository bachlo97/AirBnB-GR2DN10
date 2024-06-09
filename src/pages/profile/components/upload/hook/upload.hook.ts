import { USER_ID } from "@/constant";
import { getProfileThunk } from "@/redux/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { uploadAvatar } from "@/services/user";
import { getLocalStorage, printSuccessDialog, truncateText } from "@/utils";
import { useEffect, useRef, useState } from "react";

export const useUpload = () => {
  const user: any = useAppSelector((state) => state.authReducer.user);
  const dispatch = useAppDispatch();
  const inpRef = useRef<any>();

  const [urlImage, setUrlImage] = useState("");
  useEffect(() => {
    user && setUrlImage(user.avatar);
  }, [user]);

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(urlImage);
    };
  }, [urlImage]);

  const handleChange = async (event: any) => {
    try {
      const formFile = new FormData();
      formFile.append("formFile", event.target.files[0]);
      await uploadAvatar(formFile);
      printSuccessDialog("Bạn đã cập nhật avatar thành công");
      setUrlImage(URL.createObjectURL(event.target.files[0]));
      dispatch(getProfileThunk(getLocalStorage(USER_ID)));
    } catch (err) {
      console.log(err);
    }
  };

  const renderName = (): string => {
    return truncateText(user?.name, 16);
  };
  return [
    { user, inpRef, urlImage },
    { handleChange, renderName },
  ];
};
