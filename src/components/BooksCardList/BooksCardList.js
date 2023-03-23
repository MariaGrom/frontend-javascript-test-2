import React from 'react';
import './BooksCardList.css';
import BookCard from '../BookCard/BookCard';

function BooksCardList( props) {
    const {cards, onCardClick} = props
    return (
        <div className="BooksCardList">
            <ul className="BooksCardList-list">
                
                {cards.map(card => <BookCard key={card.id} card={card} onClick={onCardClick}/>)}
             
            </ul>

        </div>
    );
}

export default BooksCardList;