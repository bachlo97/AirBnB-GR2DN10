import i18n from '@/components/locales/i18n';
import React, { useEffect, useState } from 'react'

export const usetransHook=()=> {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [on, setOn] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      i18n.changeLanguage("vi");
    }, []);
    const onChange = (checked: any) => {
      const value = checked ? "en" : "vi";
      setOn(checked);
      i18n.changeLanguage(value);
    };
    return {
        on,
        onChange
    }
}

