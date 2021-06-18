import React, { useEffect } from 'react'
import { Element } from 'react-scroll'
import './FullScreenImageCenteredContent.css';
import Button from '../../components/Button/index';
import SectionTextSmall from '../../components/SectionTextSmall/index';
import SectionTextBig from '../../components/SectionTextBig/index';
import HomeTopCoverApi from '../../config/HomeTopCoverApi';
import NewsApi from '../../config/NewsApi';
import NewsTopCoverApi from '../../config/NewsTopCoverApi';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { baseURL } from '../../config';
import { Fade } from '@material-ui/core';

const FullScreenImageCenteredContent = () => {
    const [homeTopCover, setHomeTopCover] = useState({ backgroundImage: [''] });
    const [imgLoaded, setImgLoaded] = useState(false);
    const [apiLoaded, setApiLoaded] = useState(false);
    const [cover, setCover] = useState([]);

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
        NewsTopCoverApi.find().then(res => {
            setCover(res.image);
            console.log("top cover", res);
        })

    }, [])

    const textAndButton = (
        <div className="container-text">
            <SectionTextBig value={"NEWS"}></SectionTextBig>
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
                <div className="container-image-2" style={{ backgroundImage: `url("${baseURL}${cover.url}")` }}>
                    {textAndButton}
                </div>
            </Fade>
        </Element>
    )
}

export default FullScreenImageCenteredContent
