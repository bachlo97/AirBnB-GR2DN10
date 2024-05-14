import { axiosWithAuth } from "../axios.config"

export const postPay=async (data:object)=>{
    try{
        const resp=await axiosWithAuth.post('/dat-phong',data);
     
        return resp.data;
  
    }catch(e:any){
       console.log(e.response?.data);
       
    }
}