import styled from 'styled-components'
import { Link } from 'react-router-dom'
import imgSrcSm from '../../images/signature/main_image.png'

export const Content1Container = styled.div`
    width:100%;
    height:100vh;
    position:relative;
    margin-top:50px;

    @media screen and (min-width:540px){
        height:70vw;
        max-height:850px;
    }
    @media screen and (min-width:1000px){
        /* height:950px; */
        margin-top:100px;
    }
`
export const ImageBackgroundContainer = styled.div`
    width:100%;
    height:65%;
    position:relative;
    overflow:hidden;
    right:0;

    @media screen and (min-width:540px){
        height:100%;
    }
    
`
export const ImageBackground = styled.img`
    position:absolute;
    z-index:-2;
    width:100%;
    object-fit:scale-down;
    top:-5%;
    overflow:hidden;

    @media screen and (min-width:400px){
        object-fit:cover;
        object-position:10% 0;
    }
    @media screen and (min-width:540px){
        content:url('${imgSrcSm}');
        object-fit:cover;
        height:100%;
        top:0;
    }
    @media screen and (min-width:768px){
        object-fit:cover;
        width:100%;
        right:0;
        object-position:right;
    }
`
export const ImageCurtain = styled.div`
    width:100%;
    height:100%;
    background:black;
`
export const ImageCrop = styled.div`
    background:black;
    position:absolute;
    bottom:0;
    width:100%;
    height:50%;
    clip-path: polygon(0 25%, 100% 0, 100% 100%, 0% 100%);

    @media screen and (min-width:540px){
        width:70%;
        height:100%;
        clip-path: polygon(0 0, 41% 0, 100% 100%, 0% 100%); 
    }
    @media screen and (min-width:768px){
        width:48%;
        height:100%;
        clip-path: polygon(0 0, 45% 0, 100% 100%, 0% 100%); 
    }
`
export const ImageCrop1 = styled.div`
    background:black;
    position:absolute;
    bottom:0;
    width:100%;
    height:55%;
    clip-path: polygon(0 24%, 100% 0, 100% 100%, 0% 100%);
    opacity:0.6;
    z-index:-1;

    @media screen and (min-width:540px){
        width:74%;
        height:100%;
        clip-path: polygon(0 0, 44% 0, 100% 100%, 0% 100%); 
    }
    @media screen and (min-width:768px){
        width:50%;
        height:100%;
        clip-path: polygon(0 0, 48% 0, 100% 100%, 0% 100%); 
    }
`

export const CardContainer = styled.div`
    display:flex;
    height:100%;
    width:100%;
    align-items:center;
    padding-top:10%;

    @media screen and (min-width:540px){
        align-items:flex-end;
    }
    @media screen and (min-width:768px){
        align-items:center;
    }
`

export const CardWrapper = styled.div`
    color:white;
    display:flex;
    flex-direction:column;

    @media screen and (min-width:540px){
        padding-bottom:30%;
    }
    @media screen and (min-width:768px){
        padding-bottom:0%;
    }
`
export const CaptionWrapper = styled.div`
    height:60px;
    width:100vw;
    position:relative;
    display:flex;
    justify-content:center;
    overflow:hidden;

    @media screen and (min-width:540px){
        justify-content:flex-start;
        height:40px;
        padding-left:7%;
    }
    @media screen and (min-width:768px){
        height:45px;
    }
    @media screen and (min-width:1200px){
        height:60px;
    }
`
export const FirstCaption = styled.div`
    padding: 10px 0;
    font-size:1.5rem;
    font-weight:100;
    position:relative;

    @media screen and (min-width:320px){
        font-size:2rem;
    }
    @media screen and (min-width:540px){
        font-size:1.5rem;
    }
    @media screen and (min-width:900px){
        font-size:2rem;
    }
    @media screen and (min-width:1200px){
        font-size:2.5rem;
    }
    @media screen and (min-width:1400px){
        font-size:2.8rem;
    }
`
export const TextMarquee1 = styled.div`
    position:absolute;
    width:100vw;
    height:100%;
    top:0;
    left:1200px;
    /* overflow:hidden; */
`
export const Marquee1 = styled.h1`
    padding: 10px 0;
    font-size:1.5rem;
    font-weight:100;
    position:absolute;
    text-align:center;
    white-space:nowrap;
    overflow:hidden;

    @media screen and (min-width:320px){
        font-size:2rem;
    }
    @media screen and (min-width:540px){
        font-size:1.5rem;
    }
    @media screen and (min-width:900px){
        font-size:2rem;
    }
    @media screen and (min-width:1200px){
        font-size:2.5rem;
    }
    @media screen and (min-width:1400px){
        font-size:2.8rem;
    }
`
export const SecondCaption = styled.h1`
    color:white;
    position:relative;
    padding-bottom:20px;
    font-size:1.5rem;

    @media screen and (min-width:320px){
        font-size:1.8rem;
    }
    @media screen and (min-width:540px){
        font-size:1.5rem;
    }
    @media screen and (min-width:900px){
        font-size:2rem;
    }
    @media screen and (min-width:1200px){
        font-size:2.5rem;
    }
    @media screen and (min-width:1400px){
        font-size:2.8rem;
    }
`
export const TextMarquee2 = styled.div`
    position:absolute;
    width:100vw;
    height:100%;
    top:0;
    left:-1200px;
`
export const Marquee2 = styled.h1`
    padding-bottom:20px;
    font-size:1.5rem;
    font-weight:bold;
    position:absolute;
    text-align:center;
    white-space:nowrap;
    overflow:hidden;

    @media screen and (min-width:320px){
        font-size:1.8rem;
    }
    @media screen and (min-width:540px){
        font-size:1.5rem;
    }
    @media screen and (min-width:900px){
        font-size:2rem;
    }
    @media screen and (min-width:1200px){
        font-size:2.5rem;
    }
    @media screen and (min-width:1400px){
        font-size:2.8rem;
    }
`

export const Button = styled(Link)`
    padding:8px;
    border:1px solid white;
    color:white;
    text-decoration:none;
    font-size:0.8rem;
    font-family:Verdana, Geneva, Tahoma, sans-serif;

    display:flex;
    justify-content:center;
    text-align:center;
    transition:0.5s;
    margin:auto;

    opacity:0;

    &:hover{
        background-color:white;
        color:black;
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
        margin-left:7%;
    }
    @media screen and (min-width:900px){
        margin:3% 0 0 0;
        margin-right:auto;
        font-size:0.8rem;
        padding: 12px 30px;
        margin-left:7%;
    }
    @media screen and (min-width:1200px){
        margin:2% 0 0 0;
        margin-right:auto;
        font-size:0.9rem;
        padding: 12px 40px;
        margin-left:7%;
    }
    
`

export const ChangingText = styled.p`
`