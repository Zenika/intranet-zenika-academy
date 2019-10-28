import React from 'react';
import { Link } from 'react-router-dom';

class RessourceForm extends React.Component {
  render() {
    const { id } = this.props.match.params;
    let titleForm;
    let buttonForm;

    if (id !== undefined) {
      titleForm = (
        <h1 className="title is-4 is-spaced">Edition d'une ressource</h1>
      );
      buttonForm = (
        <section className="field is-grouped">
          <section className="control">
            <Link to="/admin/program/ressources/1/edit">
              <button className="button is-link">Editer</button>
            </Link>
          </section>
          <section className="control">
            <Link to="/admin/program/ressources">
              <button className="button is-danger ">Supprimer</button>
            </Link>
          </section>
        </section>
      );
    } else {
      titleForm = (
        <h1 className="title is-4 is-spaced">Création d'une ressource</h1>
      );
      buttonForm = (
        <section className="field is-grouped">
          <section className="control">
            <Link to="/admin/program/ressources/1/edit">
              <button className="button is-link">Créer</button>
            </Link>
          </section>
          <section className="control">
            <Link to="/admin/program/ressources">
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
          <label className="label">Nom de la ressource: </label>
          <input className="input " type="text" placeholder="SASS" />
        </section>
        <section className="field">
          <label className="label">Programme de la ressource: </label>
          <section className="control">
            <section className="select">
              <select>
                <option>Renforcement JS</option>
                <option>Renforcement Java</option>
              </select>
            </section>
          </section>
        </section>
        <section className="field">
          <label className="label">Module de la ressource: </label>
          <section className="control">
            <section className="select">
              <select>
                <option>React JS</option>
                <option>CSS</option>
              </select>
            </section>
          </section>
        </section>
        <section className="field">
          <a>Lien vers le programme</a>
        </section>
        <section className="field control">
          <label className="label">Descriptif: </label>
          <textarea className="textarea" placeholder="Il est génial" />
        </section>
        {buttonForm}
      </article>
    );
  }
}

export default RessourceForm;
