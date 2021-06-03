import React, { useEffect } from 'react'
import { CarouselContainer, FirstCaption, ClientLogo, SecondCaption, Button, ImageBackgroundContainer, ImageBackground, ImageCrop, ImageCrop2, ColCustom, RowCustom } from './CarouselElement'
import HavillaLogo from '../../images/havilla_logo.svg'
import HavillaLaptop from '../../images/havilla_laptop.png'
import { Col } from 'react-bootstrap';
import Flickity from 'react-flickity-component'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import { Element } from 'react-scroll'
import CelebritiesApi from '../../config/CelebritiesApi';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { baseURL } from '../../config/';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const ClientCarousel = () => {
    const [celeb, setCeleb] = useState([]);
    useEffect(() => {
        CelebritiesApi.find().then(res => {
            setCeleb(res);
            console.log(celeb);
        })
    }, [])

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      

    return (
        <Element id='works' name='works'>
            <Carousel responsive={responsive}>



                {
                    celeb.map((cek, i) => {
                        return (
                                
                                    <Col xs={12} lg={8} xs={{ order: 'first' }}>
                                        <ImageBackground src={baseURL + (cek.photo[0].url)} className="d-block mx-auto img-fluid"></ImageBackground>
                                    </Col>

                        )
                    })
                }


            </Carousel>
        </Element >
    )
}

export default ClientCarousel
