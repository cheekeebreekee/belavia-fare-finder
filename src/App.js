import React, { Component } from 'react';
import './index.css';
import './components/SearchTable'
import SearchTable from './components/SearchTable';
import Calendar from './components/Calendar';

import { Widget, Offers, TopOffers } from './components';

class App extends Component {


  render() {
    return (
      <div className="content">
        <header />
        <main>
          <Widget />
          <div className="content-container">
            <Offers />
            <Calendar />
            <SearchTable />
            <TopOffers />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
