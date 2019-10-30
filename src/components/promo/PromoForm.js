import React from "react";
import { Link } from "react-router-dom";
import DatePicker from "../datepicker/DatePicker";

class PromoForm extends React.Component {
  componentDidUpdate() {}

  render() {
    const { id } = this.props.match.params;
    let promo;
    let titleForm;
    let buttonForm;

    if (id !== undefined) {
      if (this.props.location.query) {
        promo = this.props.location.query.promo;
      }
      titleForm = <h1 className="title is-4 is-spaced">Edition d'une promo</h1>;
      buttonForm = (
        <section className="field is-grouped">
          <section className="control">
            <Link to="/admin/promo/1/edit">
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
      promo = {};
      titleForm = (
        <h1 className="title is-4 is-spaced">Création d'une promo</h1>
      );
      buttonForm = (
        <section className="field is-grouped">
          <section className="control">
            <Link to="/admin/promo/1/edit">
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
              <select defaultValue={promo ? promo.country : ""}>
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
              <select defaultValue={promo ? promo.city : ""}>
                <option>Paris</option>
                <option>Rennes</option>
              </select>
            </section>
          </section>
        </section>
        <section className="field">
          <label> Date de début: </label>
          <DatePicker date={promo ? promo.startDate : ""} />
        </section>
        <section>
          <label> Date de fin: </label>
          <DatePicker date={promo ? promo.endDate : ""} />
        </section>
        <section className="field">
          <label className="label">Programme: </label>
          <section className="control">
            <section className="select">
              <select defaultValue={promo.program || ""}>
                <option>Js</option>
                <option>Java</option>
                <option>Php</option>
              </select>
            </section>
          </section>
        </section>
        <section className="field">
          <label className="label">Equipe pédagogique</label>
          <section className="control">
            <label className="label">Intitulé du rôle: </label>
            <input
              defaultValue={promo ? promo.role : ""}
              className="input"
              type="text"
              placeholder="Formateur référent"
            />
          </section>
          <section className="control">
            <label className="label">Prénom: </label>
            <input
              defaultValue={promo ? promo.teacherFirstName : ""}
              className="input "
              type="text"
              placeholder="Jean"
            />
          </section>
          <section className="control">
            <label className="label">Nom: </label>
            <input
              defaultValue={promo ? promo.teacherLastName : ""}
              className="input"
              type="text"
              placeholder="TASSE"
            />
          </section>
          <section className="control">
            <label className="label">Descriptif: </label>
            <textarea
              defaultValue={promo ? promo.description : ""}
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

export default PromoForm;
