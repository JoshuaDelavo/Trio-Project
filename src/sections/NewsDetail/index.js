import React, { useEffect } from "react";
import { Element } from "react-scroll";
import SectionTextMedium from "../../components/SectionTextMediumNews/index";
import SectionParagraph from "../../components/SectionParagraphNews/index";
import "./Detail.css";
import NewsApi from "../../config/NewsApi";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { GrTwitter } from "react-icons/gr";
import { SiWhatsapp } from "react-icons/si";
import { RiFacebookCircleFill } from "react-icons/ri";
import { IoMdCopy } from "react-icons/io";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import ReactMarkdown from "react-markdown";
import { render } from "react-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
const NewsDetails = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    NewsApi.detail(id).then((res) => {
      console.log("Detail", res);
      setDetail(res);
    });
  }, []);
  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    copy();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  let iconStyles = { color: "white", fontSize: "1.5em", marginLeft: "1em" };
  let iconStyles2 = { color: "white", fontSize: "1.5em" };
  let arrow = { color: "white", fontSize: "1.5em", marginRight: "0.5em" };
  var dateFormat = require("dateformat");

  return (
    <Element id="about-us" name="about-us">
      <div className="container-news">
        <Link to="/News" style={{ textDecoration: "none" }}>
          <p className="backToArticles">
            <IoIosArrowBack style={arrow}> </IoIosArrowBack>back to all articles
          </p>
        </Link>
        <br />
        <br />
        <p className="article-title">{detail.title}</p>
        <br />
        <div className="underTitle">
          <div className="posted">
            <SectionParagraph
              value={
                "Posted on : " +
                dateFormat(detail.published_at, "dS mmmm yyyy, H:MM ")
              }
            ></SectionParagraph>
          </div>
          <div className="iconContainer">
            <WhatsappShareButton
              message="Testing function of react"
              title="React"
              url="https://reactjs.org/"
            >
              <SiWhatsapp style={iconStyles}></SiWhatsapp>
            </WhatsappShareButton>

            <FacebookShareButton
              url="https://facebook.com/"
              quote={"Belajar React"}
              hashtag="#react"
            >
              <RiFacebookCircleFill style={iconStyles}></RiFacebookCircleFill>
            </FacebookShareButton>

            <IoMdCopy style={iconStyles} onClick={handleClick}></IoMdCopy>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                {"Link Copied! " + window.location.href}
              </Alert>
            </Snackbar>
          </div>
        </div>
        <div className="iconContainer2">
          <WhatsappShareButton
            message="Testing function of react"
            title="React"
            url="https://reactjs.org/"
          >
            <SiWhatsapp style={iconStyles}></SiWhatsapp>
          </WhatsappShareButton>

          <FacebookShareButton
            url="https://facebook.com/"
            quote={"Belajar React"}
            hashtag="#react"
          >
            <RiFacebookCircleFill style={iconStyles}></RiFacebookCircleFill>
          </FacebookShareButton>

          <IoMdCopy style={iconStyles} onClick={handleClick}></IoMdCopy>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              {"" + window.location.href}
            </Alert>
          </Snackbar>
        </div>
        <br />
        <div className="article-container">
          <ReactMarkdown>{detail.article}</ReactMarkdown>
        </div>
      </div>
    </Element>
  );
};

export default NewsDetails;
