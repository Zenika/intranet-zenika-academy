import React from 'react';
import { Link } from 'react-router-dom';
import DatePicker from '../datepicker/DatePicker';

class ParcoursForm extends React.Component {
  componentDidUpdate() {
  }

  render() {
    const { id } = this.props.match.params;
    let parcours;
    let titleForm;
    let buttonForm;

    if (id !== undefined) {
      if (this.props.location.query) {
        parcours = this.props.location.query.parcours;
      }
      titleForm = (
        <h1 className="title is-4 is-spaced">Edition d'un parcours</h1>
      );
      buttonForm = (
        <section className="field is-grouped">
          <section className="control">
            <Link to="/admin/parcours/1/edit">
              <button className="button is-link">Editer</button>
            </Link>
          </section>
          <section className="control">
            <Link to="/admin/program">
              <button className="button is-danger">Supprimer</button>
            </Link>
          </section>
        </section>
      );
    } else {
      parcours = {};
      titleForm = (
        <h1 className="title is-4 is-spaced">Création d'un parcours</h1>
      );
      buttonForm = (
        <section className="field is-grouped">
          <section className="control">
            <Link to="/admin/parcours/1/edit">
              <button className="button is-link">Créer</button>
            </Link>
          </section>
          <section className="control">
            <Link to="/admin/program">
              <button className="button is-danger">Annuler</button>
            </Link>
          </section>
        </section>
      );
    }
    return (
      <article className="section box">
        {titleForm}
        <section className="field">
          <label className="label">Promotion: </label>
          <section className="control">
            <label className="label">Pays: </label>
            <section className="select">
              <select
                defaultValue={parcours ? parcours.country : ''}
              >
                <option>France</option>
                <option>Maroc</option>
              </select>
            </section>
          </section>
        </section>
        <section className="field">
          <label className="label">Ville: </label>
          <section className="control">
            <section className="select">
              <select defaultValue={parcours ? parcours.city : ''}>
                <option>Paris</option>
                <option>Rennes</option>
              </select>
            </section>
          </section>
        </section>
        <section className="field">
          <label className="label">Numéro: </label>
          <section className="control">
            <section className="select">
              <select defaultValue={parcours ? parcours.number : ''}>
                <option>02</option>
                <option>05</option>
              </select>
            </section>
          </section>
        </section>
        <section className="field">
          <label> Date de début: </label>
          <DatePicker date={parcours ? parcours.startDate : ''} />
        </section>
        <section>
          <label> Date de fin: </label>
          <DatePicker date={parcours ? parcours.endDate : ''} />
        </section>
        <section className="field">
          <label className="label">Programme: </label>
          <section className="control">
            <input
              className="input"
              type="text"
              placeholder="Perfectionnement JS"
              defaultValue={parcours ? parcours.program : ''}
            />
          </section>
          <a href="https://google.com" rel="noopener noreferrer" target="_blank">Lien vers le programme</a>
        </section>
        <section className="field">
          <label className="label">Equipe pédagogique</label>
          <section className="control">
            <label className="label">Intitulé du rôle: </label>
            <input
              defaultValue={parcours ? parcours.role : ''}
              className="input"
              type="text"
              placeholder="Formateur référent"
            />
          </section>
          <section className="control">
            <label className="label">Prénom: </label>
            <input
              defaultValue={
                  parcours ? parcours.teacherFirstName : ''
                }
              className="input "
              type="text"
              placeholder="Jean"
            />
          </section>
          <section className="control">
            <label className="label">Nom: </label>
            <input
              defaultValue={
                  parcours ? parcours.teacherLastName : ''
                }
              className="input"
              type="text"
              placeholder="TASSE"
            />
          </section>
          <section className="control">
            <label className="label">Descriptif: </label>
            <textarea
              defaultValue={
                  parcours ? parcours.description : ''
                }
              className="textarea"
              placeholder="Il est génial"
            />
          </section>
        </section>
        {buttonForm}
      </article>
    );
  }
}

export default ParcoursForm;
