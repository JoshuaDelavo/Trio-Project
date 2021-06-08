import React, { useEffect, useState } from 'react'
// import { gsap, Power3, TimelineMax } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Element } from 'react-scroll'
import SectionTextSmall from '../../components/SectionTextSmall/index';
import SectionTextMedium from '../../components/SectionTextMedium/index';
import SectionParagraph from '../../components/SectionParagraph/index';
import Button from '../../components/Button/index';
import { Card, Grid } from '@material-ui/core';
import './CollectionHome.css';
import CollectionsApi from '../../config/CollectionsApi';
import { Link } from 'react-router-dom';
import { baseURL } from '../../config/';

// gsap.registerPlugin(ScrollTrigger);

const CollectionHome = () => {
    const [collection, setCollection] = useState([]);
    useEffect(() => {
        CollectionsApi.detailLatest().then(res => {
            // console.log(res);
            setCollection(res);
        })
    }, [])


    return (
        <Element id='about-us' name='about-us'>
            <div className="container-campaign">
                <SectionTextSmall value="COLLECTIONS"></SectionTextSmall>
                {
                    collection.map((collection, i) => {
                        return <React.Fragment key={collection.id}>
                            <SectionTextMedium value={collection.bigTitle}></SectionTextMedium>
                            <hr style={{ border: '1px solid white', width: '45px', margin: 'auto' }}></hr>
                            <br />
                            <SectionParagraph value={collection.description}></SectionParagraph>
                            <Grid container={true} spacing={2} >
                                <Grid item xs={12} container={true}>
                                    <img src={baseURL + collection.picture1.url} className="image1" ></img>
                                    <img src={baseURL + collection.picture3.url} className="image3" ></img>
                                </Grid>
                                <Grid item  xs={12} container={true}>
                                    <img src={baseURL + collection.picture2.url} className="image2" ></img>
                                </Grid>
                            </Grid>

                            <div className="btn-container">
                                <Grid container={true}
                                    spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <Link to={`/collections/${collection.id}`}>
                                            <Button type="fill" value="READ THE STORY" ></Button>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Link to={`/collections/`}>
                                            <Button value="VIEW ALL CAMPAIGN"></Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </div>
                        </React.Fragment>
                    })
                }

            </div>
        </Element>
    )
}

export default CollectionHome
