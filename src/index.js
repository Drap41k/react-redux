import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDrnxXGJn3y2MZGbWqXN1HKiIaDhbJSLRs';

const App = () => {
  return (
    <div>
      My !!!!!!!!!
      <SearchBar />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('.container'));