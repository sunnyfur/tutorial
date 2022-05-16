import { useState, useEffect } from 'react';
import Card from '../Card/Card';

import words from '../../mock/words.json';

const CardContainer = ({ index = 0 }) => {
  const [indexCard, setIndexCard] = useState(index);
  let wordsForCards;

  useEffect(() => {
    wordsForCards = words;
    // обращение к API
  }, []);

  const prevCard = () => {
    if (indexCard === 0) setIndexCard(wordsForCards.length - 1);
    else setIndexCard(indexCard - 1);
  };
  const nextCard = () => {
    if (indexCard + 1 === wordsForCards.length) setIndexCard(0);
    else setIndexCard(indexCard + 1);
  };

  return (
    <div>
      <button type='button' onClick={prevCard}>
        Prev
      </button>
      <Card word={wordsForCards[indexCard]} />
      <button type='button' onClick={nextCard}>
        Next
      </button>
    </div>
  );
};

export default CardContainer;
