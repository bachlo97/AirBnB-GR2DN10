import { SImg } from "../Detail.style";
import { FaStar } from "react-icons/fa";
import { Rate } from "antd";
import { ButtonPrimary } from "@/components/Button/Button";
import { useEffect, useState } from "react";
import { Form, useNavigate, useParams } from "react-router-dom";
import { postCommentRoom } from "@/services/comment/comment.service";
import * as Yup from "yup";

import PageCommentDetail from "./component/PageCommentDetail";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import moment from "moment";
import { getCommentThunk } from "@/redux/comment/Comment.slice";
import useAlertHook from "@/hooks/notification/Alert";
import { Field, Formik } from "formik";
import { AUTH_PATH } from "@/router/router.config";
import { useTranslation } from "react-i18next";

function CommentDetail() {
  const { alertSuccessCenter } = useAlertHook();

  const user: any = useAppSelector((state) => state.authReducer.user);
  const listCommentRoom: any = useAppSelector(
    (state) => state.commentSlice.listComment,
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [postComment, setPostComment] = useState<any>({
    id: 0,
    maPhong: 0,
    maNguoiBinhLuan: 0,
    ngayBinhLuan: "",
    noiDung: "",
    saoBinhLuan: 0,
  });

  const { id}:any = useParams();

  useEffect(() => {
    dispatch(getCommentThunk(id));
  }, [dispatch, id]);

  // gui binh luan

  useEffect(() => {
    postCommentRoom(postComment);
  }, [postComment]);

  console.log(postComment);
let avar=0
let avarageStar=0;
 listCommentRoom.map((item: { saoBinhLuan: number; length: () => number; })=>{
  avar+=item.saoBinhLuan;
 
  })
  const commentSlice = Yup.object().shape({
    textarea: Yup.string().required("Nhập bình luận là bắt buộc"),
  });
  return (
    <div className="mx-auto mt-8 border-t border-solid py-5 2xl:w-3/4">
      <h3 className="mb-6 text-3xl font-semibold"> {t("pageDetail.customerReviews")}</h3>
      <div className="border-b border-solid">
        <p> {t("pageDetail.overview")}</p>
        <div className="flex items-center gap-1 ">
          <h3 className="text-[2.5rem] ">{avarageStar}</h3>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <p className="mb-3">({listCommentRoom.length} {t("pageDetail.evaluate")})</p>
      </div>

      <PageCommentDetail data={listCommentRoom} itemsPerPage={6} />

      <Formik
        initialValues={{ textarea: "" }}
        onSubmit={async (values, { resetForm }) => {
          resetForm();
          setPostComment({
            ...postComment,
            id: 0,
            ngayBinhLuan: new Date(),

            maPhong: id,
            noiDung: values.textarea,
            maNguoiBinhLuan: user.id,
          });
          try {
            await postCommentRoom(postComment);
            dispatch(getCommentThunk(id));
         
            
          } catch (e) {
            console.error(e);
          }
          alertSuccessCenter("Thêm bình luận thành công");
        }}
        validationSchema={commentSlice}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="my-5 flex w-[100%] gap-5">
            <div className="flex w-[20%] flex-col items-center">
          
              <SImg>
                    {user ? (
                  <div
                    className={`flex h-[100%] w-[100%] items-center justify-center rounded-full ${user.avatar ? "bg-cover bg-center bg-no-repeat" : "bg-[#F62682] text-[16px] text-white "} `}
                    style={{
                      backgroundImage: user.avatar
                        ? `url(${user.avatar})`
                        : "none",
                    }}
                  >
                    {user.avatar === "" ? user.name[0].toUpperCase() : null}
                  </div>
                ) : (
                  <img
                  src={
                    user?.avatar ||
                    "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                  }
                  alt=""
                />

                )
                }
           
          </SImg> 
              <div>{user?.name || "User"}</div>
              <Rate
                onChange={(value) => {
                  setPostComment({ ...postComment, saoBinhLuan: value });
                }}
              />
            </div>

            <div className="group-form mb-[3rem] h-[20rem] w-[100%]">
              <Field
                as="textarea"
                name="textarea"
                id=""
                className="h-[100%] w-[100%] border px-4 py-3 outline-none"
              ></Field>{" "}
              <br />
              <div className="text-right">
                {user ? (
                  <ButtonPrimary width="150px" height={3.5} type="submit">
                  {t("pageDetail.addComment")}
                  </ButtonPrimary>
                ) : (
                  <ButtonPrimary
                    width="150px"
                    height={3.5}
                    type="submit"
                    onClick={() => {
                      navigate(`/${AUTH_PATH}/signin`);
                    }}
                  >
                   {t("pageDetail.addComment")}
                  </ButtonPrimary>
                )}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CommentDetail;
