import React, { useState } from 'react'
import NavbarRightLeft from '../components/NavbarRightLeft'
import Sidebar from '../components/Sidebar'
import './Header.css'
import useDocumentScrollThrottled from './useDocumentScrollThrottled';

const Header = () => {

    const [navBar, setNavbar] = useState(false);
    const [currentP, setCurr] = useState(0);

    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    const toggle = () => {
        setHamburgerOpen(!hamburgerOpen)
    }
    // const hideHeader = () => {
    //     if (window.scrollY >= currentP) {
    //         setNavbar(true);
    //         setCurr(window.scrollY);
    //     }
    //     else {
    //         setNavbar(false);
    //         setCurr(window.scrollY);
    //     }
    // };
    //window.addEventListener('scroll', hideHeader);

    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowShadow, setShouldShowShadow] = useState(false);

    const MINIMUM_SCROLL = 80;
    const TIMEOUT_DELAY = 400;

    useDocumentScrollThrottled(callbackData => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        const isScrolledDown = previousScrollTop < currentScrollTop;
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

        setShouldShowShadow(currentScrollTop > 2);

        setTimeout(() => {
            setShouldHideHeader(isScrolledDown && isMinimumScrolled);
        }, TIMEOUT_DELAY);
    });

    const shadowStyle = shouldShowShadow ? 'shadow' : '';
    const hiddenStyle = shouldHideHeader ? 'hidden' : '';

    return (
        <div className={`header ${shadowStyle} ${hiddenStyle}`}>
            <Sidebar hamburgerOpen={hamburgerOpen} toggle={toggle}></Sidebar>
            <NavbarRightLeft hamburgerOpen={hamburgerOpen} toggle={toggle}></NavbarRightLeft>
        </div>
    )
}

export default Header
