import React, { useState } from 'react'
import NavbarRightLeft from '../components/NavbarRightLeft'
import Sidebar from '../components/Sidebar'
import './Header.css'

const Header = () => {

    const [navBar, setNavbar] = useState(false);
    const [currentP, setCurr] = useState(0);

    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    const toggle = () => {
        setHamburgerOpen(!hamburgerOpen)
    }
    const hideHeader = () => {
        if (window.scrollY >= currentP) {
            setNavbar(true);
            setCurr(window.scrollY);
        }
        else {
            setNavbar(false);
            setCurr(window.scrollY);
        }

        console.log(window.scrollY);
        console.log(navBar);
    };

    window.addEventListener('scroll', hideHeader);
    return (
        <div className={navBar ? 'hidden' : 'navBar'}>
            <Sidebar hamburgerOpen={hamburgerOpen} toggle={toggle}></Sidebar>
            <NavbarRightLeft hamburgerOpen={hamburgerOpen} toggle={toggle}></NavbarRightLeft>
        </div>
    )
}

export default Header
