import React from 'react'
import { Nav, NavBurgerIcon, SidebarMenu, SidebarItem, SidebarLinkRoute } from './ConciergeElements'
import { FaTimes, FaBars } from 'react-icons/fa'
import Scroll from 'react-scroll'
const ScrollLink = Scroll.Link

const Sidebar = ({ toggle2, conciergeOpen }) => {
    return (
        <Nav conciergeOpen={conciergeOpen} >
            <NavBurgerIcon onClick={toggle2}>
                {conciergeOpen ? <FaTimes onClick={toggle2}></FaTimes> : ''} CLOSE
            </NavBurgerIcon>

        </Nav>
    )
}

export default Sidebar
