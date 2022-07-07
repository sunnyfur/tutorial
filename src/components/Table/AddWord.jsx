import Input from '../Input/Input';
import TableRow from './TableRow';
import ButtonCommon from '../ButtonCommon/ButtonCommon';
import styles from '../../assets/styles/Components/table.module.scss';
import stylesButtW from '../../assets/styles/Components/buttonsCDUD.module.scss';
import stylesButt from '../../assets/styles/Components/buttons.module.scss';

// const add = <FontAwesomeIcon icon={faXmark} />;
// import { Link } from 'react-router-dom';
const isHeader = true;
const AddWord = () => (
  <table className={styles.table}>
    <thead>
      <TableRow isHeader={isHeader} />
    </thead>
    <tbody className={styles.thead}>
      <tr>
        <td className={styles.td}>
          {' '}
          <Input />{' '}
        </td>
        <td className={styles.td}>
          {' '}
          <Input />{' '}
        </td>
        <td className={styles.td}>
          {' '}
          <Input />{' '}
        </td>
        <td className={styles.td}>
          {' '}
          <Input />{' '}
        </td>

        <td className={styles.td}>
          <div className={stylesButtW.wrapper}>
            <ButtonCommon text='Добавить' className={stylesButt.btnComm_add} />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
);

export default AddWord;
