import React from 'react'
import './SectionParagraph.css';

const SectionParagraph = (props) => {

    return (
        <React.Fragment>
            {
                <p className="section-paragraph">{props.value}</p>
            }
        </React.Fragment>
    )
}

export default SectionParagraph
