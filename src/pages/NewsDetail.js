import React from 'react'
import NewsDetail from '../sections/NewsDetail'
import Footer from '../components/Footer/index';
import FullScreenImageCenteredContent from '../sections/NewsFullImageDetail';



const NewsDetail1 = () => {
    return (
        <div>
            <FullScreenImageCenteredContent />
            <NewsDetail />
            <Footer />

        </div>
    )
}

export default NewsDetail1