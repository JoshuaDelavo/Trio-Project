import React, { useEffect, Component } from 'react'
import { CarouselContainer, FirstCaption, ClientLogo, SecondCaption, Button, ImageBackgroundContainer, ImageBackground, ImageCrop, ImageCrop2, ColCustom, RowCustom } from './CarouselElement'
import HavillaLogo from '../../images/havilla_logo.svg'
import HavillaLaptop from '../../images/havilla_laptop.png'
import { Col, Row } from 'react-bootstrap';
import Flickity from 'react-flickity-component'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Element } from 'react-scroll'
import CelebritiesApi from '../../config/CelebritiesApi';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { baseURL } from '../../config/';
//import Carousel from "react-multi-carousel";
//import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const ClientCarousel = () => {
    const [celeb, setCeleb] = useState([]);
    useEffect(() => {
        CelebritiesApi.find().then(res => {
            setCeleb(res);
            console.log(celeb);
        })
    }, [])

    const settings = {
        dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      };


    return (
        <Element id='works' name='works'>
            <Slider {...settings}>
                {
                    celeb.map((cek, i) => {
                        return (

                              <Col xs={12} lg={8} xs={{ order: 'first' }}>
                                <ImageBackground src={baseURL + (cek.photo[0].url)} className="d-block mx-auto img-fluid"></ImageBackground>
                               </Col>

                        )
                    })
                }
                
            </Slider>
        </Element >
    )
}

export default ClientCarousel
