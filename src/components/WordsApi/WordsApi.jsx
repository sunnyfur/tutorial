import { useState, useEffect, createContext } from 'react';
import Loader from '../Loader/Loader';

export const WordsContext = createContext();

const getWords = () =>
  fetch('http://itgirlschool.justmakeit.ru/api/words')
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

  //   const wordEdit = (word) => {};
  const wordDelete = (word) => {
    const newWordsList = [...wordsList].filter((wordF) => wordF.id !== word.id);
    setWordsList(newWordsList);
    // TODO запрос на удаление из API
  };

  const valueContext = {
    // функции добавления, удаления, редактирования, поиска
    wordsList,
    // wordEdit,
    wordDelete,
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <WordsContext.Provider value={valueContext}>
      {children}
    </WordsContext.Provider>
  );
};

export default WordsApi;
