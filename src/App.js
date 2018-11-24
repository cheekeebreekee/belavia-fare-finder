import React, { Component } from 'react';
import './components/SearchTable'
import SearchTable from './components/SearchTable';
import QuantityInput from './components/QuantityInput';
import Calendar from './components/Calendar';

class App extends Component {
  render() {
    return (
      <main>
        <QuantityInput />
        <Calendar />
        <SearchTable />
      </main>
    );
  }
}

export default App;
