import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import * as classnames from 'classnames';

import Card from '../Card/Card';

import styles from '../../assets/styles/Components/cardContainer.module.scss';
import stylesBtn from '../../assets/styles/Components/buttons.module.scss';
import '../../assets/styles/Components/carousel.scss';

const caretL = <FontAwesomeIcon icon={faCaretLeft} />;
const caretR = <FontAwesomeIcon icon={faCaretRight} />;

const CardCarousel = ({ wordsList = [], index = 0 }) => {
  const [indexCard, setIndexCard] = useState(index);
  const [animate, setAnimate] = useState(false);
  const carousel = useRef('right');
  const [learned, setLearned] = useState([]);

  let indexNew;
  const switchCards = (side) => {
    switch (side) {
      case 'right':
        carousel.current = 'right';
        indexNew = indexCard + 1 === wordsList.length ? 0 : indexCard + 1;

        break;
      case 'left':
        carousel.current = 'left';
        indexNew = indexCard === 0 ? wordsList.length - 1 : indexCard - 1;

        break;
      default:
    }

    const switchCard = async () => {
      await setAnimate((newAnimate) => !newAnimate);
      setIndexCard(indexNew);
    };
    switchCard();
  };
  const incrementLearned = () => {
    const newLearned = [...learned];
    if (newLearned.indexOf(indexCard) === -1) newLearned.push(indexCard);
    setLearned(newLearned);
  };
  if (wordsList.length > 0) {
    return (
      <>
        <div className={classnames(carousel.current, styles.wrapper)}>
          <button
            className={stylesBtn.btnComm}
            type='button'
            onClick={() => switchCards('left')}
          >
            {caretL}
          </button>
          <SwitchTransition mode='out-in'>
            <CSSTransition
              classNames='carousel'
              addEndListener={(node, done) => {
                node.addEventListener('transitionened', done);
              }}
              timeout={500}
              delay={300}
              key={animate}
            >
              <Card word={wordsList[indexCard]} learned={incrementLearned} />
            </CSSTransition>
          </SwitchTransition>
          <button
            className={stylesBtn.btnComm}
            type='button'
            onClick={() => switchCards('right')}
          >
            {caretR}
          </button>
        </div>
        <p>
          Карточка {indexCard + 1} из {wordsList.length}
        </p>
        <p>
          Выученных слов {learned.length} из {wordsList.length}
        </p>
      </>
    );
  }

  return <div>Нет карточек для изучения</div>;
};

export default CardCarousel;
