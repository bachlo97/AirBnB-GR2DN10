import { getLocaltion } from "@/services/localtion/Localtion.service";
import { IIFE } from "@/utils";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { converToLocations } from "../search-bar/helper/ConvertToLocations";
import { Dayjs } from "dayjs";
import { useAppDispatch } from "@/redux/hooks";
import { TLocaltion } from "@/services/localtion/Localtion.type";

export const useSearchBarHook=()=>{
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
  
    const [isOpen, setIsOpen] = useState({
      location: false,
      ngayden: false, 
      ngayVe: false, 
      soKhach: false, 
      
    });
    const [dataLocations, setDataLocations] = useState<TLocaltion[]>([]);
    const [valueId, setValueId] = useState(0);
    const [valueStartDay, setvalueStartDay] = useState("");
    const [valueEndDay, setvalueEndDay] = useState("");
    const searchBarRef = useRef<HTMLDivElement>(null);

    const handleFieldClick = (field: "location" | "ngayden" | "ngayVe" | "soKhach") => {
      setIsOpen((prevIsOpen) => ({
        ...prevIsOpen,
        [field]: !prevIsOpen[field],
        
        ...(Object.fromEntries(
          Object.keys(prevIsOpen).filter((key) => key !== field).map((key) => [key, false])
        )),
      }));
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

    useEffect(() => {
      const handleClickOutside = (event:any) => {
        if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
          // Click occurred outside of the search bar
          console.log('asd');
          setIsOpen({
            location: false,
            ngayden: false, 
            ngayVe: false, 
            soKhach: false, 
          })
        }
      };
    
      document.addEventListener('click', handleClickOutside);
    
      return () => {
        // Cleanup function to remove the event listener on unmount
        document.removeEventListener('click', handleClickOutside);
      };
    }, [searchBarRef]);
return {
    navigate,
    dispatch,
    isOpen,
  
    valueId,
    valueStartDay,
    valueEndDay,
    dataOption,
    searchBarRef,
    handleFieldClick,
    handleDateChange,
    handleChange,
    handleSubmit
}
  
   
  
  
}