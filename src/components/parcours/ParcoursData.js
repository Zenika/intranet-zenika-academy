import React from 'react';
import '../layout/Layout.css';

const ParcoursData = (props) => (
  <section className="section box mbmd">
    <h1 className="title is-4 is-spaced">{props.parcours.title}</h1>
    <h2 className="subtitle is-5">{`${props.parcours.startDate} ${props.parcours.endDate}`}</h2>
    <h3 className="subtitle is-6">{props.parcours.location}</h3>
  </section>
);

export default ParcoursData;
