import React, { useState, useEffect } from "react";
import {
  Nav,
  NavTulisan,
  NavbarContainer,
  NavLogo,
  NavBurgerIcon,
  NavEditIcon,
  NavBurgerText,
  NavBurgerImage,
  ConciergeImage
} from "./NavbarElement";
// import { FaBars } from "react-icons/fa";
// import LogoAnthem from "../../images/logo_anthem.svg";
// import Scroll from "react-scroll";
// import { RiMenu2Line } from "react-icons/ri";
// import { BiEditAlt } from "react-icons/bi";
import CompanyApi from "../../config/CompanyApi";
import { baseURL } from "../../config/";
import { Fade } from "@material-ui/core";
import { Link } from "react-router-dom";
import burgerMenuIcon from '../../images/burger_menu.svg'
import conciergeIcon from '../../images/concierge_icon.svg'
import Logos from '../../images/logo_sebastian.svg'
import useDocumentScrollThrottled from '../Header/useDocumentScrollThrottled'
// const ScrollLink = Scroll.Link;

const NavbarRightLeft = ({ toggle, toggle2, hamburgerOpen, conciergeOpen }) => {
  const [logo, setLogo] = useState({ logo: [""] });
  const [imgLoaded, setImgLoaded] = useState(false);
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    CompanyApi.find().then((res) => {
      new Promise((resolve, reject) => {
        const loadImg = new Image();

        loadImg.src = baseURL + res.logo.url;

        loadImg.onload = () => {
          resolve(baseURL + res.logo.url);
        };

        loadImg.onerror = (err) => reject(err);
      })
        .then(() => setImgLoaded(true))
        .catch((err) => console.log("Failed to load images", err));

      // console.log(res);
      setLogo(res);
    });
  }, []);

  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  // const shadowStyle = shouldShowShadow ? 'shadow' : '';
  const hiddenStyle = shouldHideHeader ? 'hidden' : '';

  return (
    <Nav style={hiddenStyle ? { backgroundColor: "rgba(1, 1, 1, 0.7)", backdropFilter: "blur(3px)" } : { backgroundColor: "transparent" }}>
      <Fade in={imgLoaded}>
        <NavbarContainer style={hiddenStyle ? { borderBottom: 'none' } : { borderBottom: '1px solid rgba(111, 111, 111, 0.5)' }}>
          <NavBurgerIcon onClick={toggle}>
            <NavBurgerImage src={burgerMenuIcon} onClick={toggle}></NavBurgerImage>
            <NavBurgerText>MENU</NavBurgerText>
          </NavBurgerIcon>
          <NavLogo to="/">
            <img src={Logos} style={{
              width: 175,
              height: 100
            }} alt=""></img>
          </NavLogo>
          <NavTulisan onClick={toggle2}>
            <Link to="/Concierge" style={{ color: 'white', textDecoration: 'none' }}>
              <p style={{ fontSize: 14, float: "left", marginRight: 8 }}>THE CONCIERGE</p>
              <img src={conciergeIcon} onClick={toggle2} style={{ marginTop: -5 }}></img>
            </Link>
          </NavTulisan>
          <NavEditIcon onClick={toggle2}>
            <Link to="/Concierge" style={{ color: 'white' }}>
              <ConciergeImage src={conciergeIcon} onClick={toggle2}></ConciergeImage>
            </Link>
          </NavEditIcon>
        </NavbarContainer>
      </Fade>
    </Nav>
  );
};

export default NavbarRightLeft;
