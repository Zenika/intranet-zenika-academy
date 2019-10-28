import { Link } from 'react-router-dom';
import React from 'react';
import RssFeedData from './RssFeedData';
import '../layout/Layout.scss';
import Searchbar from '../searchbar/Searchbar';

const RssFeedList = () => (
  <article className="box mbmd">
      <aside className="mbmd">
        <Searchbar />
        <div className="buttons">
          <Link to="/admin/community/rssFeed/create">
            <button className="button is-primary">Nouveau</button>
          </Link>
        </div>
      </aside>
    <h1 className="title is-4 is-spaced">Liste des feeds</h1>
    <ul>
      <li>
        <section className="section box mbmd">
          <RssFeedData />
          <section className="mtmd">
            <Link to="/admin/community/rssFeed/1/edit">
              <a className="button is-primary mrmd">Editer</a>
            </Link>
            <a className="button is-danger">Supprimer</a>
          </section>
        </section>
      </li>
      <li>
        <section className="box mbmd">
          <RssFeedData />
          <section className="mtmd">
            <Link to="/admin/community/rssFeed/2/edit">
              <a className="button is-primary mrmd">Editer</a>
            </Link>
            <a className="button is-danger">Supprimer</a>
          </section>
        </section>
      </li>
      <li>
        <section className="section box mbmd">
          <RssFeedData />
          <section className="mtmd">
            <Link to="/admin/community/rssFeed/3/edit">
              <a className="button is-primary mrmd">Editer</a>
            </Link>
            <a className="button is-danger">Supprimer</a>
          </section>
        </section>
      </li>
    </ul>
  </article>
);

export default RssFeedList;
