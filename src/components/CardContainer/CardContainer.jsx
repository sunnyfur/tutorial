import { useState, useEffect } from 'react';

import CardCarousel from './CardCarousel';
import ButtonCommon from '../ButtonCommon/ButtonCommon';
import styles from '../../assets/styles/Components/cardContainer.module.scss';
import Loader from '../Loader/Loader';

// import words from '../../mock/words.json';

const getWords = () =>
  fetch('http://itgirlschool.justmakeit.ru/api/words')
    .then((response) => {
      if (response.ok) {
        // Проверяем что код ответа 200
        return response.json();
      }
      throw new Error('Something went wrong ...');
    })
    .then((response) => {
      console.log(2, response);
      return response;
    })
    .catch((err) => console.log(err));

// return [...words];
const CardContainer = () => {
  const [wordsList, setWordsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [nextWords, setNextWords] = useState(0);

  useEffect(() => {
    // обращение к API
    console.log('Обратились к API');
    const wordsRes = async () => {
      const words = await getWords();
      console.log(3, words);
      setWordsList(words);
      setIsLoading(false);
    };
    wordsRes();
  }, []);

  const handleClick = () => {
    console.log(27, 'Переподключение');
    setIsLoading(true);
  };

  if (isLoading) {
    return (
      <div className={styles.container}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <CardCarousel wordsList={wordsList} />
      <ButtonCommon text='Следующие карточки' onClick={handleClick} />
    </div>
  );
};

export default CardContainer;
