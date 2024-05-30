<<<<<<< HEAD
import { useAppDispatch } from "@/redux/hooks";
import { axiosWithAuth,axiosWithAuthToken } from "../axios.config"
import { getAdminLocationThunk } from "@/redux/admin-location/AdminLocation.slice";

export const getLocaltion=async ()=>{
    try{
        const resp=await axiosWithAuth('/vi-tri');
     
        return resp.data;

    }catch(e:any){
       console.log(e.response?.data);
       
    }
}
export const putLocaltion=async (id:any,data:any)=>{
    try{
        const resp= await axiosWithAuthToken(`/vi-tri/${id}`,{

              method: "put",
        data: data,
        },
    
    
    );
    return resp.data;
       

    }catch(e:any){
       console.log(e.response?.data);
       
    }
}
export const addLocation=async(data:object)=>{
    try{
        const resp=await axiosWithAuthToken("/vi-tri", {
            method: "post",
            data: data,
          
            
        });

        
        return resp.data;  
    }catch(e:any){
        console.log(e.response?.data);
    }
}
export const delLocation=async(id:any)=>{
    try{
    

        const resp=await axiosWithAuthToken(`/vi-tri/${id}`,{
            method: 'delete',
        });
      
        
       
        return resp.data;  
    }catch(e:any){
        console.log(e.response?.data);
    }
}
=======
import { axiosWithAuth, axiosWithAuthToken } from "../axios.config";

export const getLocaltion = async () => {
  try {
    const resp = await axiosWithAuth("/vi-tri");
    console.log("getLocaltion resp",resp);
    return resp.data;
  } catch (e: any) {
    console.log(e.response?.data);
  }
};
export const putLocaltion = async (id: any, data: any) => {
  try {
    return axiosWithAuthToken(`/vi-tri/${id}`, {
      method: "put",
      data: data,
    });
  } catch (e: any) {
    console.log(e.response?.data);
  }
};
export const addLocation = async (data: object) => {
  try {
    return axiosWithAuthToken("/vi-tri", {
      method: "post",
      data: data,
    });
  } catch (e: any) {
    console.log(e.response?.data);
  }
};
export const delLocation = async (id: any) => {
  try {
    const resp = await axiosWithAuthToken(`/vi-tri/${id}`, {
      method: "delete",
    });
    const getData = await getLocaltion();
    console.log("delLocation",getData );
    return resp.data;
  } catch (e: any) {
    console.log(e.response?.data);
  }
};
>>>>>>> fa105c6628ed4f06ac37bac9d590d8a55e83f49a
