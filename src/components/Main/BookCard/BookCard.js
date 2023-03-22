import React from 'react';
import './BookCard.css';
import cover from '../../../img/cover.webp'

function BookCard() {
    return (
        <li className="BookCard">

            <img className="BookCard-image" alt="" src={cover} />

            <div className="BookCard-description">
                <h3 className="BookCard-category"> категория</h3>
                <h2 className="BookCard-title">Название книги</h2>
                <h3 className="BookCard-subtitle">Авторы </h3>

            </div>
        </li>

    );
}

export default BookCard;