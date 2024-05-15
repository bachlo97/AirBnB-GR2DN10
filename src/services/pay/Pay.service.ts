import { axiosWithAuth } from "../axios.config"

export const postPay=async (data:object)=>{
    try{
     
        return axiosWithAuth("/dat-phong", {
            method: "post",
            data: data,
        });
  
    }catch(e:any){
       console.log(e.response?.data);
       
    }
}