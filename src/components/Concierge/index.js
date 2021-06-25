import React, { useState, useEffect } from 'react'
import { ConNav, NavBurgerIcon, ConMenu, ConItem, ButtonText, BottomIcon } from './ConciergeElements'
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

const Consiegre = ({ toggle2, conciergeOpen }) => {
    const [events, setEvents] = useState([]);
    const paragraph = "Fashion Concierge is interactive way to send your inquiry to Sebastian Gunawan and team. Tell us what you have in mind. Your color preferences, your style preferences, or even upload your rough sketches about the art piece of your dream";
    useEffect(() => {
        Concierge.findBudgets().then(res => {
            setEvents(res);
            console.log(res);
        })
    }, [])
    return (
        <ConNav conciergeOpen={conciergeOpen} >
            <NavBurgerIcon onClick={toggle2}>
                {conciergeOpen ? <FaTimes onClick={toggle2}></FaTimes> : ''} CLOSE
            </NavBurgerIcon>
            <ConMenu >
                <ConItem>
                    <div >
                        <SectionTextMedium value="WELCOME TO THE FASHION CONCIERGE" ></SectionTextMedium>
                        <hr style={{ border: '1px solid white', width: '45px', margin: 'auto' }}></hr>
                        <br />
                        <SectionParagraph value={paragraph}
                        > </SectionParagraph>
                    </div>

                </ConItem>
                <ConItem>
                    <ButtonText value="Start">START THE EXPERIENCE</ButtonText>
                </ConItem>
                <ConItem>
                    <SectionTextSmall value='Need connect fast ? We are available here' ></SectionTextSmall>
                </ConItem>
                <ConItem>
                    <BottomIcon>
                        <AiOutlineInstagram ></AiOutlineInstagram>
                        <AiOutlineWhatsApp style={{ marginLeft: '5rem' }}></AiOutlineWhatsApp>
                        <IoMailOutline style={{ marginLeft: '5rem' }}></IoMailOutline>
                        <AiOutlinePhone style={{ marginLeft: '5rem' }}></AiOutlinePhone>
                    </BottomIcon>
                </ConItem>
            </ConMenu>
            <ConMenu hidden>
                <ConItem>
                    <Page2></Page2>
                </ConItem>
                <ConItem>


                </ConItem>
                <ConItem>
                    <Button>
                        SUBMIT
                    </Button>
                </ConItem>
                <ConItem>
                    <SectionParagraph value='ANY SPECIAL NOTES?'>

                        <input type="textarea"></input>
                        <Button>
                            RESTART
                        </Button>
                        <Button>
                            FINISH
                        </Button>
                    </SectionParagraph>
                </ConItem>
                <ConItem>
                    <SectionParagraph>
                        THANK YOU
                        Your Response has been recorded. We will reach out to you soon after our initial assessment.
                        <Button>
                            BACK TO DASHBOARD
                        </Button>
                    </SectionParagraph>
                </ConItem>

            </ConMenu>

        </ConNav>
    )
}

export default Consiegre
