import React, { Component } from 'react';
import './CsvPicker.scss';


class CsvPickerButton extends Component {
  handleClick = () => {
    const csvPicker = document.getElementsByClassName('csv-input');
    csvPicker[0].click();
  }

  render() {
    return (
      <>
        <button type="button" className="button csvButton" onClick={this.handleClick}>Choisir un fichier csv</button>
      </>
    );
  }
}

export default CsvPickerButton;
