//@ts-ignore
import { useScrollToTop } from "@/hooks/scroll-to-top.hook";
import { Outlet } from "react-router-dom";

export function ScrollToTop() {
    useScrollToTop();

    return <Outlet />;
}
