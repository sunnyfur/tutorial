import styles from '../../assets/styles/Components/table.module.scss';

import TableRow from './TableRow';

import words from '../../mock/words.json';

const isHeader = true;

const Table = () => (
  <table className={styles.table}>
    <thead>
      <TableRow isHeader={isHeader} />
    </thead>
    <tbody>
      {words.map((word, index) => (
        <TableRow word={word} isEdit={index === 3 && true} />
      ))}
    </tbody>
  </table>
);

export default Table;
