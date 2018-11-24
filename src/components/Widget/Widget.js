import React, { Component } from 'react';
import QuantityInput from './../QuantityInput';
import { Button } from 'primereact/button';

import AutoCompleteField from '../AutoCompleteField/AutoCompleteField';
import './styles.css';

const destinations = [
  {
    airportName: 'Амстердам (AMS), NL',
    code: 'AMS',
  },
  {
    airportName: 'Париж (PAR), FR',
    code: 'PAR',
  },
  {
    airportName: 'Барселона (BCN), ES',
    code: 'BCN',
  },
  {
    airportName: 'Берлин (BER), DE',
    code: 'BER',
  },
  {
    airportName: 'Санкт-Петербург (LED), RU',
    code: 'LED',
  },
  {
    airportName: 'Тель-Авив (TLV), IL',
    code: 'TLV',
  },
];

class Widget extends Component {
  state = {
    origin: 'Минск (MSQ), BE',
    originCode: 'MSQ',
    destination: '',
    destinationCode: '',
    start: '2019-01-01',
    end: '2019-08-08',
  };

  _submitForm = e => {
    e.preventDefault();
    const { onSearch } = this.props;
    const { originCode, destinationCode, start, end } = this.state;
    console.log(destinationCode);
    onSearch({ origin: originCode, destination: destinationCode, start, end });
  }

  _setValue = (name, value) => this.setState({ [name]: value })

  onSelect = data => {
    // debugger;
    // if (data) {
    //   const { name, airportName: value, code } = data;

    //   this._setValue(name, value);
    //   this._setValue(`${name}Code`, code);
    // }
  };

  onChange = e => {
    const { target: { name, value: { airportName, code } }} = e;

    this._setValue(name, airportName);
    this._setValue(`${name}Code`, code);
  };

  render() {
    const { origin, destination } = this.state;

    return (
      <form
        className='widget'
        // onSubmit={this._submitForm}
      >
        <AutoCompleteField
          name='origin'
          placeholder='откуда'
          value={origin}
          onSelect={this.onSelect}
          onChange={this.onChange}
          destinations={[]}
          extraClass='widget__current-location'
        />
        <AutoCompleteField
          name='destination'
          placeholder='куда'
          value={destination}
          dropdown
          onSelect={this.onSelect}
          onChange={this.onChange}
          destinations={destinations}
        />
        <Button
          label='Найти'
          className="p-button-raised p-button-success widget__search-btn"
          onClick={this._submitForm}
        />
        <QuantityInput labelText="Quantity" pattern={/^[1-5]{1}$/} />
      </form>
    );
  }
}

export default Widget;
