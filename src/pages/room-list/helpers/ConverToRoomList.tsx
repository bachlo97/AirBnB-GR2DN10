import { TRoom, TRoomAPI } from "@/services/room/Room.type";

export const converToRoomsList=(list:TRoomAPI[]):TRoom[]=>{
    return list.map((itemRoom)=>{
        return {
            id:itemRoom.id,
            tenPhong:itemRoom.tenPhong,
            khach:itemRoom.khach,
            phongNgu:itemRoom.phongNgu,
            giuong:itemRoom.giuong,
            phongTam:itemRoom.phongTam,
            giaTien:itemRoom.giaTien,
            maViTri:itemRoom.maViTri,
            hinhAnh:itemRoom.hinhAnh,
        }
    })
}