import { TLocaltion,TLocaltionAPI } from "@/services/localtion/Localtion.type"

export const converToLocations=(list:TLocaltionAPI[]):TLocaltion[]=>{
    return list.map((itemLocal)=>{
        return {
            id:itemLocal.id,
            tenViTri:itemLocal.tenViTri,
            tinhThanh:itemLocal.tinhThanh,
            quocGia:itemLocal.quocGia,
            hinhAnh:itemLocal.hinhAnh,
         
        }
    })
}