import React, { useEffect, useState } from 'react'
import { Element } from 'react-scroll'
import './OurStory.css';
import AboutUs from '../../config/AboutUsApi';
import { baseURL } from '../../config';
// import { Fade } from '@material-ui/core';
import SectionTextBig from '../../components/SectionTextBig/index';
import SectionTextMedium from '../../components/SectionTextMedium/index';
import SectionParagraph from '../../components/SectionParagraph/index';
import ReactMarkdown from "react-markdown";
import ShowMoreText from 'react-show-more-text';
import Slide1 from '../../components/ClientCarousel/aboutUsSlide1.js';
import Slide2 from '../../components/ClientCarousel/aboutUsSlide2.js';


const OurStory = () => {
    const [story, setStory] = useState('');
    const [apiLoaded, setApiLoaded] = useState(false);
    const [slideOne, setSlideOne] = useState([]);
    const [slideTwo, setSlideTwo] = useState([]);

    useEffect(() => {
        AboutUs.detailAll().then(res => {
            console.log("AboutUs", res);
            setStory(res);
            setApiLoaded(true);
        })

        AboutUs.findSlider1().then(res =>{
            console.log("slider1", res);
            setSlideOne(res);
        })

        AboutUs.findSlider2().then(res =>{
            console.log("slider2", res);
            setSlideTwo(res);
        })
        
    }, [])

    return (
        <Element id='our-story' name='our-story'>
            <div className="container-aboutUs">
                <div className="container-title">
                    <hr style={{ border: '0.2px solid #505050', width: '100%', margin: 'auto' }}></hr>
                    <div  className="container-quotes">
                        <div className="container-quotes-main">
                            <p className="section-text-medium-qotes">{story.quotes}</p>
                        </div>
                        <div className="container-quotes-by">
                            <SectionParagraph value={story.quotesBy}></SectionParagraph>
                        </div>
                    </div>
                    <hr style={{ border: '0.2px solid #505050', width: '100%', margin: 'auto' }}></hr>

                    <div className="container-main">
                        <div className='container-title-main1'>
                            <SectionTextBig value={story.title2FirstLine}></SectionTextBig>
                        </div>
                        <div className='container-title-main2'>
                            <SectionTextBig value={story.title2SecondLine}></SectionTextBig>
                        </div>
                        {
                            story ?
                                <div>
                                    <img src={baseURL + story.articleImage.url} className="article-container-fist-img"></img>
                                </div>
                                    
                            :
                            ''
                        }
                        <div className="container-text-aboutUs-art">
                            <p className="section-text-medium-img-det">{story.articleDescription}</p>
                            <ShowMoreText
                                
                                lines={2}
                                more={<button className="btn-transparent-art">SHOW MORE</button>}
                                less={false}
                                onClick={false}
                                className={"section-text-medium-art"}
                                expanded={false}
                                width={2950}
                            >   
                                <div className="article-container-aboutUs">
                                    <ReactMarkdown>{story.article}</ReactMarkdown>
                                </div>
                            </ShowMoreText>
                        </div>

                        <div className="container-main-bot">
                            <div className="main-bot-bigTitle">
                                <SectionTextBig value={story.title3FirstLine}></SectionTextBig>
                            </div>
                            <div className="main-bot-medium">
                                <SectionTextMedium value={story.title3SecondLine}></SectionTextMedium>
                            </div>
                            <div className="main-bot-bigTitle">
                                <SectionTextBig value={story.title3ThirdLine}></SectionTextBig>
                            </div>
                            <div className="main-bot-bigTitle1">
                                <SectionTextBig value={story.title3FourthLine}></SectionTextBig>
                            </div>
                            <div className="slide-contain1">
                                <Slide1 />
                            </div>
                            <div className="container-award">
                                <SectionTextBig value={story.title4FirstLine}></SectionTextBig>
                            </div>
                            <hr style={{ border: '0.2px solid #505050', width: '100%', margin: 'auto' }}></hr>
                            <div  className="container-quotes">
                                <div className="container-quotes-main">
                                    <p className="section-text-medium-qotes">{story.quotes2}</p>
                                </div>
                                <div className="container-quotes-by">
                                    <SectionParagraph value={story.quotes2By}></SectionParagraph>
                                </div>
                            </div>
                            <hr style={{ border: '0.2px solid #505050', width: '100%', margin: 'auto' }}></hr>
                            <div className="slide-contain">
                                <Slide2 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default OurStory
