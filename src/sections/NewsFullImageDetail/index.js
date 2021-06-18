import React, { useEffect } from 'react'
import { Element } from 'react-scroll'
import './FullScreenImageCenteredContent.css';
import SectionTextBig from '../../components/SectionTextBig/index';
import HomeTopCoverApi from '../../config/HomeTopCoverApi';
import NewsApi from '../../config/NewsApi';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { baseURL } from '../../config';
import { Fade } from '@material-ui/core';

const FullScreenImageCenteredContent = () => {
    const [homeTopCover, setHomeTopCover] = useState({ backgroundImage: [''] });
    const [imgLoaded, setImgLoaded] = useState(false);
    const [apiLoaded, setApiLoaded] = useState(false);
    const [cover, setCover] = useState([]);
    const { id } = useParams();

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

        NewsApi.detail(id).then(res => {
            setCover(res.coverImage.formats.thumbnail);
            console.log("detailed", res);
        })

    }, [])

    const textAndButton = (
        <div className="container-text">
            <SectionTextBig value={"NEWS"}></SectionTextBig>
        </div>
    )

    return (
        <Element id='about-us' name='about-us'>
            <Fade in={imgLoaded}>
                <div className="container-image-2" style={{ backgroundImage: `url("${baseURL}${cover.url}")` }}>
                </div>
            </Fade>
        </Element>
    )
}

export default FullScreenImageCenteredContent
