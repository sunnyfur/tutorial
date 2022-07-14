import { useEffect, useState } from 'react';
import { observer, inject } from 'mobx-react';
import Input from '../Input/Input';
import TableRow from './TableRow';
import ButtonCommon from '../ButtonCommon/ButtonCommon';
import styles from '../../assets/styles/Components/table.module.scss';
import stylesButtW from '../../assets/styles/Components/buttonsCDUD.module.scss';
import stylesButt from '../../assets/styles/Components/buttons.module.scss';

import checkValidation from './checkValidation';

const emptyWord = {
  english: '',
  transcription: '',
  russian: '',
  tags: '',
};

const isHeader = true;
const AddWord = ({ wordStore }) => {
  const [word, wordChange] = useState({});
  const [enableSave, setEnableSave] = useState(true);
  const [errorMsg, setErrorMsg] = useState({});

  const isValidForm = () =>
    Object.keys(errorMsg).reduce(
      (countErr, item) => countErr + (errorMsg[item] ? 1 : 0),
      0
    ) === 0;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(word).length === 0) {
      wordChange(emptyWord);
    } else if (enableSave) {
      wordStore.wordAdd(word);
      wordChange({});
    } else alert('Данные не сохранены');
  };
  useEffect(() => {
    setEnableSave(isValidForm());
  }, [errorMsg]);

  useEffect(() => {
    setErrorMsg(checkValidation(word));
  }, [word]);

  const handleChange = (event) => {
    wordChange((prevState) => ({
      ...prevState,
      [event.target.dataset.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
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
              />
            </td>
            <td className={styles.td}>
              <Input
                data='russian'
                onChange={handleChange}
                required
                errorMsg={errorMsg.russian}
              />
            </td>
            <td className={styles.td}>
              <Input data='tags' onChange={handleChange} />
            </td>

            <td className={styles.td}>
              <div className={stylesButtW.wrapper}>
                <ButtonCommon
                  text='Добавить'
                  onClick={handleSubmit}
                  className={stylesButt.btnComm_add}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default inject(['wordStore'])(observer(AddWord));
