import React from 'react'
import { Nav, NavBurgerIcon, SidebarMenu, SidebarItem, SidebarLinkRoute } from './SidebarElement'
import { FaTimes, FaBars } from 'react-icons/fa'
import burgerMenuCloseIcon from '../../images/burger_menu_close.svg'
import Scroll from 'react-scroll'
import { Link } from 'react-router-dom'
const ScrollLink = Scroll.Link

const Sidebar = ({ toggle, hamburgerOpen }) => {
    return (
        <Nav hamburgerOpen={hamburgerOpen} onClick={toggle}>
            <NavBurgerIcon onClick={toggle}>
                <img src={burgerMenuCloseIcon} onClick={toggle} style={{ width: 20, marginTop: -2, float:"left"}}></img>
                <p style={{ marginLeft: 5, fontSize: 14, float:"left" }}>CLOSE</p>
            </NavBurgerIcon>
            <SidebarMenu>
                <SidebarItem>
                    {/* <ScrollLink
                        to="content1"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-100}
                    > */}
                        <Link to='/collections' style={{textDecoration:'none'}}>
                            <SidebarLinkRoute onClick={toggle}>Collections</SidebarLinkRoute>
                        </Link>
                    {/* </ScrollLink> */}
                </SidebarItem>

                <SidebarItem>
                    {/* <ScrollLink
                        to="/News"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-100}
                    > */}
                    <Link to='/news' style={{textDecoration:'none'}}>
                        <SidebarLinkRoute onClick={toggle}>News</SidebarLinkRoute>
                    </Link>
                    {/* </ScrollLink> */}
                </SidebarItem>

                <SidebarItem>
                    {/* <ScrollLink
                        to="works"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-100}
                    >
                        <SidebarLinkRoute onClick={toggle}>Our Story</SidebarLinkRoute>
                    </ScrollLink> */}
                    <Link to='/ourStory' style={{textDecoration:'none'}}>
                        <SidebarLinkRoute onClick={toggle}>Our Story</SidebarLinkRoute>
                    </Link>
                </SidebarItem>
                {/* <SidebarItem> */}
                    {/* <ScrollLink
                        to="about-us"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-100}
                    >
                        <SidebarLinkRoute onClick={toggle}>Gallery Locations</SidebarLinkRoute>
                    </ScrollLink>
                </SidebarItem> */}
            </SidebarMenu>
        </Nav >
    )
}

export default Sidebar
