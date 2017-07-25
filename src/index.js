import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDEAQk8wTqSBYLFu2CAm3304wpI84m8KXM';

const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
);
}

ReactDOM.render(<App />, document.querySelector('.container'))
