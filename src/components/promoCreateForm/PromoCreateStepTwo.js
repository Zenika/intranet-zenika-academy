import React, { Component } from 'react';
import { BulmaSteps } from '../bulma-steps/BulmaSteps';
import SearchbarAutoComplete from '../searchbarauto/SearchbarAuto';
import './PromoCreate.scss';

const programs = [
  {
    label: 'C',
    value: 'C',
  },
  {
    label: 'C++',
    value: 'C++',

  },
  {
    label: 'Java',
    value: 'Java',
  },
  {
    label: 'Javascript',
    value: 'Javascript',
  },
  {
    label: 'Agile',
    value: 'Agile',
  },
];

export class PromoCreateStepTwo extends Component {
  render() {
    const { nextStep, prevStep, step } = this.props;

    const buttonForm = (
      <section className="field buttonField">
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
            <label className="label">Choisir un programme existant: </label>
            <section className="field">
              <section className="control">
                <SearchbarAutoComplete searchObject={programs} searchKey="title" isMulti />
              </section>
            </section>
          </section>
          <div className="field">
            <label className="label middleLines"><span>OU</span></label>
          </div>
          <section className="field">
            <label className="label">Créer d'un nouveau programme: </label>
            <section className="field">
              <section className="control">
                <input className="input " type="text" placeholder="Nom du programme" />
              </section>
            </section>
          </section>
          {buttonForm}
        </article>
      </div>
    );
  }
}

export default PromoCreateStepTwo;
