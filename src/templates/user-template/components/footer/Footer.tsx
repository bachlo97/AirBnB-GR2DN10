import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { Container, FooterWeb } from './footer.style';

function Footer() {
  return (
    <FooterWeb>
      <Container>
        <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-[10px]'>
            <div className='box'>
                <h3>Airbnb</h3>
                <p className='flex'>
                    <IoLocationSharp />
                     Lorem ipsum dolor sit amet consectetur.

                </p>
               

            </div>
            <div className='box'>
                <h4>Hỗ trợ</h4>
                <p className='flex'>
                    <IoLocationSharp />
                     Lorem ipsum dolor sit amet consectetur.

                </p>
               

            </div>
            <div className='box'>
                <h3>Chính sách & Quy định</h3>
                <p className='flex'>
                    <IoLocationSharp />
                     Lorem ipsum dolor sit amet consectetur.

                </p>
               

            </div>
            <div className='box'>
                <h3>Thông tin thêm</h3>
                <p className='flex'>
                    <IoLocationSharp />
                     Lorem ipsum dolor sit amet consectetur.

                </p>
               

            </div>
        </div>
      </Container>
    </FooterWeb>
  )
}

export default Footer
