import { axiosWithAuth } from "../axios.config";

export const getRoomBookingViaUser = async (id: number) => {
    try {
      const resp = await axiosWithAuth(`/dat-phong/lay-theo-nguoi-dung/${id}`);
      return resp;
    } catch (e: any) {
      throw new Error(e);
    }
  };


export const getRoomViaCode = async(id:number) =>{
    try {
        const response = await axiosWithAuth(`/phong-thue/${id}`)
        return response;
      } catch (error) {
        console.error(`Error fetching data for maPhong ${id}:`, error);
        return null;
      }
}
type TMaPhongList = {
    maPhong: number,
    soLuongKhach: number,
}

export const getRoomBookingList = async(maPhongList:TMaPhongList[]) =>{
    try{
        const promises = maPhongList.map(async ({maPhong}) => {
            return getRoomViaCode(maPhong)
        })
        const responses = await Promise.all(promises);
        return responses
    }catch(e:any){
        throw new Error(e)
    }
}