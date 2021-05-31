import React, { useEffect } from 'react'
import { Element } from 'react-scroll'
import './FullScreenImageCenteredContent.css';
import Button from '../../components/Button/index';
import SectionTextSmall from '../../components/SectionTextSmall/index';
import SectionTextBig from '../../components/SectionTextBig/index';
import HomeTopCoverApi from '../../config/HomeTopCoverApi';
import CelebritiesApi from '../../config/CelebritiesApi';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { baseURL } from '../../config/';

const FullScreenImageCenteredContent = () => {
    const [homeTopCover, setHomeTopCover] = useState({ backgroundImage: [''] });
    const [celeb, setCeleb] = useState({ photo: [''] });
    useEffect(() => {
        CelebritiesApi.find().then(res => {
            setCeleb(res[0]);
            console.log(celeb);

        });
        HomeTopCoverApi.find().then(res => {
            console.log(res);
            setHomeTopCover(res);
        })
    }, [])

    return (
        <Element id='about-us' name='about-us'>
            <div className="container-image" style={{ backgroundImage: `url("${baseURL}${celeb.photo[0].url}")` }}>
                <div className="container-text">
                    <SectionTextSmall value={homeTopCover.smallTitle}></SectionTextSmall>
                    <SectionTextBig value={homeTopCover.bigTitle}></SectionTextBig>
                    <Link to={`/${homeTopCover.buttonLink}`}>
                        <Button value={homeTopCover.buttonText} customWidth={'auto'}></Button>
                    </Link>
                </div>
            </div>
        </Element>
    )
}

export default FullScreenImageCenteredContent
