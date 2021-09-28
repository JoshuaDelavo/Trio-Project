import React, { useEffect, useState } from 'react'
import { Grid, Fade, colors } from '@material-ui/core';
import { Element } from 'react-scroll'
import './OurCollections.css';
import Button from '../../components/Button/index';
import SectionTextSmall from '../../components/SectionTextSmall/index';
import CollectionsApi from '../../config/CollectionsApi';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css'
import { baseURL } from '../../config';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import LazyLoad from 'react-lazyload';
import { ReactComponent as Arrow } from '../../images/arrow-sort.svg';


const OurCollections = () => {
    // This is REact HOOK (State) 
    // Like Mounted, Created in Vue JS
    // const [ourCollections, setOurCollections] = useState([]);
    const [checked, setChecked] = useState(false);
    // const [checkedApi, setCheckedApi] = useState(false);
    const [data, setData] = useState([]);
    // const [dataLength, setDataLength] = useState();
    const [sortType, setSortType] = useState('published_at');
    // const [ourCollectionsAll, setOurCollectionsAll] = useState([]);

    const breakpointColumnsObj = {
        default: 2,
        1100: 2,
        700: 1,
        500: 0
    };
    useEffect(() => {
        CollectionsApi.detailAll().then(res => {
            // console.log("news",res);
            console.log("col", res);
            res.map((res, i) => {
                new Promise((resolve, reject) => {
                    const loadImg = new Image()

                    loadImg.src = baseURL + res.picture1.url

                    loadImg.onload = () => {
                        resolve(baseURL + res.picture1.url)
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
                    bigTitle: 'bigTitle',
                };
                const sortProperty = types[type];
                const sorted = [...res].sort((a, b) => a[sortProperty] - b[sortProperty]);
                setData(sorted);
                console.log("sort", sorted);
            };
            sortArray(sortType);
            // setOurCollections(res);
            // setCheckedApi(true);
            console.log("sort2", sortType);
        })

        // CollectionsApi.detailAll().then(res => {
        //     setOurCollectionsAll(res);
        // })
    }, [sortType])

    const useStyles = makeStyles((theme) => ({
        button: {
            display: 'block',
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

    const refreshPage = () => {
        window.location.reload();
    }

    {/* <img src={baseURL + ourCollections['picture'+ourCollections.coverPictureNo].url}></img> */ }
    return (
        <Element id='collections' name='collections'>
            <div className="container-our-collections">
                <FormControl className={classes.formControl}>
                    <InputLabel id="select-type" className="select-selected2">
                        <SectionTextSmall value="Sort by:"></SectionTextSmall>
                        {/* <Arrow className="style-arrow" /> */}
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
                        }}
                    >
                        <MenuItem value={"published_at"}>Newest Update</MenuItem>
                        <MenuItem value={"id"}>Oldest Update</MenuItem>
                    </Select>
                </FormControl>

                <br />
                <br />
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
                                        <div>
                                            <img src={baseURL + data['picture' + data.coverPictureNo].url} className="imgnews"></img>
                                            <br />
                                            <br />
                                            <div className="btn-container-col">
                                                <p className="container-text-time-col">{data.smallTitle}</p>
                                                <h2 className="container-text-col">{data.bigTitle}</h2>
                                                <br />
                                                <p className="container-text-time-col">{data.description}</p>
                                                <br />
                                                <Grid container={true}
                                                    spacing={2} justifyContent="center">
                                                    <Grid item xs={12} md={6} >
                                                        <Link to={`/collections/${data.id}`}>
                                                            <Button type="fill" value="READ THE STORY" ></Button>
                                                        </Link>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                            <br />
                                            <br />
                                        </div>
                                    </Fade>
                                </LazyLoad>
                            </React.Fragment>

                        })
                    }
                </Masonry>
            </div>
        </Element>
    )
}

export default OurCollections
