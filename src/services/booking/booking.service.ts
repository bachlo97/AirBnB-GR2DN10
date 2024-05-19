import { axiosWithAuth } from "../axios.config";

export const getRoomBookingViaUser = async (id: number) => {
  try {
    const resp = await axiosWithAuth(`/dat-phong/lay-theo-nguoi-dung/${id}`);
    return resp;
  } catch (e: any) {
    throw new Error(e);
  }
};

export const getRoomViaCode = async (id: number) => {
  try {
    const response = await axiosWithAuth(`/phong-thue/${id}`);
    return response;
  } catch (error) {
    console.error(`Error fetching data for maPhong ${id}:`, error);
    return null;
  }
};

export const getLocationViaCode = async (id: number) => {
  try {
    const response = await axiosWithAuth(`/vi-tri/${id}`);
    return response;
  } catch (error) {
    console.error(`Error fetching data for maPhong ${id}:`, error);
    return null;
  }
};

export const getRoomBookingList = async (maPhongList: TBookRoom[]) => {
  try {
    const promises = maPhongList.map(async ({ maPhong }) => {
      return getRoomViaCode(maPhong);
    });
    const responses = await Promise.all(promises);
    return responses.filter((response) => response !== null);
  } catch (e: any) {
    throw new Error(e);
  }
};

export const getRoomLocationList = async (roomList: (TRoom | null)[]) => {
  try {
    const validRoomList: TRoom[] = roomList.filter(
      (room): room is TRoom => room !== null,
    );
    const promises = validRoomList.map(async ({ maViTri }) => {
      return getLocationViaCode(maViTri);
    });
    const responses = await Promise.all(promises);
    return responses.filter((response) => response !== null);
  } catch (e: any) {
    throw new Error(e);
  }
};
