import React from 'react'
import { Nav, NavBurgerIcon, SidebarMenu, SidebarItem, SidebarLinkRoute } from './SidebarElement'
import { FaTimes, FaBars } from 'react-icons/fa'
import Scroll from 'react-scroll'
import { AiOutlineClose } from "react-icons/ai";
const ScrollLink = Scroll.Link

const Sidebar = ({ toggle, hamburgerOpen }) => {
    return (
        <Nav hamburgerOpen={hamburgerOpen} onClick={toggle}>
            <NavBurgerIcon onClick={toggle}>
                {hamburgerOpen ? <AiOutlineClose onClick={toggle} size={25}></AiOutlineClose> : ''} CLOSE
            </NavBurgerIcon>
            <SidebarMenu>
                <SidebarItem>
                    <ScrollLink
                        to="content1"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-100}
                    >
                        <SidebarLinkRoute onClick={toggle}>Collections</SidebarLinkRoute>
                    </ScrollLink>
                </SidebarItem>
                <SidebarItem>
                    <ScrollLink
                        to="products"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-100}
                    >
                        <SidebarLinkRoute onClick={toggle}>News</SidebarLinkRoute>
                    </ScrollLink>
                </SidebarItem>
                <SidebarItem>
                    <ScrollLink
                        to="works"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-100}
                    >
                        <SidebarLinkRoute onClick={toggle}>Our Story</SidebarLinkRoute>
                    </ScrollLink>
                </SidebarItem>
                <SidebarItem>
                    <ScrollLink
                        to="about-us"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-100}
                    >
                        <SidebarLinkRoute onClick={toggle}>Gallery Locations</SidebarLinkRoute>
                    </ScrollLink>
                </SidebarItem>
            </SidebarMenu>
        </Nav>
    )
}

export default Sidebar
