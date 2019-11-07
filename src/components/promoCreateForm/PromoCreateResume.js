import React, { Component } from 'react'
import { BulmaSteps } from '../bulma-steps/BulmaSteps';
import './PromoCreate.scss';


export class PromoCreateResume extends Component {
  render() {
    const { step, handleChange, promo, prevStep } = this.props;
    console.log(promo);


    const buttonForm = (
      <section className="field buttonField">
        <section className="control">
          <button className="button is-danger" onClick={prevStep}>Revenir</button>
        </section>
        <section className="control">
          <button className="button is-link" >Valider</button>
        </section>
      </section>
    );

    return (
      <div className="promoCreateForm">
        <article className="section box">
          <h1 className="title is-4 is-spaced">Création d'une promo</h1>
          <BulmaSteps step={step} />
          <section className="control">
            <section className="field">
              <label className="label">Nom de la promo: </label>
              <section className="field">
                <p>{promo.title}</p>
              </section>
            </section>
          </section>
          <section>
            <section className="control">
              <section className="field">
                <label className="label">Date de début: </label>
                <section className="field">
                  <span> <time >{promo.startDate}</time> </span>
                </section>
              </section>
            </section>
          </section>
          <section>
            <section className="control">
              <section className="field">
                <label className="label">Date de fin: </label>
                <section className="field">
                  <span> <time >{promo.endDate}</time> </span>
                </section>
              </section>
            </section>
          </section>
          <section className="field">
            <label className="label">Pays:</label>
            <section className="field">
              <p>{promo.country}</p>
            </section>
          </section>
          <section className="field">
            <label className="label">Ville:</label>
            <section className="field">
              <p>{promo.city}</p>
            </section>
          </section>
          {buttonForm}
        </article>
      </div>
    )
  }
}

export default PromoCreateResume
