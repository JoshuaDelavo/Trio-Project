import React, { useEffect } from "react";
import AboutUs from "../../config/AboutUsApi";
import { useState } from "react";
import { baseURL } from "../../config/";
import Slider from "react-slick";
import "./Carousel1.css";
import SectionParagraph from "../../components/SectionParagraph/index";
import SectionTextBig from "../../components/SectionTextBig/index";
import SectionTextMedium from "../../components/SectionTextMedium/index";
import arrowRight from "../../images/sliderArrowRight.svg";
import arrowLeft from "../../images/sliderArrowLeft.svg";

const AboutUsSlide1 = () => {
  const [slideOne, setSlideOne] = useState([]);
  const [Slide, setSlide] = useState(5);
  const [imageIndex, setImageIndex] = useState(0);
  const showButton = () => {
    if (window.innerWidth < 768) {
      setSlide(1);
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1366) {
      setSlide(3);
    } else {
      setSlide(3);
    }
  };

  useEffect(() => {
    AboutUs.findSlider1().then((res) => {
      setSlideOne(res);
      showButton();
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: Slide,
    // centerMode: true,
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
          <img
            style={{ marginTop: -250, height: 24, width: 24 }}
            src={arrowRight}
          ></img>
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow">
          <img
            style={{ marginLeft: 25, height: 24, width: 24 }}
            src={arrowLeft}
          ></img>
        </div>
      </div>
    ),
    beforeChange: (current, next) => setImageIndex(next),
  };

  window.addEventListener("resize", showButton);

  return (
    <div className="app-aboutUs1">
      <Slider {...settings}>
        {slideOne.map((slideOne, i) => {
          return (
            <div
              key={slideOne.id}
              className={
                i === imageIndex
                  ? "slide-aboutUs1 activeSlide"
                  : "slide-aboutUs1 "
              }
            >
              <div>
                <img
                  style={{ width: 340 }}
                  src={baseURL + slideOne.image.url}
                ></img>
                <br />
                <SectionParagraph
                  value={slideOne.smallTitle}
                ></SectionParagraph>
                <br />
                <div className="slide-title">
                  <SectionTextMedium
                    value={slideOne.bigTitle}
                  ></SectionTextMedium>
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default AboutUsSlide1;
