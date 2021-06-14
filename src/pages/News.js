import React from 'react'
import FullScreenImageCenteredContent from '../sections/NewsFullImage'
import NewsHome from '../sections/NewsHome'
import Footer from '../components/Footer/index';

const News = () => {

    return (
        <div>
            <FullScreenImageCenteredContent />
            <NewsHome />
            <Footer />
        </div>
    )
}
export default News;