import React, { useState, useEffect } from 'react';
import './App.css';
import Search from '../Search/Search';
import api from '../../utils/Api/Api';
// import ButtonLoad from '../ButtonLoad/ButtonLoad';
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


          // Надо дописать проверку на наличие свойства smallThumbnail у картинок
          // если свойство отсуствует, то код по загрузке картинки ломается, и ничего не 
          // загружается. то есть надо сделать проверку: есть картинка (свойство smallThumbnail)
          //  рхватай свойство, если нет, то пиши что-то другое 
          // const srcImg = data.items.map(item => item.volumeInfo.imageLinks)
          // console.log('srcImg', srcImg);
          // // console.log(typeof srcImg);
          // console.log('srcImg', srcImg[0].smallThumbnail);
          // for (let i = 0; i < srcImg.length; i++) {
          //   if (srcImg[i].hasOwnProperty('smallThumbnail')) {
          //     const src = srcImg[i].smallThumbnail
          //     console.log('src', src)
          //   } else {
          //     console.log('img YOK')
          //   }
          // }

          const result = data.items.map(item => ({
            id: item.id,
            src: item.volumeInfo.imageLinks.smallThumbnail,
            srcBig: item.volumeInfo.imageLinks.thumbnail,
            alt: item.volumeInfo.title,
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors,
            category: item.volumeInfo.categories,
            description: item.volumeInfo.description,
            totalResult: data.totalItems
          }

          ))
          setCards(result);
          console.log(result)
          setFoundResults(data.totalItems)

        })
        .catch(err => console.log(err))
        .finally(() => {
          setSubmit(false);
        })
    }

  }, [submit, searchQuery]);



  const onCardClick = (card) => {
    setSelectedCard(card);
  }

// функция поиска по нажатию на Enter
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
        setSearchQuery(e.target.value)
        setSubmit(true)
    }
  }

  return (
    <div className="App">
      <Search
        placeholder='Search book about ...'
        handleChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={onKeyDown}
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
              card={selectedCard}
            />
          }
        />
      </Routes>

    </div>
  );
}

export default App;
