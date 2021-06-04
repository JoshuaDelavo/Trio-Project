import React, { useEffect, Component } from 'react'
import { CarouselContainer, FirstCaption, ClientLogo, SecondCaption, Button, ImageBackgroundContainer, ImageBackground, ImageCrop, ImageCrop2, ColCustom, RowCustom, Tulisan } from './CarouselElement'
import HavillaLogo from '../../images/havilla_logo.svg'
import HavillaLaptop from '../../images/havilla_laptop.png'
import { Col, Row } from 'react-bootstrap';
import Flickity from 'react-flickity-component'
import { Carousel } from 'react-responsive-carousel';
import { Element } from 'react-scroll'
import CelebritiesApi from '../../config/CelebritiesApi';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { baseURL } from '../../config/';
import Slider from "react-slick";
import './Carousel.css';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import SectionTextSmall from '../../components/SectionTextSmall/index';
import SectionParagraph from '../../components/SectionParagraph/index';


const ClientCarousel = () => {
    const [celeb, setCeleb] = useState([]);
    useEffect(() => {
        CelebritiesApi.find().then(res => {
            setCeleb(res);
            console.log(celeb);
        })
    }, [])

    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <FaArrowRight />
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <FaArrowLeft />
          </div>
        );
      };
    
      const [imageIndex, setImageIndex] = useState(0);
    
      const settings = {
        dots:true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        centerMode: true,
        beforeChange: (current, next) => setImageIndex(next),
      };

    return (
      <div className="app">
        <Slider {...settings}>{
              celeb.map((cek, i) => {
                return (
                  <div className={i === imageIndex ? "slide activeSlide" : "slide"}>
                  <img src={baseURL + (cek.photo[0].url)} ></img>
                  <br></br>
                  <SectionParagraph value={cek.name}></SectionParagraph>
                  </div>
                )
              })
            } 
        </Slider>
      </div >
    )
}

export default ClientCarousel
