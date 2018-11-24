import React, { Component } from 'react';
import './SearchTable.css';
import SearchTableItem from './SearchTableItem';

const results = [
    {
        "direction": "Paris",
        "price": "376",
        "timeInFlight": "1:24:00",
        "date": "17 December",
        "quantity": "8",
        "ticketType": "EP"
    },
    {
        "direction": "Barcelona",
        "price": "140",
        "timeInFlight": "4:02:00",
        "date": "11 December",
        "quantity": "2",
        "ticketType": "EP"
    },
    {
        "direction": "Milan",
        "price": "411",
        "timeInFlight": "3:04:00",
        "date": "4 January",
        "quantity": "12",
        "ticketType": "EC"
    },
    {
        "direction": "Dublin",
        "price": "755",
        "timeInFlight": "5:17:00",
        "date": "1 February",
        "quantity": "40",
        "ticketType": "EP"
    },
    {
        "direction": "London",
        "price": "227",
        "timeInFlight": "4:41:00",
        "date": "1 December",
        "quantity": "5",
        "ticketType": "EP"
    },
    {
        "direction": "Faroe Islands",
        "price": "980",
        "timeInFlight": "1:24:00",
        "date": "8 March",
        "quantity": "7",
        "ticketType": "EC"
    }
];

class SearchTable extends Component {
  render() {
    return (
      <div className="search-table">
        {
            results.map((el, i) =>(
                <SearchTableItem key={i} data={el} />
            ))
        }
      </div>
    );
  }
}

export default SearchTable;
