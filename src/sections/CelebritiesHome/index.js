import React, { useEffect } from 'react'
import { Element } from 'react-scroll'
import SectionTextSmall from '../../components/SectionTextSmall/index';
import SectionTextMedium from '../../components/SectionTextMedium/index';
import SectionParagraph from '../../components/SectionParagraph/index';
import Button from '../../components/Button/index';
import { Grid } from '@material-ui/core';
import './CelebritiesHome.css';
import CelebritiesApi from '../../config/CelebritiesApi';
import { useState } from 'react';

const CelebritiesHome = () => {
    const [homeCelebrities, setHomeCelebrities] = useState([]);
    const [celebrities, setCelebrities] = useState([]);

    useEffect(() => {
        CelebritiesApi.home().then(res => {
            console.log(res);
            setHomeCelebrities(res);
        })
    }, [])

    useEffect(() => {
        CelebritiesApi.find().then(res => {
            console.log(res);
            setCelebrities(res);
        })
    }, [])


    return (
        <Element id='about-us' name='about-us'>
            <div className="container-campaign">
                <SectionTextSmall value={homeCelebrities.smallTitle}></SectionTextSmall>
                <SectionTextMedium value={homeCelebrities.bigTitle}></SectionTextMedium>
                <hr style={{ border: '1px solid white', width: '45px', margin: 'auto' }}></hr>
                <br />
                <SectionParagraph value={homeCelebrities.description}
                ></SectionParagraph>
            </div>
        </Element>
    )
}

export default CelebritiesHome
