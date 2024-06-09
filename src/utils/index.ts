import Swal from "sweetalert2";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import * as Yup from "yup";
import { NAME_REGEX } from "@/constant";
dayjs.extend(customParseFormat);
export const IIFE = (cb: () => any) => {
  cb();
};

export const saveLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorage = (key: string) => {
  try {
    return JSON.parse(localStorage.getItem(key) ?? "");
  } catch (e) {
    return null;
  }
};

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const truncateText = (text: string, limit: number) => {
  if (text.length <= limit) {
    return text;
  } else {
    return text.substring(0, limit) + "...";
  }
};

export const printSuccessDialog = (title: string) => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: title,
    showConfirmButton: false,
    timer: 1500,
  });
};

export const parseBirthday = (birthday: string) => {
  if (!birthday) return undefined;

  // Check if the date is in "DD/MM/YYYY" format
  const isValidDDMMYYYY = dayjs(birthday, "DD/MM/YYYY", true).isValid();
  if (isValidDDMMYYYY) {
    return dayjs(birthday, "DD/MM/YYYY");
  }

  // Check if the date is in "YYYY-MM-DD" format
  const isValidYYYYMMDD = dayjs(birthday, "YYYY-MM-DD", true).isValid();
  if (isValidYYYYMMDD) {
    const dateString = dayjs(birthday, "YYYY-MM-DD").format("DD/MM/YYYY");
    return dayjs(dateString, "DD/MM/YYYY");
  }
  return undefined;
};

export const formatDate = (dateString: string) => {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
};

export const allFieldsNotEmpty = (obj: any) => {
  return Object.values(obj).every((value) => value !== "");
};

export const userValidator = {
  email: Yup.string().email("invalid email address").required("required"),
  password: Yup.string()
    .min(6, "Must be from 6 to 10 characters")
    .max(10, "Must be from 6 to 10 characters")
    .required("required"),
  confirmPassword: Yup.string()
    .required("required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
  name: Yup.string()
    .matches(NAME_REGEX, "must be in letters")
    .required("Required"),
  gender: Yup.string().required("required"),
  role: Yup.string().required("required"),
  phone: Yup.string()
    .matches(/^\d{10,11}$/, "invalid")
    .required("Required"),
  birthday: Yup.date()
    .min(new Date(new Date().getFullYear() - 150, 0, 1), "must be over 150 yrs")
    .max(new Date(new Date().getFullYear() - 4, 11, 31), "must be over 3 yrs")
    .required("required"),
};
