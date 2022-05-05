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

const TableRow = ({ word, isHeader = false }) => {
  const [isEdit, isEditChange] = useState(false);
  const [wordEdit, wordEditChange] = useState(word);

  const wordBefore = word;

  const editHandle = () => {
    isEditChange(!isEdit);
  };
  const abortHandle = () => {
    wordEditChange(wordBefore);
    editHandle();
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
        onChange={(event) =>
          wordEditChange({ ...wordEdit, english: event.target.value })
        }
      />
      <TableData
        textHeader={header.transcription}
        text={wordEdit.transcription}
        isEdit={isEdit}
        onChange={(event) =>
          wordEditChange({ ...wordEdit, transcription: event.target.value })
        }
      />
      <TableData
        textHeader={header.russian}
        text={wordEdit.russian}
        isEdit={isEdit}
        onChange={(event) =>
          wordEditChange({ ...wordEdit, russian: event.target.value })
        }
      />
      <TableData textHeader={header.tags} text={word.tags} isEdit={isEdit} />

      <td>
        <ButtonsCRUD
          isSave={isEdit}
          onEdit={editHandle}
          onAbort={abortHandle}
        />
      </td>
    </tr>
  );
};

export default TableRow;
