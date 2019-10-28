// import DatePicker from "./datePicker";
import React from 'react';
import { Link } from 'react-router-dom';
import '../layout/Layout.css';

class ProgramForm extends React.Component {
  render() {
    const { id } = this.props.match.params;
    let titleForm;
    let buttonForm;

    if (id !== undefined) {
      titleForm = (
        <h1 className="title is-4 is-spaced">Edition d'un programme</h1>
      );
      buttonForm = (
        <section className="field is-grouped">
          <section className="control">
            <Link to="/admin/program/1/edit">
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
      titleForm = (
        <h1 className="title is-4 is-spaced">Création d'un programme</h1>
      );
      buttonForm = (
        <section className="field is-grouped">
          <section className="control">
            <Link to="/admin/program/1/edit">
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
        <section className="control">
          <label className="label">Nom du programme: </label>
          <input className="input " type="text" placeholder="Renforcement JS" />
        </section>
        <section className="field">
          <a href="https://google.com" rel="noopener noreferrer" target="_blank">Lien vers le programme</a>
        </section>
        <section className="field">
          <label className="label">Equipe pédagogique</label>
          <section className="field">
            <label className="label">Formateur référent: </label>
            <section className="control">
              <section className="select">
                <select>
                  <option>Jérémie Platonnier</option>
                  <option>Jonathan Barthelemy</option>
                </select>
              </section>
            </section>
          </section>
          <section className="control">
            <label className="label">Descriptif: </label>
            <textarea className="textarea" placeholder="Il est génial" />
          </section>
        </section>
        {buttonForm}
      </article>
    );
  }
}

export default ProgramForm;
