import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    display:flex;
    position:fixed;
    width:100%;
    top:0;
    border-bottom:2px solid white;
    margin-left: 20px;
    padding:40px 10px;
    background:tarnsparament;
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
export const NavTulisan = styled.div`
    @media screen and (min-width:1024px){
    color:white;
    font-size:16px;
    padding-right: 5%;
    }
    @media screen and (max-width:1024px){
        display :none;
    }
`
export const NavEditIcon = styled.div`
    color:white;
    display:none;
    position: flex;
    @media screen and (max-width:1024px){
        padding-right: 5%;
        font-size: 30px;
        display :flex;
    }
    `


export const NavLogo = styled(LinkR)`
    display:flex;
    padding-left:11%;
    color:white;
    text-decoration:none;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight:bold;
    z-index:2;

    @media screen and (max-width:1024px){
        padding-left:0%;
    }
    
    > img {
        height:50px;
        @media screen and (min-width:768px){
            height:100%
        } 
    }
`

export const NavBurgerIcon = styled.div`
    display:flex;
    position:flex;
    left:15px;
    top:22px;
    color:white;

    @media screen and (min-width:2000px){
        display:none;
    } 

    > svg {
        font-size:25px;
    }
`

export const NavMenu = styled.div`
    display:flex;
    justify-content:end;

    @media screen and (max-width:2000px){
        display:none;
    } 
`