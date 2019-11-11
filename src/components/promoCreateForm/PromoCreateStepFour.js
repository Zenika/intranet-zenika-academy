import React, { Component } from 'react';
import CSVReader from 'react-csv-reader';
import './PromoCreate.scss';
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

  handleClick = () => {
    const csvPicker = document.getElementsByClassName("csv-input");
    csvPicker[0].click();
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
              Importer des étudiants à l'aide d'un fichier csv :
            </label>
            <CSVReader name="students" parserOptions={papaparseOptions} onFileLoaded={(e) => this.onDataImport(e)} />
            <button type="button" className="button" onClick={this.handleClick}>Choisir un fichier csv</button>
          </section>
          {buttonForm}
        </article>
      </div>
    );
  }
}

export default PromoCreateStepFour;
