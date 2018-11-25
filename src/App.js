import React, { Component } from 'react';
import './index.css';
import './components/SearchTable'
import SearchTable from './components/SearchTable';

import { Widget, Offers, TopOffers } from './components';

class App extends Component {


  render() {
    return (
      <div>
        <header />
        <main>
          <Widget />
          <Offers />
          <SearchTable />
          <TopOffers />
        </main>
      </div>
    );
  }
}

export default App;
