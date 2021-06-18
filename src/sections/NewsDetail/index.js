import React, { useEffect } from 'react'
import { Element } from 'react-scroll'
import SectionTextSmall from '../../components/SectionTextSmall/index';
import SectionTextMedium from '../../components/SectionTextMedium/index';
import SectionParagraph from '../../components/SectionParagraphNews/index';
import Button from '../../components/Button/index';
import { Grid } from '@material-ui/core';
import './Detail.css';
import NewsApi from '../../config/NewsApi';
import { useState } from 'react';
import ClientCarousel from '../../components/ClientCarousel';
import { useParams, Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { GrTwitter } from "react-icons/gr";
import { RiFacebookCircleFill } from "react-icons/ri";
import { IoMdCopy } from "react-icons/io";

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

    let iconStyles = { color: "white", fontSize: "1.5em", marginLeft: "1em" };
    let arrow = { color: "white", fontSize: "1.5em", marginRight: "0.5em" };
    let title = { textAlign: "Justify"};
    return (
        <Element id='about-us' name='about-us'>
            <div className="container-celebrities">
                <Link to="/News">
                    <p className="backToArticles"><IoIosArrowBack style={arrow}> </IoIosArrowBack>back to all articles</p>
                </Link>
                <br />
                <br />
                <SectionTextMedium style={title} value={detail.title}></SectionTextMedium>
                <br />
                <div class="iconContainer">
                    <GrTwitter style={iconStyles}></GrTwitter>
                    <RiFacebookCircleFill style={iconStyles}></RiFacebookCircleFill>
                    <IoMdCopy style={iconStyles}></IoMdCopy>
                </div>
                <br />
                <SectionParagraph value={detail.article}
                ></SectionParagraph>
            </div>
        </Element>
    )
}

export default NewsDetails
