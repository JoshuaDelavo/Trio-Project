import React, { useEffect } from 'react'
import { Element } from 'react-scroll'
import SectionTextSmall from '../../components/SectionTextSmall/index';
import SectionTextMedium from '../../components/SectionTextMedium/index';
import SectionParagraph from '../../components/SectionParagraph/index';
import './CelebritiesHome.css';
import CelebritiesApi from '../../config/CelebritiesApi';
import { useState } from 'react';
import ClientCarousel from '../../components/ClientCarousel';

const CelebritiesHome = () => {
    const [homeCelebrities, setHomeCelebrities] = useState([]);

    useEffect(() => {
        CelebritiesApi.home().then(res => {
            setHomeCelebrities(res);
        })
    }, [])

    return (
        <Element id='about-us' name='about-us'>
            <div className="container-celebrities">
                <SectionTextSmall value={homeCelebrities.smallTitle}></SectionTextSmall>
                <SectionTextMedium value={homeCelebrities.bigTitle}></SectionTextMedium>
                <hr style={{ border: '1px solid white', width: '45px', margin: 'auto' }}></hr>
                <br />
                <SectionParagraph value={homeCelebrities.description}
                ></SectionParagraph>
                 <ClientCarousel />
            </div>
        </Element>
    )
}

export default CelebritiesHome
