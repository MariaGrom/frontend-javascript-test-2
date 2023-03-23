import React from 'react';
import cover from '../../img/cover.webp'


function BookDescription(props) {
    // const{card} = props
    return (
        <div className="BookDescription">
            <div className="BookDescription-cover">
                <img className="BookDescription-img" src={cover}/>
            </div>
            <div className="BookDescription-content">
                <h3 className="BookDescription-category ">категория</h3>
                <h2 className="BookDescription-title ">Заголовок </h2>
                <h3 className="BookDescription-author">Автор</h3>
                <div className="BookDescription-description">
                    <p className="BookDescription-text">Тексттекст</p>
                </div>

            </div>
        </div>

    );
}

export default BookDescription;