import { axiosWithAuth } from "../axios.config";

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

export const getProfile = (id:number) => {
    return axiosWithAuth(`/users/${id}`,{
        method: "get",
    })
}

