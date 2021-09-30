import React, { useEffect } from 'react'
import { Element } from 'react-scroll'
import SectionTextSmall from '../../components/SectionTextSmall/index';
import SectionTextMedium from '../../components/SectionTextMedium/index';
import SectionParagraph from '../../components/SectionParagraph/index';
import './CelebritiesHome.css';
import CelebritiesApi from '../../config/CelebritiesApi';
import { useState } from 'react';
import ClientCarousel from '../../components/ClientCarousel';
import { Container } from '@material-ui/core';

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
                <hr style={{ border: '1px solid #D2D2D2', width: 72, margin: 'auto', marginTop: 35, marginBottom: 15 }}></hr>

                <br />
                <Container style={{ padding: '0px 2rem' }}>
                    <SectionParagraph value={homeCelebrities.description}></SectionParagraph>
                </Container>
                <ClientCarousel />
            </div>
        </Element>
    )
}

export default CelebritiesHome
