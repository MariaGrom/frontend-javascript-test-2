import React, { useState } from 'react';
import './Categories.css';


function Categories(props) {

    const {chooseCategory} = props;

    const [categories, setCategories] = useState([
        {
            key: 'all',
            title: 'all'
        },
        {
            key: 'art',
            title: 'art'
        },
        {
            key: 'biography',
            title: 'biography'
        },
        {
            key: 'computers',
            title: 'computers'
        },
        {
            key: 'history',
            title: 'history'
        },
        {
            key: 'medical',
            title: 'medical'
        },
        {
            key: 'poetry',
            title: 'poetry'
        },
    ])

//     function chooseCategory(category) {
// if( )
//         console.log('category', category)
//     }


    return (
        <div class="Categories">
            <span class="Categories-title ">Categories</span>
            <div class="Categories-header">
                <span class="Categories-current ">all</span>
                <div class="Categories-icon"></div>
            </div>
            <div class="Categories-body">
                {categories.map(category => (
                    <button type="button" onClick={() => chooseCategory(category)} key={category.key} class="Categories-item text">{category.title}</button >
                    // <button type="button" onClick={chooseCategory} key={category.key} class="Categories-item text">{category.title}</button >
               ))}
            </div>
        </div>
    )

}

export default Categories;