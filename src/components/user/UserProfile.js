import React, { Component } from 'react';
import './UserProfile.scss';
import Caroussel from '../caroussel/Caroussel';

class UserProfile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: 'Tasse',
      firstname: 'Jean',
      address:'10 rue Milan 75009 Paris',
      email:'jean.milan@gmail.com',
      telephone:'+33665454323',
      promotion:'2019',
      disabled:true
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({disabled:true})  
  }

  modifyForm = e =>{
    e.preventDefault();
    this.setState({disabled:false})
  }

  render() {
    return (
      <article>
        <section className="section box">
          <h1 className="title is-4 is-spaced">Profil de Jean TASSE</h1>

          <form onSubmit={this.handleSubmit}>
            <section className="field userDataInputContainer">
              <label className="userDataInputLabel">
                Nom :
              </label>
              <input type="text" disabled={this.state.disabled} name="name" value={this.state.name} onChange={this.handleChange} className="input is-info userDataInput" />
            </section>
            <section className="field userDataInputContainer">
              <label className="userDataInputLabel">
                Prénom :
              </label>
              <input type="text" disabled={this.state.disabled} name="firstname" value={this.state.firstname} onChange={this.handleChange} className="input is-info userDataInput" />
            </section>
            <section className="field userDataInputContainer">
              <label className="userDataInputLabel">
                Adresse :
              </label>
              <input type="text" disabled={this.state.disabled} name="firstname" value={this.state.address} onChange={this.handleChange} className="input is-info userDataInput" />
            </section>
            <section className="field userDataInputContainer">
              <label className="userDataInputLabel">
                Email :
              </label>
              <input type="text" disabled={this.state.disabled} name="firstname" value={this.state.email} onChange={this.handleChange} className="input is-info userDataInput" />
            </section>
            <section className="field userDataInputContainer">
              <label className="userDataInputLabel">
                Téléphone :
              </label>
              <input type="text" disabled={this.state.disabled} name="firstname" value={this.state.telephone} onChange={this.handleChange} className="input is-info userDataInput" />
            </section>
            <section className="field userDataInputContainer">
              <label className="userDataInputLabel">
                Promotion :
              </label>
              <input type="text" disabled name="firstname" value={this.state.promotion} onChange={this.handleChange} className="input is-info userDataInput" />
            </section>
            <button className="button is-warning userProfileButton" onClick={(e)=>{this.modifyForm(e)}}>Modifier</button>            
            <button className="button is-success userProfileButton"  disabled={this.state.disabled} type="submit">Enregistrer</button>
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
