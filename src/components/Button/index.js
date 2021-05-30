import React from 'react'
import './Button.css';

const Button = (props) => {

    return (
        <React.Fragment>
            {
                <button className={props.type === "fill" ? 'btn-filled' : 'btn-transparent'} style={{width:props.customWidth}}>
                    {props.value}
                </button>
            }
        </React.Fragment>
    )
}

export default Button
