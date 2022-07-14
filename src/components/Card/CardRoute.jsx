import { useParams } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import Card from './Card';

const CardRoute = ({ wordStore }) => {
  const params = useParams();
  // const [findWord, setFindWord] = useState('');

  // useEffect(() => {
  //   const wordRes = async () => {
  //     const word = await getWord(params.id);

  //     setFindWord(word);
  //   };
  //   wordRes();
  // }, []);

  return <Card word={wordStore.wordGet(params.id)} />;
};
export default inject(['wordStore'])(observer(CardRoute));
