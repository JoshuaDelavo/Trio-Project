import React from 'react'
import FullScreenImageCenteredContent from '../sections/FullScreenImageCenteredContent'
import CollectionHome from '../sections/CollectionHome'
import CelebritiesHome from '../sections/CelebritiesHome'
import NewsHome from '../sections/NewsHome'
import OurNetworkHome from '../sections/OurNetworkHome'
import Footer from '../components/Footer/index';

const Home = () => {

    return (
        <div>
            <FullScreenImageCenteredContent />
            <CollectionHome />
            <CelebritiesHome />
            <NewsHome />
            <OurNetworkHome />
            <Footer />
        </div>
    )
}

export default Home
