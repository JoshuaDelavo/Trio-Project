import React, { useEffect, useState } from 'react'
// import { gsap, Power3, TimelineMax } from 'gsap'
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Element } from 'react-scroll'
import SectionTextSmall from '../../components/SectionTextSmall/index';
import SectionTextMedium from '../../components/SectionTextMedium/index';
import SectionParagraph from '../../components/SectionParagraph/index';
import Button from '../../components/Button/index';
import { Card, Grid, Fade, Container } from '@material-ui/core';
import './CollectionHome.css';
import CollectionsApi from '../../config/CollectionsApi';
import { Link } from 'react-router-dom';
import { baseURL } from '../../config/';

// gsap.registerPlugin(ScrollTrigger);

const CollectionHome = () => {
    const [collection, setCollection] = useState([]);
    const [checked, setChecked] = useState(false);
    const [checkedApi, setCheckedApi] = useState(false);

    useEffect(() => {
        CollectionsApi.detailLatest().then(res => {
            // console.log(res);
            console.log("col", res);
            res.map((res, i) => {
                new Promise((resolve, reject) => {
                    const loadImg = new Image()

                    loadImg.src = baseURL + res.picture1.url

                    loadImg.onload = () => {
                        resolve(baseURL + res.picture1.url)
                    }

                    loadImg.onerror = err => reject(err)
                }).then(() => setChecked(true))
                    .catch(err => console.log("Failed to load images", err))
            })
            setCollection(res);
            setCheckedApi(true);
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
                            <hr style={{ border: '1px solid #D2D2D2', width: 72, margin: 'auto', marginTop: 35, marginBottom: 15 }}></hr>
                            <br />
                            <Container style={{padding:'0px 2rem'}}>
                                <SectionParagraph value={collection.description}></SectionParagraph>
                            </Container>
                            <br />
                            <br />
                            <br />
                            <Grid container={true} spacing={2} >
                                <Grid item xs={12} container={true}>
                                    <Fade in={checked} appear>
                                        <img src={baseURL + collection.picture1.url} className="image1" ></img>
                                    </Fade>
                                    <Fade in={checked} appear>
                                        <img src={baseURL + collection.picture3.url} className="image3" ></img>
                                    </Fade>
                                </Grid>
                                <Grid item xs={12} container={true}>
                                    <Fade in={checked} appear>
                                        <img src={baseURL + collection.picture2.url} className="image2" ></img>
                                    </Fade>
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
