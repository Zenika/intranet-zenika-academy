import React, { Component } from 'react';
import axios from 'axios';
import './PromoCreate.scss';
import { BulmaSteps } from '../bulma-steps/BulmaSteps';
import SearchbarAutoComplete from '../searchbarauto/SearchbarAuto';


export class PromoCreateStepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      axios.get('http://localhost:4000/api/users')
        .then((res) => res.data.forEach((teacher) => {
          if (teacher.role === 2) {
            const obj = { label: `${teacher.firstName} ${teacher.lastName}`, value: teacher.id };
            this.setState((state) => {
              const teacherList = state.teachers.push(obj);
              return teacherList;
            });
          }
        }))
        .catch((err) => console.error(err));
    }, 100);
  }

  render() {
    const {
      nextStep, prevStep, step, promo, handleMultiChange, edit,
    } = this.props;

    const { teachers } = this.state;

    const buttonForm = (
      <section className="field buttonField section">
        <section className="control">
          <button id="previousButton" type="button" className="button is-danger" onClick={prevStep}>Revenir</button>
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
            <span className="label">
              Choisir des formateurs existants:
            </span>
            <section className="field">
              <section className="control">
                <SearchbarAutoComplete defaultValue={promo.teachers} name="teachers" options={teachers} handleChange={(e) => handleMultiChange(e, 'teachers')} searchKey="title" defaultLabel="Formateurs" isMulti />
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
