import styled from "styled-components";
type TButtonPrimary={
    width:string,
    height:number,
}

export const ButtonPrimary=styled.button<TButtonPrimary>`
    width:${(props)=>props.width ? `${props.width}`:``};
    background:linear-gradient(to left, #E61E4D 0%, #E31C5F 50%, #D70466 100%);
    color:white;
    height:${(props)=>props.height}rem;
`

export const ButtonPrimaryTwo=styled.button<TButtonPrimary>`
    width:${(props)=>props.width ? `${props.width}`:``};
    border:1px solid black;
    color:black;
    background-color:transparent;
    height:${(props)=>props.height}rem
`