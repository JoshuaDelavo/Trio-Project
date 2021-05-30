import React from 'react'
import './SectionTextSmall.css';

const SectionTextSmall = (props) => {

    return (
        <React.Fragment>
            {
                <p className="section-text-small">{props.value}</p>
            }
        </React.Fragment>
    )
}

export default SectionTextSmall
