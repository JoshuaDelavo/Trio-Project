import React from 'react'
import { Nav, NavTulisan, NavbarContainer, NavLogo, NavBurgerIcon, NavEditIcon } from './NavbarElement'
import { FaBars } from 'react-icons/fa'
import LogoAnthem from "../../images/logo_anthem.svg";
import Scroll from 'react-scroll'
import { BiEditAlt } from "react-icons/bi";
const ScrollLink = Scroll.Link

const NavbarRightLeft = ({ toggle, hamburgerOpen }) => {
    return (
        <Nav>
            <NavbarContainer>

                <NavBurgerIcon onClick={toggle}>
                    {hamburgerOpen ? '' : <FaBars onClick={toggle}></FaBars>}
                </NavBurgerIcon>
                <NavLogo to='/'><img src={LogoAnthem} alt="close icon"></img>
                </NavLogo>
                <NavTulisan>THE CONCIERGE <BiEditAlt></BiEditAlt></NavTulisan>
                <NavEditIcon><BiEditAlt></BiEditAlt></NavEditIcon>
            </NavbarContainer>
        </Nav >
    )
}

export default NavbarRightLeft
