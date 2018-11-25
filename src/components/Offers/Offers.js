import React, { PureComponent } from 'react';
import { SelectButton } from 'primereact/selectbutton';

import './styles.css';

const activities = [
  {label: 'Ходить по музеям', value: 'Ходить по музеям'},
  {label: 'Загорать на пляже', value: 'Загорать на пляже'},
  {label: 'Сноуборд, лыжи и т.д.', value: 'Сноуборд, лыжи и т.д.'}
];

class Offers extends PureComponent {
  state = {
    value: '',
  };

  render() {
    const { refTable } = this.props;

    return (
      <div className="content-section implementation">
        <h2 ref={refTable}>Чем хотите заниматься?</h2>
        <div className="content-section-text">
          <SelectButton
            multiple={true}
            value={this.state.value}
            options={activities}
            onChange={(e) => this.setState({value: e.value})}
          />
        </div>
      </div>
    );
  }
}

export default Offers;
