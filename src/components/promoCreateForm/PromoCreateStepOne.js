import React from 'react';
import { BulmaSteps } from '../bulma-steps/BulmaSteps';
import DatePicker from '../datepicker/DatePicker';
import './PromoCreate.scss';
// import SearchbarAutoComplete from '../searchbarauto/SearchbarAuto';
// import CreatableSelect from '../searchbarauto/CreatableSearchbar';


function PromoCreateStepOne(props) {
  const {
    nextStep, step, handleChange, promo, edit,
  } = props;

  const buttonForm = (
    <section className="field buttonField">
      <section className="control">
        <a href="/home/admin/" id="cancelButton" type="button" className="button is-danger">Annuler</a>
      </section>
      <section className="control">
        <button id="resumeButton" type="button" className="button is-link" onClick={nextStep}>Continuer</button>
      </section>
    </section>
  );

  return (
    <div className="promoCreateForm">
      <article className="section box">
        <h1 className="title is-4 is-spaced">{`${edit ? 'Edition' : 'Création'} d'une promo`}</h1>
        <BulmaSteps step={step} />
        <section className="control">
          <label htmlFor="promoName" className="label">
            Nom de la promo:
            <input id="promoName" className="input " name="title" defaultValue={promo.title} onChange={(e) => handleChange(e)} type="text" placeholder="Promo" />
          </label>
        </section>
        <section>
          <section className="control">
            <span className="label">Date de début: </span>
            <DatePicker date={promo.startDate} name="startDate" defaultValue={promo.startDate} handleChange={(e) => handleChange(e)} />
          </section>
        </section>
        <section>
          <section className="control">
            <span className="label">Date de fin: </span>
            <DatePicker date={promo.endDate} name="endDate" defaultValue={promo.endDate} handleChange={(e) => handleChange(e)} />
          </section>
        </section>
        <section className="field">
          <label htmlFor="city" className="label">
            Ville:
            <section className="field">
              <input type="text" id="city" className="input" defaultValue={promo.city} name="city" onChange={(e) => handleChange(e)} placeholder="Ville" />
            </section>
          </label>
        </section>
        {buttonForm}
      </article>
    </div>
  );
}


export default PromoCreateStepOne;
