import React from 'react';
import '../layout/Layout.scss';

const PromDataCard = props => {
    const { city, title, promo } = props;
    return (
        <section className="box mbmd">
            <h1 className="title is-5">{city} - {promo}</h1>
            <h2 className="title is-4 is-spaced">{title}</h2>
            <button className="button is-primary">Détails</button>
        </section>
    );
};

export default PromDataCard;