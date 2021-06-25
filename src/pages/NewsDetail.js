import React from 'react'
import NewsDetail from '../sections/NewsDetail'
import Footer from '../components/Footer/index';
import NewsFullImageDetail from '../sections/NewsFullImageDetail';



const NewsDetail1 = () => {
    return (
        <div>
            <NewsFullImageDetail />
            <NewsDetail />
            <Footer />

        </div>
    )
}

export default NewsDetail1