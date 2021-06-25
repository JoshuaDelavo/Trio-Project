import React, { useState, useEffect } from 'react'
import { Nav, NavBurgerIcon, SidebarMenu, SidebarItem, ButtonText, BottomIcon } from './ConciergeElements'
import { FaTimes, FaBars } from 'react-icons/fa'
import { Element } from 'react-scroll'
import SectionTextSmall from '../../components/SectionTextSmall/index';
import SectionTextMedium from '../../components/SectionTextMedium/index';
import SectionParagraph from '../../components/SectionParagraph/index';
import Scroll from 'react-scroll'
import Page2 from './Page2'
import Concierge from "../../config/ConciergeApi";
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlinePhone } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import { Button, TextField } from '@material-ui/core';
const ScrollLink = Scroll.Link

const Sidebar = ({ toggle2, conciergeOpen }) => {
    const [events, setEvents] = useState([]);
    const paragraph = "Fashion Concierge is interactive way to send your inquiry to";
    const paragraph2 = "Sebastian Gunawan and team. Tell us what you have in mind. Your color";
    const paragraph3 = "preferences, your style preferences, or even upload your";
    const paragraph4 = "rough sketches about the art piece of your dream";
    useEffect(() => {
        Concierge.findBudgets().then(res => {
            setEvents(res);
            console.log(res);
        })
    }, [])
    return (
        <Nav conciergeOpen={conciergeOpen}>
            <NavBurgerIcon onClick={toggle2}>
                {conciergeOpen ? <FaTimes onClick={toggle2}></FaTimes> : ''} CLOSE
            </NavBurgerIcon>
            <SidebarMenu >
                <SidebarItem>
                    <div >
                        <SectionTextMedium value="WELCOME TO" ></SectionTextMedium>
                        <SectionTextMedium value="THE FASHION CONCIERGE" ></SectionTextMedium>
                        <hr style={{ border: '1px solid white', width: '45px', margin: 'auto' }}></hr>
                        <br />
                        <SectionParagraph value={paragraph}> </SectionParagraph>
                        <SectionParagraph value={paragraph2}> </SectionParagraph>
                        <SectionParagraph value={paragraph3}> </SectionParagraph>
                        <SectionParagraph value={paragraph4}> </SectionParagraph>
                    </div>

                </SidebarItem>
                <SidebarItem>
                    <ButtonText value="Start">START THE EXPERIENCE</ButtonText>
                </SidebarItem>
                <br />
                <br />
                <SidebarItem>
                    <SectionTextSmall value='Need connect fast ? We are available here' ></SectionTextSmall>
                </SidebarItem>
                <SidebarItem>
                    <BottomIcon>
                        <AiOutlineInstagram ></AiOutlineInstagram>
                        <AiOutlineWhatsApp style={{ marginLeft: '2rem' }}></AiOutlineWhatsApp>
                        <IoMailOutline style={{ marginLeft: '2rem' }}></IoMailOutline>
                        <AiOutlinePhone style={{ marginLeft: '2rem' }}></AiOutlinePhone>
                    </BottomIcon>
                </SidebarItem>
            </SidebarMenu>
            <SidebarMenu hidden>
                <SidebarItem>
                    <Page2></Page2>
                </SidebarItem>
                <SidebarItem>
                </SidebarItem>
                <SidebarItem>
                    <Button>
                        SUBMIT
                    </Button>
                </SidebarItem>
                <SidebarItem>
                    <SectionParagraph value='ANY SPECIAL NOTES?'>

                        <input type="textarea"></input>
                        <Button>
                            RESTART
                        </Button>
                        <Button>
                            FINISH
                        </Button>
                    </SectionParagraph>
                </SidebarItem>
                <SidebarItem>
                    <SectionParagraph>
                        THANK YOU
                        Your Response has been recorded. We will reach out to you soon after our initial assessment.
                        <Button>
                            BACK TO DASHBOARD
                        </Button>
                    </SectionParagraph>
                </SidebarItem>
            </SidebarMenu>
        </Nav>
    )
}

export default Sidebar
