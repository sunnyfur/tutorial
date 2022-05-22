import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import Card from '../Card/Card';

import styles from '../../assets/styles/Components/cardContainer.module.scss';
import stylesBtn from '../../assets/styles/Components/buttons.module.scss';
import '../../assets/styles/Components/carousel.scss';

const caretL = <FontAwesomeIcon icon={faCaretLeft} />;
const caretR = <FontAwesomeIcon icon={faCaretRight} />;

const CardCarousel = ({ wordsList = [], index = 0 }) => {
  const [indexCard, setIndexCard] = useState(index);
  // const [animate, setAnimate] = useState({ anim: false, carousel: 'carousel' });
  const carousel = useRef('carousel');

  // let carouselNew = 'carousel';
  let indexNew;
  const switchCards = (side) => {
    switch (side) {
      case 'right':
        // carouselNew = 'carousel';
        carousel.current = 'carousel';
        indexNew = indexCard + 1 === wordsList.length ? 0 : indexCard + 1;

        break;
      case 'left':
        // carouselNew = 'carouselR';
        carousel.current = 'carouselL';
        indexNew = indexCard === 0 ? wordsList.length - 1 : indexCard - 1;

        break;
      default:
    }
    // setAnimate({ anim: !animate.anim, carousel: carouselNew });
    setIndexCard(indexNew);
  };

  if (wordsList.length > 0) {
    return (
      <div className={styles.wrapper}>
        <button
          className={stylesBtn.btnComm}
          type='button'
          onClick={() => switchCards('left')}
        >
          {caretL}
        </button>
        <SwitchTransition mode='out-in'>
          <CSSTransition
            classNames={
              carousel.current === 'carousel' ? 'carousel' : 'carouselL'
            }
            addEndListener={(node, done) => {
              node.addEventListener('transitionened', done);
            }}
            timeout={500}
            key={indexCard}
          >
            <Card word={wordsList[indexCard]} />
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
    );
  }

  return <div>Нет карточек для изучения</div>;
};

export default CardCarousel;
