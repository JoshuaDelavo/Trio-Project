import React, { useState } from 'react'
import NavbarRightLeft from '../NavbarRightLeft'
import Sidebar from '../Sidebar'
import Concierge from '../Concierge'
import './Header.css'
import useDocumentScrollThrottled from './useDocumentScrollThrottled';
import { Fade } from '@material-ui/core';

const Header = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    const toggle = () => {
        setHamburgerOpen(!hamburgerOpen)
    }
    const [conciergeOpen, setConciergeOpen] = useState(false)

    const toggle2 = () => {
        setConciergeOpen(!conciergeOpen)
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
        <Fade in={!hiddenStyle}>
            <div className={`header`}>
                <Sidebar hamburgerOpen={hamburgerOpen} toggle={toggle}></Sidebar>
                <Concierge conciergeOpen={conciergeOpen} toggle2={toggle2}></Concierge>
                <NavbarRightLeft hamburgerOpen={hamburgerOpen} toggle={toggle} conciergeOpen={conciergeOpen} toggle2={toggle2}></NavbarRightLeft>
            </div>
        </Fade>
    )
}

export default Header
