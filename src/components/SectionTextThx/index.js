import React from 'react'
import './SectionTextThx.css';

const SectionTextThx = (props) => {

    return (
        <React.Fragment>
            {
                <p className="section-paragraph-thx">{props.value}</p>
            }
        </React.Fragment>
    )
}

export default SectionTextThx
