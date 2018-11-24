import React, { Component } from 'react';
import './index.css';
import './components/SearchTable'
import SearchTable from './components/SearchTable';
import Calendar from './components/Calendar';
import { getFares } from './api';

import { Widget, Offers, TopOffers } from './components';

console.log(getFares("LON"));

class App extends Component {


  render() {
    return (
      <div>
        <header />
        <main>
          <Widget />
          <Offers />
          <Calendar />
          <SearchTable />
          <TopOffers />
        </main>
      </div>
    );
  }
}

export default App;
