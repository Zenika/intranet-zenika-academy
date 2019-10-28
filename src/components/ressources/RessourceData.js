import React from 'react';
import '../layout/Layout.css';

const RessourceData = ({ author }) => (
  <section className="section box mbmd">
        Ressource : Recette
    <section className="tags are-small">
      <span className="tag is-black">Toulouse</span>
      <span className="tag is-dark">Gastronomie</span>
      <span className="tag is-light">{author}</span>
    </section>
  </section>
);

export default RessourceData;
