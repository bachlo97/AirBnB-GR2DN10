import { axiosWithAuth, axiosWithAuthToken } from "../axios.config"

export const getRooms=async()=>{
    try{
        const resp=await axiosWithAuth('/phong-thue');
        return resp.data
    }catch(e){
        console.log(e);
        
    }
}
export const postRoomAPI=async(data:object)=>{
    try{
        return axiosWithAuthToken("/phong-thue", {
            method: "post",
            data: data,
          
            
        });
    }catch(e:any){
        console.log(e.response?.data);
    }
}
export const delRoomAPI=async(id:any)=>{
    try{
        const resp=await axiosWithAuthToken(`/phong-thue/${id}`,{
            method: 'delete',
        });
     
        return resp.data;  
    }catch(e:any){
        console.log(e.response?.data);
    }
}
export const putRoomAPI=async (id:any,data:any)=>{
    try{
        return axiosWithAuthToken(`/phong-thue/${id}`,{

              method: "put",
        data: data,
        },
    
    
    );
     
       

    }catch(e:any){
       console.log(e.response?.data);
       
    }
}