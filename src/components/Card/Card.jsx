import { useState } from 'react';

import ButtonCommon from '../ButtonCommon/ButtonCommon';

import styles from '../../assets/styles/Components/card.module.scss';

const Card = ({ word }) => {
  const [isShow, isShowChange] = useState(false);
  return (
    <div className={styles.card}>
      <div className={styles.wordContainer}>
        <span className={styles.word}> {word.english}</span>
        <span className={styles.transcription}> {word.transcription}</span>
      </div>
      {!isShow ? (
        <ButtonCommon text='Проверить' onClick={() => isShowChange(!isShow)} />
      ) : (
        <span className={styles.russian}>{word.russian}</span>
      )}
    </div>
  );
};

export default Card;
