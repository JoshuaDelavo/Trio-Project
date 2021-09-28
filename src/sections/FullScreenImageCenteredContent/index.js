import React, { useEffect } from 'react'
import { Element } from 'react-scroll'
import './FullScreenImageCenteredContent.css';
import Button from '../../components/Button/index';
import SectionTextSmall from '../../components/SectionTextSmall/index';
import SectionTextBig from '../../components/SectionTextBig/index';
import HomeTopCoverApi from '../../config/HomeTopCoverApi';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { baseURL } from '../../config/';
import { Fade } from '@material-ui/core';

const FullScreenImageCenteredContent = () => {
    const [homeTopCover, setHomeTopCover] = useState({ backgroundImage: [''] });
    const [imgLoaded, setImgLoaded] = useState(false);
    const [apiLoaded, setApiLoaded] = useState(false);

    useEffect(() => {
        HomeTopCoverApi.find().then(res => {
            new Promise((resolve, reject) => {
                const loadImg = new Image()

                loadImg.src = baseURL + res.backgroundImage[0].url

                loadImg.onload = () => {
                    resolve(baseURL + res.backgroundImage[0].url)
                }

                loadImg.onerror = err => reject(err)
            }).then(() => setImgLoaded(true))
                .catch(err => console.log("Failed to load images", err))

            setHomeTopCover(res);
            setApiLoaded(true);
        })
    }, [])

    const textAndButton = (
        <div className="container-text">
            <SectionTextSmall value={homeTopCover.smallTitle}></SectionTextSmall>
            <SectionTextBig value={homeTopCover.bigTitle}></SectionTextBig>
            <br/>
            <Link to={`/${homeTopCover.buttonLink}`}>
                <Button value={homeTopCover.buttonText} customWidth={'auto'}></Button>
            </Link>
        </div>
    )

    return (
        <Element id='about-us' name='about-us'>
            <Fade in={apiLoaded}>
                <div className="container-image">
                    {textAndButton}
                </div>
            </Fade>
            <Fade in={imgLoaded}>
                <div className="container-image-2" style={{ backgroundImage: `url("${baseURL}${homeTopCover.backgroundImage[0].url}")` }}>
                    {textAndButton}
                </div>
            </Fade>
        </Element>
    )
}

export default FullScreenImageCenteredContent
