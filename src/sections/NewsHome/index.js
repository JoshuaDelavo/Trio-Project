import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core';
import { Element } from 'react-scroll'
import './NewsHome.css';
import Button from '../../components/Button/index';
import SectionTextMedium from '../../components/SectionTextMedium/index';
import NewsApi from '../../config/NewsApi';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css'
import { baseURL } from '../../config';

const NewsHome = () => {
    var dateFormat = require('dateformat');
    const [newsHome, setNewsHome] = useState([]);
    const [checked, setChecked] = useState(false);
    const [checkedApi, setCheckedApi] = useState(false);

    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1,
        500: 0
    };
    useEffect(() => {
        NewsApi.findLatest().then(res => {
            // console.log("news",res);
            // console.log("news", res);
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
            // console.log("news", res);
            setNewsHome(res);
            setCheckedApi(true);
        })
    }, [])

    return (
        <Element id='news' name='news'>
            <div className="container-campaign">
                <SectionTextMedium value="OUR LATEST UPDATE"></SectionTextMedium>
                <hr style={{ border: '1px solid #D2D2D2', width: 72, margin: 'auto', marginTop:35, marginBottom:15 }}></hr>

                <br />
                <br />
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {
                        newsHome.map((newsHome, i) => {
                            return <React.Fragment key={newsHome.id}>
                                <div>
                                    <Link to={`/news/${newsHome.id}`} style={{ textDecoration: 'none' }}>
                                        <img src={baseURL + newsHome.coverImage.url} className="imgnews"></img>
                                        <br />
                                        <br />
                                        <h2 className="container-text-news">{newsHome.title}</h2>
                                        <br />
                                        <p className="container-text-time">{dateFormat(newsHome.published_at, "dS mmmm yyyy")}</p>
                                    </Link>
                                </div>
                            </React.Fragment>
                        })
                    }
                </Masonry>
                <br />
                <br />
                <br />
                <div className="btn-containerNews">
                    <Grid container={true} spacing={2}>
                        <Grid item xs={1} md={2}>
                        </Grid>
                        <Grid item xs={10} md={8}>
                            <Link to={`/news/`}>
                                <Button value="SEE ALL NEWS" ></Button>
                            </Link>
                        </Grid>
                        <Grid item xs={1} md={2}>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Element>
    )
}

export default NewsHome
