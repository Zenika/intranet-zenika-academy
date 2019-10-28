import React from 'react';
import { Link } from 'react-router-dom';
import ParcoursData from './ParcoursData';
import '../layout/Layout.css';
import Searchbar from '../searchbar/Searchbar';

const parcours = [
  {
    parcours1: {
      title: 'Parcours 1 - Promo 3',
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
    parcours2: {
      title: 'Parcours 1 - Promo 2',
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
    parcours3: {
      title: 'Parcours 1 - Promo 4',
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

class ParcoursList extends React.Component {
  render() {
    return (
      <article className="box mbmd">
        <aside className="mbmd">
          <Searchbar />
          <div className="buttons">
            <Link to="/admin/parcours/create">
              <button className="button is-primary">Nouveau</button>
            </Link>
          </div>
        </aside>
        <h1 className="title is-4 is-spaced">Liste des parcours</h1>
        <ul>
          <li>
            <section className="section box mbmd">
              <ParcoursData parcours={parcours[0].parcours1} />
              <section className="mtmd">
                <Link to={{
                  pathname: '/admin/parcours/1/edit',
                  query: { parcours: parcours[0].parcours1 },
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
              <ParcoursData parcours={parcours[0].parcours2} />
              <section className="mtmd">
                <Link to={{
                  pathname: '/admin/parcours/2/edit',
                  query: { parcours: parcours[0].parcours2 },
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
              <ParcoursData parcours={parcours[0].parcours3} />
              <section className="mtmd">
                <Link to={{
                  pathname: '/admin/parcours/3/edit',
                  query: { parcours: parcours[0].parcours3 },
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
    );
  }
}

export default ParcoursList;
