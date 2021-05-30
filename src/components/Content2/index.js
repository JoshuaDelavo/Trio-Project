import React, { useEffect } from 'react'
import { Content2Container, TopContainer, TopFlexWrapper, Text1Container, Text1, Text2Container, Text2, Text3Container, Text3, BottomContainer, BottomLeftContainer, BottomCenterContainer, BottomRightContainer, ArrowImageContainer, ArrowImage, BottomCaption1Container, BottomCaption1, BottomCaption2Container, BottomCaption2, TextAnimation } from './Content2Element'
import ArrowDown from '../../images/arrow-down.svg'
import ArrowRight from '../../images/arrow-right.svg'
import ArrowUp from '../../images/arrow-up.svg'
import { gsap, Power3, TimelineMax } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Element } from 'react-scroll'

gsap.registerPlugin(ScrollTrigger);

const Content2 = () => {
    useEffect(() => {

        gsap.to(".revealText", {
            duration: 5,
            xPercent: 100,
            ease: "none",
            scrollTrigger: {
                trigger: ".revealText",
            }
        })
    }, [])

    return (
        <Element id='about-us' name='about-us'>
            <Content2Container>
                <TopContainer>
                    <TopFlexWrapper>
                        <Text1Container>
                            <Text1>ANTHEM CORE<TextAnimation className="revealText"></TextAnimation></Text1>

                        </Text1Container>
                        <Text2Container>
                            <Text2>Know Who You Work With<TextAnimation className="revealText"></TextAnimation></Text2>
                        </Text2Container>
                        <Text3Container>
                            <Text3>Our Clients came from various backgrounds and problems and that’s where we love to Start<TextAnimation className="revealText"></TextAnimation></Text3>
                        </Text3Container>
                    </TopFlexWrapper>
                </TopContainer>
                <BottomContainer>
                    <BottomLeftContainer>
                        <ArrowImageContainer>
                            <ArrowImage src={ArrowDown}></ArrowImage>
                        </ArrowImageContainer>
                        <BottomCaption1Container>
                            <BottomCaption1>Uncertainty and Problems are our best friend</BottomCaption1>
                        </BottomCaption1Container>
                        <BottomCaption2Container>
                            <BottomCaption2>This is why working with us will give you different experiences.</BottomCaption2>
                        </BottomCaption2Container>
                    </BottomLeftContainer>
                    <BottomCenterContainer>
                        <ArrowImageContainer>
                            <ArrowImage src={ArrowRight}></ArrowImage>
                        </ArrowImageContainer>
                        <BottomCaption1Container>
                            <BottomCaption1>We Move Forward and Advancing Together</BottomCaption1>
                        </BottomCaption1Container>
                        <BottomCaption2Container>
                            <BottomCaption2>This is why working with us will give you different experiences.</BottomCaption2>
                        </BottomCaption2Container>
                    </BottomCenterContainer>
                    <BottomRightContainer>
                        <ArrowImageContainer>
                            <ArrowImage src={ArrowUp}></ArrowImage>
                        </ArrowImageContainer>
                        <BottomCaption1Container>
                            <BottomCaption1>Establish Stability of Great Experience Continuosly</BottomCaption1>
                        </BottomCaption1Container>
                        <BottomCaption2Container>
                            <BottomCaption2>This is why working with us will give you different experiences.</BottomCaption2>
                        </BottomCaption2Container>
                    </BottomRightContainer>
                </BottomContainer>
            </Content2Container>
        </Element>
    )
}

export default Content2
