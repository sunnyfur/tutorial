import { useState } from 'react';
import styles from '../../assets/styles/Components/input.module.scss';

const TableData = ({ textHeader, text, isEdit }) => {
  const [textValue, setText] = useState(text);

  return (
    <td data-label={textHeader}>
      {isEdit ? (
        <input
          className={styles.input}
          value={textValue}
          onChange={(event) => setText(event.target.value)}
        />
      ) : (
        <span>{text}</span>
      )}
    </td>
  );
};
export default TableData;
