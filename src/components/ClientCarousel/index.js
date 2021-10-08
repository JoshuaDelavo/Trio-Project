import React, { useEffect } from "react";
import CelebritiesApi from "../../config/CelebritiesApi";
import { useState } from "react";
import { baseURL } from "../../config/";
import Slider from "react-slick";
import "./Carousel.css";
import SectionParagraph from "../../components/SectionParagraph/index";
import arrowRight from "../../images/sliderArrowRight.svg";
import arrowLeft from "../../images/sliderArrowLeft.svg";

const ClientCarousel = () => {
  const [celeb, setCeleb] = useState([]);
  const [Slide, setSlide] = useState(5);
  const [imageIndex, setImageIndex] = useState(0);
  const showButton = () => {
    if (window.innerWidth < 768) {
      setSlide(1);
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1366) {
      setSlide(3);
    } else {
      setSlide(5);
    }
  };

  useEffect(() => {
    CelebritiesApi.find().then((res) => {
      setCeleb(res);
      showButton();
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: Slide,
    centerMode: true,
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
          <img
            style={{ marginTop: 125, height: 24, width: 24 }}
            src={arrowRight}
          ></img>
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow">
          <img
            style={{ marginTop: 125, marginLeft: 25, height: 24, width: 24 }}
            src={arrowLeft}
          ></img>
        </div>
      </div>
    ),
    beforeChange: (current, next) => setImageIndex(next),
  };

  window.addEventListener("resize", showButton);

  return (
    <div className="app">
      <Slider {...settings}>
        {celeb.map((cek, i) => {
          return (
            <div
              key={cek.photo[0].id}
              className={i === imageIndex ? "slide activeSlide" : "slide"}
            >
              <img src={baseURL + cek.photo[0].url}></img>
              <div className="judulImage">
                <SectionParagraph value={cek.name}></SectionParagraph>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ClientCarousel;
