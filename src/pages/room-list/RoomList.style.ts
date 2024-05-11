import styled from "styled-components";

export const SButtonRoomList=styled.button`
border: 1px solid gray;
padding: 0.6rem 1rem;
border-radius: 1.5rem;


`
export const SMap=styled.div`

@media  (max-width:1010px) {
    display: none;
}
`
export const SRespon=styled.div`
@media (min-width:300px) {
    display: none;
}
@media (min-width:1025px) {
    display: block;
}

`
export const SMapRespon=styled.div`
/* display: none;
position: absolute;
top: 0;
left: 0;
width: 100%; */
@media (min-width:768px) {
    display: none;
}
`