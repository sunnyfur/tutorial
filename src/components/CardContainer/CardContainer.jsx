import { useState, useEffect } from 'react';

import CardCarousel from './CardCarousel';
import ButtonCommon from '../ButtonCommon/ButtonCommon';

import words from '../../mock/words.json';

const getWords = (nextWords) => {
  // fetch
  console.log(nextWords);
  return [...words];
};

const CardContainer = () => {
  const [wordsList, setWordsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextWords, setNextWords] = useState(0);

  useEffect(() => {
    // обращение к API
    console.log('Обратились к API');
    const wordsRes = getWords(nextWords);
    setWordsList(wordsRes);
    setIsLoading(false);
  }, [nextWords]);

  const handleClick = () => {
    console.log(27, 'Переподключение');
    setIsLoading(true);
    setNextWords(wordsList.length);
  };

  if (isLoading) {
    return <div>Загрузка</div>;
  }

  return (
    <div>
      <CardCarousel wordsList={wordsList} />
      <ButtonCommon text='Следующие карточки' onClick={handleClick} />
    </div>
  );
};

export default CardContainer;
