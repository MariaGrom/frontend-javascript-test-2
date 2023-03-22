import React from 'react';
import './BooksCardList.css';
import BookCard from '../BookCard/BookCard';

function BooksCardList() {
    return (
        <div className="BooksCardList">
            <ul className="BooksCardList-list">
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                {/* <li>
                    <span className="BooksCardList-notFound">Ничего не найдено</span>
                </li> */}
            </ul>

        </div>
    );
}

export default BooksCardList;