import React, { useEffect, useState } from "react";
import { Grid, Fade } from "@material-ui/core";
import { Element } from "react-scroll";
import "./NewsLanding.css";
import NewsApi from "../../config/NewsApi";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";
import { baseURL } from "../../config";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyLoad from "react-lazyload";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ReactComponent as Arrow } from '../../images/arrow-sort.svg';
import SectionTextSmall from '../../components/SectionTextSmall/index';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const NewsLanding = () => {
  // const [ourCollections, setOurCollections] = useState([]);
  const [checked, setChecked] = useState(false);
  // const [checkedApi, setCheckedApi] = useState(false);
  const [data, setData] = useState([]);
  // const [dataLength, setDataLength] = useState();
  const [sortType, setSortType] = useState("published_at");
  // const [ourCollectionsAll, setOurCollectionsAll] = useState([]);

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 0,
  };
  useEffect(() => {
    NewsApi.find().then((res) => {
      console.log("col", res);
      res.map((res, i) => {
        new Promise((resolve, reject) => {
          const loadImg = new Image();
          loadImg.src = baseURL + res.coverImage.url;
          loadImg.onload = () => {
            resolve(baseURL + res.coverImage.url);
          };
          loadImg.onerror = (err) => reject(err);
        })
          .then(() => setChecked(true))
          .catch((err) => console.log("Failed to load images", err));
      });
      const sortArray = (type) => {
        const types = {
          id: "id",
          published_at: "published_at",
          updated_at: "updated_at",
          title: "title",
        };
        const sortProperty = types[type];
        const sorted1 = [...res].sort(
          (a, b) => a[sortProperty] - b[sortProperty],
        );
        const sorted2 = [...res]
          .sort((b, a) => a[sortProperty] - b[sortProperty])
          .reverse();
        if (sortType === "id") {
          setData(sorted1);
          console.log("Sorted1", sorted1);
        } else {
          setData(sorted2);
          console.log("Sorted2", sorted2);
        }
      };
      sortArray(sortType);
      // setOurCollections(res);
      // setCheckedApi(true);
      console.log("sort2", sortType);
    });

    // NewsApi.find().then((res) => {
    //   setOurCollectionsAll(res);
    // });
  }, [sortType]);

  const useStyles = makeStyles((theme) => ({
    button: {
      display: "block",
      marginTop: theme.spacing(2),
    },
    formControl: {
      width: 200,
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  // const refreshPage = () => {
  //   window.location.reload();
  // };
  var dateFormat = require('dateformat');
  return (
    <Element id="news" name="news">
      <div className="container-news-landing">
        <FormControl className={classes.formControl}>
          <InputLabel id="select-type" className="select-selected2" style={{ color: "White" }}>
            Sort By :
            {/* <Arrow className="style-arrow-news" /> */}
          </InputLabel>
          <Select
            labelId="select-type"
            id="select-type-id"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="select-selected"
            style={{
              color: "lightgray",
              fontSize: 13,
              fontStyle: "normal",
              fontWeight: 300,
              letterSpacing: 0.32,
              width: 125,
            }}
          >
            <MenuItem value={"published_at"}>Latest to Oldest</MenuItem>
            <MenuItem value={"id"}>Oldest to Latest</MenuItem>
          </Select>
        </FormControl>
        {open ? <BsChevronUp color="white" style={{ display: "inline", marginTop: 20 }} /> : <BsChevronDown color="white" style={{ display: "inline", marginTop: 20 }} />}
        <br />
        <br />
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data.map((data, i) => {
            return (
              <React.Fragment key={data.id}>
                <LazyLoad height={400} offset={100}>
                  <Fade in={checked} appear>
                    <Link to={`/news/${data.id}`} style={{ textDecoration: 'none' }}>
                      <div className="conterContent">
                        <LazyLoadImage
                          effect="blur"
                          src={baseURL + data.coverImage.url}
                          className="imgnews"
                        ></LazyLoadImage>
                        <br />
                        <br />
                        <div className="btn-container-col">
                          <h2 className="container-text-news">{data.title}</h2>
                          <br />
                          <p className="tanggal">{dateFormat(data.published_at, "dS mmmm yyyy")}</p>
                          <Grid container={true} spacing={2} justifyContent="center">
                            <Grid item xs={12} md={6}></Grid>
                          </Grid>
                        </div>

                      </div>
                    </Link>
                  </Fade>
                </LazyLoad>
              </React.Fragment>
            );
          })}
        </Masonry>
      </div>
    </Element>
  );
};

export default NewsLanding;