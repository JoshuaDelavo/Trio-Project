import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    display:flex;
    position:fixed;
    width:100%;
    top:0;
    padding:3%;
    background:transparent;
    z-index:100;
    height:auto;

`

export const NavbarContainer = styled.div`
    display:flex;
    position: center;
    justify-content:space-between;
    align-items:center;
    border-bottom:1px solid rgba(111,111,111,0.5);
    padding-bottom:2%;
    height:100%;
    width:100%;
    height:60px;
    
    @media screen and (max-width:720px){
        margin-top:5%;
        padding-bottom:20px;
    }
`
export const NavTulisan = styled.div`
    @media screen and (min-width:1024px){
    color:white;
    font-size:16px;
    }
    @media screen and (max-width:1024px){
        display :none;
    }
`
export const NavEditIcon = styled.div`
    color:white;
    display:none;
    position: flex-end;
    @media screen and (max-width:1024px){
        font-size: 30px;
        display :flex;
    }
    `


export const NavLogo = styled(LinkR)`
    display:absolute;
    color:white;
    padding-bottom:10px;
    justify-content:center;
    text-decoration:none;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight:bold;
    z-index:2;

    @media screen and (max-width:1024px){
        padding-left:2%;
    }
    
    > img {
        height:64px;
        width:192;
        @media screen and (max-width:1024px){
            height:40px;
        } 
    }
`

export const NavBurgerIcon = styled.div`
    display:absolute;
    justify-content:flex-end;
    width: 10%;
    top:22px;
    color:white;

    &:hover {
        cursor:pointer;
    }

    @media screen and (min-width:2000px){
        visibility:hidden;
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