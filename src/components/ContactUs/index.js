import React from 'react'
import { ContactUsContainer, ImageBackgroundContainer, ImageCrop2, ImageBackground, CardContainer, ImageCrop, CardWrapper, FirstCaption, SecondCaption, ThirdCaption, FourthCaption, FifthCaption } from './ContactUsElement'
import imgSrc from '../../images/contact_us_background.png'
import { Element } from 'react-scroll'

const ContactUs = () => {
    return (
        <Element id='contact-us' name='contact-us'>
            <ContactUsContainer>
                <ImageBackgroundContainer>
                    <ImageBackground src={imgSrc}></ImageBackground>
                </ImageBackgroundContainer>
                <ImageCrop>
                    <CardContainer>
                        <CardWrapper>
                            <FirstCaption>CONNECT WITH ANTHEM</FirstCaption>
                            <SecondCaption>We’d be very<br />Happy to hear<br />from You</SecondCaption>
                            <ThirdCaption>Call Us. Chat Us. Anytime.</ThirdCaption>
                            <a href="https://wa.me/628112321191" target="_blank" style={{ color: 'white' }}>
                                <FourthCaption>+62 8112 321 191</FourthCaption>
                            </a>
                            <a href="mailto:hello@anthem.co.id" target="_blank" style={{ color: 'white' }}>
                                <FifthCaption>hello@anthem.id</FifthCaption>
                            </a>
                        </CardWrapper>
                    </CardContainer>

                </ImageCrop>
                <ImageCrop2>
                </ImageCrop2>

            </ContactUsContainer>
        </Element>

    )
}

export default ContactUs
