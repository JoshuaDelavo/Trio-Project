import React from 'react'
import './SectionTextSmallConcierge.css';

const SectionTextSmallConcierge = (props) => {

    return (
        <React.Fragment>
            {
                <p className="section-text-small-concierge">{props.value}</p>
            }
        </React.Fragment>
    )
}

export default SectionTextSmallConcierge
