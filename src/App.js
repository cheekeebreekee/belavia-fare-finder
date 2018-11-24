import React, { Component } from 'react';
import './index.css';
import './components/SearchTable'
import SearchTable from './components/SearchTable';
import QuantityInput from './components/QuantityInput';
import Calendar from './components/Calendar';

import { Widget } from './components';

class App extends Component {
  render() {
    return (
      <main>
        <Widget />
        <QuantityInput />
        <Calendar />
        <SearchTable />
      </main>
    );
  }
}

export default App;
