import React, { useEffect } from 'react'
import { Element } from 'react-scroll'
import SectionTextSmall from '../../components/SectionTextSmall/index';
import SectionTextMedium from '../../components/SectionTextMedium/index';
import SectionParagraph from '../../components/SectionParagraph/index';
import Button from '../../components/Button/index';
import { Grid } from '@material-ui/core';
import './Detail.css';
import NewsApi from '../../config/NewsApi';
import { useState } from 'react';
import ClientCarousel from '../../components/ClientCarousel';
import { useParams } from 'react-router-dom';
import { Link } from '@material-ui/icons';

const NewsDetails = () => {
    const [detail, setDetail] = useState([]);
    const [celebrities, setCelebrities] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        NewsApi.detail(id).then(res => {
            console.log('Detail', res);
            setDetail(res);
        })
    }, [])

    // useEffect(() => {
    //     CelebritiesApi.find().then(res => {
    //         // console.log(res);
    //         setCelebrities(res);
    //     })
    // }, [])


    return (
        <Element id='about-us' name='about-us'>
            <div className="container-celebrities">
                <Link to="/News">
                    <p> Back to news landing</p>
                </Link>
                <br />
                <br />
                <SectionTextMedium value={detail.title}></SectionTextMedium>
                <br />
                <SectionParagraph value={detail.article}
                ></SectionParagraph>
            </div>
        </Element>
    )
}

export default NewsDetails
