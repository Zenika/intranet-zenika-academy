import React, { Component } from 'react';
import CsvPicker from '../csvPicker/CsvPicker';
import './PromoCreate.scss';
import { BulmaSteps } from '../bulma-steps/BulmaSteps';
import SearchbarAutoComplete from '../searchbarauto/SearchbarAuto';

const teachers = [
  {
    label: 'Jérémie Patonnier',
    value: 'Jérémie Patonnier',
  },
  {
    label: 'Jonathan Barthelemy',
    value: 'Jonathan Barthelemy',

  },
  {
    label: 'Monsieur X',
    value: 'Monsieur X',
  },
  {
    label: 'Madame Y',
    value: 'Madame Y',
  },
];

const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  encoding: 'UTF-8',
};

export class PromoCreateStepThree extends Component {
  render() {

    const {
      nextStep, prevStep, step, promo, handleMultiChange, handleCSVImport, name, csv,
    } = this.props;

    const selected = promo.teachers.length && promo.teachers.length > 0 ? true : false;

    const buttonForm = (
      <section className="field buttonField section">
        <section className="control">
          <button className="button is-danger" onClick={prevStep}>Revenir</button>
        </section>
        <section className="control">
          <button className="button is-link" onClick={nextStep}>Continuer</button>
        </section>
      </section>
    );

    return (
      <div className="promoCreateForm">
        <article className="section box">
          <h1 className="title is-4 is-spaced">Création d'une promo</h1>
          <BulmaSteps step={step} />
          <section className="control">
            <label className="label">
              Choisir des formateurs existants:
            </label>
            <section className="field">
              <section className="control">
                <SearchbarAutoComplete csv={csv} defaultValue={promo.teachers} name="teachers" options={teachers} handleChange={(e) => handleMultiChange(e, 'teachers')} searchKey="title" defaultLabel="Formateurs" isMulti />
              </section>
            </section>
          </section>
          <div className="section">
            <label className="label middleLines"><span>OU</span></label>
          </div>
          <section className="control">
            <label htmlFor="students" className="label">
              Importer de nouveaux formateurs :
            </label>
            <div className="csvPickerContainer">
              <CsvPicker selected={selected} name={name} handleCSVImport={handleCSVImport} />
            </div>
          </section>
          {buttonForm}
        </article>
      </div>
    );
  }
}

export default PromoCreateStepThree;
