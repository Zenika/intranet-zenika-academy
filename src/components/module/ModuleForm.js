import React from "react";
import { Link } from "react-router-dom";

class ModuleForm extends React.Component {
  render() {
    const { id } = this.props.match.params;
    let module;
    let titleForm;
    let buttonForm;

    if (id !== undefined) {
      if (this.props.location.query) {
        module = this.props.location.query.module;
      }

      titleForm = <h1 className="title is-4 is-spaced">Edition d'un module</h1>;

      buttonForm = (
        <section className="field is-grouped">
          <section className="control">
            <Link to="/admin/module/list">
              <button className="button is-link">Editer</button>
            </Link>
          </section>
          <section className="control">
            <Link to="/admin/module/list">
              <button className="button is-danger">Supprimer</button>
            </Link>
          </section>
        </section>
      );
    } else {
      module = {};
      titleForm = (
        <h1 className="title is-4 is-spaced">Création d'un module</h1>
      );
      buttonForm = (
        <section className="field is-grouped">
          <section className="control">
            <Link to="/admin/module/list">
              <button className="button is-link">Créer</button>
            </Link>
          </section>
          <section className="control">
            <Link to="/admin/module/list">
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
          <label className="label">Titre: </label>
          <section className="control">
            <input
              className="input"
              type="text"
              placeholder="Nom du module"
              defaultValue={module ? module.title : ""}
            />
          </section>
        </section>
        <section className="field">
          <section className="control">
            <label className="label">Descriptif: </label>
            <textarea
              defaultValue={module ? module.description : ""}
              className="textarea"
              placeholder="Descritpion du module"
            />
          </section>
        </section>
        {buttonForm}
      </article>
    );
  }
}
export default ModuleForm;
