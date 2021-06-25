import React, { useState, useEffect } from 'react'
import { NavCon, NavBurgerIcon, ThanksMenu, ThanksItem, ButtonThanks, BottomIcon } from './ConciergeElements'
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

const Thanks = () => {
    const paragraph = "Your Response has been recorded. We will reach out to you soon";
    const paragraph2 = "after our initial assessment.";


    return (

        <ThanksMenu >
            <ThanksItem>
                <div >
                    <SectionTextMedium value="THANK YOU" ></SectionTextMedium>

                    <hr style={{ border: '1px solid white', width: '80px', margin: 'auto' }}></hr>
                    <br />
                    <SectionParagraph value={paragraph}> </SectionParagraph>
                    <SectionParagraph value={paragraph2}> </SectionParagraph>
                </div>

            </ThanksItem>
            <ThanksItem>
                <ButtonThanks value="Start">BACK TO DASHBOARD</ButtonThanks>
            </ThanksItem>
        </ThanksMenu>
    )
}

export default Thanks
