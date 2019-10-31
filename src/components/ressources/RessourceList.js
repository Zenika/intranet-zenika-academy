import queryString from 'query-string';
import React from 'react';
import { Link } from 'react-router-dom';
import RessourceData from './RessourceData';
import SearchBar from '../searchBar/Searchbar';

class RessourceList extends React.Component {
  render() {
    const params = queryString.parse(this.props.location.search);
    return (
<<<<<<< HEAD
      <React.Fragment>
        <div>
          <h1 className="title is-1 mbmd">Ressources</h1>
        </div>
        <article className="box mbmd">
          <aside className="mbmd">
            <div className="buttons">
              <SearchBar />
              <Link to={`${this.props.match.path}/create`}>
                <button className="button is-primary">Nouveau</button>
              </Link>
            </div>
          </aside>
          <section className="section box">
            <h1 className="title is-4 is-spaced">
              Module 1 - Saucisse de Toulouse
=======
      <article className="box mbmd">
        <aside className="mbmd">
          <div className="buttons">
            <SearchBar />
            <Link to={`${this.props.match.path}/create`}>
              <button className="button is-primary">Nouveau</button>
            </Link>
          </div>
        </aside>
        <section className="section box">
          <h1 className="title is-4 is-spaced">
            Module 1 - Saucisse de Toulouse
>>>>>>> wizard multiForm init
            {' '}
            </h1>
            <h2 className="subtitle is-5">Toulouse et son histoire</h2>
            <ul>
              <li>
                <RessourceData author={params.author} />
                <section className="mtmd mbmd">
                  <Link to={`${this.props.match.path}/1/edit`}>
                    <a className="button is-primary mrmd">Editer</a>
                  </Link>
                  <a className="button is-danger">Supprimer</a>
                </section>
              </li>
              <li>
                <RessourceData author={params.author} />
                <section className="mtmd">
                  <Link to={`${this.props.match.path}/2/edit`}>
                    <a className="button is-primary mrmd">Editer</a>
                  </Link>
                  <a className="button is-danger">Supprimer</a>
                </section>
              </li>
            </ul>
          </section>
          <section className="section box">
            <h1 className="title is-4 is-spaced">
              Module 2 - Le rugby à Toulouse
          </h1>
            <h2 className="subtitle is-5">Toulouse et son Rugby</h2>
            <ul>
              <li>
                <RessourceData author={params.author} />
                <section className="mtmd mbmd">
                  <Link to={`${this.props.match.path}/3/edit`}>
                    <a className="button is-primary mrmd">Editer</a>
                  </Link>
                  <a className="button is-danger">Supprimer</a>
                </section>
              </li>
              <li>
                <RessourceData author={params.author} />
                <section className="mtmd">
                  <Link to={`${this.props.match.path}/4/edit`}>
                    <a className="button is-primary mrmd">Editer</a>
                  </Link>
                  <a className="button is-danger">Supprimer</a>
                </section>
              </li>
            </ul>
          </section>
        </article>
      </React.Fragment>
    );
  }
}

export default RessourceList;
