import React from 'react';
import { BulmaSteps } from '../bulma-steps/BulmaSteps';
import DatePicker from '../datepicker/DatePicker';
import './PromoCreate.scss';

function PromoCreateStepOne(props) {
  const { nextStep, step, handleChange, promo } = props;

  const buttonForm = (
    <section className="field buttonField">
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
        <h1 className="title is-4 is-spaced">Création d'une promo</h1>
        <BulmaSteps step={step} />
        <section className="control">
          <label className="label">Nom de la promo: </label>
          <input className="input " name="title" defaultValue={promo.title} onChange={(e) => handleChange(e)} type="text" placeholder="Promo" />
        </section>
        <section>
          <section className="control">
            <label className="label">Date de début: </label>
            <DatePicker date={promo.startDate} name={"startDate"} defaultValue={promo.startDate} handleChange={(e) => handleChange(e)} />
          </section>
        </section>
        <section>
          <section className="control">
            <label className="label">Date de fin: </label>
            <DatePicker date={promo.endDate} name={"endDate"} defaultValue={promo.endDate} handleChange={(e) => handleChange(e)} />
          </section>
        </section>
        <section className="field">
          <label className="label">Pays:</label>
          <input className="input " name="country" defaultValue={promo.country} onChange={(e) => handleChange(e)} type="text" placeholder="Pays" />
        </section>
        <section className="field">
          <label className="label">Ville:</label>
          <section className="field">
            <input className="input " name="city" defaultValue={promo.city} onChange={(e) => handleChange(e)} type="text" placeholder="Ville" />
          </section>
        </section>
        {buttonForm}
      </article>
    </div>
  );
}


export default PromoCreateStepOne;
