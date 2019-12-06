import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import './Program.scss';
import '../layout/Layout.scss';

class RecapProgramForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
    };
  }

  componentDidMount() {
  }

  createProgram = (e) => {
    e.preventDefault();
    const { program } = this.props;
    Axios.post('http://localhost:4000/api/programs', program)
      .then(() => this.setState(() => ({ redirectToReferrer: true })));
  };

  render() {
    const {
      handleChange, program,
    } = this.props;

    const { redirectToReferrer } = this.state;
    if (redirectToReferrer === true) {
      return <Redirect to="/home/admin" />;
    }

    return (
      <article className="section box">
        <h1 className="title is-1 is-spaced">Récapitulatif</h1>
        <section className="box">
          <h2 className="title is-2 is-spaced">
            Programme&nbsp;
            {program.title}
          </h2>
          <ul className="list">
            {
              program.content.map((module, i) => (
                <li className="list-item">
                  <h3 className="title is-3 is-spaced">
                    Module n°&nbsp;
                    {i + 1}
                    &nbsp;:&nbsp;
                    {module.title}
                  </h3>
                  <ul className="list">
                    {
                      module.content.map((subModule, p) => (
                        <li className="list-item">
                          <h3 className="title is-4 is-spaced">
                            Sous-module n°&nbsp;
                            {p + 1}
                            &nbsp;:&nbsp;
                            {subModule.title}
                          </h3>
                          <ul className="list">
                            {
                              subModule.content.map((sequence, n) => (
                                <li className="list-item">
                                  <h3 className="title is-5 is-spaced">
                                    <i className="fad fa-level-up" />
                                    Séquence n°&nbsp;
                                    {n + 1}
                                    &nbsp;:&nbsp;
                                    {sequence.title}
                                  </h3>
                                </li>
                              ))
                            }
                          </ul>
                        </li>
                      ))
                    }
                  </ul>
                </li>
              ))
            }
          </ul>
        </section>
        <div className="field is-grouped">
          <div className="control">
            <button type="submit" onClick={this.createProgram} className="button is-success">Créer</button>
          </div>
          <div className="control">
            <button className="button is-info" value={0} onClick={(e) => handleChange(e, program)} type="button">Modifier</button>
          </div>
          <div className="control">
            <a href="/home/admin/" id="cancelButton" type="button" className="button is-danger">Annuler</a>
          </div>
        </div>
      </article>
    );
  }
}

export default RecapProgramForm;
