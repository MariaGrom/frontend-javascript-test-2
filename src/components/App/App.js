import React,{useState, useEffect} from 'react';
import './App.css';
import Search from '../Search/Search';
import Main from '../Main/Main';
import api from '../../utils/Api/Api';
import Button from '../Main/Button/Button';


function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const [submit, setSubmit] = useState(false);
  const [cards, setCards] = useState(null);

  useEffect(() => {
    if (submit) {
      api.search(searchQuery)
      .then(data => console.log(data))
    }

  }, [submit, searchQuery]);

  return (
    <div className="App">
      <Search 
      placeholder = 'Search book about ...' 
      handleChange ={(e) => setSearchQuery(e.target.value)}
      />
      <Button handleClick={() => setSubmit(true)}/>
      {/* <Button handleClick={() => console.log('Click')}/> */}
      <Main />
    </div>
  );
}

export default App;
