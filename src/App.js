import React, { Component } from 'react';
import './components/SearchTable'
import SearchTable from './components/SearchTable';
import QuantityInput from './components/QuantityInput';

class App extends Component {
  render() {
    return (
      <main>
        <QuantityInput />
        <SearchTable />
      </main>
    );
  }
}

export default App;
