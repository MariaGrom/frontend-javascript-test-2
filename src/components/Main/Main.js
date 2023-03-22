import React from 'react';
import BooksCardList from './BooksCardList/BooksCardList';
import './Main.css';


function Main() {
  return (
    <div className="Main">
      <p className="Main-results"> Found XXX results</p>

      <BooksCardList />
      <div className="Main-add-button">
        <button className="Main-button">Load more</button>
      </div>
    </div>
  );
}

export default Main;
