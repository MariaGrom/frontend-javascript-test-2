import React from 'react';
import './BookDescription.css';

function BookDescription(props) {
    const{card} = props
    return (
        <div className="BookDescription">
            <div className="BookDescription-cover">
                <img className="BookDescription-img" src={card.srcBig}/>
            </div>
            <div className="BookDescription-content">
                <h3 className="BookDescription-category BookDescription-text">{card.category}</h3>
                <h2 className="BookDescription-title ">{card.title} </h2>
                <h3 className="BookDescription-author">{card.author}</h3>
                <div className="BookDescription-description">
                    <p className="BookDescription-text">{card.description}</p>
                </div>

            </div>
        </div>

    );
}

export default BookDescription;