import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Home from './home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default App;
