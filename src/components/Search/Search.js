import React from 'react';
import './Search.css';




function Search(props) {
  
  return (
    <div className="Search">
      <h1 className="Search-title">Search for books</h1>
      <form className="Search-form" noValidate>
        <input
          type="text"
          className="Search-input"
          placeholder={props.placeholder}
          onChange={props.handleChange}
        />
        {/* <button className="Search-button " type="button" onClick={handleClick}>{props.text}</button>
        <span className="Search-span"> </span> */}

        <div className="Search-selects">
          <div class="Search-select">
            <span class="Search-select-title">Categories</span>
            <div class="Search-select-header">
              <span class="Search-select-current">all</span>
              <div class="Search-select-icon"></div>
            </div>
            <div class="Search-select-body">
              <div class="Search-select-item">all</div>
              <div class="Search-select-item">art</div>
              <div class="Search-select-item">biography</div>
              <div class="Search-select-item">computers</div>
              <div class="Search-select-item">history</div>
              <div class="Search-select-item">medical</div>
              <div class="Search-select-item">poetry</div>
            </div>
          </div>

          <div class="Search-select">
            <span class="Search-select-title">Sorting by</span>
            <div class="Search-select-header ">
              <span class="Search-select-current">relevance</span>
              <div class="Search-select-icon"></div>
            </div>
            <div class="Search-select-body">
              <div class="Search-select-item">relevance</div>
              <div class="Search-select-item">newest</div>
            </div>
          </div>



        </div>
      </form>
    </div>
  );
}

export default Search;
