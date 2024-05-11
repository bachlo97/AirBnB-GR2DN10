import { axiosWithAuth } from "../axios.config"

export const getRooms=async()=>{
    try{
        const resp=await axiosWithAuth('/phong-thue');
        return resp.data
    }catch(e){
        console.log(e);
        
    }
}