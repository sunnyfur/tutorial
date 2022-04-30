import styles from '../../assets/styles/Components/input.module.scss';

const TableData = ({ textHeader, text, isEdit }) => (
  <td data-label={textHeader}>
    {isEdit ? (
      <input className={styles.input} value={text} />
    ) : (
      <span>{text}</span>
    )}
  </td>
);
export default TableData;
