import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Card from './Card';

const getWord = (idWord) =>
  fetch(`http://itgirlschool.justmakeit.ru/api/words/${idWord}`)
    .then((response) => {
      if (response.ok) {
        // Проверяем что код ответа 200
        return response.json();
      }
      throw new Error('Something went wrong ...');
    })
    .then((response) => {
      console.log('word', response);
      return response;
    })
    .catch((err) => console.log(err));

const CardRoute = () => {
  const params = useParams();
  const [findWord, setFindWord] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const wordRes = async () => {
      const word = await getWord(params.id);

      setFindWord(word);
      setIsLoading(false);
    };
    wordRes();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return <Card word={findWord} />;
};
export default CardRoute;
