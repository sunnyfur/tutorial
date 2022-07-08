import { useContext, useEffect, useState } from 'react';
import Input from '../Input/Input';
import TableRow from './TableRow';
import ButtonCommon from '../ButtonCommon/ButtonCommon';
import styles from '../../assets/styles/Components/table.module.scss';
import stylesButtW from '../../assets/styles/Components/buttonsCDUD.module.scss';
import stylesButt from '../../assets/styles/Components/buttons.module.scss';
import { WordsContext } from '../WordsApi/WordsApi';

const isHeader = true;
const AddWord = () => {
  const data = useContext(WordsContext);
  const [word, wordChange] = useState({});
  const [enableSave, setEnableSave] = useState(true);
  const [errorMsg, setErrorMsg] = useState({});

  const isValidForm = () => Object.keys(errorMsg).length === 0;
  const handleAdd = () => {
    if (enableSave) {
      data.wordAdd(word);
      wordChange({});
    } else alert('Данные не сохранены');
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
    wordChange((prevState) => ({
      ...prevState,
      [event.target.dataset.name]: event.target.value,
    }));
  };
  return (
    <table className={styles.table}>
      <thead>
        <TableRow isHeader={isHeader} />
      </thead>
      <tbody className={styles.thead}>
        <tr>
          <td className={styles.td}>
            <Input
              data='english'
              required
              onChange={handleChange}
              errorMsg={errorMsg.english}
            />
          </td>
          <td className={styles.td}>
            <Input
              data='transcription'
              onChange={handleChange}
              required
              errorMsg={errorMsg.transcription}
            />{' '}
          </td>
          <td className={styles.td}>
            <Input
              data='russian'
              onChange={handleChange}
              required
              errorMsg={errorMsg.russian}
            />{' '}
          </td>
          <td className={styles.td}>
            <Input data='tags' onChange={handleChange} />{' '}
          </td>

          <td className={styles.td}>
            <div className={stylesButtW.wrapper}>
              <ButtonCommon
                text='Добавить'
                onClick={handleAdd}
                className={stylesButt.btnComm_add}
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AddWord;
