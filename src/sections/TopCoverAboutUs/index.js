import React, { useEffect } from 'react'
import { Element } from 'react-scroll'
import './TopCoverAboutUs.css';
import SectionTextBig from '../../components/SectionTextBig/index';
import SectionParagraph from '../../components/SectionParagraph/index';
import AboutUs from '../../config/AboutUsApi';
import { useState } from 'react';
import { baseURL } from '../../config';
import { Fade } from '@material-ui/core';
import { ReactComponent as Scroll } from '../../images/scrollDown.svg';

const TopCoverAboutUs = () => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [apiLoaded, setApiLoaded] = useState(false);
    const [coverImage, setCoverImage] = useState([]);

    useEffect(() => {
        AboutUs.find().then(res => {
            new Promise((resolve, reject) => {
                const loadImg = new Image()
                loadImg.src = baseURL + res.topImage.url
                loadImg.onload = () => {
                    resolve(baseURL + res.topImage.url)
                }
                loadImg.onerror = err => reject(err)
            }).then(() => setImgLoaded(true))
                .catch(err => console.log("Failed to load images", err))

            console.log(res)
            setCoverImage(res);
            setApiLoaded(true);
        })

    }, [])

    const textTitle = (
        <div className="container-text-img-aboutUs">
            <div className="cover-about-big">
                <p className="ourstory-text-title">{coverImage.titleFirstLine}</p>
                <p className="ourstory-text-title">{coverImage.titleSecondLine}</p>
            </div>
            <div className="cover-about-smal">
                <SectionParagraph value={coverImage.subtitle}></SectionParagraph>
            </div>
            <div className="cover-about-img">
                <div className="cover-about-img-btn">
                    <Scroll />
                </div>
            </div>
        </div>
    )

    return (
        <Element id='about-us' name='about-us'>
            <Fade in={apiLoaded}>
                <div className="container-image-aboutUs">
                    {textTitle}
                </div>
            </Fade>
            <Fade in={imgLoaded}>
                <div className="container-image-2-aboutUs" style={{ backgroundImage: `url("${baseURL}${coverImage.topImage ? coverImage.topImage.url : ''}")` }}>
                    {textTitle}
                </div>
            </Fade>
        </Element>
    )
}

export default TopCoverAboutUs
