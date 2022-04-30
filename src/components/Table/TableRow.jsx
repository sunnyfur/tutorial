import styles from '../../assets/styles/Components/table.module.scss';
import ButtonsCRUD from '../ButtonCRUD/ButtonsCrud';
import TableData from './TableData';

const header = {
  english: 'English',
  transcription: 'Transcription',
  russian: 'Russian',
  tags: 'Tags',
};

const TableRow = ({ word, isEdit, isHeader = false }) =>
  isHeader ? (
    <tr className={styles.wrapper}>
      <th>{header.english}</th>
      <th>{header.transcription}</th>
      <th>{header.russian}</th>
      <th>{header.tags}</th>
      <th> </th>
    </tr>
  ) : (
    <tr className={isEdit && styles.isEdit}>
      <TableData
        textHeader={header.english}
        text={word.english}
        isEdit={isEdit}
      />
      <TableData
        textHeader={header.transcription}
        text={word.transcription}
        isEdit={isEdit}
      />
      <TableData
        textHeader={header.russian}
        text={word.russian}
        isEdit={isEdit}
      />
      <TableData textHeader={header.tags} text={word.tags} isEdit={isEdit} />

      <td>
        <ButtonsCRUD isSave={isEdit} />
      </td>
    </tr>
  );
export default TableRow;
