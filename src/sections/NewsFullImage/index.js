import React, { useEffect } from 'react'
import { Element } from 'react-scroll'
import './FullScreenImageCenteredContent.css';
import SectionTextMedium from '../../components/SectionTextMedium/index';
import NewsTopCoverApi from '../../config/NewsTopCoverApi';
import { useState } from 'react';
import { baseURL } from '../../config';
import { Fade } from '@material-ui/core';

const NewsFullImage = () => {
    // const [homeTopCover, setHomeTopCover] = useState({ backgroundImage: [''] });
    const [imgLoaded, setImgLoaded] = useState(false);
    const [apiLoaded, setApiLoaded] = useState(false);
    const [cover, setCover] = useState([]);

    useEffect(() => {
        NewsTopCoverApi.find().then(res => {
            new Promise((resolve, reject) => {
                const loadImg = new Image()
                loadImg.src = baseURL + res.image.url
                loadImg.onload = () => {
                    resolve(baseURL + res.image.url)
                }
                loadImg.onerror = err => reject(err)
            }).then(() => setImgLoaded(true))
                .catch(err => console.log("Failed to load images", err))

            setCover(res);
            setApiLoaded(true);
        })
        // NewsTopCoverApi.find().then(res => {
        //     setCover(res.image);
        //     console.log("top cover", res);
        // })

    }, [])

    const textAndButton = (
        <div className="container-text">
            <SectionTextMedium value={"NEWS"}></SectionTextMedium>
        </div>
    )

    return (
        <Element id='about-us' name='about-us'>
            <Fade in={apiLoaded}>
                <div className="container-image-news">
                    {textAndButton}
                </div>
            </Fade>
            <Fade in={imgLoaded}>
                <div className="container-image-2-news" style={{ backgroundImage: `url("${baseURL}${cover.image ? cover.image.url : ''}")` }}>
                    {textAndButton}
                </div>
            </Fade>
        </Element>
    )
}

export default NewsFullImage
