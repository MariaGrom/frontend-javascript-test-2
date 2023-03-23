import React, { useState, useEffect } from 'react';
import './App.css';
import Search from '../Search/Search';
import api from '../../utils/Api/Api';
// import BooksCardList from '../BooksCardList/BooksCardList';
// import Preloader from '../Preloader/Preloader';
// import ButtonLoad from '../ButtonLoad/ButtonLoad';
// import TotalResults from '../TotalResults/TotalResults';
import { Route, Routes } from 'react-router-dom';
import BookDescription from '../BookDescription/BookDescription';
import Main from '../Main/Main';

// Определяем количество отображаемых карточек 
const displayOfCards = () => {
  const display = {
    start: 10,
    load: 30
  }
  return display

}

function App() {

  const display = displayOfCards();
  const [searchQuery, setSearchQuery] = useState('');
  const [submit, setSubmit] = useState(false);
  const [cards, setCards] = useState([]);
  const [foundResults, setFoundResults] = useState('');
  const [selectedCard, setSelectedCard] = useState({});
  const [displayedCards, setDisplayedCards] = useState(display.start);

  const loadingCards = () => {
    console.log('click')
    const display = displayOfCards();
    console.log('display', display)
    setDisplayedCards(displayedCards + display.load)
  }

  useEffect(() => {

    if (submit) {
      api.search(searchQuery)
        .then(data => {
          console.log('data', data)
          const result = data.items.map(item => ({
            id: item.id,
            src: item.volumeInfo.imageLinks.smallThumbnail,
            alt: item.volumeInfo.title,
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors,
            category: item.volumeInfo.categories,
            totalResult: data.totalItems
          }))
          setCards(result);
          setFoundResults(data.totalItems)

        })
        .catch(err => console.log(err))
        .finally(() => {
          setSubmit(false);
          setDisplayedCards(display.start);
        })
    }

  }, [submit, searchQuery, display.start]);


  const onCardClick = (card) => {
    setSelectedCard(card);
  }

  return (
    <div className="App">
      <Search
        placeholder='Search book about ...'
        handleChange={(e) => setSearchQuery(e.target.value)}
        handleClick={() => setSubmit(true)}
      />

      <Routes>

        <Route
          path='/'
          element={
            <Main
              foundResults={foundResults}
              cards={cards}
              submit={submit}
              loadingCards={loadingCards}
              onCardClick={onCardClick}
            />
          }
        />

        <Route
          path='/book'
          element={
            <BookDescription
              // cards={selectedCard}
            />
          }
        />
      </Routes>

    </div>
  );
}

export default App;
