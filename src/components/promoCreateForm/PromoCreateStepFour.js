import React, { Component } from 'react';
import CsvPicker from '../csvPicker/CsvPicker';
import './PromoCreate.scss';
import { BulmaSteps } from '../bulma-steps/BulmaSteps';


export class PromoCreateStepFour extends Component {

  render() {
    const {
      nextStep, prevStep, step, handleCSVImport, name,
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
            <div className="csvPickerContainer">
              <CsvPicker name={name} handleCSVImport={handleCSVImport} />
            </div>
          </section>
          {buttonForm}
        </article>
      </div>
    );
  }
}

export default PromoCreateStepFour;
