import React, { Component } from 'react';
import CSVReader from 'react-csv-reader';
import CsvPickerButton from './CsvPickerButton';
import './CsvPicker.scss';


const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  encoding: 'UTF-8',
};

export default class CsvPicker extends Component {
  constructor() {
    super();
    this.state = {
      csvIconHidden: 'csvIconHidden',
    };
  }

  /**
   * Allows to call the props function handleCSVImport
   * @param {*} e event trigger by the onFileLoaded method
   */
  onDataImport(e) {
    const { handleCSVImport, name } = this.props;
    handleCSVImport(name, e);
    this.setState({
      csvIconHidden: '',
    });
  }

  render() {
    /* Name of the input */
    const { name } = this.props;
    const { csvIconHidden } = this.state;
    return (
      <>
        <CSVReader id="csvPicker" name={name} parserOptions={papaparseOptions} onFileLoaded={(e) => this.onDataImport(e)} />
        <div className="csvPickerControls">
          <CsvPickerButton />
          <span className={`${csvIconHidden} csvIconShow icon has-text-success`}>
            <i className="fas fa-2x fa-check-square" />
          </span>
        </div>
      </>
    );
  }
}
