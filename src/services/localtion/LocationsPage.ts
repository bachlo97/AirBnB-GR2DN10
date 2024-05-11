// /vi-tri/phan-trang-tim-kiem?pageIndex=1&pageSize=10
import { axiosWithAuth } from "../axios.config"

export const getLocaltionsPage=async ()=>{
    try{
        const resp=await axiosWithAuth('/vi-tri/phan-trang-tim-kiem?pageIndex=1&pageSize=10');
     
        return resp.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(e:any){
       console.log(e.response?.data);
       
    }
}