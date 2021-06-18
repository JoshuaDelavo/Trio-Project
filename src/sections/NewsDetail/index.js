import React, { useEffect } from 'react'
import { Element } from 'react-scroll'
import SectionTextMedium from '../../components/SectionTextMediumNews/index';
import SectionParagraph from '../../components/SectionParagraphNews/index';
import './Detail.css';
import NewsApi from '../../config/NewsApi';
import { useState } from 'react';
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

    let iconStyles = { color: "white", fontSize: "1.5em", marginLeft: "1em" };
    let arrow = { color: "white", fontSize: "1.5em", marginRight: "0.5em" };

    return (
        <Element id='about-us' name='about-us'>
            <div className="container-news">
                <Link to="/News">
                    <p className="backToArticles"><IoIosArrowBack style={arrow}> </IoIosArrowBack>back to all articles</p>
                </Link>
                <br />
                <br />
                <SectionTextMedium value={detail.title}></SectionTextMedium>
                <br />
                <div class="underTitle">
                    <div class="posted">
                        <SectionParagraph value={"Posted on : " + new Date(detail.published_at)}></SectionParagraph>
                    </div>
                    <div class="iconContainer">
                        <GrTwitter style={iconStyles}></GrTwitter>
                        <RiFacebookCircleFill style={iconStyles}></RiFacebookCircleFill>
                        <IoMdCopy style={iconStyles}></IoMdCopy>
                    </div>
                </div>
                <br />
                <SectionParagraph value={detail.article}
                ></SectionParagraph>
            </div>
        </Element>
    )
}

export default NewsDetails
