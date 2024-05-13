import { axiosGetUser, axiosWithAuth } from "../axios.config";

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
    return axiosGetUser(`/users/${id}`,{
        method: "post",
    })
}

