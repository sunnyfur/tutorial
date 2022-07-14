import { observer, inject } from 'mobx-react';
import CardCarousel from './CardCarousel';
// import ButtonCommon from '../ButtonCommon/ButtonCommon';
import styles from '../../assets/styles/Components/cardContainer.module.scss';

// return [...words];
const CardContainer = ({ wordStore }) => (
  <div className={styles.container}>
    <CardCarousel wordsList={wordStore.words} />

    {/* <ButtonCommon text='Следующие карточки' onClick={handleClick} /> */}
  </div>
);

export default inject(['wordStore'])(observer(CardContainer));
