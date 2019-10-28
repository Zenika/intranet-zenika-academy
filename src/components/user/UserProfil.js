import React from 'react';
import './UserProfil.css';

const UserProfil = () => (
  <article>
    <section className="section box">
      <h1 className="title is-4 is-spaced">Profil de Jean TASSE</h1>
      <section className="field userDataInputContainer">
        <label className="userDataInputLabel">Nom :&nbsp;</label>
        <input className="input is-info userDataInput" type="text" value="Tasse" />
      </section>

      <section className="field userDataInputContainer">
        <label className="userDataInputLabel">Prénom :&nbsp;</label>
        <input className="input is-info userDataInput" type="text" value="Jean" />
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
  </article>
);

export default UserProfil;
