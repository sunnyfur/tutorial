import TableRow from './TableRow';

import styles from '../../assets/styles/Components/table.module.scss';
// import { Link } from 'react-router-dom';

const isHeader = true;

const Table = ({ words }) => (
  <table className={styles.table}>
    <thead>
      <TableRow isHeader={isHeader} />
    </thead>
    <tbody className={styles.thead}>
      {words.map((word) => (
        <TableRow word={word} key={word.id} />
      ))}
    </tbody>
  </table>
);

export default Table;
