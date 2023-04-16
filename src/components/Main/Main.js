import React from 'react';
import './Main.css';
import TotalResults from '../TotalResults/TotalResults';
import BooksCardList from '../BooksCardList/BooksCardList';
import ButtonLoad from '../ButtonLoad/ButtonLoad';
import Preloader from '../Preloader/Preloader';

function Main(props) {

    const {foundResults, cards, onCardClick, onClick, submit} = props

    return (
        <div className="Main">

            < TotalResults
                foundResults={foundResults}
            />
            <BooksCardList
                cards={cards}
                onCardClick={onCardClick}
            />
            {submit ? <Preloader /> : null}
            
            <ButtonLoad
                onClick={onClick}
            />
        </div>
    );
}

export default Main

