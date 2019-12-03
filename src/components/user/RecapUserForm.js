import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import './UserProfile.scss';
import '../layout/Layout.scss';

class RecapProgramForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
    };
  }

  createUser = (e) => {
    e.preventDefault();
    const { user } = this.state;
    Axios.post('http://localhost:4000/api/users ', user)
      .then((response) => {
        console.log(response);
      });
  };

  render() {
    const { user } = this.props;
    let roleDetail;
    if (user.role === 'admin') roleDetail = 'Administrateur';
    if (user.role === 'teacher') roleDetail = 'Formateur';
    if (user.role === 'student') roleDetail = 'Eleve';
    return (
      <article className="section box">
        <h2 className="title is-2 is-spaced">Récapitulatif du formulaire d&lsquo;utilisateur</h2>
        <section className="box">
          <h2 className="title is-2 is-spaced">
            <ul className="list">
              <li className="list-item">
                Nom :&nbsp;
                { user.lastName }
              </li>
              <li className="list-item">
                Prénom :&nbsp;
                { user.firstName }
              </li>
              <li className="list-item">
                Email :&nbsp;
                { user.email }
              </li>
              <li className="list-item">
                Rôle :&nbsp;
                { roleDetail }
              </li>
            </ul>
          </h2>
        </section>
        <div className="field is-grouped">
          <div className="control">
            <button type="submit" onClick={() => this.createUser(user)} className="button is-success">Créer</button>
          </div>
          <div className="control">
            <Link to="/admin/users">
              <button className="button is-danger" type="button">Annuler</button>
            </Link>
          </div>
        </div>
      </article>
    );
  }
}

export default RecapProgramForm;
