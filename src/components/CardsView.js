import React from 'react';
import ShopCard from './ShopCard';
import PropTypes from 'prop-types';

export default function CardsView({ cards }) {
  return (
    <div className="CardsView">
      {cards.length !== 0 ? cards.map((card) => {
        return (
          <ShopCard card={card} key={card.name + card.color} />
        );
      }) : alert('null')}
    </div>
  );
}

CardsView.propTypes = {
  cards: PropTypes.array.isRequired,
}