import styled from 'styled-components'

export const FooterContainer = styled.div`
    width:100%;
    color:white;
    background:black;
    padding: 20px 40px;
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {  }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { 
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        padding: 20px 100px;
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
    }
`
export const FirstCaption = styled.h1`
    padding: 10px 0;
    font-size:1.2rem;
`
export const SecondCaption = styled.h1`
    padding:15px 0;
    font-size:0.8rem;
    font-weight:100;
`
export const Socmed = styled.h1`
    padding: 10px 0;
    font-size:0.7rem;
    font-weight:100;
`
export const FlexContainer = styled.div`
    display:block;
    justify-content:space-between;
    
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { 
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        display:flex;
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
    }
`
export const FlexContainer2 = styled.div`
    display:flex;
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