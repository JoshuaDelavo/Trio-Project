import React, { useEffect } from 'react'
import { CarouselContainer, FirstCaption, ClientLogo, SecondCaption, Button, ImageBackgroundContainer, ImageBackground, ImageCrop, ImageCrop2, ColCustom, RowCustom } from './CarouselElement'
import HavillaLogo from '../../images/havilla_logo.svg'
import HavillaLaptop from '../../images/havilla_laptop.png'
import { Col } from 'react-bootstrap';
import Flickity from 'react-flickity-component'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Element } from 'react-scroll'
import CelebritiesApi from '../../config/CelebritiesApi';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { baseURL } from '../../config/';
const ClientCarousel = () => {
    const [celeb, setCeleb] = useState([]);
    useEffect(() => {
        CelebritiesApi.find().then(res => {
            setCeleb(res);
            console.log(celeb);
        })
    }, [])
    return (
        <Element id='works' name='works'>
            <Carousel>



                {
                    celeb.map((cek, i) => {
                        return (
                            <CarouselContainer>
                                <ImageCrop>
                                </ImageCrop>
                                <ImageCrop2>
                                </ImageCrop2>
                                <FirstCaption>POWERED BY ANTHEM</FirstCaption>
                                <RowCustom>
                                    <ColCustom xs={12} lg={4} lg={{ order: 'first' }}>
                                        <ClientLogo src={HavillaLogo} style={{ width: '300px' }}></ClientLogo>
                                        <SecondCaption>Create Your <br /> Own Tea Blend,<br /> Digitally</SecondCaption>
                                        <Button to='/story'>
                                            Read Stories
                                        </Button>
                                    </ColCustom>
                                    <Col xs={12} lg={8} xs={{ order: 'first' }}>
                                        <ImageBackground src={baseURL + (cek.photo[0].url)} className="d-block mx-auto img-fluid"></ImageBackground>
                                    </Col>
                                </RowCustom>
                            </CarouselContainer>

                        )
                    })
                }


                <CarouselContainer>
                    <ImageCrop>
                    </ImageCrop>
                    <ImageCrop2>
                    </ImageCrop2>
                    <FirstCaption>POWERED BY ANTHEM</FirstCaption>
                    <RowCustom>
                        <ColCustom xs={12} lg={4} lg={{ order: 'first' }}>
                            <ClientLogo src={HavillaLogo} style={{ width: '300px' }}></ClientLogo>
                            <SecondCaption>Create Your <br /> Own Tea Blend,<br /> Digitally</SecondCaption>
                            <Button to='/story'>
                                Read Stories
                            </Button>
                        </ColCustom>
                        <Col xs={12} lg={8} xs={{ order: 'first' }}>
                            <ImageBackground src={HavillaLaptop} className="d-block mx-auto img-fluid"></ImageBackground>
                        </Col>
                    </RowCustom>
                </CarouselContainer>
            </Carousel>
        </Element >
    )
}

export default ClientCarousel
