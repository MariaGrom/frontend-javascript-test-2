import React from 'react';
import './ButtonLoad.css';


function ButtonLoad(props) {
    return (
        <button className="ButtonLoad" type="button" onClick={props.onClick}>
            Load more
        </button>
    )
}
export default ButtonLoad;