import React, { Component } from 'react';
import './UserProfile.scss';
import SearchbarAutoComplete from '../searchbarauto/SearchbarAuto';


class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      role: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      firstName, lastName, email, role,
    } = this.state;

    return (
      <>
        <article className="section box">
          <h1 className="title is-2 mbmd">Création d&lsquo;utilisateur </h1>
          <form onSubmit={this.handleSubmit}>
            <div className="field is-grouped">
              <div className="control">
                <label htmlFor="lastName" className="label">
                  <input type="text" className="input" name="lastName" placeholder="Prénom" value={lastName} onChange={this.handleChange} />
                </label>
                <label htmlFor="firstName" className="label">
                  <input type="text" className="input" name="firstName" placeholder="Nom" value={firstName} onChange={this.handleChange} />
                </label>
                <label htmlFor="email" className="label">
                  <input type="email" className="input" name="firstName" placeholder="E-mail" value={email} onChange={this.handleChange} />
                </label>
                <section className="field">
                </section>
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-success userProfileButton" type="submit">Créer</button>
                <button className="button is-danger userProfileButton" type="submit" onClick={(e) => { this.modifyForm(e); }}>Annuler</button>
              </div>
            </div>
          </form>
        </article>
      </>
    );
  }
}

export default UserForm;
