import React, { Component } from 'react';

class DatePicker extends Component {
  render() {
    let date = '';
    if (this.props.date) {
      date = this.props.date;
    }
    return <input type="date" defaultValue={date || ''} />;
  }
}

export default DatePicker;
