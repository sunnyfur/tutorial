import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import Card from '../Card/Card';

import styles from '../../assets/styles/Components/cardContainer.module.scss';
import stylesBtn from '../../assets/styles/Components/buttons.module.scss';

const caretL = <FontAwesomeIcon icon={faCaretLeft} />;
const caretR = <FontAwesomeIcon icon={faCaretRight} />;

const CardCarousel = ({ wordsList = [], index = 0 }) => {
  const [indexCard, setIndexCard] = useState(index);

  const prevCard = () => {
    // TODO если достигли начала сообщить, что достигли начала
    setIndexCard(indexCard === 0 ? wordsList.length - 1 : indexCard - 1);
  };
  const nextCard = () => {
    setIndexCard(indexCard + 1 === wordsList.length ? 0 : indexCard + 1);
  };

  if (wordsList.length > 0) {
    return (
      <div className={styles.wrapper}>
        <button className={stylesBtn.btnComm} type='button' onClick={prevCard}>
          {caretL}
        </button>
        <Card word={wordsList[indexCard]} />
        <button className={stylesBtn.btnComm} type='button' onClick={nextCard}>
          {caretR}
        </button>
      </div>
    );
  }

  return <div>Нет карточек для изучения</div>;
};

export default CardCarousel;
