import React from 'react'
import { Nav, NavbarContainer, NavLogo, NavBurgerIcon, NavMenu, NavItem, NavLink, NavLinkRoute, NavButton } from './NavbarElement'
import { FaBars } from 'react-icons/fa'
import { Button } from '../Button'
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink

const Navbar = ({ toggle, hamburgerOpen }) => {
    return (
        <Nav>
            <NavBurgerIcon onClick={toggle}>
                {hamburgerOpen ? '' : <FaBars onClick={toggle}></FaBars>}
            </NavBurgerIcon>
            <NavbarContainer>
                <NavLogo to='/'>Cher</NavLogo>
                <NavMenu>
                    <NavItem>
                        <NavLinkRoute>Home</NavLinkRoute>
                    </NavItem>
                    <NavItem>
                        <NavLink>Pre-made</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLinkRoute>Blend</NavLinkRoute>
                    </NavItem>
                    <NavItem>
                        <NavLinkRoute>Shop</NavLinkRoute>
                    </NavItem>
                </NavMenu>
                <NavButton>
                    <Button to='/signup'>Sign Up</Button>
                </NavButton>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
