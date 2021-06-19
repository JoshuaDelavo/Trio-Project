import React from 'react'
import './SectionTextMedium.css';

const SectionTextMediumNews = (props) => {

    return (
        <React.Fragment>
            {
                <p className="section-text-medium-news">{props.value}</p>
            }
        </React.Fragment>
    )
}

export default SectionTextMediumNews
