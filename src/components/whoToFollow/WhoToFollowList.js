import { Link } from 'react-router-dom';
import React from 'react';
import WhoToFollowData from './WhoToFollowData';
import '../layout/Layout.scss';
import SearchBar from '../searchBar/Searchbar';

const WhoToFollowList = () => (
  <React.Fragment>
    <div>
      <h1 className="title is-1 mbmd">Who to follow</h1>
    </div>
    <article className="box mbmd">
      <aside className="mbmd">
        <SearchBar />
        <div className="buttons">
          <Link to="/admin/community/whoToFollow/create">
            <button className="button is-primary">Nouveau</button>
          </Link>
        </div>
      </aside>
      <h1 className="title is-4 is-spaced">Liste des Who To Follow</h1>
      <ul>
        <li>
          <section className="section box mbmd">
            <WhoToFollowData />
            <section className="mtmd">
              <Link to="/admin/community/whoToFollow/1/edit">
                <a className="button is-primary mrmd">Editer</a>
              </Link>
              <a className="button is-danger">Supprimer</a>
            </section>
          </section>
        </li>
        <li>
          <section className="box mbmd">
            <WhoToFollowData />
            <section className="mtmd">
              <Link to="/admin/community/whoToFollow/2/edit">
                <a className="button is-primary mrmd">Editer</a>
              </Link>
              <a className="button is-danger">Supprimer</a>
            </section>
          </section>
        </li>
        <li>
          <section className="section box mbmd">
            <WhoToFollowData />
            <section className="mtmd">
              <Link to="/admin/community/whoToFollow/3/edit">
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

export default WhoToFollowList;
