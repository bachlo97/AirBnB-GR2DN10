import { axiosWithAuth } from "../axios.config"

// /phong-thue/1
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GetRoomDetail=async (id:any)=>{
    try{
        const resp=await axiosWithAuth(`/phong-thue/${id}`);
        return resp.data
    }catch(e){
        console.log(e);
        
    }
}