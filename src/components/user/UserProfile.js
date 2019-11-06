import React, { Component } from 'react';
import './UserProfile.scss';
import Caroussel from '../caroussel/Caroussel';
import UserProfileInput from './UserProfileInput';

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Tasse',
      firstname: 'Jean',
      address: '10 rue Milan 75009 Paris',
      email: 'jean.milan@gmail.com',
      telephone: '+33665454323',
      promotion: '2019',
      disabled: true,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ disabled: true });
  };

  modifyForm = (e) => {
    e.preventDefault();
    this.setState({ disabled: false });
  };

  render() {
    return (
      <>
        <div>
          <h1 className="title is-2 mbmd">Mon profil</h1>
        </div>
        <article>
          <section className="section box">
            <h1 className="title is-4 is-spaced">Profil de Jean TASSE</h1>
            <form onSubmit={this.handleSubmit}>
              <UserProfileInput label="Nom : " disabled={this.state.disabled} name="lastname" value={this.state.name} onChange={this.handleChange} />
              <UserProfileInput label="Prénom : " disabled={this.state.disabled} name="firstname" value={this.state.firstname} onChange={this.handleChange} />
              <UserProfileInput label="Adresse : " disabled={this.state.disabled} name="address" value={this.state.address} onChange={this.handleChange} />
              <UserProfileInput label="Email : " disabled={this.state.disabled} name="email" value={this.state.email} onChange={this.handleChange} />
              <UserProfileInput label="Téléphone : " disabled={this.state.disabled} name="telephone" value={this.state.telephone} onChange={this.handleChange} />
              <UserProfileInput label="Promotion : " name="promotion" value={this.state.promotion} onChange={this.handleChange} />

              <button className="button is-warning userProfileButton" onClick={(e) => { this.modifyForm(e); }}>Modifier</button>
              <button className="button is-success userProfileButton" disabled={this.state.disabled} type="submit">Soumettre</button>
            </form>

          </section>
          <section className="section box">
            <h1 className="userProfileSectionTitle">Montée en compétence :</h1>
            <h2 className="assessmentTitle">Evaluation 1 :</h2>
            <strong>60%</strong>
            <progress className="progress is-info" value="60" max="100" />
            <h2 className="assessmentTitle">Evaluation 2 :</h2>
            <strong>90%</strong>
            <progress className="progress is-info" value="90" max="100" />
            <h2 className="assessmentTitle">Projet ADA :</h2>
            <strong>70%</strong>
            {' '}
            <progress className="progress is-link" value="70" max="100" />
          </section>

          <section className="section box">
            <h1 className="userProfileSectionTitle">Choix avatar</h1>
            <Caroussel />
          </section>
        </article>
      </>
    );
  }
}

export default UserProfile;
