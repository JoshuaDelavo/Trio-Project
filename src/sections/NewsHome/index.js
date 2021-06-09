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

const NewsHomeContent = () => {
    // This is REact HOOK (State) 
    // Like Mounted, Created in Vue JS
    const [newsHome, setNewsHome] = useState([]);

    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1,
        500: 0
      };
    useEffect(() => {
        NewsApi.findLatest().then(res => {
            // console.log("news",res);
            setNewsHome(res);
        })
    }, [])

    return (
        <Element id='news' name='news'>
            <div className="container-campaign">
                <SectionTextMedium value="OUR LATEST UPDATE"></SectionTextMedium>
                <hr style={{ border: '1px solid white', width: '45px', margin: 'auto' }}></hr>
                <br />
                <br/>     
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                {
                    newsHome.map((newsHome, i) => {
                        return <React.Fragment key={newsHome.id}>
                            <div>
                                <img src={baseURL+ newsHome.coverImage.url} className="imgnews"></img>
                                <br/>
                                <br/>
                                <h2 className="container-text-news">{newsHome.article}</h2>
                                <br/>
                                <br/>
                                <p className="container-text-time">{new Date(newsHome.published_at).toLocaleDateString()}</p>
                            </div>
                        </React.Fragment>
                    })
                }
                </Masonry>            
                <br/>
                <br/>
                <br/>
                <div className="btn-containerNews">
                    <Grid container={true} spacing={2}>
                        <Grid item xs={1} md={2}>
                        </Grid>
                        <Grid item xs={10} md={8}>
                            <Link to={`/collections/`}>
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

export default NewsHomeContent
