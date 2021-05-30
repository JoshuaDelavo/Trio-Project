import React from 'react'
import { Nav, NavbarContainer, NavLogo, NavBurgerIcon, NavMenu, NavItem, NavLink, NavLinkRoute, NavButton } from './NavbarElement'
import { FaBars } from 'react-icons/fa'
import { Button } from '../Button'
import LogoAnthem from "../../images/logo_anthem.svg";
import SearchIcon from "../../images/search_icon.svg";
import Scroll from 'react-scroll'
const ScrollLink = Scroll.Link

const NavbarRightLeft = ({ toggle, hamburgerOpen }) => {
    return (
        <Nav>
            <NavBurgerIcon onClick={toggle}>
                {hamburgerOpen ? '' : <FaBars onClick={toggle}></FaBars>}
            </NavBurgerIcon>
            <NavbarContainer>
                <NavMenu>
                    <NavItem>
                        <ScrollLink
                            to="content1"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-130}
                        >
                            <NavLinkRoute>Home</NavLinkRoute>
                        </ScrollLink>
                    </NavItem>
                    <NavItem>
                        <ScrollLink
                            to="products"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-130}
                        >
                            <NavLinkRoute>Products</NavLinkRoute>
                        </ScrollLink>
                    </NavItem>
                    <NavItem>
                        <ScrollLink
                            to="works"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-130}
                        >
                            <NavLinkRoute>Works</NavLinkRoute>
                        </ScrollLink>
                    </NavItem>
                    <NavItem>
                        <ScrollLink
                            to="about-us"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-130}
                        >
                            <NavLinkRoute>About Us</NavLinkRoute>
                        </ScrollLink>
                    </NavItem>
                    <NavItem>
                        <ScrollLink
                            to="contact-us"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-130}
                        >
                            <NavLinkRoute>Contact</NavLinkRoute>
                        </ScrollLink>
                    </NavItem>
                    <NavItem>
                        <img src={SearchIcon} alt="search icon"></img>
                        {/* <NavLinkRoute to='/Shop'>Contact</NavLinkRoute> */}
                    </NavItem>
                </NavMenu>
                <NavLogo to='/'><img src={LogoAnthem} alt="close icon"></img>
                </NavLogo>
                {/* <NavButton>
                    <Button to='/signup'>Sign Up</Button>
                </NavButton> */}
            </NavbarContainer>
        </Nav>
    )
}

export default NavbarRightLeft
