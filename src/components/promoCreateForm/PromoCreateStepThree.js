import React, { Component } from 'react';
import './PromoCreate.scss';
import { BulmaSteps } from '../bulma-steps/BulmaSteps';
import SearchbarAutoComplete from '../searchbarauto/SearchbarAuto';

const formers = [
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

const students = [
  {
    label: 'Jeremy Pluquet',
    value: 'Jeremy Pluquet',
  },
  {
    label: 'Youcef Messaoudene',
    value: 'Youcef Messaoudene',

  },
  {
    label: 'Anne-Lise Vanhoegaerden',
    value: 'Monsieur X',
  },
  {
    label: 'Claudine Lafine',
    value: 'Claudine Lafine',
  },
];

export class PromoCreateStepThree extends Component {
  render() {
    const {
      nextStep, prevStep, isTeachers, step,
    } = this.props;
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
            <label className="label">
Choisir des
              {isTeachers ? ' formateurs ' : ' élèves '}
              {' '}
existants:
            </label>
            <section className="field">
              <section className="control">
                <SearchbarAutoComplete searchObject={isTeachers ? formers : students} searchKey="name" isMulti />
              </section>
            </section>
          </section>
          <section className="field">
            <label className="label middleLines"><span>OU</span></label>
          </section>
          <section className="field">
            <section className="field">
              <section className="control buttonCreate">
                <button className="button is-link">Créer un utilisateur</button>
              </section>
            </section>
          </section>
          {buttonForm}
        </article>
      </div>
    );
  }
}

export default PromoCreateStepThree;
