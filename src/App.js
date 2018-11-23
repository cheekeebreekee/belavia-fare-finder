import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  getRoutes, 
  getApiKey, 
  getFlightData, 
  } from './api'; 
  
  // console.log(getFlightData({ 
  // "currency": "BYN", 
  // "searchRoutes": [{ 
  // "origin": "MSQ", 
  // "destination": "MOW", 
  // "departing": "2018-12-25", 
  // "direction": 0 
  // }], 
  // "passengerQuantities": [{ 
  // "code": "ADT", 
  // "quantity": 5 
  // }] 
  // })); 
  console.log(getRoutes());

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
