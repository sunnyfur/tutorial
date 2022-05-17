import { useState } from 'react';
import Card from '../Card/Card';

import words from '../../mock/words.json';

// let wordsForCards = [{}];

const CardContainer = ({ index = 0 }) => {
  const [indexCard, setIndexCard] = useState(index);

  const prevCard = () => {
    if (indexCard === 0) setIndexCard(words.length - 1);
    else setIndexCard(indexCard - 1);
  };
  const nextCard = () => {
    if (indexCard + 1 === words.length) setIndexCard(0);
    else setIndexCard(indexCard + 1);
  };

  return (
    <div>
      <button type='button' onClick={prevCard}>
        Prev
      </button>
      <Card word={words[indexCard]} />
      <button type='button' onClick={nextCard}>
        Next
      </button>
    </div>
  );
};

export default CardContainer;
