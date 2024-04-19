import styled from 'styled-components';

export const FooterWeb= styled.div`
color: white;
`
export const FooterTop= styled.div`
background-color: gray;
padding: 2.5rem 0;

`
export const FooterBottom=styled.div`
background:#E61E4D;
text-align: center;
padding: .2rem 0;
`
export const SocialItem=styled.div`
width: 35px;
height: 35px;
font-size: 2.1rem;
background-color:#E61E4D;
display: flex;
justify-content: center;
align-items: center;
padding: .2rem 0;
border-radius: 50%;
`

export const Container=styled.div`
 @media  (min-width: 350px) {
    width: 95%;
    margin: 0 auto;
   

 }
 @media  (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
   
 }
 @media  (min-width: 1024px) {
    width: 75%;
    margin: 0 auto;
 }

`