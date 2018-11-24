import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';

class SearchTable extends Component {
    state = {
        quantity: ''
    }

    render() {
        console.log(this.state);
        return (
            <div className="input-wrapper">
                <InputText
                    id="quantity"
                    value={this.state.quantity}
                    onChange={(e) => this.setState({ quantity: e.target.value })}
                />
                <label htmlFor="quantity">Quantity</label>
            </div>
        )
    }
}

export default SearchTable;