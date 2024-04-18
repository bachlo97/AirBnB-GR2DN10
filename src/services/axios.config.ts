
import { ACCESS_TOKEN, TOKEN_CYBER, BASE_URL } from "@/constant";
import { getLocalStorage } from "@/utils";
import axios from "axios";

// -- Call Api: public
export const axiosWithoutAuth = axios.create({
    baseURL: `${BASE_URL}/api`,

    // Đợi phản hồi của một Api -> giới hạn 3p
    timeout: 180_000,
});

export const axiosWithAuth = axios.create({
    baseURL: `${BASE_URL}/api`,

    // Đợi phản hồi của một Api -> giới hạn 3p
    timeout: 180_000,
});

// Đính kèm thêm thông tin cho api trước khi gửi đi
axiosWithAuth.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${getLocalStorage(ACCESS_TOKEN)}`;
        config.headers.tokenCybersoft = TOKEN_CYBER;

        config.headers.test = "test";

        return config;
    },
    (e) => {
        return Promise.reject(e);
    },
);

