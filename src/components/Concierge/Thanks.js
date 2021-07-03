import React, { useState, useEffect } from 'react'
import { ThanksMenu, ThanksItem, ButtonThanks } from './ConciergeElements'
import SectionTextMedium from '../../components/SectionTextMedium/index';
import SectionParagraph from '../../components/SectionParagraph/index';
import Scroll from 'react-scroll'
import index from './index'
import { Link } from 'react-router-dom'
const ScrollLink = Scroll.Link

const Thanks = (toggle) => {
    const paragraph = "Your Response has been recorded. We will reach out to you soon";
    const paragraph2 = "after our initial assessment.";
    const handleonclick = () => {
        window.location.reload();
    }
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
                <ButtonThanks onClick={handleonclick} value="Start">BACK TO DASHBOARD</ButtonThanks>
            </ThanksItem>
        </ThanksMenu>
    )
}

export default Thanks
