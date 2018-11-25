import React, { Component } from 'react';
import './SearchTable.css';
import SearchTableItem from './SearchTableItem';

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
    const { results } = this.props;

    return (
      <table className="search-table">
        {
            results.map((el, i) =>(
                <SearchTableItem key={i} data={el} />
            ))
        }
      </table>
    );
  }
}

export default SearchTable;
