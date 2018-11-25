import React, { Component } from 'react';
import './index.css';
import './components/SearchTable'
import SearchTable from './components/SearchTable';

import { Widget, Offers, TopOffers } from './components';
import { getFares } from './api';

const results = [
  {
      "direction": "Paris",
      "price": "376",
      "timeInFlight": "4 h. 3 min.",
      "date": "17 December",
      "quantity": "8",
      "ticketType": "EP",
      "departure": "Th, 17th Nov",
      "isHoliday": false,
      "transferCount": 0
  },
  {
      "direction": "Barcelona",
      "price": "140",
      "timeInFlight": "12 h. 11 min.",
      "date": "11 December",
      "quantity": "2",
      "ticketType": "EP",
      "departure": "Mon, 18 Jul",
      "isHoliday": false,
      "transferCount": 0
  },
  {
      "direction": "Milan",
      "price": "411",
      "timeInFlight": "5 h. 51 min.",
      "date": "4 January",
      "quantity": "12",
      "ticketType": "EC",
      "departure": "Sun, 8th Dec",
      "isHoliday": false,
      "transferCount": 2
  },
  {
      "direction": "Dublin",
      "price": "755",
      "timeInFlight": "2 h. 30 min.",
      "date": "1 February",
      "quantity": "40",
      "ticketType": "EP",
      "departure": "Mon, 12th Mar",
      "isHoliday": false,
      "transferCount": 3
  },
  {
      "direction": "London",
      "price": "227",
      "timeInFlight": "9 h. 36 min.",
      "date": "1 December",
      "quantity": "5",
      "ticketType": "EP",
      "departure": "Wed, 15th Jan",
      "isHoliday": false,
      "transferCount": 2
  },
  {
      "direction": "Faroe Islands",
      "price": "980",
      "timeInFlight": "9 h. 36 min.",
      "date": "8 March",
      "quantity": "7",
      "ticketType": "EC",
      "departure": "Sat, 1st Dec",
      "isHoliday": true,
      "transferCount": 3
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flights: []
    }
  }

  searchTable = ref => this.table = ref;

  onSearch = (options) => {
    getFares(options)
    .then(data => data.sort((a, b) => a.flightInfo[0].price - b.flightInfo[0].price))
    .then(data => data.slice(0, 10))
    .then(data => data.map(item => {
      const info = item.flightInfo[0];
      return {
        "direction": options.destination,
        "price": info.price,
        "timeInFlight": info.duration,
        "date": item.date,
        "quantity": "1",
        "ticketType": info.brand,
        "departure": (new Date(info.departureDateTime)).toDateString(),
        "isHoliday": false,
        "transferCount": 0
      }
    }))
    .then(data => {
      if (this.table) {
        setTimeout(() => this.table.scrollIntoView(), 100);
      }
      this.setState({
        flights: data
      })
    })
  }

  render() {
    const { flights } = this.state;
    console.log(flights);

    return (
      <div className="content">
        <main>
          <Widget onSearch={this.onSearch}/>
          <div className="content-container">
            <TopOffers />
            <Offers refTable={this.searchTable} />
            <SearchTable results={flights} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
