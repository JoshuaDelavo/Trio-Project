import React, { useEffect, useState } from 'react'
import { Grid, Fade, colors } from '@material-ui/core';
import { Element } from 'react-scroll'
import './OurCollections.css';
import Button from '../../components/Button/index';
import SectionTextSmall from '../../components/SectionTextSmall/index';
import SectionParagraph from '../../components/SectionParagraph/index';
import NewsApi from '../../config/NewsApi';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css'
import { baseURL } from '../../config';
import InfiniteScroll from 'react-infinite-scroll-component';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import LazyLoad from 'react-lazyload';


const OurCollections = () => {
    // This is REact HOOK (State) 
    // Like Mounted, Created in Vue JS
    const [ourCollections, setOurCollections] = useState([]);
    const [checked, setChecked] = useState(false);
    const [checkedApi, setCheckedApi] = useState(false);
    const [data, setData] = useState([]);
    const [dataLength, setDataLength] = useState();
    const [sortType, setSortType] = useState('published_at');
    const [ourCollectionsAll, setOurCollectionsAll] = useState([]);

    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 0
    };
    useEffect(() => {
        NewsApi.find().then(res => {
            // console.log("news",res);
            console.log("col", res);
            res.map((res, i) => {
                new Promise((resolve, reject) => {
                    const loadImg = new Image()

                    loadImg.src = baseURL + res.coverImage.url

                    loadImg.onload = () => {
                        resolve(baseURL + res.coverImage.url)
                    }

                    loadImg.onerror = err => reject(err)
                }).then(() => setChecked(true))
                    .catch(err => console.log("Failed to load images", err))
            })
            const sortArray = type => {
                const types = {
                    id: 'id',
                    published_at: 'published_at',
                    updated_at: 'updated_at',
                    title: 'title',
                };
                const sortProperty = types[type];
                const sorted1 = [...res].sort((a, b) => a[sortProperty] - b[sortProperty]);
                const sorted2 = [...res].sort((b, a) => a[sortProperty] - b[sortProperty]).reverse();
                if (sortType === "id") {
                    setData(sorted1);
                    console.log("Sorted1", sorted1);
                }
                else {
                    setData(sorted2);
                    console.log("Sorted2", sorted2);
                }

            };
            sortArray(sortType);
            setOurCollections(res);
            setCheckedApi(true);
            console.log("sort2", sortType);
        })

        NewsApi.find().then(res => {
            setOurCollectionsAll(res);
        })
    }, [sortType])

    const useStyles = makeStyles((theme) => ({
        button: {
            display: 'block',
            marginTop: theme.spacing(2),
        },
        formControl: {
            margin: theme.spacing(2),
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

    const refreshPage = () => {
        window.location.reload();
    }

    {/* <img src={baseURL + ourCollections['picture'+ourCollections.coverPictureNo].url}></img> */ }
    return (
        <Element id='news' name='news'>
            {
                ourCollections.map((ourCollections, i) => {
                    return <React.Fragment key={ourCollections.id}>
                        {/* <Fade in={checked}>
                            <div className="container-image-2-collection" style={{backgroundImage: `url("${baseURL}${ourCollections.coverImage.url}")`}}>
                                <SectionTextMedium value={"OUR COLLECTION"}></SectionTextMedium>
                            </div>
                        </Fade> */}
                    </React.Fragment>

                })
            }
            <div className="container-campaign">

                <FormControl className={classes.formControl}>
                    <InputLabel id="select-type" className="select-selected2">
                        <SectionTextSmall value="Sort by:">
                        </SectionTextSmall>
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
                            color: "lightgray ",
                            fontSize: 12,
                            fontStyle: "normal",
                            fontWeight: 300,
                            letterSpacing: 0.32,
                            // textAlign: "center",
                            width: 200,
                        }}
                    >
                        <MenuItem value={"published_at"}>Latest to Oldest</MenuItem>
                        <MenuItem value={"id"}>Oldest to Latest</MenuItem>
                    </Select>
                </FormControl>

                <br />
                <br />
                {/* <InfiniteScroll
                    pullDownToRefresh={true}
                    pullDownToRefreshContent={
                        <h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>
                    }
                    releaseToRefreshContent={
                        <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
                    }
                    refreshFunction={refreshPage}
                    next={ourCollectionsAll.coverPictureNo}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{textAlign: 'center'}}>
                        <b>Yay! You have seen it all</b>
                        </p>
                    }
                    dataLength={4}
                > */}
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {
                        data.map((data, i) => {
                            return <React.Fragment key={data.id}>
                                <LazyLoad height={400} offset={100}>
                                    <Fade in={checked} appear>
                                        <Link to={`/News/${data.id}`}>
                                            <div>
                                                <img src={baseURL + data.coverImage.url} className="imgnews"></img>
                                                <br />
                                                <br />
                                                <div className="btn-container-col">
                                                    <h2 className="container-text-col">{data.title}</h2>
                                                    <br />
                                                    <Grid container={true}
                                                        spacing={2} justify="center">
                                                        <Grid item xs={12} md={6} >
                                                        </Grid>
                                                    </Grid>
                                                </div>
                                                <br />
                                                <br />
                                            </div>
                                        </Link>
                                    </Fade>
                                </LazyLoad>
                            </React.Fragment>
                        })
                    }
                </Masonry>
                {/* </InfiniteScroll> */}
            </div>
        </Element>
    )
}

export default OurCollections