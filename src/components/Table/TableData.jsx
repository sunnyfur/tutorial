// import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../assets/styles/Components/input.module.scss';

const textDisplay = (id, text) =>
  id ? (
    <Link to={`/cards/${id}`}>
      <span>{text}</span>
    </Link>
  ) : (
    <span>{text}</span>
  );

const TableData = ({ textHeader, text, isEdit, onChange, data, id }) => (
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
      textDisplay(id, text)
    )}
  </td>
);
export default TableData;
