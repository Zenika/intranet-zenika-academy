import React, { Component } from 'react';

export class PromoCreateStepThree extends Component {
  render() {
    const { nextStep, prevStep } = this.props;
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
    return (
      <div>
        <article className="section box">
          <h1 className="title is-4 is-spaced">Création d'une promo (étape 3/4)</h1>
          <section className="field">
            <label className="label">Choix de l'équipe pédagogique</label>
            <section className="field">
              <label className="label">Formateurs: </label>
              <section className="control">
                <section className="select">
                  <select>
                    <option>Jérémie Patonier</option>
                  </select>
                </section>
              </section>
            </section>
          </section>
          <br />
          <section className="field">
            <label className="label">Ajout d'un formateur</label>
            <section className="field">
              <section className="control">
                <label className="label">Nom du formateur: </label>
                <input className="input " type="text" placeholder="Renforcement JS" />
              </section>
              <section className="field">
                <section className="control">
                  <label className="label">Modules: </label>
                  <textarea className="textarea" placeholder="Modules" />
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
