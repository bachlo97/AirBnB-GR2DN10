// /binh-luan/lay-binh-luan-theo-phong/
import { axiosWithAuth, axiosWithAuthToken } from "../axios.config"

export const getCommentRoomId=async (id:string|undefined)=>{
    try{
        const resp=await axiosWithAuth(`/binh-luan/lay-binh-luan-theo-phong/${id}`);
     
        return resp.data;
    
    }catch(e:any){
       console.log(e.response?.data);
       
    }
}
export const getCommentRoom=async (id:string|undefined)=>{
    try{
        const resp=await axiosWithAuth(`/binh-luan`);
     
        return resp.data;
    
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