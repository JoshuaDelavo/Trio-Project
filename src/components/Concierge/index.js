import React, { useState, useEffect } from 'react'
import { Nav, NavBurgerIcon, SidebarMenu, SidebarItem, SidebarLinkRoute } from './ConciergeElements'
import { FaTimes, FaBars } from 'react-icons/fa'
import { Element } from 'react-scroll'
import SectionTextSmall from '../../components/SectionTextSmall/index';
import SectionTextMedium from '../../components/SectionTextMedium/index';
import SectionParagraph from '../../components/SectionParagraph/index';
import Scroll from 'react-scroll'
import Concierge from "../../config/ConciergeApi";
const ScrollLink = Scroll.Link

const Sidebar = ({ toggle2, conciergeOpen }) => {
    const [events, setEvents] = useState([]);
    const paragraph = "Fashion Concierge is interactive way to send your inquiry to Sebastian Gunawan and team. Tell us what you have in mind. Your color preferences, your style preferences, or even upload your rough sketches about the art piece of your dream";
    useEffect(() => {
        Concierge.findBudgets().then(res => {
            setEvents(res);
            console.log(res);
        })
    }, [])
    return (
        <Nav conciergeOpen={conciergeOpen} >
            <NavBurgerIcon onClick={toggle2}>
                {conciergeOpen ? <FaTimes onClick={toggle2}></FaTimes> : ''} CLOSE
            </NavBurgerIcon>
            <SidebarMenu>
                <div >
                    <SectionTextSmall ></SectionTextSmall>
                    <SectionTextMedium value="WELCOME TO THE FASHION CONCIERGE" ></SectionTextMedium>
                    <hr style={{ border: '1px solid white', width: '45px', margin: 'auto' }}></hr>
                    <br />
                    <SectionParagraph value={paragraph}
                    > </SectionParagraph>
                </div>
            </SidebarMenu>
        </Nav>
    )
}

export default Sidebar
