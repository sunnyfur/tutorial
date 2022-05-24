// import { useState } from 'react';
import styles from '../../assets/styles/Components/input.module.scss';

const TableData = ({ textHeader, text, isEdit, onChange, data }) => (
  // const changeHandle = (event) => {
  //   onChange(event);
  // };
  <td className={styles.td} data-label={textHeader}>
    {isEdit ? (
      <input
        className={styles.input}
        data-name={data}
        defaultValue={text}
        onChange={onChange}
      />
    ) : (
      <span>{text}</span>
    )}
  </td>
);
export default TableData;
