import { useContext, useEffect, useState } from 'react';

import styles from '../../assets/styles/Components/table.module.scss';
import ButtonsCRUD from '../ButtonCRUD/ButtonsCrud';
import TableData from './TableData';
import { WordsContext } from '../WordsApi/WordsApi';

const header = {
  english: 'English',
  transcription: 'Transcription',
  russian: 'Russian',
  tags: 'Tags',
};

const TableRow = ({ word, isHeader = false }) => {
  const data = useContext(WordsContext);
  const [isEdit, isEditChange] = useState(false);
  const [wordEdit, wordEditChange] = useState(word);
  const [enableSave, setEnableSave] = useState(true);
  const [errorMsg, setErrorMsg] = useState({});

  const isValidForm = () => Object.keys(errorMsg).length === 0;
  const handleEdit = () => {
    isEditChange(!isEdit);
  };
  const handleApply = () => {
    handleEdit();
    if (enableSave) data.wordEdit(wordEdit);
    else alert('Данные не сохранены');
  };
  const handleAbort = () => {
    wordEditChange(word);
    handleEdit();
  };
  const handleDelete = () => {
    data.wordDelete(wordEdit);
  };
  useEffect(() => {
    setEnableSave(isValidForm());
  }, [errorMsg]);

  const handleChange = (event) => {
    const errMsg = { ...errorMsg };
    if (event.target.dataset.required && event.target.value.trim() === '') {
      errMsg[event.target.dataset.name] = 'Обязательно для заполнения';
    } else {
      delete errMsg[event.target.dataset.name];
    }

    setErrorMsg(errMsg);
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
        id={wordEdit.id}
        isEdit={isEdit}
        data='english'
        required
        onChange={handleChange}
        errorMsg={errorMsg.english}
      />

      <TableData
        textHeader={header.transcription}
        text={wordEdit.transcription}
        isEdit={isEdit}
        required
        data='transcription'
        onChange={handleChange}
        errorMsg={errorMsg.transcription}
      />
      <TableData
        textHeader={header.russian}
        text={wordEdit.russian}
        isEdit={isEdit}
        required
        data='russian'
        onChange={handleChange}
        errorMsg={errorMsg.russian}
      />
      <TableData
        textHeader={header.tags}
        text={word.tags}
        data='tags'
        isEdit={isEdit}
      />

      <td className={styles.td}>
        <ButtonsCRUD
          isSave={isEdit}
          enableSave={enableSave}
          onEdit={handleEdit}
          onApply={handleApply}
          onAbort={handleAbort}
          onDelete={handleDelete}
        />
      </td>
    </tr>
  );
};

export default TableRow;
