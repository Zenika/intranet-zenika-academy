import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserProfile.scss';
import SearchbarAutoComplete from '../searchbarauto/SearchbarAuto';


class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeRole = this.handleChangeRole.bind(this);
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState((prev) => ({
      user: {
        ...prev.user,
        [name]: value,
      },
    }
    ));
  };

  handleChangeRole = (e) => {
    this.setState((prev) => ({
      user: {
        ...prev.user,
        role: e.value,
      },
    }
    ));
  };

  render() {
    const { user } = this.state;
    const {
      firstName, lastName, email, role,
    } = user;

    const roleList = [
      { value: 'admin', label: 'Administrateur' },
      { value: 'teacher', label: 'Formateur' },
      { value: 'student', label: 'Etudiant' },
    ];
    const { changeStep } = this.props;
    return (
      <>
        <article className="section box">
          <h1 className="title is-2 mprobmd">Création d&lsquo;utilisateur </h1>
          <form onSubmit={() => changeStep(1, user)}>
            <div className="field is-grouped">
              <div className="control">
                <label htmlFor="lastName" className="label">
                  <input type="text" className="input" name="lastName" placeholder="Nom" value={lastName} onChange={this.handleChange} />
                </label>
                <label htmlFor="firstName" className="label">
                  <input type="text" className="input" name="firstName" placeholder="Prénom" value={firstName} onChange={this.handleChange} />
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
                <button className="button is-success userProfileButton" type="submit">Valider</button>
                <Link to="/home/admin">
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
