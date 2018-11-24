import React, { Component } from 'react';
import './App.css';
import './components/SearchTable'
import SearchTable from './components/SearchTable';

class App extends Component {
  render() {
    return (
      <main>
        <SearchTable />
      </main>
    );
  }
}

export default App;
