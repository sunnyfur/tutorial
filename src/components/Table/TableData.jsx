import * as classnames from 'classnames';
import { Link } from 'react-router-dom';
import styles from '../../assets/styles/Components/input.module.scss';

const textDisplay = (id, text) =>
  id ? (
    <Link to={`/tutorial/cards/${id}`}>
      <span>{text}</span>
    </Link>
  ) : (
    <span>{text}</span>
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
      <div className={styles.container}>
        <input
          className={classnames(styles.input, { [styles.notValid]: errorMsg })}
          data-name={data}
          data-required={required}
          defaultValue={text}
          onChange={onChange}
        />
        {errorMsg ? <p className={styles.errorText}>{errorMsg}</p> : <></>}
      </div>
    ) : (
      textDisplay(id, text)
    )}
  </td>
);
export default TableData;
