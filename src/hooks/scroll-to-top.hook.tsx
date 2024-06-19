import { ACCESS_TOKEN, REDIRECT_AFTER_LOGIN } from "@/constant";
import { AUTH_PATH, PROFILE_PATH } from "@/router/router.config";
import { getLocalStorage, saveLocalStorage } from "@/utils";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToTop = () => {
  const { pathname } = useLocation();
  const isAuthenticated = () => {
    return !!getLocalStorage(ACCESS_TOKEN);
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (!isAuthenticated()) {
      const isAuthPath = pathname.includes(`/${AUTH_PATH}`);
      const isProfilePath = pathname.includes(`/${PROFILE_PATH}`);
      if (!isAuthPath && !isProfilePath) {
        saveLocalStorage(REDIRECT_AFTER_LOGIN, pathname);
      }
    }
  }, [pathname]);
};
