import styled from 'styled-components'

export const ContactUsContainer = styled.div`
    width:100%;
    height:800px;
    margin-top:-62px;
`
export const ImageBackgroundContainer = styled.div`
    width:1650px;
    height:800px;
    position:absolute;
    right:0;
    background:blue;
    overflow:hidden;
`
export const ImageBackground = styled.img`
    height:100%;
    /* width:100%; */
    right:-350px;
    position:absolute;
    
    @media (min-width: 576px) {
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { 
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        right:0;
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
    }
    /* object-fit:fill; */
    /* overflow:hidden; */
`
export const ImageCrop = styled.div`
    display:flex;
    width:100%;
    z-index:1;
    height:800px;
    left:0;
    background:black;
    position:absolute;
    clip-path: polygon(0 0, 100% 0%, 30% 100%, 0 100%, 0% 50%);
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { 
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        width:60%;
        clip-path: polygon(0 0, 100% 0%, 65% 100%, 0 100%, 0% 50%);
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
    }
`
export const ImageCrop2 = styled.div`
    z-index:0;
    opacity:0.5;
    display:flex;
    width:100%;
    height:800px;
    left:0;
    background:black;
    position:absolute;
    clip-path: polygon(0 0, 103% 0%, 35% 100%, 25% 100%, 0% 50%);
    
    @media (min-width: 576px) {
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { 
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        width:62%;
        clip-path: polygon(0 0, 99% 0%, 65% 100%, 0 100%, 0% 50%);
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
    }
`

export const CardContainer = styled.div`
    display:flex;
    height:800px;
    padding-top:50px;
    padding-left:40px;
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { 
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        padding-left:100px;
        align-items:center;
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
    }
`

export const CardWrapper = styled.div`
    color:white;
    display:flex;
    flex-direction:column;
`
export const FirstCaption = styled.h1`
    padding: 10px 0;
    font-size:0.7rem;
    font-weight:100;
`
export const SecondCaption = styled.h1`
    padding-bottom:0;
    font-size:2rem;
    font-weight:bold;
    
    @media (min-width: 576px) {
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { 
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        font-size:2.7rem;
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
    }
    /* object-fit:fill; */
    /* overflow:hidden; */
`
export const ThirdCaption = styled.h1`
    padding: 10px 0;
    font-size:0.8rem;
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
export const Button = styled.div`
    width:250px;
    margin:10px 0;
    padding:15px 0;
    border:1px solid white;
    display:flex;
    justify-content:center;
    text-align:center;
`