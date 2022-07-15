import { useParams } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { useEffect, useState } from 'react';
import Card from './Card';

const CardRoute = ({ wordStore }) => {
  const params = useParams();
  const [findWord, setFindWord] = useState('');

  useEffect(() => {
    setFindWord(wordStore.wordGet(params.id));
  }, []);

  return <Card word={findWord} />;
};
export default inject(['wordStore'])(observer(CardRoute));
