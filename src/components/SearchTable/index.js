import React, { Component } from 'react';
import './SearchTable.css';
import SearchTableItem from './SearchTableItem';

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
 class SearchTable extends Component {

    getWeatherInCities = async (data) => {
        for (const item of data) {
            let response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${item.direction}`);
            let result = await response.json();
            data.item = Object.assign(data.item, result);
        }

        return data;
    }
  render() {
      
    return (
      <table className="search-table">
        {
            results.map((el, i) =>(
                <SearchTableItem key={i} data={el} />
            ))
        }
<<<<<<< HEAD
      </table>
    );
  }
}

export default SearchTable;
=======
      </div>
    );
  }
}
 export default SearchTable;
>>>>>>> dev
