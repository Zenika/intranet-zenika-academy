import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
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
    this.handleChangeRole = this.handleChangeRole.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChangeRole = (e) => {
    this.setState({ role: e.value });
  };

  createUser = (e) => {
    e.preventDefault();
    const user = this.state;
    Axios.post('http://localhost:4000/api/users ', user)
      .then((response) => {
        console.log(response);
      });
  };

  render() {
    const {
      firstName, lastName, email, role,
    } = this.state;

    const roleList = [
      { value: 'admin', label: 'Administrateur' },
      { value: 'teacher', label: 'Formateur' },
      { value: 'student', label: 'Etudiant' },
    ];

    return (
      <>
        <article className="section box">
          <h1 className="title is-2 mbmd">Création d&lsquo;utilisateur </h1>
          <form onSubmit={this.createUser}>
            <div className="field is-grouped">
              <div className="control">
                <label htmlFor="lastName" className="label">
                  <input type="text" className="input" name="lastName" placeholder="Prénom" value={lastName} onChange={this.handleChange} />
                </label>
                <label htmlFor="firstName" className="label">
                  <input type="text" className="input" name="firstName" placeholder="Nom" value={firstName} onChange={this.handleChange} />
                </label>
                <label htmlFor="email" className="label">
                  <input type="email" className="input" name="email" placeholder="E-mail" value={email} onChange={this.handleChange} />
                </label>
                <section className="field">
                  <SearchbarAutoComplete name="roleList" options={roleList} defaultValue={role} handleChange={this.handleChangeRole} searchKey="value" defaultLabel="Rôle" isMulti={false} />
                </section>
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-success userProfileButton" type="submit">Créer</button>
                <Link to="/admin/program">
                  <button className="button is-danger userProfileButton" type="button">Annuler</button>
                </Link>
              </div>
            </div>
          </form>
        </article>
      </>
    );
  }
}

export default UserForm;
