import { axiosWithAuth } from "../axios.config"

export const getLocaltion=async ()=>{
    try{
        const resp=await axiosWithAuth('/vi-tri');
     
        return resp.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(e:any){
       console.log(e.response?.data);
       
    }
}