// import { useState } from 'react';
import styles from '../../assets/styles/Components/input.module.scss';

const TableData = ({ textHeader, text, isEdit, onChange }) => (
  <td data-label={textHeader}>
    {isEdit ? (
      <input className={styles.input} value={text} onChange={onChange} />
    ) : (
      <span>{text}</span>
    )}
  </td>
);
export default TableData;
