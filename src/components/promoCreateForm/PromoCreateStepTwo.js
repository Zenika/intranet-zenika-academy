import React, { Component } from 'react';
import { BulmaSteps } from '../bulma-steps/BulmaSteps';
import CreatableSelect from '../searchbarauto/CreatableSearchbar';
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
    const {
      nextStep, prevStep, step, promo, handleMultiChange,
    } = this.props;
    const buttonForm = (
      <div className="field buttonField section">
        <div className="control">
          <button className="button is-danger" onClick={prevStep}>Revenir</button>
        </div>
        <div className="control">
          <button className="button is-link" onClick={nextStep}>Continuer</button>
        </div>
      </div>
    );
    return (
      <div className="promoCreateForm">
        <article className="section box">
          <h1 className="title is-4 is-spaced">Création d'une promo</h1>
          <BulmaSteps step={step} />
          <div className="control">
            <label className="label">Choisir / Créer un programme : </label>
            <section className="field">
              <section className="control">
                <CreatableSelect defaultValue={promo.program} name="program" options={programs} handleChange={(e) => handleMultiChange(e, 'program')} searchKey="title" defaultLabel="Programme" />
              </section>
            </section>
          </div>
          <div className="control">
            {buttonForm}
          </div>
        </article>
      </div>
    );
  }
}

export default PromoCreateStepTwo;
