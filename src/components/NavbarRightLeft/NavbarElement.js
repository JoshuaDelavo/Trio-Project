import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    display:flex;
    position:fixed;
    width:100%;
    top:0;
    background:white;
    //border-bottom:1px solid white;
    padding:40px 10px;
    background:black;
    z-index:100;
    height:auto;
`

export const NavbarContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:0;
    width:100%;
    
    @media screen and (min-width:768px){
        height:60px;
    }
`

export const NavLogo = styled(LinkR)`
    display:flex;
    margin:0 24px;
    color:white;
    text-decoration:none;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight:bold;
    z-index:2;
    
    > img {
        height:50px;
        @media screen and (min-width:768px){
            height:100%
        } 
    }
`

export const NavBurgerIcon = styled.div`
    display:flex;
    position:fixed;
    right:15px;
    top:22px;
    color:white;

    @media screen and (min-width:768px){
        display:none;
    } 

    > svg {
        font-size:25px;
    }
`

export const NavMenu = styled.div`
    display:flex;
    justify-content:end;

    @media screen and (max-width:768px){
        display:none;
    } 
`

export const NavItem = styled.div`
    display:flex;
    justify-content:space-around;
    padding:0 25px;
    font-weight:lighter;
`

export const NavLink = styled.div`
    font-size:0.9rem;
    white-space:nowrap;
    color:white;
    z-index:2;
    transition:0.1s all ease-in;

    &:hover{
        /* font-size:1.2rem; */
        transition:0.1s all ease-in;
        cursor:pointer;
        font-weight:normal;
        /* color:gray; */
        border-bottom: 1px solid white;
        text-decoration:none;
        color:white;
    }
`
export const NavLinkRoute = styled.div`
    font-size:0.9rem;
    white-space:nowrap;
    color:white;
    z-index:2;
    transition:0.1s all ease-in;
    text-decoration:none;

    &:hover{
        /* font-size:1.2rem; */
        transition:0.1s all ease-in;
        cursor:pointer;
        font-weight:normal;
        /* color:gray; */
        border-bottom: 1px solid white;
        text-decoration:none;
        color:white;
    }
`
export const NavButton = styled.div`
    white-space:nowrap;
    color:white;

    @media screen and (max-width:768px){
        display:none;
    } 
`