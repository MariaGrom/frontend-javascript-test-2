import React from 'react';
import './ButtonLoad.css';


function ButtonLoad(props) {
    const {onClick} =props
    return (
        <button className="ButtonLoad" type="button" onClick={onClick}>
            Load more
        </button>
    )
}
export default ButtonLoad;