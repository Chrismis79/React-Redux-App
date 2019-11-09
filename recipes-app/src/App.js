import React from 'react';
import RecipeList from './components/RecipeList';

import {CssBaseline} from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <header className="App-header">
        {/* <img src={} className="header-img" alt="#" /> */}
      </header>
      <h1>Find your next meal!</h1>
      <RecipeList/>

    </div>
  );
}

export default App;
