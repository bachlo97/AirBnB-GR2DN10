import { getLocaltion } from "@/services/localtion/Localtion.service";
import { IIFE } from "@/utils";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { converToLocations } from "../search-bar/helper/ConvertToLocations";
import { Dayjs } from "dayjs";
import { useAppDispatch } from "@/redux/hooks";
import { TLocaltion } from "@/services/localtion/Localtion.type";

export const useSearchBarHook=()=>{
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
  
    const [activeField, setActiveField] = useState("");
    const [dataLocations, setDataLocations] = useState<TLocaltion[]>([]);
    const [valueId, setValueId] = useState(0);
    const [valueStartDay, setvalueStartDay] = useState("");
    const [valueEndDay, setvalueEndDay] = useState("");
  
    const handleFieldClick = (fieldName: string) => {
      setActiveField(fieldName);
    };
  
  
    useEffect(() => {
      IIFE(async () => {
        try {
          const data = await getLocaltion();
          const content = data.content;
          setDataLocations(converToLocations(content));
        } catch (e) {
          console.log({ e });
        }
      });
    }, []);
    const handleDateChange = (selectedDate: Dayjs,name:string) => {
      const selectedDateValue = selectedDate && selectedDate.format("YYYY-MM-DD");
      
      if(name==='currentDay'){
           setvalueStartDay(selectedDateValue);
      }else{
     
        setvalueEndDay(selectedDateValue);
      }
    };
    const handleChange = (value: number) => {
      setValueId(value);
  
      
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (e: { preventDefault: () => void; }) => {
  e.preventDefault();
    };
    const dataOption = dataLocations.map((item) => {
      return {
        value: item.id,
        label: item.tenViTri + "," + item.tinhThanh,
      };
    });
return {
    navigate,
    dispatch,
    activeField,
  
    valueId,
    valueStartDay,
    valueEndDay,
    dataOption,
    handleFieldClick,
    handleDateChange,
    handleChange,
    handleSubmit
}
  
   
  
  
}