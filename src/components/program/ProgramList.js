import React from 'react';
import { Link } from 'react-router-dom';
import ProgramData from './ProgramData';
import '../layout/Layout.scss';
import SearchBar from '../searchBar/Searchbar';

class ProgramList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h1 className="title is-1 mbmd">Programmes</h1>
        </div>
        <article className="box mbmd">
          <aside className="mbmd">
            <SearchBar />
            <div className="buttons">
              <Link to="/admin/program/create">
                <button className="button is-primary">Nouveau</button>
              </Link>
            </div>
          </aside>
          <h1 className="title is-4 is-spaced">Liste des programmes</h1>
          <ul>
            <li>
              <section className="section box mbmd">
                <ProgramData />
                <section className="mtmd">
                  <Link to="/admin/program/1/edit">
                    <a className="button is-primary mrmd">Editer</a>
                  </Link>
                  <a className="button is-danger">Supprimer</a>
                </section>
              </section>
            </li>
            <li>
              <section className="section box mbmd">
                <ProgramData />
                <section className="mtmd">
                  <Link to="/admin/program/2/edit">
                    <a className="button is-primary mrmd">Editer</a>
                  </Link>
                  <a className="button is-danger">Supprimer</a>
                </section>
              </section>
            </li>
            <li>
              <section className="section box mbmd">
                <ProgramData />
                <section className="mtmd">
                  <Link to="/admin/program/3/edit">
                    <a className="button is-primary mrmd">Editer</a>
                  </Link>
                  <a className="button is-danger">Supprimer</a>
                </section>
              </section>
            </li>
          </ul>
        </article>
      </React.Fragment>
    );
  }
}

export default ProgramList;
