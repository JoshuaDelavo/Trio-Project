import React, { useEffect, useRef, useState } from 'react'
import { TextMarquee2, TextMarquee1, Content1Container, ImageBackgroundContainer, ImageCurtain, ImageBackground, CardContainer, ImageCrop, ImageCrop1, CardWrapper, FirstCaption, SecondCaption, Marquee2, Marquee1, CaptionWrapper, Button, ChangingText } from './Content1Element'
import imgSrc from '../../images/content1-background.png'
import imgSrcXs from '../../images/signature/main_image.png'
import axios from 'axios'

import { gsap, Power3, TimelineMax } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom'
import { Element } from 'react-scroll'
gsap.registerPlugin(ScrollTrigger);


const Content1 = () => {
    const [texts, setTexts] = useState([]);
    const [currentText, setCurrentText] = useState();
    const [counter, setCounter] = useState(0); 
    // const [startChangingText, setStartChangingText] = useState(false);

    const ref1 = useRef([]);
    const ExperienceRef = useRef([]);

    const addToRefs = (el) => {
        if (el && !ref1.current.includes(el)) {
            ref1.current.push(el)
        }
    }
    var tl = new TimelineMax();

    useEffect(() => {

        //Settingup Second Marquee
        gsap.set(ref1.current, {
            x: (i) => i * 1200,
            opacity: 0.3,
            scale: 0.8
        });
        gsap.set(ExperienceRef.current, {
            opacity: 0,
        });
        //Settingup First Marquee/CYO
        gsap.set(".marquee1", {
            x: (i) => i * -1250,
            opacity: 0.3,
            scale: 0.8
        });
        gsap.set(".cyoRef", {
            opacity: 0,
        });
        //settingup Button
        gsap.set(".buttonExplore", {
            opacity: 0
        });
        //settingup imgCurtain
        gsap.set(".imgCurtain", {
            opacity: 1
        });
        //settingup Ref
        gsap.set(ExperienceRef.current, {
            opacity: 0
        })



        //ref1 = marquee2 experience
        tl.to(ref1.current, {
            duration: 3.5,
            ease: Power3.easeOut,
            scale: 1,
            x: "+=3600", //move each box 500px to right
            modifiers: {
                x: gsap.utils.unitize(x => parseFloat(x) % 2400) //force x value to be between 0 and 500 using modulus
            },
        })
            .to(ExperienceRef.current, {
                duration: 0.7,
                ease: Power3.easeOut,
                opacity: 1,
            }, 3)
            .to(ref1.current, {
                duration: 0.7,
                ease: Power3.easeOut,
                opacity: 0,
            }, 3)


            //marquee1/cyo animation
            .to(".marquee1", {
                duration: 3,
                ease: Power3.easeOut,
                scale: 1,
                x: "-=3600", //move each box 500px to right
                modifiers: {
                    x: gsap.utils.unitize(x => parseFloat(x) % 2400) //force x value to be between 0 and 500 using modulus
                }
            }, 0)
            .to(".cyoRef", {
                duration: 0.7,
                ease: Power3.easeOut,
                opacity: 1,
            }, 2.5)
            .to(".marquee1", {
                duration: 0.7,
                ease: Power3.easeOut,
                opacity: 0,
            }, 2.5)

            //animate button
            .to(".buttonExplore", {
                duration: 2,
                ease: Power3.easeOut,
                opacity: 1
            }, 3.2)

            //animate imgCurtain
            .to(".imgCurtain", {
                duration: 5,
                ease: Power3.easeOut,
                opacity: 0
            }, 3.2)


    }, [])

    useEffect(() => {
        let jsonText = {
            "texts": [
                "Anthem",
                "Experience",
                "Website",
                "Apps",

            ]
        }
        setTexts(jsonText.texts)
        setCurrentText(jsonText.texts[0])
        // axios({
        //     method: 'get',
        //     url: 'https://api.npoint.io/c8569918e1c7e2016e2d',
        // }).then(function (response) {
        //     setTexts(response.data.texts)
        //     setCurrentText(response.data.texts[0])
        // })
    }, [])

    //update counter function
    const updateTextPerSecond = () => {
        if (counter === texts.length - 1) {
            const interval = setTimeout(() => {
                setCounter(0)
            }, 5000)
            return () => clearInterval(interval)
        } else {
            const interval = setTimeout(() => {
                setCounter(counter => counter + 1)
            }, 5000)
            return () => clearInterval(interval)
        }
    }

    //timer for changing text
    useEffect(() => {

        gsap.from(ExperienceRef.current, {
            duration: 2,
            x: -40,
            opacity: 0
        })

        updateTextPerSecond()
    }, [counter])

    return (
        <Element id='content1' name='content1'>
            <Content1Container className="content1">
                <ImageBackgroundContainer>
                    <ImageBackground src={imgSrcXs}></ImageBackground>
                    <ImageCurtain className="imgCurtain"></ImageCurtain>
                </ImageBackgroundContainer>
                <ImageCrop>
                    <CardContainer>
                        <CardWrapper>
                            <CaptionWrapper className="Wrapper">
                                <FirstCaption>
                                    <p className="cyoRef">Create Your Own</p>
                                    <TextMarquee1>
                                        <Marquee1 className="marquee1">Create Your Own Experience with Anthem</Marquee1>
                                        <Marquee1 className="marquee1">Create Your Own Experience with Anthem</Marquee1>
                                    </TextMarquee1>
                                </FirstCaption>
                            </CaptionWrapper>
                            <CaptionWrapper className="Wrapper">
                                <SecondCaption>
                                    <ChangingText ref={ExperienceRef}>{texts[counter]}</ChangingText>
                                    <TextMarquee2>
                                        <Marquee2 ref={addToRefs}>Experience with Anthem, Create Your Own</Marquee2>
                                        <Marquee2 ref={addToRefs}>Experience with Anthem, Create Your Own</Marquee2>
                                    </TextMarquee2>
                                </SecondCaption>
                            </CaptionWrapper>
                            <Button to="story" className="buttonExplore">
                                Explore Works
                        </Button>
                        </CardWrapper>
                    </CardContainer>
                </ImageCrop>
                <ImageCrop1>
                </ImageCrop1>



                {/* <TestMarquee /> */}
            </Content1Container >
        </Element>
    )
}

export default Content1
