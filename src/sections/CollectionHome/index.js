import React, { useEffect, useState } from 'react'
import { gsap, Power3, TimelineMax } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Element } from 'react-scroll'
import SectionTextSmall from '../../components/SectionTextSmall/index';
import SectionTextMedium from '../../components/SectionTextMedium/index';
import SectionParagraph from '../../components/SectionParagraph/index';
import Button from '../../components/Button/index';
import { Grid } from '@material-ui/core';
import './CollectionHome.css';
import CollectionsApi from '../../config/CollectionsApi';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const CollectionHome = () => {
    const [collection, setCollection] = useState([''])

    useEffect(() => {
        CollectionsApi.detailLatest().then(res => {
            console.log(res);
            setCollection(res);
        })
    }, [])

    return (
        <Element id='about-us' name='about-us'>
            <div className="container-campaign">
                <SectionTextSmall value="COLLECTIONS"></SectionTextSmall>
                <SectionTextMedium value={collection[0].bigTitle}></SectionTextMedium>
                <hr style={{ border: '1px solid white', width: '45px', margin: 'auto' }}></hr>
                <br />
                <SectionParagraph value={collection[0].description}></SectionParagraph>

                <div className="btn-container">
                    <Grid container
                        spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Link to={`/collections/${collection[0].id}`}>
                                <Button type="fill" value="READ THE STORY"></Button>
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Link to={`/collections/`}>
                                <Button value="VIEW ALL CAMPAIGN"></Button>
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Element>
    )
}

export default CollectionHome
