import React from 'react';
import { Link } from 'react-router-dom';

class RssFeedForm extends React.Component {
  render() {
    const { id } = this.props.match.params;
    let titleForm;
    let buttonForm;

    if (id !== undefined) {
      titleForm = (
        <h1 className="title is-4 is-spaced">Edition d'un flux RSS</h1>
      );
      buttonForm = (
        <section className="field is-grouped">
          <section className="control">
            <Link to="admin/community/rssfeed">
              <button className="button is-link">Editer</button>
            </Link>
          </section>
          <section className="control">
            <Link to="/admin/community/rssfeed">
              <button className="button is-danger">Supprimer</button>
            </Link>
          </section>
        </section>
      );
    } else {
      titleForm = (
        <h1 className="title is-4 is-spaced">Création d'un flux RSS</h1>
      );
      buttonForm = (
        <section className="field is-grouped">
          <section className="control">
            <Link to="admin/community/rssfeed">
              <button className="button is-link">Créer</button>
            </Link>
          </section>
          <section className="control">
            <Link to="/admin/community/rssfeed">
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
          <section className="control">
            <label className="label">Nom: </label>
            <input className="input" type="text" placeholder="Nom du flux" />
          </section>
          <section className="control">
            <label className="label">Descriptif: </label>
            <textarea className="textarea" placeholder="Description du flux" />
          </section>
          <section className="control">
            <label className="label">Lien: </label>
            <textarea className="textarea" placeholder="Lien vers le flux" />
          </section>
        </section>
        {buttonForm}
      </article>
    );
  }
}
export default RssFeedForm;
