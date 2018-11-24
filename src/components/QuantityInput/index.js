import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import './QuantityInput.css';

class SearchTable extends Component {
    state = {
        quantity: ''
    }

    render() {
        console.log(this.state);
        return (
            <div className="input-wrapper">
                <label className="input-label" htmlFor="quantity">Quantity</label>
                <InputText
                    id="quantity"
                    keyfilter={/^[1-5]{1}$/}
                    maxLength={1}
                    value={this.state.quantity}
                    onChange={(e) => this.setState({ quantity: e.target.value })}
                />
            </div>
        )
    }
}

export default SearchTable;