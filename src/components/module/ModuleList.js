import React from 'react';
import { Link } from 'react-router-dom';
import ModuleData from './ModuleData';
import SearchBar from '../searchBar/Searchbar';

const ModuleList = () => (
  <article className="box mbmd">
    <aside className="mbmd">
      <SearchBar />
      <div className="buttons">
        <Link to="/admin/module/create">
          <button className="button is-primary">Nouveau</button>
        </Link>
      </div>
    </aside>
    <h1 className="title is-4 is-spaced">Liste des modules</h1>
    <ul>
      <li>
        <section className="section box mbmd">
          <ModuleData />
          <section className="mbmd">
            <Link to="/admin/module/1/edit">
              <span className="button is-primary mbmd">Editer</span>
            </Link>
            <span className="button is-primary mbmd">Dupliquer</span>
            <span className="button is-danger">Supprimer</span>
          </section>
        </section>
      </li>
      <li>
        <section className="section box mbmd">
          <ModuleData />
          <section className="mbmd">
            <Link to="/admin/module/1/edit">
              <span className="button is-primary mbmd">Editer</span>
            </Link>
            <span className="button is-primary mbmd">Dupliquer</span>
            <span className="button is-danger">Supprimer</span>
          </section>
        </section>
      </li>
      <li>
        <section className="section box mbmd">
          <ModuleData />
          <section className="mbmd">
            <Link to="/admin/module/2/edit">
              <span className="button is-primary mbmd">Editer</span>
            </Link>
            <span className="button is-primary mbmd">Dupliquer</span>
            <span className="button is-danger">Supprimer</span>
          </section>
        </section>
      </li>
    </ul>
  </article>
);

export default ModuleList;
