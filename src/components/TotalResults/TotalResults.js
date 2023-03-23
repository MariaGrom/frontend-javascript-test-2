import React from 'react';
import './TotalResults.css';


function TotalResults(props) {
    return (
        <p className="TotalResults"> Found {props.foundResults} results</p>
    )
}
export default TotalResults;