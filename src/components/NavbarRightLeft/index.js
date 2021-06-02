import React, { useState, useEffect } from 'react'
import { Nav, NavTulisan, NavbarContainer, NavLogo, NavBurgerIcon, NavEditIcon } from './NavbarElement'
import { FaBars } from 'react-icons/fa'
import LogoAnthem from "../../images/logo_anthem.svg";
import Scroll from 'react-scroll'
import { BiEditAlt } from "react-icons/bi";
import CompanyApi from '../../config/CompanyApi';
import { baseURL } from '../../config/';
const ScrollLink = Scroll.Link

const NavbarRightLeft = ({ toggle, hamburgerOpen }) => {
    const [logo, setLogo] = useState({ logo: [''] });
    useEffect(() => {
        CompanyApi.find().then(res => {
            console.log(res);
            setLogo(res);
        });
    }, [])
    return (
        <Nav>
            <NavbarContainer>

                <NavBurgerIcon onClick={toggle}>
                    {hamburgerOpen ? '' : <FaBars onClick={toggle}></FaBars>}
                </NavBurgerIcon>
                <NavLogo to='/'><img src={baseURL + logo.logo.url} alt="close icon"></img>
                </NavLogo>
                <NavTulisan>THE CONCIERGE <BiEditAlt></BiEditAlt></NavTulisan>
                <NavEditIcon><BiEditAlt></BiEditAlt></NavEditIcon>
            </NavbarContainer>
        </Nav >
    )
}

export default NavbarRightLeft
