import React, { useState, useEffect } from 'react'
import { Nav, NavTulisan, NavbarContainer, NavLogo, NavBurgerIcon, NavEditIcon } from './NavbarElement'
import { FaBars } from 'react-icons/fa'
import { RiMenu2Line } from 'react-icons/ri'
import LogoAnthem from "../../images/logo_anthem.svg";
import Scroll from 'react-scroll'
import { BiEditAlt } from "react-icons/bi";
import CompanyApi from '../../config/CompanyApi';
import { baseURL } from '../../config/';
import { Fade } from '@material-ui/core';
const ScrollLink = Scroll.Link

const NavbarRightLeft = ({ toggle, hamburgerOpen }) => {
    const [logo, setLogo] = useState({ logo: [''] });
    const [imgLoaded, setImgLoaded] = useState(false);

    useEffect(() => {
        CompanyApi.find().then(res => {
            new Promise((resolve, reject) => {
                const loadImg = new Image()

                loadImg.src = baseURL + res.logo.url

                loadImg.onload = () => {
                    resolve(baseURL + res.logo.url)
                }

                loadImg.onerror = err => reject(err)
            }).then(() => setImgLoaded(true))
                .catch(err => console.log("Failed to load images", err))


            // console.log(res);
            setLogo(res);
        });
    }, [])
    return (
        <Nav>
            <Fade in={imgLoaded}>
                <NavbarContainer>
                    <NavBurgerIcon onClick={toggle}>
                        {hamburgerOpen ? '' : <RiMenu2Line onClick={toggle}></RiMenu2Line>}
                    </NavBurgerIcon>
                    <NavLogo to='/'><img src={baseURL + logo.logo.url} alt=""></img>
                    </NavLogo>
                    <NavTulisan>THE CONCIERGE <BiEditAlt></BiEditAlt></NavTulisan>
                    <NavEditIcon><BiEditAlt></BiEditAlt></NavEditIcon>
                </NavbarContainer>
            </Fade>
        </Nav >
    )
}

export default NavbarRightLeft
