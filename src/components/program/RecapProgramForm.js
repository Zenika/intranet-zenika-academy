import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import './Program.scss';
import '../layout/Layout.scss';

class RecapProgramForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  createProgram = (e) => {
    e.preventDefault();
    const { program } = this.state;
    Axios.post('http://localhost:4000/api/programs', program)
      .then((response) => {
        console.log(response);
      });
  };

  render() {
    const {
      handleChange, program,
    } = this.props;

    console.log(program);
    return (
      <article className="section box">
        <h1 className="title is-1 is-spaced">Récapitulatif</h1>
        <section className="field is-grouped">
          <section className="control">
            <button type="submit" onClick={this.createProgram} className="button is-success">Créer</button>
          </section>
          <section className="control">
            <button className="button is-info" value={0} onClick={(e) => handleChange(e, program)} type="button">Modifier</button>
          </section>
          <section className="control">
            <Link to="/admin/program">
              <button className="button is-danger">Annuler</button>
            </Link>
          </section>
        </section>
      </article>
    );
  }
}

export default RecapProgramForm;
