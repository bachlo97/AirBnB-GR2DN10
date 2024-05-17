import _ from "lodash";
type TBookRoomApi = {
    id : number;
    maPhong: number;
    ngayDen: string;
    ngayDi: string;
    soLuongKhach: number;
    maNguoiDung: number;
}

type TBookRoom = {
    maPhong: number;
    soLuongKhach: number;
}

export const convertToBookRoom = (list: TBookRoomApi[]):TBookRoom[] =>{
    return  _.map(list,({maPhong,soLuongKhach}) =>({maPhong,soLuongKhach}))
}