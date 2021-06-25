import styled from 'styled-components'
// import { Link as LinkR } from 'react-router-dom'
// import { Link as LinkS } from 'react-scroll'

export const NavCon = styled.nav` 
    display:flex; 
    background:black;
    height:100vh;
    width:100%;
    position:fixed;
    justify-content:center;
    transition: 0.5s  linear;
    z-index:500;
    top:0;
    ${({ conciergeOpen }) => !conciergeOpen && `
    width:0%; margin-left:-300vh;`}
    
    @media screen and (max-width:1024px){
            width:100%;
    }
`
export const Text = styled.div`
    color:#FFFFFF;
    font-size:14px;
`
export const NavBurgerIcon = styled.div`
    display:flex;
    justify-content:flex-end;
    width: 100%;
    height:5%;
    position:flex-end;
    padding-top: 3.5%;
    padding-right:5%;
    color:white;
    font-size:16px;

    &:hover {
        cursor:pointer;
    }

    
    @media screen and (max-width:1024px){
        padding-top:23%;
        padding-left:8%;
    }

    @media screen and (min-width:2000px){
        visibility:hidden;
    }

    > svg {
        font-size:16px;
    }

`
export const ConMenu = styled.div`
    position: absolute;
    margin-top: 5%;
    width:50%;
    height:auto;
    justify-content:center;
`

export const ConItem = styled.div`
    display:flex;
    width: 100%;
    color: white;
    margin-top:30px;
    justify-content:center;
    @media screen and (max-width:1024px){
        justify-content:center;
    }
    
`
export const ButtonText = styled.button`
    backgroun-color:white;
    width:40%;
    height:50px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    
    @media screen and (max-width:1024px){
        justify-content:center;
    }
    
`
export const BottomIcon = styled.div`
    color:white;
    justify-content: flex-start;
    font-size: 30px;
    margin-top: -30px;
    width:100%
    @media screen and (max-width:1024px){
        justify-content:center;
    }
    
`


