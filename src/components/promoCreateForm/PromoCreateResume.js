import React, { Component } from 'react'
import { BulmaSteps } from '../bulma-steps/BulmaSteps';
import './PromoCreate.scss';


class PromoCreateResume extends Component {
  render() {
    const { step, promo, prevStep } = this.props;

    console.log(promo);


    const startDate = promo.startDate.split("-").reverse().join("-");
    const endDate = promo.endDate.split("-").reverse().join("-");


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
          <section className="field">
            <span className="title is-4 is-spaced">Résumé</span>
          </section>
          <section className="control">
            <section className="field">
              <label className="label">Nom de la promo: </label>
              <section className="field">
                <p>{promo.title ? promo.title : ""}</p>
              </section>
            </section>
          </section>
          <section>
            <section className="control">
              <section className="field">
                <label className="label">Date de début: </label>
                <section className="field">
                  <span> <time >{startDate ? startDate : ""}</time> </span>
                </section>
              </section>
            </section>
          </section>
          <section>
            <section className="control">
              <section className="field">
                <label className="label">Date de fin: </label>
                <section className="field">
                  <span> <time >{endDate ? endDate : ""}</time> </span>
                </section>
              </section>
            </section>
          </section>
          <section className="field">
            <label className="label">Pays:</label>
            <section className="field">
              <p>{promo.country.label !== undefined ? promo.country.label : ""}</p>
            </section>
          </section>
          <section className="field">
            <label className="label">Ville:</label>
            <section className="field">
              <p>{promo.city.label !== undefined ? promo.city.label : ""}</p>
            </section>
          </section>
          <section className="field">
            <label className="label">Programme:</label>
            <section className="field">
              <p>{promo.program.label !== undefined ? promo.program.label : ""}</p>
            </section>
          </section>
          <section className="field">
            <label className="label">Formateurs:</label>
            <section className="field">
              {promo.teachers.length ? promo.teachers.map((e, i) => {
                return <p key={i}>{e.Nom ? `${e.Nom} ${e.Prénom}` : e.label}</p>
              }) : ""}
            </section>
          </section>
          <section className="field">
            <label className="label">Elèves:</label>
            <section className="field">
              {promo.students.length ? promo.students.map(e => {
                return <p key={e.Nom}>{`${e.Nom}  ${e.Prénom}  ${e.Email}`}</p>
              }) : ""}
            </section>
          </section>
          {buttonForm}
        </article>
      </div>
    )
  }
}

export default PromoCreateResume;
