import TableRow from './TableRow';

import words from '../../mock/words.json';

import styles from '../../assets/styles/Components/table.module.scss';

const isHeader = true;

const Table = () => (
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
