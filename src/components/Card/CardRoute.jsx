import { useParams } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { useEffect } from 'react';
import Card from './Card';

const CardRoute = ({ wordStore }) => {
  const params = useParams();
  // const [findWord, setFindWord] = useState('');

  useEffect(() => {
    wordStore.wordGet(params.id);
  }, []);

  return <Card word={wordStore.word} />;
};
export default inject(['wordStore'])(observer(CardRoute));
