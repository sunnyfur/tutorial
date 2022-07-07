import { Link } from 'react-router-dom';
import styles from '../../assets/styles/Components/input.module.scss';
import Input from '../Input/Input';

const textDisplay = (id, text) =>
  id ? (
    <Link to={`/tutorial/cards/${id}`}>
      <p>{text}</p>
    </Link>
  ) : (
    <p>{text}</p>
  );

const TableData = ({
  textHeader,
  text,
  isEdit,
  onChange,
  data,
  required,
  id,
  errorMsg,
}) => (
  // const changeHandle = (event) => {
  //   onChange(event);
  // };
  <td className={styles.td} data-label={textHeader}>
    {isEdit ? (
      <Input
        data={data}
        required={required}
        text={text}
        onChange={onChange}
        errorMsg={errorMsg}
      />
    ) : (
      textDisplay(id, text)
    )}
  </td>
);
export default TableData;
