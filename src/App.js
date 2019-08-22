import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import SearchPage from './SearchPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Homepage} />
        <Route exact path="/search" component={SearchPage} />
      </div>
    );
  }
}

export default App;
