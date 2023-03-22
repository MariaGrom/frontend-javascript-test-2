import React from 'react';
import './Button.css';


function Button(props) {
    return (
        <div>
            <button className="Search-button " 
            type="submit" 
            onClick={props.handleClick}>
            </button>
            <span className="Search-span"> </span>
        </div>
    )
}
export default Button;