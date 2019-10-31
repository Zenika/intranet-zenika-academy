import React from 'react';
import './ContactList.scss';

const ContactList = () => (
  <React.Fragment>
    <div>
      <h1 className="title is-1 mbmd">Contacts utiles .</h1>
    </div>
    <div>
      <div className="row">
        <div className="photo">
          <img
            src="http://blogue-ton-ecole.ac-dijon.fr/wp-content/uploads/2016/07/Avatar_girl_face.png"
            className="image is-48x48 is-rounded avatar"
            alt="Un contact"
          />
        </div>
        <div className="textBox">
          <p>TEXT box</p>
          <p>Descriptif de la personne et contacts reseaux / autres</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure  enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.
          {' '}
          </p>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default ContactList;
