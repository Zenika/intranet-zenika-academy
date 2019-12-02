import React, { Component } from 'react';
import axios from 'axios';
import { BulmaSteps } from '../bulma-steps/BulmaSteps';

import './PromoCreate.scss';


class PromoCreateResume extends Component {
  constructor(props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleCreate() {
    const { promo } = this.props;
    const newPromo = {
      title: promo.title,
      city: promo.city,
      startDate: promo.startDate,
      endDate: promo.endDate,
      programId: promo.program.value,
    };
    const { teachers } = promo;
    axios.post('http://localhost:4000/api/promotions', { newPromo, teachers })
      .then((res) => {
        promo.students.forEach((student) => {
          const newStudent = {
            ...student,
            promotionId: res.data.id,
          };
          axios.post('http://localhost:4000/api/users', newStudent)
            .then((studentRes) => console.log('new student', studentRes))
            .catch((err) => console.error(err));
        });
      })
      .catch((err) => console.error('ERROR', err));
  }

  render() {
    const { step, promo, prevStep } = this.props;
    const { handleCreate } = this;

    const startDate = promo.startDate.split('-').reverse().join('-');
    const endDate = promo.endDate.split('-').reverse().join('-');

    const buttonForm = (
      <section className="field buttonField">
        <section className="control">
          <button type="button" className="button is-danger" onClick={prevStep}>Revenir</button>
        </section>
        <section className="control">
          <button type="button" onClick={handleCreate} className="button is-link">Valider</button>
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
                <p>{promo.title ? promo.title : ''}</p>
              </section>
            </section>
          </section>
          <section>
            <section className="control">
              <section className="field">
                <label className="label">Date de début: </label>
                <section className="field">
                  <span>
                    {' '}
                    <time>{startDate || ''}</time>
                    {' '}
                  </span>
                </section>
              </section>
            </section>
          </section>
          <section>
            <section className="control">
              <section className="field">
                <label className="label">Date de fin: </label>
                <section className="field">
                  <span>
                    {' '}
                    <time>{endDate || ''}</time>
                    {' '}
                  </span>
                </section>
              </section>
            </section>
          </section>
          <section className="field">
            <label className="label">Pays:</label>
            <section className="field">
              <p>{promo.country.label !== undefined ? promo.country.label : ''}</p>
            </section>
          </section>
          <section className="field">
            <label className="label">Ville:</label>
            <section className="field">
              <p>{promo.city !== undefined ? promo.city : ''}</p>
            </section>
          </section>
          <section className="field">
            <label className="label">Programme:</label>
            <section className="field">
              <p>{promo.program.label !== undefined ? promo.program.label : ''}</p>
            </section>
          </section>
          <section className="field">
            <label className="label">Formateurs:</label>
            <section className="field">
              {promo.teachers.length ? promo.teachers.map((e, i) => <p key={i}>{e.Nom ? `${e.Nom} ${e.Prénom}` : e.label}</p>) : ''}
            </section>
          </section>
          <section className="field">
            <label className="label">Elèves:</label>
            <section className="field">
              {promo.students.length ? promo.students.map((e) => <p key={e.lastName}>{`${e.lastName}  ${e.firstName}  ${e.email}`}</p>) : ''}
            </section>
          </section>
          {buttonForm}
        </article>
      </div>
    );
  }
}

export default PromoCreateResume;
