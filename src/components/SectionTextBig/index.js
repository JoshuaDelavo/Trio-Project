import React from 'react'
import './SectionTextBig.css';

const SectionTextBig = (props) => {

    return (
        <React.Fragment>
            {
                <p className="section-text-big">{props.value}</p>
            }
        </React.Fragment>
    )
}

export default SectionTextBig
