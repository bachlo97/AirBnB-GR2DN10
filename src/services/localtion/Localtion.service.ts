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
