import React from 'react';
import TotalResults from '../TotalResults/TotalResults';
import BooksCardList from '../BooksCardList/BooksCardList';
import ButtonLoad from '../ButtonLoad/ButtonLoad';
import Preloader from '../Preloader/Preloader';

function Main(props) {
    return (
        <div className="Main">

            < TotalResults
                foundResults={props.foundResults}
            />
            <BooksCardList
                cards={props.cards}
                onCardClick={props.onCardClick}
            />
            {props.submit ? <Preloader /> : null}
            <ButtonLoad
                loadingCards={props.loadingCards}
            />
        </div>
    );
}

export default Main

