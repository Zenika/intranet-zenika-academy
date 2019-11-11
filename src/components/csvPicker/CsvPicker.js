import React, { Component } from 'react';
import CSVReader from 'react-csv-reader';
import CsvPickerButton from './CsvPickerButton';


const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  encoding: 'UTF-8',
};

export default class CsvPicker extends Component {

  /**
   * Allows to call the props function handleCSVImport
   * @param {*} e event trigger by the onFileLoaded method
   */
  onDataImport(e) {
    const { handleCSVImport, name } = this.props;
    handleCSVImport(name, e);
  }

  render() {
    const { name } = this.props;
    return (
      <>
        <CSVReader name={name} parserOptions={papaparseOptions} onFileLoaded={(e) => this.onDataImport(e)} />
        <CsvPickerButton />
      </>
    );
  }
}
