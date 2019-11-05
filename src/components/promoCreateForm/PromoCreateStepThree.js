import React, { Component } from 'react';
import './PromoCreate.scss';
import { BulmaSteps } from '../bulma-steps/BulmaSteps';
export class PromoCreateStepThree extends Component {
  render() {
    const { nextStep, prevStep, isTeachers, step } = this.props;
    const buttonForm = (
      <section className="field is-grouped">
        <section className="control">
          <button className="button is-danger" onClick={prevStep}>Revenir</button>
        </section>
        <section className="control">
          <button className="button is-link" onClick={nextStep}>Continuer</button>
        </section>
      </section>
    );

    const studentComplement = (
      <section className="field">
        <section className="field">
          <section className="control">
            <input className="input " type="text" placeholder="Email" />
          </section>
        </section>
        <section className="field">
          <section className="control">
            <input className="input " type="text" placeholder="Numéro de téléphone" />
          </section>
        </section>
        <section className="field">
          <section className="control">
            <input className="input " type="text" placeholder="Identifiant Pole Emploi" />
          </section>
        </section>
      </section>
    );

    return (
      <div className="promoCreateForm">
        <article className="section box">
          <h1 className="title is-4 is-spaced">Création d'une promo</h1>
          <BulmaSteps step={step} />
          <section className="control">
            <label className="label">Choisir des {isTeachers ? " formateurs " : " élèves "} existants:</label>
            <section className="field">
              <section className="control">
                <section className="select">
                  <select>
                    <option></option>
                    <option>{isTeachers ? "Jérémie Patonier" : "Jérémy Pluquet"}</option>
                  </select>
                </section>
              </section>
            </section>
          </section>
          <section className="field">
            <label className="label middleLines"><span>OU</span></label>
          </section>
          <section className="field">
            <label className="label">Créer de nouveaux{isTeachers ? " formateurs " : " élèves "}:</label>
            <section className="field">
              <section className="control">
                <input className="input " type="text" placeholder="Nom" />
              </section>
            </section>
            <section className="field">
              <section className="control">
                <input className="input " type="text" placeholder="Prénom" />
              </section>
            </section>
            {!isTeachers && studentComplement}
            <section className="field">
              <section className="control">
                <button className="button is-link">Ajouter</button>
              </section>
            </section>
            <section className="field">
              <section className="field">
                <section className="control">
                  <textarea className="textarea" placeholder={isTeachers ? " formateurs " : " élèves "} />
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

export default PromoCreateStepThree;
