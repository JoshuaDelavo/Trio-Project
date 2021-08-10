import React from 'react'
import './SectionTextParagraphConcierge.css';

const SectionTextParagraphConcierge = (props) => {

    return (
        <React.Fragment>
            {
                <p className="section-paragraph-concierge">{props.value}</p>
            }
        </React.Fragment>
    )
}

export default SectionTextParagraphConcierge
