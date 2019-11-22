import React from 'react';
import { Link } from 'react-router-dom';
import PromoData from './PromoData';
import '../layout/Layout.scss';
import SearchBar from '../searchbar/Searchbar';

const promo = [
  {
    promo1: {
      title: 'Promo 3',
      number: '3',
      startDate: '2019-09-05',
      endDate: '2020-01-06',
      country: 'France',
      city: 'Paris',
      teacherFirstName: 'jean',
      teacherLastName: 'TASSE',
      program: 'Js',
      role: 'Formateur référent',
      description: `Ainsi font, font, font / Les petites marionnettes,
			Ainsi font, font, font / Trois p'tits tours et puis s'en vont.
			
			Les mains aux côtés / Sautez, sautez marionnettes,
			Les mains aux côtés / Marionnettes recommencez.
			
			Ainsi font, font, font / Les petites marionnettes,
			Ainsi font, font, font / Trois p'tits tours et puis s'en vont.
			
			Et elles danseront / Les petites marionnettes,
			
			Et elles danseront / Quant les enfants dormiront.`,
    },
    promo2: {
      title: 'Promo 2',
      number: '2',
      startDate: '2021-09-05',
      endDate: '2022-01-06',
      country: 'France',
      city: 'Rennes',
      teacherFirstName: 'Tata',
      teacherLastName: 'Yoyo',
      program: 'Java',
      role: 'Déformateur référent',
      description: `Tata Yoyo qu'est-ce qu'y a sous ton grand chapeau
			Tata Yoyo, dans ma tête y a des tas d'oiseaux
			Tata Yoyo, on m'a dit qu'y a même un grelot
			Mais, moi j'aime ça quand ça fait ding ding di gue ding
			Comme une samba`,
    },
    promo3: {
      name: 'Promo 4',
      number: '4',
      startDate: '2050-09-05',
      endDate: '2051-01-06',
      country: 'France',
      city: 'Lyon',
      teacherFirstName: 'Mario',
      teacherLastName: 'Bros',
      program: 'Gaming',
      role: 'Plombier référent',
      description: 'it\'s me, Mario!',
    },
  },
];

const PromoList = () => (
  <React.Fragment>
    <div>
      <h1 className="title is-2 mbmd">Promotions</h1>
    </div>
    <article className="box mbmd">
      <aside className="mbmd">
        <SearchBar />
        <div className="buttons">
          <Link to="/admin/promo/create">
            <button type="button" className="button is-primary">
              Nouveau
          </button>
          </Link>
        </div>
      </aside>
      <h1 className="title is-4 is-spaced">Liste des promos</h1>
      <ul>
        <li>
          <section className="section box mbmd">
            <PromoData promo={promo[0].promo1} />
            <section className="mtmd">
              <Link
                to={{
                  pathname: '/admin/promo/1/edit',
                  query: { promo: promo[0].promo1 },
                }}
              >
                <a className="button is-primary mrmd">Editer</a>
              </Link>
              <a className="button is-danger">Supprimer</a>
            </section>
          </section>
        </li>
        <li>
          <section className="section box mbmd">
            <PromoData promo={promo[0].promo2} />
            <section className="mtmd">
              <Link
                to={{
                  pathname: '/admin/promo/2/edit',
                  query: { promo: promo[0].promo2 },
                }}
              >
                <a className="button is-primary mrmd">Editer</a>
              </Link>
              <a className="button is-danger">Supprimer</a>
            </section>
          </section>
        </li>
        <li>
          <section className="section box mbmd">
            <PromoData promo={promo[0].promo3} />
            <section className="mtmd">
              <Link
                to={{
                  pathname: '/admin/promo/3/edit',
                  query: { promo: promo[0].promo3 },
                }}
              >
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

export default PromoList;
