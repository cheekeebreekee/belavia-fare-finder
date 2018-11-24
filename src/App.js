import React, { Component } from 'react';
import './components/SearchTable'
import SearchTable from './components/SearchTable';
import QuantityInput from './components/QuantityInput';

import { Widget } from './components';

class App extends Component {
  render() {
    return (
      <main>
        <Widget />
        <QuantityInput />
        <SearchTable />
      </main>
    );
  }
}

export default App;
