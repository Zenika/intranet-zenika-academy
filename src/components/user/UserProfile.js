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
      disabled: true
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ disabled: true })
  }

  modifyForm = e => {
    e.preventDefault();
    this.setState({ disabled: false })
  }

  render() {
    return (
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
    
            <button className="button is-warning userProfileButton" onClick={(e) => { this.modifyForm(e) }}>Modifier</button>
            <button className="button is-success userProfileButton" disabled={this.state.disabled} type="submit">Enregistrer</button>
          </form>

        </section>
        <section className="section box">
          <h1>Ma montée en compétence :</h1>
          <p>Evaluation 1 :</p>
          <p>Evaluation 2 :</p>
          -
      <p>Projet ADA</p>
        </section>

        <section className="section box">
          <h1 className="avatarTitle">Choix avatar</h1>
          <Caroussel />
        </section>
      </article>
    )
  }
};

export default UserProfile;
