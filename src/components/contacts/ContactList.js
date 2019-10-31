import React from 'react';
import './ContactList.scss';

const ContactList = () => (
  <React.Fragment>
    <h1 className="title is-1 mbmd">Contacts utiles</h1>
    <div className="row">
      <section className="photo">
        {/* <img
            src="http://blogue-ton-ecole.ac-dijon.fr/wp-content/uploads/2016/07/Avatar_girl_face.png"
            className="image is-48x48 is-rounded avatar"
            alt="Un contact"
          /> */}
      </section>
      <section className="textBox">
        <h1>TEXT box</h1>
        <h2>Descriptif de la personne et contacts reseaux / autres</h2>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure  enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
        </p>
      </section>
    </div>
  </React.Fragment>
);

export default ContactList;
