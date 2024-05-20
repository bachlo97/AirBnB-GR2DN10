type TBookRoomApi = {
  id: number;
  maPhong: number;
  ngayDen: string;
  ngayDi: string;
  soLuongKhach: number;
  maNguoiDung: number;
};
type TBookRoom = Pick<TBookRoomApi, "maPhong" | "soLuongKhach">;

type TRoomAPI = {
  id: number;
  tenPhong: string;
  khach: number;
  phongNgu: number;
  giuong: number;
  phongTam: number;
  moTa: string;
  giaTien: number;
  mayGiat: boolean;
  banLa: boolean;
  tivi: boolean;
  dieuHoa: boolean;
  wifi: boolean;
  bep: boolean;
  doXe: boolean;
  hoBoi: boolean;
  banUi: boolean;
  maViTri: number;
  hinhAnh: string;
};

type TRoom = Omit<TRoomAPI, "khach" | "moTa"> & Pick<TBookRoom, "soLuongKhach">;

type TLocationApi = {
  id: number;
  tenViTri: string;
  tinhThanh: string;
  quocGia: string;
  hinhAnh: string;
};

type TLocation = Omit<TLocationApi,'quocGia' | 'hinhAnh' >

type TBookingHistory = TLocation & TRoom