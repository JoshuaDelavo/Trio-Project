import React from 'react'
import './SectionParagraph.css';

const SectionParagraphNews = (props) => {

    return (
        <React.Fragment>
            {
                <p className="section-paragraph-news">{props.value}</p>
            }
        </React.Fragment>
    )
}

export default SectionParagraphNews
