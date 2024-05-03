import { axiosWithAuth } from "../axios.config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getRoomsList=async(vitri:any)=>{
    try{
        const resp=await axiosWithAuth(`/phong-thue/lay-phong-theo-vi-tri?maViTri=${vitri}`)
        return resp.data
    }catch(e){
        console.log(e);
        
    }
}