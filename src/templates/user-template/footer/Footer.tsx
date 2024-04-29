import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import {  FooterBottom, FooterTop, FooterWeb, SocialItem } from './footer.style';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { ButtonPrimary } from '@/components/Button/Button';
import { BiLogoFacebook } from 'react-icons/bi';
import { CiInstagram, CiYoutube } from 'react-icons/ci';
import { Container } from '@/components/StyleCompoment/StyleCompoment';

function Footer() {
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
                <h4 className='text-[1.8rem] mb-3'>Hỗ trợ</h4>
                <p style={{lineHeight:'3rem'}}>
          
                    Trung tâm trợ giúp

                </p>
                <p style={{lineHeight:'3rem'}}>
          
                AirCover

                </p>
                <p style={{lineHeight:'3rem'}}>
          
                Chống phân biệt đối xử

                </p>
                <p style={{lineHeight:'3rem'}}>
          
                Hỗ trợ người khuyết tật

                </p>
                <p style={{lineHeight:'3rem'}}>
          
                Các tùy chọn hủy

                </p>
                <p style={{lineHeight:'3rem'}}>
          
                Báo cáo lo ngại của khu dân cư

                </p>
               

            </div>
            <div className='box'>
                <h4 className='text-[1.8rem] mb-3' >Chính sách & Quy định</h4>
                <p style={{lineHeight:'3rem'}}>
                    
                Điều khoản và điều kiện

                </p>
                <p style={{lineHeight:'3rem'}}>
                    
                Quy định về thanh toán
                </p>
                <p style={{lineHeight:'3rem'}}>
                    
                Chính sách bảo mật thông tin

                </p>
                <p style={{lineHeight:'3rem'}}>
                    
                Quy chế hoạt động
                </p>
                <p style={{lineHeight:'3rem'}}>
                    
                Chương trình khách hàng thân thiết

                </p>
                <p style={{lineHeight:'3rem'}}>
                    
                Chương trình đánh giá trải nghiệm 

                </p>
               

            </div>
            <div className='box'>
                <h4 className='text-[1.8rem] mb-3'>Thông tin thêm</h4>
    <p style={{lineHeight:'3rem'}}>Bạn muốn mã giảm giá hãy đăng kí ngay tại đây</p>
           <form action="" method="post" className='flex'>
            <input type="email" placeholder='Vui lòng nhập email' className='px-3 h-[30px]'/>
            <ButtonPrimary width='75px' height={ 3.2} type="submit" className='text-2xl'>Đăng Kí</ButtonPrimary>
           </form>
               <h4 style={{lineHeight:'3rem'}}>Theo dõi chúng tôi qua</h4>
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
