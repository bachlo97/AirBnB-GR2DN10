
import { IoLocationSharp } from "react-icons/io5";
import {  FooterBottom, FooterTop, FooterWeb, SocialItem } from './footer.style';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { ButtonPrimary } from '@/components/Button/Button';
import { BiLogoFacebook } from 'react-icons/bi';
import { CiInstagram, CiYoutube } from 'react-icons/ci';
import { useSendEmailHook } from './hooks/SendEmailHook';

import { Container } from '@/components/style-compoment/Container';
import FooterLoading from "./loading/FooterLoading";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


function Footer() {
    const { t } = useTranslation();

const {form,sendEmail}=useSendEmailHook();
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  setTimeout(() => setIsLoading(false), 1000);
}, []);

if (isLoading) {
  return <FooterLoading />
  }
  return (
    <FooterWeb>
      
       <FooterTop>
      <Container>

<div className='grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[10px]'>
            <div className='box'>
                <h3 className='text-[2rem] mb-5'>Airbnb</h3>
                <p className='flex gap-1 items-center' style={{lineHeight:'3rem'}}>
                    <IoLocationSharp />
                    80 Quán Sứ, Hoàn Kiếm, Hồ Chí Minh

                </p>
                <p className='flex gap-1 items-center' style={{lineHeight:'3rem'}}>
                    <IoLocationSharp />
                    80 Quán Sứ, Hoàn Kiếm, Hà Nội

                </p>
               
                <p className='flex gap-1 items-center' style={{lineHeight:'3rem'}}>
                <BsTelephone />


                    0123456789

                </p>
                <p className='flex gap-1 items-center' style={{lineHeight:'3rem'}}>
               


                <AiOutlineMail />
                air@gmail.com


                </p>
                <div className='flex gap-3 '>
                   <img src="https://staticproxy.mytourcdn.com/0x0,q90/themes/images/logo-dathongbao-bocongthuong-w165.png" alt="" style={{width:'150px'}}/>
               <img src="https://staticproxy.mytourcdn.com/0x0,q90/themes/images/logo-congthuong-w165.png" alt="" style={{width:'150px'}}/>
                </div>
              

            </div>
            <div className='box'>
                <h4 className='text-[1.8rem] mb-3'>{t('support')}</h4>
                <p style={{lineHeight:'3rem'}}>
          
                {t('helpCenter')}

                </p>
                <p style={{lineHeight:'3rem'}}>
          
                AirCover

                </p>
                <p style={{lineHeight:'3rem'}}>
          
                {t('antiDiscrimination')}

                </p>
                <p style={{lineHeight:'3rem'}}>
          
                {t('disabilitySupport')}

                </p>
                <p style={{lineHeight:'3rem'}}>
          
                {t('cancellationOptions')}

                </p>
                <p style={{lineHeight:'3rem'}}>
          
                {t('reportNeighborhood')}

                </p>
               

            </div>
            <div className='box'>
                <h4 className='text-[1.8rem] mb-3' >{t('policies')}
                </h4>
                <p style={{lineHeight:'3rem'}}>
                {t('terms')}


                </p>
                <p style={{lineHeight:'3rem'}}>
                    
                {t('payment')}

                </p>
                <p style={{lineHeight:'3rem'}}>
                    
                {t('information')}


                </p>
                <p style={{lineHeight:'3rem'}}>
                    
                {t('operating')}

                </p>
                <p style={{lineHeight:'3rem'}}>
                    
                {t('loyalty')}

                </p>
                <p style={{lineHeight:'3rem'}}>
                    
                {t('experience')}

                </p>
               

            </div>
            <div className='box'>
                <h4 className='text-[1.8rem] mb-3'>{t('moreInformation')}
                </h4>
    <p style={{lineHeight:'3rem'}}>{t('discount')}
    y</p>
           <form action="" method="post" className='flex' ref={form} onSubmit={sendEmail}>
            <input type="email" placeholder='Vui lòng nhập email' name="user_email" className='px-3 h-[30px] text-black'/>
            <ButtonPrimary width='75px' height={ 3.2} type="submit" className='text-2xl'
            
            >Đăng Kí</ButtonPrimary>
           </form>
               <h4 style={{lineHeight:'3rem'}}>{t('follow')}
               </h4>
          <div className="socials flex gap-3">
    <SocialItem>
       <BiLogoFacebook />
    </SocialItem>
         <SocialItem> <CiInstagram /></SocialItem>
         <SocialItem><CiYoutube /></SocialItem>
         
          


          </div>
            </div>
        </div>
           </Container>
        </FooterTop>
        

        <FooterBottom>Được Thiết Kế Bởi @ Nhóm 2</FooterBottom>
     
    </FooterWeb>
  )
}

export default Footer
