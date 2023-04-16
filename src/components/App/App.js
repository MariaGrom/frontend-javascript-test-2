import React, { useState, useEffect } from 'react';
import './App.css';
import Search from '../Search/Search';
import api from '../../utils/Api/Api';
// import ButtonLoad from '../ButtonLoad/ButtonLoad';
import { Route, Routes } from 'react-router-dom';
import BookDescription from '../BookDescription/BookDescription';
import Main from '../Main/Main';

function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const [submit, setSubmit] = useState(false);
  const [cards, setCards] = useState([]);
  const [foundResults, setFoundResults] = useState('');
  const [selectedCard, setSelectedCard] = useState({});
  const [limit, setLimit] = useState(4);
  // const [renderCards, setRenderCards] = useState(limit)
  const [filteredCards, setFilteredCards] = useState([])

  const [categories, setCategories] = useState([
    {
      key: 'all',
      title: 'all',
      category: 'all'
    },
    {
      key: 'art',
      title: 'art',
      category: 'art'
    },
    {
      key: 'biography',
      title: 'biography',
      category: 'biography'
    },
    {
      key: 'computers',
      title: 'computers',
      category: 'computers'
    },
    {
      key: 'history',
      title: 'history',
      category: 'history'
    },
    {
      key: 'medical',
      title: 'medical',
      category: 'medical'
    },
    {
      key: 'poetry',
      title: 'poetry',
      category: 'poetry'
    },
  ])


  // функция фильтрации категорий 
  function chooseCategory(category) {
    console.log('category', category)
    if (category === 'all') {
      setFilteredCards(cards)
    } else if (category === 'computers') {
      const computersCards = [...cards].filter(card => card.category === categories)
      setFilteredCards(computersCards)
    }
  }


  const loadMore = () => {
    setLimit(limit + 4)
    console.log(limit)
  }

  useEffect(() => {

    if (submit) {
      api.search(searchQuery)
        .then(data => {
          console.log('data', data)

          const result = data.items.map(item => ({
            id: item.id,
            src: item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail,
            srcBig: item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail,
            alt: item.volumeInfo.title,
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors,
            category: item.volumeInfo.categories,
            description: item.volumeInfo.description,
            totalResult: data.totalItems
          }

          ))
          setCards(result);
          // console.log(typeof result)
          // console.log('results', result)
          // console.log('result.length',result.length)
          // setRenderCards(result.slice(0, 5))
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
      // chooseCategory={() => chooseCategory()}
      />

      <div class="Categories">
        <span class="Categories-title ">Categories</span>
        <div class="Categories-header">
          <span class="Categories-current ">all</span>
          <div class="Categories-icon"></div>
        </div>
        <div class="Categories-body">
          {categories.map(category => (
            <button type="button" onClick={() => chooseCategory(category)} key={category.key} class="Categories-item text">{category.title}</button >
          ))}
        </div>
      </div>

      <Routes>

        <Route
          path='/'
          element={
            <Main
              foundResults={foundResults}
              cards={cards}
              submit={submit}
              onCardClick={onCardClick}
              onClick={loadMore}

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
