import React from 'react'
import { Nav, NavBurgerIcon, SidebarMenu, SidebarItem, SidebarLinkRoute } from './SidebarElement'
import { FaTimes, FaBars } from 'react-icons/fa'
import Scroll from 'react-scroll'
import { Link } from '@material-ui/icons'
import { Link as Links } from 'react-router-dom'
const ScrollLink = Scroll.Link

const Sidebar = ({ toggle, hamburgerOpen }) => {
    return (
        <Nav hamburgerOpen={hamburgerOpen} onClick={toggle}>
            <NavBurgerIcon onClick={toggle}>
                {hamburgerOpen ? <FaTimes onClick={toggle}></FaTimes> : ''} CLOSE
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
                        to="/News"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-100}
                    >
                        <Links to='/News'>
                            <SidebarLinkRoute to="/News" onClick={toggle}>News</SidebarLinkRoute>
                        </Links>
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
        </Nav >
    )
}

export default Sidebar
