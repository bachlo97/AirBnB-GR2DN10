// /binh-luan/lay-binh-luan-theo-phong/
import { axiosWithAuth, axiosWithAuthToken } from "../axios.config"

export const getCommentRoomId=async (id:string|undefined)=>{
    try{
        const resp=await axiosWithAuth(`/binh-luan/lay-binh-luan-theo-phong/${id}`);
     
        return resp.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(e:any){
       console.log(e.response?.data);
       
    }
}
export const postCommentRoom=async (data:object)=>{
    try{
     
        return axiosWithAuthToken("/binh-luan", {
            method: "post",
            data: data,
        });
  
    }catch(e:any){
       console.log(e.response?.data);
       
    }
}
export const deleteCommentRoom=async(id:number)=>{
    try{
     
        return axiosWithAuthToken(`/binh-luan/${id}`, {
            method: "detele",
           
        });
  
    }catch(e:any){
       console.log(e.response?.data);
       
    }
}




//? write by devCuong
export const getCommentRooms = async () => {
    try {
      const resp = await axiosWithAuth(`/binh-luan`);
      return resp;
    } catch (e: any) {
      throw new Error(e);
    }
  };
  
