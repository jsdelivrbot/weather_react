import React, { Component } from 'react';

import './App.css';
import SearchBar from './SearchBar';
import WeatherList from './WeatherList';

class App extends Component {
  render() {
    return (
      <div>
          <link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/48938155eb24b4ccdde09426066869504c6dab3c/dist/css/bootstrap.min.css" />
          <SearchBar/>
          <WeatherList/>
      </div>
    );
  }
}

export default App;
