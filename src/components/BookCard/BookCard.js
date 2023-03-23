import React from 'react';
import './BookCard.css';
import { Link } from 'react-router-dom';

function BookCard(props) {

    const {card, onClick} = props
    return (
        <div>
            <Link to="/book" onClick={() => onClick(card)}>
                <li className="BookCard">
                    <img className="BookCard-image" alt={card.alt} src={card.src} />
                    <div className="BookCard-description">
                        <h3 className="BookCard-category"> {card.category}</h3>
                        <h2 className="BookCard-title">{card.title}</h2>
                        <h3 className="BookCard-author">{card.author}</h3>
                    </div>
                </li>
            </Link>
        </div>


    );
}

export default BookCard;