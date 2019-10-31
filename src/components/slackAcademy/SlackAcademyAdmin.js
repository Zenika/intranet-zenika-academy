import React from 'react';
import '../layout/Layout.scss';

const SlackAcademyAdmin = () => (
  <React.Fragment>
    <div>
      <h1 className="title is-1 mbmd">Slack Academy</h1>
    </div>
    <article className="section box">
      <section className="mbmd">
        <h1 className="title is-4 is-spaced">Ajouter l'url du salon slack</h1>
        <input className="input" type="text" placeholder="Salon Slack" />
      </section>
      <section className="field is-grouped">
        <section className="control">
          <button className="button is-link">Créer</button>
        </section>
        <section className="control">
          <button className="button is-link is-light">Annuler</button>
        </section>
      </section>
    </article>
  </React.Fragment>
);

export default SlackAcademyAdmin;
