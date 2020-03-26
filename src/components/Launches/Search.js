import React, { useState } from 'react';
import './search.scss';
import SearchLogo from '../../assets/search.svg';
import ClearLogo from '../../assets/close.svg';

const Search = ({ onSubmitQuery }) => {
  const [inputQuery, setQuery] = useState('');

  return (
    <div className="search">
      <form
        className="search__form"
        onSubmit={e => {
          e.preventDefault();
          onSubmitQuery(inputQuery);
          setQuery('');
        }}
      >
        <div className="search__input">
          <div className="search__input--inner">
            <input
              id="search-launch"
              className="search__input--input"
              autoComplete="off"
              placeholder="Search by mission name..."
              value={inputQuery}
              onChange={e => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search__icon search__icon--left">
          <img className="search__img" src={SearchLogo} alt="search" />
        </div>
        <div
          className="search__icon search__icon--right"
          onClick={() => setQuery('')}
        >
          {inputQuery.length !== 0 ? (
            <img className="search__img" src={ClearLogo} alt="clear" />
          ) : null}
        </div>
      </form>
    </div>
  );
};
export default Search;
