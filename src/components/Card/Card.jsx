import { useEffect, useRef, useState } from 'react';

import ButtonCommon from '../ButtonCommon/ButtonCommon';

import styles from '../../assets/styles/Components/card.module.scss';

const Card = ({ word, learned }) => {
  const [isShow, isShowChange] = useState(false);
  const ref = useRef();

  const handleClick = () => {
    isShowChange(!isShow);
    learned();
  };

  useEffect(() => {
    ref.current.focus();
    isShowChange(false);
  }, [word]);

  return (
    <div className={styles.card}>
      <div className={styles.wordContainer}>
        <span className={styles.word}> {word?.english}</span>
        <span className={styles.transcription}> {word?.transcription}</span>
      </div>
      {!isShow ? (
        <ButtonCommon text='Проверить' onClick={handleClick} ref={ref} />
      ) : (
        <span className={styles.russian}>{word?.russian}</span>
      )}
    </div>
  );
};

export default Card;
