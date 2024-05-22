import { axiosWithAuth, axiosWithAuthToken } from "../axios.config";

export const signup = (payload: TPayloadSignup) => {
  return axiosWithAuth("/auth/signup", {
    method: "post",
    data: payload,
  });
};

export const signin = (payload: TPayloadSignin) => {
  return axiosWithAuth("/auth/signin", {
    method: "post",
    data: payload,
  });
};

export const getProfile = async (id: number) => {
  try {
    const resp = await axiosWithAuth(`/users/${id}`);
    return resp;
  } catch (e: any) {
    throw new Error(e);
  }
};

export const uploadAvatar = (payload: any) => {
  return axiosWithAuthToken("/users/upload-avatar", {
    method: "post",
    data: payload,
  });
};

export const editUser = (payload: any, id: number) => {
  return axiosWithAuth(`/users/${id}`, {
    method: "put",
    data: payload,
  });
};

export const getUsers = async () => {
  try {
    const resp = await axiosWithAuth(`/users/`);
    return resp;
  } catch (e: any) {
    throw new Error(e);
  }
};


