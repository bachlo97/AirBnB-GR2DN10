import { useEffect, useState } from "react";

import "./Toggle.css";
import { Switch } from "antd";
import i18n from "@/components/locales/i18n";
import { TextPrimary } from "@/components/style-compoment/StyleCompoment";
import { usetransHook } from "./hooks/useTransHook";
function ToogleHeader() {
const {on,onChange}=usetransHook();

  return (
    <div className="flex gap-3 md:text-[15px] lg:text-[17px]">
      {on ? "VN" : <TextPrimary className="text">VN</TextPrimary>}

      <Switch defaultChecked={on} onChange={onChange} className="switch" />

      {on ? <TextPrimary className="text">EN</TextPrimary> : "EN"}
    </div>
  );
}

export default ToogleHeader;
