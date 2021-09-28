import React, { useEffect, useState } from 'react';
import './DetailPage.css';
import { Element } from 'react-scroll'
import CollectionsApi from '../../config/CollectionsApi';
import { useParams } from 'react-router';
import HorizontalScroll from 'react-scroll-horizontal';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';
import "react-image-lightbox/style.css";
import * as Scroll from 'react-scroll';
import MobileView from './MobileView.js';
import LightboxContain from './LightboxContain.js';
import { isDesktop, isSafari } from 'react-device-detect';

const CollectionsDetailPage = () => {
    const [collection, setCollection] = useState({});
    // const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    // const [photoIndex, setPhotoIndex] = useState(0);
    // const [isOpen, setIsOpen] = useState(false);
    // const [checked, setChecked] = useState(false);
    const parent = { width: `100%`, height: `100vh`, background: 'black' }

    const { id } = useParams()

    useEffect(() => {
        CollectionsApi.detail(id).then(res => {
            // console.log(res);
            setCollection(res);
            setLoading(false);
            // setChecked(true);
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

    const scroll = Scroll.animateScroll;

    if (loading) {
        return <p></p>
    }
    return (
        <Element id='our-collection' name='our-collection'>
            {
                collection ?
                    <div>
                        <DeviceOrientation lockOrientation={'landscape'}>
                            <Orientation orientation='landscape' alwaysRender={isSafari && isDesktop ? true : false}>
                                <HorizontalScroll
                                    pageLock={true}
                                    reverseScroll={true}
                                    style={parent}
                                    config={{ stiffness: 50, damping: 50 }}
                                    className={'horizontal-style'}
                                    animValues={1}>
                                    <LightboxContain />
                                    <div></div>
                                </HorizontalScroll>
                            </Orientation>
                            <Orientation orientation='portrait' alwaysRender={false}>
                                <MobileView />
                            </Orientation>
                        </DeviceOrientation>
                    </div>
                    :
                    ''
            }

        </Element>
    )
}

export default CollectionsDetailPage