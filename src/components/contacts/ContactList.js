import React from 'react';
import './ContactList.scss';
import Card from '../card/Card';

const data = [
  {
    name: 'John Smith',
    description: 'Sunt magna duis proident in exercitation exercitation sit esse magna.',
  },
  {
    name: 'Gérard Martin',
    description: 'Proident adipisicing proident officia dolor mollit proident aliqua.',
  },
  {
    name: 'Sylvie Lafite',
    description: 'Qui eiusmod ut cupidatat elit veniam duis. Nisi quis sit deserunt reprehenderit veniam aute consectetur.',
  },
];

function generateCards() {
  const cards = [];
  data.forEach((person, i) => {
    cards.push(<Card key={i} data={person} />);
  });
  return cards;
}

const ContactList = () => (
  <>
    <h1 className="title is-2 mbmd">Contacts utiles</h1>
    <div className="ContactListCardContainer">
      {generateCards()}
    </div>
  </>
);

export default ContactList;
