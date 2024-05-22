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