import React from 'react'
import './SectionTextMedium.css';

const SectionTextMedium = (props) => {

    return (
        <React.Fragment>
            {
                <p className="section-text-medium">{props.value}</p>
            }
        </React.Fragment>
    )
}

export default SectionTextMedium
