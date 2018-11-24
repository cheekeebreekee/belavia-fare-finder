import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import './QuantityInput.css';

class SearchTable extends Component {
    state = {
        quantity: ''
    }

    render() {
        return (
            <div className="input-wrapper">
                <label className="input-label">{this.props.labelText}</label>
                <InputText
                    keyfilter={this.props.pattern}
                    maxLength={1}
                    value={this.state.quantity}
                    onChange={(e) => this.setState({ quantity: e.target.value })}
                />
            </div>
        )
    }
}

export default SearchTable;