import React, { useEffect } from 'react'
import { Element } from 'react-scroll'
import './TopCoverImage.css';
import SectionTextMedium from '../../components/SectionTextMedium/index';
import CollectionsTopCoverApi from '../../config/CollectionsTopCoverApi';
import { useState } from 'react';
import { baseURL } from '../../config';
import { Fade } from '@material-ui/core';

const NewsFullImage = () => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [apiLoaded, setApiLoaded] = useState(false);
    const [coverImage, setCoverImage] = useState([]);

    useEffect(() => {
        CollectionsTopCoverApi.find().then(res => {
            new Promise((resolve, reject) => {
                const loadImg = new Image()
                loadImg.src = baseURL + res.image.url
                loadImg.onload = () => {
                    resolve(baseURL + res.image.url)
                }
                loadImg.onerror = err => reject(err)
            }).then(() => setImgLoaded(true))
                .catch(err => console.log("Failed to load images", err))

            console.log(res)
            setCoverImage(res);
            setApiLoaded(true);
        })

    }, [])

    const textAndButton = (
        <div className="container-text">
            <SectionTextMedium value={"OUR COLLECTIONS"}></SectionTextMedium>
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
                <div className="container-image-2-news" style={{ backgroundImage: `url("${baseURL}${coverImage.image ? coverImage.image.url : ''}")` }}>
                    {textAndButton}
                </div>
            </Fade>
        </Element>
    )
}

export default NewsFullImage
