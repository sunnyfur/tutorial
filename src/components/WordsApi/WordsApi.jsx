import { useState, useEffect, createContext } from 'react';
import Loader from '../Loader/Loader';
import ErrorComponent from '../ErrorComponent/ErrorComponent';

export const WordsContext = createContext();

const getWords = () =>
  fetch(
    'https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words'
  )
    .then((response) => {
      if (response.ok) {
        // Проверяем что код ответа 200
        return response.json();
      }
      throw new Error('Something went wrong ...');
    })
    .then(
      (response) =>
        // console.log(2, response);
        response
    )
    .catch((err) => console.log(err));

// return [...words];
const WordsApi = ({ children }) => {
  const [wordsList, setWordsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [nextWords, setNextWords] = useState(0);

  const wordsRes = async () => {
    const words = await getWords().catch((err) => setError(err));
    console.log(3, words);
    setWordsList(words);
    setIsLoading(false);
  };

  useEffect(() => {
    // обращение к API
    console.log('Обратились к API');

    wordsRes();
  }, []);

  const wordEdit = (word) => {
    fetch(
      `https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words/${word.id}/update`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(word),
      }
    ).catch((err) => setError(err));
  };
  const wordDelete = (word) => {
    fetch(
      `https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words/${word.id}/delete`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    ).catch((err) => setError(err));
    wordsRes();
    // const newWordsList = [...wordsList].filter((wordF) => wordF.id !== word.id);
    // setWordsList(newWordsList);
    // TODO запрос на удаление из API
  };

  const valueContext = {
    // функции добавления, удаления, редактирования, поиска
    wordsList,
    wordEdit,
    wordDelete,
  };

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorComponent message={error.message} />;
  }
  return (
    <WordsContext.Provider value={valueContext}>
      {children}
    </WordsContext.Provider>
  );
};

export default WordsApi;
