import React from 'react'
import * as All from './FooterElement'
import imgSrc from '../../images/contact_us_background.png'
import WaIcon from '../../images/wa_icon.svg'
import IgIcon from '../../images/ig_icon.svg'
import TwitterIcon from '../../images/twitter_icon.svg'

import { First } from 'react-bootstrap/esm/PageItem'

const Footer = () => {
    return (
        <All.FooterContainer>
            <All.FirstCaption>Anthem<br />
            PT. Gema Digital Indonesia<br />
            Bandung, West Java
            </All.FirstCaption>
            <hr style={{ border: "1px solid grey" }} />
            <All.FlexContainer>
                <All.SecondCaption>
                    Redefining Experience since 2020. Anthem. All Rights Reserved.
                </All.SecondCaption>
                <All.FlexContainer2>
                    <All.Socmed style={{ marginRight: '20px', marginTop: '5px' }}>Find us on</All.Socmed>
                    <a href="https://wa.me/628112321191" target="_blank" style={{marginTop:5}}>
                        <img src={WaIcon} style={{ marginRight: '20px' }}></img>
                    </a>
                    <a href="https://instagram.com/hello.anthem" target="_blank" style={{marginTop:5}}>
                        <img src={IgIcon} style={{ marginRight: '20px' }}></img>
                    </a>
                    {/* <img src={TwitterIcon} style={{ marginRight: '20px' }}></img> */}
                </All.FlexContainer2>
            </All.FlexContainer>
        </All.FooterContainer>
    )
}

export default Footer
