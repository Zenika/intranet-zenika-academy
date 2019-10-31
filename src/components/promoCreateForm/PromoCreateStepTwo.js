import React, { Component } from 'react'

export class PromoCreateStepTwo extends Component {
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
          <h1 className="title is-4 is-spaced">Création d'une promo (étape 2/4)</h1>
          <section className="field">
            <label className="label">Choisir un programme existant</label>
            <section className="field">
              <label className="label">Programme: </label>
              <section className="control">
                <section className="select">
                  <select>
                    <option>Java</option>
                  </select>
                </section>
              </section>
            </section>
          </section>
          <section className="field">
            <label className="label">Création d'un nouveau programme</label>
            <section className="field">
              <section className="control">
                <label className="label">Nom du programme: </label>
                <input className="input " type="text" placeholder="Renforcement JS" />
              </section>
              <section className="field">
                <label className="label">Choix des Modules</label>
                <section className="field">
                  <label className="label">Modules: </label>
                  <section className="control">
                    <section className="select">
                      <select >
                        <option>Bases html</option>
                        <option>Bases css</option>
                        <option>Variables Javascript</option>
                      </select>
                    </section>
                  </section>
                </section>
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
    )
  }
}

export default PromoCreateStepTwo;
