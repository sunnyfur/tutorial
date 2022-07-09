import { useState, useEffect, createContext } from 'react';
import Loader from '../../components/Loader/Loader';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import { getWords, addWord, deleteWord, updateWord } from './requests';

export const WordsContext = createContext();

const WordsApi = ({ children }) => {
  const [wordsList, setWordsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const wordsRes = async () => {
    const words = await getWords().catch((err) => setError(err));
    setWordsList(words);
    setIsLoading(false);
  };

  useEffect(() => {
    // обращение к API
    wordsRes();
  }, []);

  const wordEdit = (word) => {
    updateWord(word).catch((err) => setError(err));
    wordsRes();
  };

  const wordDelete = async (word) => {
    setIsLoading(true);
    await deleteWord(word).catch((err) => setError(err));
    wordsRes();
  };

  const wordAdd = async (word) => {
    setIsLoading(true);
    try {
      await addWord(word);
    } catch (err) {
      setError(err);
    }
    wordsRes();
  };

  const valueContext = {
    // функции добавления, удаления, редактирования, поиска
    wordsList,
    wordAdd,
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
