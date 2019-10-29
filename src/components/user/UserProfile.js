import React, { Component } from 'react';
import './UserProfile.scss';
import Caroussel from '../caroussel/Caroussel';

const Modal = () => (
  <div className="modal">
    <div className="modal-background"></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Modal title</p>
        <button className="delete" aria-label="close"></button>
      </header>
      <section className="modal-card-body">
        <input />
      </section>
      <footer className="modal-card-foot">
        <button className="button is-success">Save changes</button>
        <button className="button">Cancel</button>
      </footer>
    </div>
  </div>
);


class UserProfile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      toggleModal: false,
      nom:'Tasse',
      prenom:'Jean',
    };
  }

  openEditModal = () => {
    this.setState({ toggleModal: true })
  }

  onInputChange = (e) => {
    this.setState({
       prenom: e.target.value
    });
  }

  render() {

    let modal;
    if (this.state.toggleModal) {
      modal = <Modal />;
    }
    return (
      <article>
        {modal}
        <section className="section box">
          <h1 className="title is-4 is-spaced">Profil de Jean TASSE</h1>
          <section className="field userDataInputContainer">
            <label className="userDataInputLabel">Nom :&nbsp;</label>
            <input value={this.state.nom} className="input is-info userDataInput" ref="name" type="text"/>
            <button className="edit" onClick={() => { this.openEditModal() }}>Edit</button>
          </section>

          <section className="field userDataInputContainer">
            <label className="userDataInputLabel">Prénom :&nbsp;</label>
            <input value={this.state.prenom} className="input is-info userDataInput" ref="name" type="text"/>
          </section>

          <section className="field userDataInputContainer">
            <label className="userDataInputLabel">Adresse :&nbsp;</label>
            <input className="input is-info userDataInput" type="text" value="10 rue Londres" />
          </section>

          <section className="field userDataInputContainer">
            <label className="userDataInputLabel">E-mail :&nbsp;</label>
            <input className="input is-info userDataInput" type="text" value="jean.tasse@gmail.com" />
          </section>

          <section className="field userDataInputContainer">
            <label className="userDataInputLabel">Téléphone :&nbsp;</label>
            <input className="input is-info userDataInput" type="text" value="+33646578987" />
          </section>

          <section className="field userDataInputContainer">
            <label className="userDataInputLabel">Promotion :&nbsp;</label>
            <input className="input is-info userDataInput" type="text" value="2019" />
          </section>

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
