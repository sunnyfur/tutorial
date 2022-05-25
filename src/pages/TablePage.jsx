import { useContext } from 'react';

import { WordsContext } from '../components/WordsApi/WordsApi';

import Table from '../components/Table/Table';

const TablePage = () => {
  const data = useContext(WordsContext);

  return <Table words={data.wordsList} />;
};

export default TablePage;
