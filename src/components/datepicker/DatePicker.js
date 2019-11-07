import React, { Component } from 'react';

class DatePicker extends Component {
  render() {
    const { defaultValue, name, handleChange } = this.props;
    return <input type="date" onChange={(e) => handleChange(e)} defaultValue={defaultValue} name={name} />;
  }
}

export default DatePicker;
