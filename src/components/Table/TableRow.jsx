import styles from '../../assets/styles/Components/table.module.scss';

const TableRow = ({ word, isEdit, isHeader = false }) =>
  isHeader ? (
    <tr className={styles.wrapper}>
      <th>{word.english}</th>
      <th>{word.transcription}</th>
      <th>{word.russian}</th>
      <th>{word.tags}</th>
    </tr>
  ) : (
    <tr>
      <td>{word.english}</td>
      <td>{word.transcription}</td>
      <td>{word.russian}</td>
      <td>{word.tags}</td>
      <td>{isEdit && 'кнопка'}</td>
    </tr>
  );
export default TableRow;
