import { useContext } from 'react';
import { WordsContext } from '../WordsApi/WordsApi';

import CardCarousel from './CardCarousel';
// import ButtonCommon from '../ButtonCommon/ButtonCommon';
import styles from '../../assets/styles/Components/cardContainer.module.scss';

// return [...words];
const CardContainer = () => {
  const data = useContext(WordsContext);

  return (
    <div className={styles.container}>
      <CardCarousel wordsList={data.wordsList} />

      {/* <ButtonCommon text='Следующие карточки' onClick={handleClick} /> */}
    </div>
  );
};

export default CardContainer;
