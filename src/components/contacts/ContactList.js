import React from 'react';
import './ContactList.scss';
import Card from '../card/Card';

const data = [
  {
    id: 535345554,
    name: 'John Smith',
    description: 'Sunt magna duis proident in exercitation exercitation sit esse magna.',
  },
  {
    id: 645964055,
    name: 'Gérard Martin',
    description: 'Proident adipisicing proident officia dolor mollit proident aliqua.',
  },
  {
    id: 685968406,
    name: 'Sylvie Lafite',
    description: 'Qui eiusmod ut cupidatat elit veniam duis. Nisi quis sit deserunt reprehenderit veniam aute consectetur.',
  },
];

export function generateCards() {
  const cards = [];
  data.forEach((person) => {
    cards.push(<Card key={person.id} data={person} />);
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
