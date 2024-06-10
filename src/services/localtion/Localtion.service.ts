import { axiosWithAuth, axiosWithAuthToken } from "../axios.config";

export const getLocaltion = async () => {
  try {
    const resp = await axiosWithAuth("/vi-tri");

    return resp.data;
  } catch (e: any) {
    console.log(e.response?.data);
  }
};
export const putLocaltion = async (id: any, data: any) => {
  try {
    const resp = await axiosWithAuthToken(`/vi-tri/${id}`, {
      method: "put",
      data: data,
    });
    return resp.data;
  } catch (e: any) {
    console.log(e.response?.data);
  }
};
export const addLocation = async (data: object) => {
  try {
    const resp = await axiosWithAuthToken("/vi-tri", {
      method: "post",
      data: data,
    });

    return resp.data;
  } catch (e: any) {
    console.log(e.response?.data);
  }
};
export const delLocation = async (id: any) => {
  try {
    const resp = await axiosWithAuthToken(`/vi-tri/${id}`, {
      method: "delete",
    });

    return resp.data;
  } catch (e: any) {
    console.log(e.response?.data);
  }
};
