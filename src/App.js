import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Homepage} />
      </div>
    );
  }
}

export default App;
