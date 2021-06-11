import styled from 'styled-components'
// import { Link as LinkR } from 'react-router-dom'
// import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav` 
    display:flex; 
    background:black;
    height:100vh;
    width:100%;
    position:absolute;
    transition: 0.5s  linear;
    z-index:500;
    top:0;
    ${({ conciergeOpen }) => !conciergeOpen && `
    width:0%; margin-left:-200vh;`}
    
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
    width: 90%;
    height:10%;
    position:flex-end;
    padding-top: 6.6%;
    padding-left:5%;
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
export const SidebarMenu = styled.div`
    margin-left: 30px;
    margin-top:-30px;
    display:flex;
    width:100%;
    justify-content:center;
    padding:20px 0px;
    flex-direction:column;
`

export const SidebarItem = styled.div`
    display:flex;
    padding-right:30%;
    justify-content:flex-end;
    @media screen and (max-width:1024px){
        justify-content:flex-end;
    }
    
`

export const SidebarLinkRoute = styled.div`
    display:flex;
    text-decoration:none;
    color:white;
    justify-content:flex-end;
    text-align: right;
    text-transform:uppercase;
    padding: 35px 0px;

    &:hover{
        cursor:pointer;
        text-decoration:none;
        color:white;
    }
`
