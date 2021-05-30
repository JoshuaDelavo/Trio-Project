import React from 'react'
import { Nav, NavBurgerIcon, SidebarMenu, SidebarItem, SidebarLink, SidebarLinkRoute, ButtonContainer } from './SidebarElement'
import { Button } from '../Button'
import { FaTimes, FaBars } from 'react-icons/fa'
import SearchIcon from "../../images/search_icon.svg";
import Scroll from 'react-scroll'
const ScrollLink = Scroll.Link

const Sidebar = ({ toggle, hamburgerOpen }) => {
    return (
        <Nav hamburgerOpen={hamburgerOpen} onClick={toggle}>
            <NavBurgerIcon onClick={toggle}>
                {hamburgerOpen ? <FaTimes onClick={toggle}></FaTimes> : <FaBars onClick={toggle}></FaBars>}
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
                        <SidebarLinkRoute onClick={toggle}>Home</SidebarLinkRoute>
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
                        <SidebarLinkRoute onClick={toggle}>Products</SidebarLinkRoute>
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
                        <SidebarLinkRoute onClick={toggle}>Works</SidebarLinkRoute>
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
                        <SidebarLinkRoute onClick={toggle}>About Us</SidebarLinkRoute>
                    </ScrollLink>
                </SidebarItem>
                <SidebarItem>
                    <ScrollLink
                        to="contact-us"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                    >
                        <SidebarLinkRoute onClick={toggle}>Contact</SidebarLinkRoute>
                    </ScrollLink>
                </SidebarItem>
                <SidebarItem style={{ marginTop: '30px' }}>
                    <img src={SearchIcon} alt="search icon"></img>
                </SidebarItem>
                {/* <ButtonContainer>
                    <Button to='/signup'>Sign Up</Button>
                </ButtonContainer> */}
            </SidebarMenu>
        </Nav>
    )
}

export default Sidebar
