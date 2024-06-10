import { PropsWithChildren } from "react";
import "./index.css";
import "./button.css";
import "./tailwind.css";

export function GlobalStyle(props: PropsWithChildren) {
    return props.children;
}
