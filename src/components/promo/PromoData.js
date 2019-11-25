import React from 'react';

const PromoData = (props) => {
  const {
    title, startDate, location, endDate,
  } = props.promo;
  return (
    <section className="section box style.mbmd">
      <h1 className="title is-4 is-spaced">{title}</h1>
      <h2 className="subtitle is-5">{`${startDate} ${endDate}`}</h2>
      <h3 className="subtitle is-6">{location}</h3>
    </section>
  );
};

export default PromoData;
