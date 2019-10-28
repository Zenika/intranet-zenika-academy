import React from 'react';
import { Link } from 'react-router-dom';

class WhoToFollowForm extends React.Component {
  render() {
    const { id } = this.props.match.params;
    let titleForm;
    let buttonForm;

    if (id !== undefined) {
      titleForm = (
        <h1 className="title is-4 is-spaced">Edition d'un who to follow</h1>
      );
      buttonForm = (
        <section className="field is-grouped">
          <section className="control">
            <Link to="/admin/program/ressources">
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
        <h1 className="title is-4 is-spaced">Création d'un who to follow</h1>
      );
      buttonForm = (
        <section className="field is-grouped">
          <section className="control">
            <Link to="/admin/community/whoToFollow">
              <button className="button is-link">Créer</button>
            </Link>
          </section>
          <section className="control">
            <Link to="/admin/community/whoToFollow">
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
          <label className="label">Nom du Who To Follow: </label>
          <input className="input " type="text" placeholder="SASS" />
        </section>
        <section className="field">
          <label className="label">Lien vers ses réseaux: </label>
          <section className="field">
            <input className="input " type="text" placeholder="Twitter" />
          </section>
          <section className="field">
            <input className="input " type="text" placeholder="Facebook" />
          </section>
          <section className="field">
            <input className="input " type="text" placeholder="Github" />
          </section>
          <section className="field control">
            <label className="label">Descriptif: </label>
            <textarea className="textarea" placeholder="Il est génial" />
          </section>
          {buttonForm}
        </section>
      </article>
    );
  }
}

export default WhoToFollowForm;
