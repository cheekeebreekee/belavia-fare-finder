import React, { Component } from 'react';
import { AutoComplete } from 'primereact/autocomplete';

import Template from './Template/Template';
import './styles.css';

const NO_RESULTS_FOUND = 'В любые направления';
const className = 'widget__auto-complete-field';

class AutoCompleteField extends Component {
  state = {
    suggestions: [],
  };

  _onSelect = e => this.props.onSelect({ name: this.props.name, ...e.value });

  _onBlur = e => this.props.onSelect({ name: this.props.name, ...this.state.suggestions[0] });

  suggestBrands = e => {
    const { query } = e;
    const { destinations } = this.props;
    const suggestions = destinations.filter(({ airportName }) => airportName.toLowerCase().startsWith(query.toLowerCase()));

    if (!suggestions.length) {
      suggestions.push({
        airportName: NO_RESULTS_FOUND,
        notResults: true,
      });
    }
    
    this.setState({ suggestions });
  }

  render() {
    const { suggestions } = this.state;
    const { name, onChange, value, placeholder, extraClass } = this.props;

    return (
      <span className='widget__field'>
        <AutoComplete
          inputClassName={`${className} ${extraClass}`}
          name={name}
          value={value}
          onChange={onChange}
          onSelect={this._onSelect}
          suggestions={suggestions}
          completeMethod={this.suggestBrands}
          itemTemplate={Template}
          onBlur={this._onBlur}
        />
        <span className='widget__field-placeholder'>{placeholder}</span>
      </span>
    );
  }
}

export default AutoCompleteField;
