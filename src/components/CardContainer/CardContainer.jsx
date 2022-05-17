import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import Card from '../Card/Card';

import styles from '../../assets/styles/Components/cardContainer.module.scss';
import stylesBtn from '../../assets/styles/Components/buttons.module.scss';

import words from '../../mock/words.json';

// const wordsForCards = [...words];

const getWords = () => {
  // fetch
  console.log(words);
  return [...words];
};

const caretL = <FontAwesomeIcon icon={faCaretLeft} />;
const caretR = <FontAwesomeIcon icon={faCaretRight} />;

const CardContainer = ({ index = 0 }) => {
  const [indexCard, setIndexCard] = useState(index);
  const [wordsList, setWordsList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const wordsRes = getWords();
    setWordsList(wordsRes);
    if (wordsRes) setIsLoaded(true);
    // wordsForCards = [...words];
    // alert('Hello');
    // обращение к API
  }, []);

  const prevCard = () => {
    if (indexCard === 0) setIndexCard(wordsList.length - 1);
    else setIndexCard(indexCard - 1);
  };
  const nextCard = () => {
    if (indexCard + 1 === wordsList.length) setIndexCard(0);
    else setIndexCard(indexCard + 1);
  };

  return isLoaded === true && wordsList.length > 0 ? (
    <div className={styles.wrapper}>
      <button className={stylesBtn.btnComm} type='button' onClick={prevCard}>
        {caretL}
      </button>
      <Card word={wordsList[indexCard]} />
      <button className={stylesBtn.btnComm} type='button' onClick={nextCard}>
        {caretR}
      </button>
    </div>
  ) : (
    <div>Загрузка</div>
  );
};

export default CardContainer;
