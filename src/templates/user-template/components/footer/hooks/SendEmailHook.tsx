import { useRef } from "react";
import emailjs from '@emailjs/browser';

export const useSendEmailHook=()=>{
    const form = useRef<HTMLFormElement>(null);
    const sendEmail = (e: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        target: any; preventDefault: () => void; 
}) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_v37gfbc', 'template_3okj7wu',(form.current as HTMLFormElement), {
            publicKey: 'VK9JicpxPvlJdRkJA',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
           
          e.target.reset();
        
      };
      return {form,sendEmail}
}