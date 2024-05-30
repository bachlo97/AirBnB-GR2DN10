import Swal from "sweetalert2";
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';
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

export const removeLocalStorage = (key:string) =>{
    localStorage.removeItem(key)
}

export const truncateText = (text: string, limit: number) => {
    if (text.length <= limit) {
      return text;
    } else {
      return text.substring(0, limit) + "...";
    }
  };

export const printSuccessDialog =  (title:string) => {
    Swal.fire({
        position: "center",
        icon: "success",
        title: title,
        showConfirmButton: false,
        timer: 1500
      });
}



export const parseBirthday = (birthday:string) => {
    if (!birthday) return undefined;
  
    // Check if the date is in "DD/MM/YYYY" format
    const isValidDDMMYYYY = dayjs(birthday, "DD/MM/YYYY", true).isValid();
    if (isValidDDMMYYYY) {
      return dayjs(birthday, "DD/MM/YYYY");
    }
  
    // Check if the date is in "YYYY-MM-DD" format
    const isValidYYYYMMDD = dayjs(birthday, "YYYY-MM-DD", true).isValid();
    if (isValidYYYYMMDD) {
      const dateString =  dayjs(birthday, "YYYY-MM-DD").format("DD/MM/YYYY");
      return dayjs(dateString,"DD/MM/YYYY")
    }
    return undefined;
  };


  export const formatDate = (dateString:string) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  }


  export const  allFieldsNotEmpty = (obj:any) => {
    return Object.values(obj).every(value => value !== '');
  }