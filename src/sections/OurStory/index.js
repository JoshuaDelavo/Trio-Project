import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import "./OurStory.css";
import AboutUs from "../../config/AboutUsApi";
import { baseURL } from "../../config";
// import { Fade } from '@material-ui/core';
import SectionTextBig from "../../components/SectionTextBig/index";
import SectionTextMedium from "../../components/SectionTextMedium/index";
import SectionParagraph from "../../components/SectionParagraph/index";
import ReactMarkdown from "react-markdown";
import ShowMoreText from "react-show-more-text";
import Slide1 from "../../components/ClientCarousel/aboutUsSlide1.js";
import Slide2 from "../../components/ClientCarousel/aboutUsSlide2.js";
import { Container } from "@material-ui/core";

const OurStory = () => {
  const [story, setStory] = useState("");
  const [apiLoaded, setApiLoaded] = useState(false);
  const [slideOne, setSlideOne] = useState([]);
  const [slideTwo, setSlideTwo] = useState([]);

  useEffect(() => {
    AboutUs.detailAll().then((res) => {
      console.log("AboutUs", res);
      setStory(res);
      setApiLoaded(true);
    });

    AboutUs.findSlider1().then((res) => {
      console.log("slider1", res);
      setSlideOne(res);
    });

    AboutUs.findSlider2().then((res) => {
      console.log("slider2", res);
      setSlideTwo(res);
    });
  }, []);

  return (
    <Container>
      <div className="container-title">
        <hr
          style={{
            border: "0.2px solid #505050",
            width: "100%",
            margin: "auto",
          }}
        ></hr>
        <div className="container-quotes">
          <p className="section-text-medium-qotes">{story.quotes}</p>
          <br />
          <SectionParagraph value={story.quotesBy}></SectionParagraph>
        </div>
        <hr
          style={{
            border: "0.2px solid #505050",
            width: "100%",
            margin: "auto",
          }}
        ></hr>

        <div className="container-quotes">
          <p className="ourstory-text-title">{story.title2FirstLine}</p>
          <p className="ourstory-text-title">{story.title2SecondLine}</p>
          {story ? (
            <div>
              <img
                src={baseURL + story.articleImage.url}
                className="article-container-fist-img"
              ></img>
            </div>
          ) : (
            ""
          )}
          <p className="section-text-medium-img-det">
            {story.articleDescription}
          </p>
          <br />
          <div className={"wrapper"}>
            <ShowMoreText
              lines={2}
              more={<button className="btn-transparent-art">SHOW MORE</button>}
              less={false}
              onClick={false}
              className={"section-text-medium-art"}
              expanded={false}
              width={2950}
            >
              <div className="article-container-aboutUs">
                <ReactMarkdown>{story.article}</ReactMarkdown>
              </div>
            </ShowMoreText>
          </div>
          <br />
          <br />
          <p className="ourstory-text-title">{story.title3FirstLine}</p>
          <p className="ourstory-text-title-small">{story.title3SecondLine}</p>
          <p className="ourstory-text-title">{story.title3ThirdLine}</p>
          <p className="ourstory-text-title">{story.title3FourthLine}</p>
          <div className="slide-contain1">
            <Slide1 />
          </div>
          <br />
          <p className="ourstory-text-title">{story.title4FirstLine}</p>
          <br />
          <br />
          <hr
            style={{
              border: "0.2px solid #505050",
              width: "100%",
              margin: "auto",
            }}
          ></hr>
          <div className="container-quotes">
            <p className="section-text-medium-qotes">{story.quotes2}</p>
            <SectionParagraph value={story.quotes2By}></SectionParagraph>
          </div>
          <hr
            style={{
              border: "0.2px solid #505050",
              width: "100%",
              margin: "auto",
            }}
          ></hr>
          <div className="slide-contain">
            <Slide2 />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OurStory;
