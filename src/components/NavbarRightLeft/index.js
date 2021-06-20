import React, { useState, useEffect } from "react";
import {
  Nav,
  NavTulisan,
  NavbarContainer,
  NavLogo,
  NavBurgerIcon,
  NavEditIcon,
} from "./NavbarElement";
import Scroll from "react-scroll";
import { RiMenu2Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import CompanyApi from "../../config/CompanyApi";
import { baseURL } from "../../config/";
import { Fade } from "@material-ui/core";
import { Link } from "react-router-dom";

const ScrollLink = Scroll.Link;

const NavbarRightLeft = ({ toggle, toggle2, hamburgerOpen, conciergeOpen }) => {
  const [logo, setLogo] = useState({ logo: [""] });
  const [imgLoaded, setImgLoaded] = useState(false);

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

      setLogo(res);
    });
  }, []);
  return (
    <Nav>
      <Fade in={imgLoaded}>
        <NavbarContainer>
          <NavBurgerIcon onClick={toggle}>
            {hamburgerOpen ? (
              ""
            ) : (
              <NavTulisan>
                <RiMenu2Line onClick={toggle}></RiMenu2Line> MENU
              </NavTulisan>
            )}
            <NavEditIcon >
              <RiMenu2Line onClick={toggle}></RiMenu2Line>
            </NavEditIcon>
          </NavBurgerIcon>
          <NavLogo to="/">
            <img src={baseURL + logo.logo.url} alt=""></img>
          </NavLogo>
            <NavTulisan onClick={toggle2}>
              THE CONCIERGE{" "}
              {conciergeOpen ? "" : <BiEditAlt onClick={toggle2}></BiEditAlt>}
            </NavTulisan>
          <NavEditIcon onClick={toggle2}>
            {conciergeOpen ? "" : <BiEditAlt onClick={toggle2}></BiEditAlt>}
          </NavEditIcon>
        </NavbarContainer>
      </Fade>
    </Nav>
  );
};

export default NavbarRightLeft;
