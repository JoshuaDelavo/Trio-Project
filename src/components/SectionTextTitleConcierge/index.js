import React from 'react'
import './SectionTextTitleConcierge.css';

const SectionTextTitleConcierge = (props) => {

    return (
        <React.Fragment>
            {
                <p className="section-text-title-concierge">{props.value}</p>
            }
        </React.Fragment>
    )
}

export default SectionTextTitleConcierge