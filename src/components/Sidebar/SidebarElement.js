import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav` 
    display:flex; 
    background:black;
    height:100vh;
    width:100%;
    position:fixed;
    transition: 0.5s all ease-in-out;
    z-index:500;
    top:0;
    ${({ hamburgerOpen }) => !hamburgerOpen && `
    height:0vh; margin-top:-100vh;`}
    
    @media screen and (min-width:768px){
        display:none;
    }
`
export const NavBurgerIcon = styled.div`
    display:flex;
    position:fixed;
    right:15px;
    top:22px;
    color:white;
    height:100%;
    

    @media screen and (min-width:768px){
        display:none;
    } 

    > svg {
        font-size:25px;
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
    justify-content:center;
    
`

export const SidebarLink = styled.div`
    display:flex;
    text-decoration:none;
    color:white;
    text-transform:uppercase;
    padding: 35px 0px;

    &:hover{
        cursor:pointer;
        text-decoration:none;
        color:white;
    }
`
export const SidebarLinkRoute = styled.div`
    display:flex;
    text-decoration:none;
    color:white;
    text-transform:uppercase;
    padding: 35px 0px;

    &:hover{
        cursor:pointer;
        text-decoration:none;
        color:white;
    }
`
export const ButtonContainer = styled.div`
    display:flex;
    justify-content:center;
    margin-top:60px;
    
    &>a{
        padding:17px 60px;
    }
`
