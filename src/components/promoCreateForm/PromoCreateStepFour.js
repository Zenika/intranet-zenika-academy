import React, { Component } from 'react';
import CSVReader from 'react-csv-reader';
import './PromoCreate.scss';
import CsvPickerButton from './CsvPickerButton';
import { BulmaSteps } from '../bulma-steps/BulmaSteps';


const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  encoding: 'UTF-8',
};


export class PromoCreateStepFour extends Component {
  onDataImport(e) {
    const { handleCSVImport } = this.props;
    handleCSVImport('students', e);
  }

  render() {
    const {
      nextStep, prevStep, step,
    } = this.props;

    const buttonForm = (
      <section className="field buttonField section">
        <section className="control">
          <button type="button" className="button is-danger" onClick={prevStep}>Revenir</button>
        </section>
        <section className="control">
          <button type="button" className="button is-link" onClick={nextStep}>Continuer</button>
        </section>
      </section>
    );

    return (
      <div className="promoCreateForm">
        <article className="section box">
          <h1 className="title is-4 is-spaced">Création d'une promo</h1>
          <BulmaSteps step={step} />
          <section className="control">
            <label htmlFor="students" className="label">
              Importer des étudiants :
            </label>
            <CSVReader name="students" parserOptions={papaparseOptions} onFileLoaded={(e) => this.onDataImport(e)} />
            <CsvPickerButton />
          </section>
          {buttonForm}
        </article>
      </div>
    );
  }
}

export default PromoCreateStepFour;
