import React, { Component } from 'react';
import DatePicker from '../datepicker/DatePicker';
import './PromoCreate.scss';

export class PromoCreateStepOne extends Component {
  render() {
    const { nextStep } = this.props;

    const buttonForm = (
      <section className="field is-grouped">
        <section className="control">
          <button className="button is-danger">Annuler</button>
        </section>
        <section className="control">
          <button className="button is-link" onClick={nextStep}>Continuer</button>
        </section>
      </section>
    );
    return (
      <div className="promoCreateForm">
        <article className="section box">
          <h1 className="title is-4 is-spaced">Création d'une promo (étape 1/4)</h1>
          <section className="control">
            <label className="label">Nom de la promo: </label>
            <input className="input " type="text" placeholder="Promo" />
          </section>
          <section>
            <section className="control">
              <label className="label">Date de début: </label>
              <DatePicker date="" />
            </section>
          </section>
          <section>
            <section className="control">
              <label className="label">Date de fin: </label>
              <DatePicker date="" />
            </section>
          </section>
          <section className="field">
            <label className="label">Pays:</label>
            <section className="field">
              <section className="control">
                <section className="select">
                  <select>
                    <option>France</option>
                    <option>Canada</option>
                  </select>
                </section>
              </section>
            </section>
          </section>
          <section className="field">
            <label className="label">Ville:</label>
            <section className="field">
              <section className="control">
                <section className="select">
                  <select>
                    <option>Paris</option>
                    <option>Rennes</option>
                  </select>
                </section>
              </section>
            </section>
          </section>
          {buttonForm}
        </article>
      </div>
    );
  }
}

export default PromoCreateStepOne;
