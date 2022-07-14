import { observer, inject } from 'mobx-react';
import TableRow from './TableRow';

import styles from '../../assets/styles/Components/table.module.scss';

// import { Link } from 'react-router-dom';

const isHeader = true;

const Table = ({ wordStore }) => (
  <table className={styles.table}>
    <thead>
      <TableRow isHeader={isHeader} />
    </thead>
    <tbody className={styles.thead}>
      {wordStore.words.map((word) => (
        <TableRow word={word} key={word.id} />
      ))}
    </tbody>
  </table>
);

export default inject(['wordStore'])(observer(Table));
