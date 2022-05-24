import { useState } from 'react';

import styles from '../../assets/styles/Components/table.module.scss';
import ButtonsCRUD from '../ButtonCRUD/ButtonsCrud';
import TableData from './TableData';

const header = {
  english: 'English',
  transcription: 'Transcription',
  russian: 'Russian',
  tags: 'Tags',
};

const TableRow = ({ word, isHeader = false }, handleDelete) => {
  const [isEdit, isEditChange] = useState(false);
  const [wordEdit, wordEditChange] = useState(word);
  const handleEdit = () => {
    isEditChange(!isEdit);
  };
  const handleAbort = () => {
    wordEditChange(word);
    handleEdit();
  };
  const handleChange = (event) => {
    wordEditChange((prevState) => ({
      ...prevState,
      [event.target.dataset.name]: event.target.value,
    }));
  };

  return isHeader ? (
    <tr className={styles.wrapper}>
      <th>{header.english}</th>
      <th>{header.transcription}</th>
      <th>{header.russian}</th>
      <th>{header.tags}</th>
      <th> </th>
    </tr>
  ) : (
    <tr className={isEdit ? styles.isEdit : undefined}>
      <TableData
        textHeader={header.english}
        text={wordEdit.english}
        isEdit={isEdit}
        data='english'
        onChange={handleChange}
      />

      <TableData
        textHeader={header.transcription}
        text={wordEdit.transcription}
        isEdit={isEdit}
        data='transcription'
        onChange={handleChange}
      />
      <TableData
        textHeader={header.russian}
        text={wordEdit.russian}
        isEdit={isEdit}
        data='russian'
        onChange={handleChange}
      />
      <TableData textHeader={header.tags} text={word.tags} isEdit={isEdit} />

      <td className={styles.td}>
        <ButtonsCRUD
          isSave={isEdit}
          onEdit={handleEdit}
          onAbort={handleAbort}
          onDelete={handleDelete}
        />
      </td>
    </tr>
  );
};

export default TableRow;
