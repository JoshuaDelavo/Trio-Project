import React, { useEffect } from 'react'
import AboutUs from '../../config/AboutUsApi';
import { useState } from 'react';
import { baseURL } from '../../config/';
import Slider from "react-slick";
import './Carousel2.css';
import SectionTextMedium from '../../components/SectionTextMedium/index';



const AboutUsSlide1 = () => {
  const [slideOne, setSlideOne] = useState([]);
  const [Slide, setSlide] = useState(5);
  const [imageIndex, setImageIndex] = useState(0);
  const showButton = () => {
    if (window.innerWidth < 768) {
      setSlide(1)
    }
    else if (window.innerWidth >= 768 && window.innerWidth <= 1366) {
      setSlide(1)
    }

    else {
      setSlide(1)
    }
  };
  
  useEffect(() => {
    AboutUs.findSlider2().then(res => {
      setSlideOne(res);
      showButton();
    })
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: Slide,
    centerMode: true,
    beforeChange: (current, next) => setImageIndex(next),
  };

  window.addEventListener('resize', showButton)

  return (
    <div className="app">
      <Slider {...settings}>{
        slideOne.map((slideOne, i) => {
          return (
            <div key={slideOne.id} className={i === imageIndex ? "slide3 activeSlide" : "slide3"}>
              <SectionTextMedium value={slideOne.line1}></SectionTextMedium>
              <SectionTextMedium value={slideOne.line2}></SectionTextMedium>
            </div>
          )
        })
      }
      </Slider>
    </div >
  )
}

export default AboutUsSlide1