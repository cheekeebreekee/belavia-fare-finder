import React, { Component } from 'react';
import './index.css';
import './components/SearchTable'
import SearchTable from './components/SearchTable';
import Calendar from './components/Calendar';
import { getFares } from './api';

import { Widget } from './components';

console.log(getFares("LON"));

class App extends Component {
  render() {
    return (
      <main>
        <Widget />
        <Calendar />
        <SearchTable />
      </main>
    );
  }
}

export default App;
