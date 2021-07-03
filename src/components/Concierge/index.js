import React, { useState, useEffect } from "react";
import {
  NavCon,
  NavBurgerIcon,
  ConMenu,
  ConItem,
  ButtonText,
  BottomIcon,
} from "./ConciergeElements";
import { FaTimes, FaBars } from "react-icons/fa";
import SectionTextSmall from "../../components/SectionTextSmall/index";
import SectionTextMedium from "../../components/SectionTextMedium/index";
import SectionParagraph from "../../components/SectionParagraph/index";
import Scroll from "react-scroll";
import Question from "./Question";
import Thanks from "./Thanks";
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlinePhone,
} from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import { Button, TextField } from "@material-ui/core";
const ScrollLink = Scroll.Link;

const Consiegre = ({ toggle2, conciergeOpen }) => {
  const [events, setEvents] = useState([]);
  const paragraph =
    "Fashion Concierge is interactive way to send your inquiry to";
  const paragraph2 =
    "Sebastian Gunawan and team. Tell us what you have in mind. Your color";
  const paragraph3 = "preferences, your style preferences, or even upload your";
  const paragraph4 = "rough sketches about the art piece of your dream";
  const handleonProps = () => {
    document.getElementById('first').className = 'hide';
    document.getElementById('second').className = 'hide';
    document.getElementById('third').className = 'show';
  }
  const goPage2 = () => {
    document.getElementById('first').hidden = true;
    document.getElementById('second').hidden = false;
    document.getElementById('third').hidden = true;
  }
  return (
    <NavCon conciergeOpen={conciergeOpen}>
      <NavBurgerIcon onClick={toggle2}>
        {conciergeOpen ? <FaTimes onClick={toggle2}></FaTimes> : ""} CLOSE
      </NavBurgerIcon>

      <ConMenu id='first' className='show'>
        <ConItem >
          <div>
            <SectionTextMedium value="WELCOME TO"></SectionTextMedium>
            <SectionTextMedium value="THE FASHION CONCIERGE"></SectionTextMedium>
            <hr
              style={{
                border: "1px solid white",
                width: "45px",
                margin: "auto",
              }}
            ></hr>
            <br />
            <SectionParagraph value={paragraph}> </SectionParagraph>
            <SectionParagraph value={paragraph2}> </SectionParagraph>
            <SectionParagraph value={paragraph3}> </SectionParagraph>
            <SectionParagraph value={paragraph4}> </SectionParagraph>
          </div>
        </ConItem>
        <ConItem >
          <ButtonText value="Start" onClick={goPage2} >START THE EXPERIENCE</ButtonText>
        </ConItem>
        <br />
        <br />
        <ConItem >
          <SectionTextSmall value="Need connect fast ? We are available here"></SectionTextSmall>
        </ConItem>
        <ConItem >
          <BottomIcon>
            <AiOutlineInstagram></AiOutlineInstagram>
            <AiOutlineWhatsApp
              style={{ marginLeft: "2rem" }}
            ></AiOutlineWhatsApp>
            <IoMailOutline style={{ marginLeft: "2rem" }}></IoMailOutline>
            <AiOutlinePhone style={{ marginLeft: "2rem" }}></AiOutlinePhone>
          </BottomIcon>
        </ConItem>
      </ConMenu>
      <ConMenu id='second' hidden >
        <ConItem>
          <Question ></Question>
        </ConItem>
      </ConMenu>
      <ConMenu id='third' hidden>
        <ConItem>
          <Thanks ></Thanks>
        </ConItem>
      </ConMenu>
    </NavCon>
  );
};

export default Consiegre;
