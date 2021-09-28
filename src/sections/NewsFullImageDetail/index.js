import React, { useEffect } from 'react'
import { Element } from 'react-scroll'
import './FullScreenImageCenteredContent.css';
// import SectionTextBig from '../../components/SectionTextBig/index';
// import HomeTopCoverApi from '../../config/HomeTopCoverApi';
import NewsApi from '../../config/NewsApi';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseURL } from '../../config';
import { Fade } from '@material-ui/core';

const NewsFullImageDetail = () => {
    // const [homeTopCover, setHomeTopCover] = useState({ backgroundImage: [''] });
    const [imgLoaded, setImgLoaded] = useState(false);
    // const [apiLoaded, setApiLoaded] = useState(false);
    const [cover, setCover] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        NewsApi.detail(id).then(res => {
            new Promise((resolve, reject) => {
                const loadImg = new Image()

                loadImg.src = baseURL + res.topImage.url

                loadImg.onload = () => {
                    resolve(baseURL + res.topImage.url)
                }

                loadImg.onerror = err => reject(err)
            }).then(() => setImgLoaded(true))
                .catch(err => console.log("Failed to load images", err))
            
            setCover(res.topImage.url);
        })

    }, [])

    return (
        <Element id='about-us' name='about-us'>
            <Fade in={imgLoaded}>
                <div className="container-image-2-news-detail" style={{ backgroundImage: `url("${baseURL}${cover}")` }}>
                </div>
            </Fade>
        </Element>
    )
}

export default NewsFullImageDetail
