import styled from "styled-components";

export const SearchBar=styled.div`
border: 1px solid white;
/* width: 60%; */
height: 60px;
border-radius: 10rem;
margin: 0 auto;


position: relative;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

@media (min-width: 768px) {
    width:100%
}
@media (min-width: 1000px) {
    width: 78%;
}
@media (min-width: 1280px) {
    width: 68%;
}
@media (min-width: 1700px) {
    width: 50%;
}
`
export const SearchIcoin=styled.div`

cursor: pointer;


width:220px;
height: 60px;

padding: 0 5rem;
transition: all .5s;
&:hover{
   

    border-radius: 10rem;
    background-color:rgba(128, 128, 128, 0.082)
}
`

export const SearchIconSubmi=styled.button`
position: absolute;
top: 50%;
right: 0%;
transform: translate(-30%,-50%);
width: 4.6rem;
height: 4.6rem;
background-color: red;
border-radius: 50%;
color: white;

`
export const NavItem=styled.div`
/* transition: all 2s; */

@media (max-width: 768px){
   display: none;
}
`