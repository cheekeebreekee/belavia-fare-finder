import React, { Component } from 'react';
import { Button } from 'primereact/button';

import AutoCompleteField from '../AutoCompleteField/AutoCompleteField';
import './styles.css';

const destinations = [
  {
    airportName: 'Амстердам (AMS), NL',
  },
  {
    airportName: 'Париж (PAR), FR',
  },
  {
    airportName: 'Барселона (BCN), ES',
  },
  {
    airportName: 'Берлин (BER), DE',
  },
  {
    airportName: 'Санкт-Петербург (LED), RU',
  },
  {
    airportName: 'Тель-Авив (TLV), IL',
  },
];

class Widget extends Component {
  state = {
    origin: 'Минск, Беларусь',
    destination: '',
  };

  _setValue = (name, value) => this.setState({ [name]: value })

  onSelect = data => {
    if (data) {
      const { name, airportName: value } = data;

      this._setValue(name, value);
    }
  };

  onChange = e => {
    const { value, target: { name } } = e;

    this._setValue(name, value);
  };

  render() {
    const { origin, destination } = this.state;

    return (
      <form className='widget'>
        <AutoCompleteField
          name='origin'
          placeholder='откуда'
          value={origin}
          onSelect={this.onSelect}
          onChange={this.onChange}
          destinations={destinations}
          extraClass='widget__current-location'
        />
        <AutoCompleteField
          name='destination'
          placeholder='куда'
          value={destination}
          onSelect={this.onSelect}
          onChange={this.onChange}
          destinations={destinations}
        />
        <Button
          label='Найти'
          className="p-button-raised p-button-success widget__search-btn"
        />
      </form>
    );
  }
}

export default Widget;
