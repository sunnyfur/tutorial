import { useContext } from 'react';

import { WordsContext } from '../components/WordsApi/WordsApi';

import Table from '../components/Table/Table';
import AddWord from '../components/Table/AddWord';

import styles from '../assets/styles/Components/containers.module.scss';

const TablePage = () => {
  const data = useContext(WordsContext);

  return (
    <div className={styles.wrapperV}>
      <AddWord />
      <Table words={data.wordsList} />
    </div>
  );
};

export default TablePage;
