import React, { useEffect, useState } from 'react';
import './DetailPage.css';
import { Element } from 'react-scroll'
import CollectionsApi from '../../config/CollectionsApi';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { baseURL } from '../../config';
import { Fade } from "@material-ui/core";
import SectionTextSmall from '../../components/SectionTextSmall/index';
import Masonry from 'react-masonry-css';
import { ReactComponent as Arrow2 } from '../../images/arrow2.svg';
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as ArrowBack } from '../../images/arrow-back.svg';
// import * as Scroll from 'react-scroll';



const MobileView = () => {
    const [collection, setCollection] = useState({});
    // const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    // const [ photoIndex, setPhotoIndex ] = useState(0);
    // const [ isOpen, setIsOpen ] = useState(false);
    const [checked, setChecked] = useState(false);
    // const parent = { width: `100%`, height: `100vh`, background: 'black' }

    const { id } = useParams()

    useEffect(() => {
        CollectionsApi.detail(id).then(res => {
            // console.log(res);
            setCollection(res);
            setLoading(false);
            setChecked(true);
            const images = [
                res.picture12.url,
                res.picture1.url,
                res.picture2.url,
                res.picture3.url,
                res.picture4.url,
                res.picture5.url,
                res.picture6.url,
                res.picture7.url,
                res.picture8.url,
                res.picture9.url,
                res.picture10.url,
                res.picture11.url,
            ];
            // setData(images);
            // console.log("data", images);
            // console.log("num", photoIndex);
        })

    }, [])

    const breakpointColumnsObj = {
        default: 1,
        1100: 1,
        700: 1,
        500: 0
    };

    // const scroll = Scroll.animateScroll;

    if (loading) {
        return <p></p>
    }
    return (
        <Element id='our-collection' name='our-collection'>
            {
                collection ?
                    <div>
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="my-masonry-grid-det"
                            columnClassName="my-masonry-grid_column-det"
                        >
                            <div>
                                <div className="style-title">
                                    <Link to={'/collections'}>
                                        {<p className={"text-container"}> <ArrowBack /> Back to All Campaigns</p>}
                                    </Link>
                                    <p className={"title-container"}>{collection.bigTitle}</p>
                                    <p className={"text-container"}>{collection.description}</p>
                                </div>
                                <div>
                                    <Fade in={checked} appear>
                                        <img src={baseURL + collection.picture12.url} className="img-det-style"></img>
                                    </Fade>
                                </div>
                                <div>
                                    <Fade in={checked} appear>
                                        <img src={baseURL + collection.picture1.url} className="img-det-style"></img>
                                    </Fade>
                                </div>
                                <div>
                                    <Fade in={checked} appear>
                                        <img src={baseURL + collection.picture2.url} className="img-det-style"></img>
                                    </Fade>
                                </div>
                                <div>
                                    <Fade in={checked} appear>
                                        <img src={baseURL + collection.picture3.url} className="img-det-style"></img>
                                    </Fade>
                                </div>
                                <div>
                                    <Fade in={checked} appear>
                                        <img src={baseURL + collection.picture4.url} className="img-det-style"></img>
                                    </Fade>
                                </div>
                                <div>
                                    <Fade in={checked} appear>
                                        <img src={baseURL + collection.picture5.url} className="img-det-style"></img>
                                    </Fade>
                                </div>
                                <div>
                                    <Fade in={checked} appear>
                                        <img src={baseURL + collection.picture6.url} className="img-det-style"></img>
                                    </Fade>
                                </div>
                                <div>
                                    <Fade in={checked} appear>
                                        <img src={baseURL + collection.picture7.url} className="img-det-style"></img>
                                    </Fade>
                                </div>
                                <div>
                                    <Fade in={checked} appear>
                                        <img src={baseURL + collection.picture8.url} className="img-det-style"></img>
                                    </Fade>
                                </div>
                                <div>
                                    <Fade in={checked} appear>
                                        <img src={baseURL + collection.picture9.url} className="img-det-style"></img>
                                    </Fade>
                                </div>
                                <div>
                                    <Fade in={checked} appear>
                                        <img src={baseURL + collection.picture10.url} className="img-det-style"></img>
                                    </Fade>
                                </div>
                                <div>
                                    <Fade in={checked} appear>
                                        <img src={baseURL + collection.picture11.url} className="img-det-style"></img>
                                    </Fade>
                                </div>
                                <div>
                                    <div className="vert-back">
                                        <ScrollToTop smooth component={<Arrow2 className="vert-scale-arrow" />} className="vert-arrow" />
                                        <SectionTextSmall value={"BACK TO TOP"}></SectionTextSmall>
                                    </div>
                                </div>
                            </div>
                        </Masonry>
                    </div>
                    :
                    ''
            }

        </Element>
    )
}

export default MobileView