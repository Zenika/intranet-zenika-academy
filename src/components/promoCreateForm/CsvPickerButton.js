import React, { Component } from 'react';
import './PromoCreate.scss';

class CsvPickerButton extends Component {
  handleClick = () => {
    const csvPicker = document.getElementsByClassName('csv-input');
    csvPicker[0].click();
  }

  render() {
    return (
      <div>
        <button type="button" className="button" onClick={this.handleClick}>Choisir un fichier csv</button>
      </div>
    );
  }
}

export default CsvPickerButton;
