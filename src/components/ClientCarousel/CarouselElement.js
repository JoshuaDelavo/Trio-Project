import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap';

export const CarouselContainer = styled.div`
    background:white;

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {
        padding: 60px 0;
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { 
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        padding: 60px 100px;
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
        height:auto;
        padding: 60px 100px;
        width:100%;
    }

`
export const ImageBackgroundContainer = styled.div`
    z-index:1;
`
export const ImageBackground = styled.img`
    /* height:100%; */
    /* object-fit:fill; */
    /* overflow:hidden; */
`
export const ImageCrop = styled.div`
    width:70%;
    height:750px;
    background:black;
    position:absolute;
    right:0;
    top:0;
    clip-path: polygon(60% 0, 100% 0, 100% 100%, 0% 50%);
    
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { 
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        width:60%;
        clip-path: polygon(30% 0, 100% 0, 100% 100%, 0% 100%);
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
    }
`
export const ImageCrop2 = styled.div`
    width:85%;
    opacity:0.5;
    height:750px;
    background:black;
    position:absolute;
    right:0;
    top:0;
    clip-path: polygon(60% 0, 100% 0, 100% 100%, 0% 57%);
    
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { 
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        width:61.5%;
        clip-path: polygon(30% 0, 100% 0, 100% 100%, 0% 100%);
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
    }
`

export const CardContainer = styled.div`
    display:flex;
    height:800px;
    align-items:center;
    padding-left:100px;
`

export const CardWrapper = styled.div`
    color:white;
    display:flex;
    flex-direction:column;
`
export const FirstCaption = styled.h1`
    padding: 20px 40px;
    font-size:0.8rem;
    font-weight:bold;
    text-align:left;
    
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { 
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        padding: 10px 0;
        font-size:1rem;
        position:absolute;
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
    }
`
export const SecondCaption = styled.h1`
    padding-bottom:0;
    font-size:2.7rem;
    font-weight:bold;
    margin:30px 0;
`
export const ThirdCaption = styled.h1`
    padding: 10px 0;
    font-size:0.7rem;
    font-weight:100;
`
export const FourthCaption = styled.h1`
    padding: 10px 0;
    font-size:1.2rem;
    font-weight:100;
`
export const FifthCaption = styled.h1`
    padding: 10px 0;
    font-size:1rem;
    font-weight:100;
`

export const ClientLogo = styled.img`
    margin-top:60px;
`
export const Button = styled(Link)`
    padding:8px;
    border:1px solid white;
    color:white;
    text-decoration:none;
    font-size:0.8rem;

    text-align:center;
    transition:0.5s;
    width:200px;
    margin-top:30px;

    background-color:black;

    &:hover{
        background-color:white;
        color:black;
        border:1px solid black;
        transition:0.5s;
    }

    @media screen and (min-width:320px){
        font-size:0.8rem;
        padding: 8px 14px;
    }
    @media screen and (min-width:540px){
        margin:10px 0 0 0;
        margin-right:auto;
        font-size:0.8rem;
        padding: 7px 10px;
    }
    @media screen and (min-width:900px){
        margin:3% 0 0 0;
        margin-right:auto;
        font-size:0.8rem;
        padding: 12px 30px;
    }
    @media screen and (min-width:1200px){
        font-size:0.9rem;
        padding: 12px 40px;
    }
    
`

export const ColCustom = styled(Col)`
    // Small devices (landscape phones, 576px and up)
    background-color:white;
    margin:0;
    padding:0;
    text-align:center;
    margin-top:50px;
    margin-bottom:50px;
    @media (min-width: 576px) {  }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { 
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        text-align:left
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {}
`
export const RowCustom = styled(Row)`

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {  }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { 
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {}
`