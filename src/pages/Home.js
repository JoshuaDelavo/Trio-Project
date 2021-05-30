import React from 'react'
import FullScreenImageCenteredContent from '../sections/FullScreenImageCenteredContent'
import CollectionHome from '../sections/CollectionHome'
import CelebritiesHome from '../sections/CelebritiesHome'

const Home = () => {

    return (
        <div>
            <FullScreenImageCenteredContent />
            <CollectionHome />
            <CelebritiesHome />
        </div>
    )
}

export default Home
