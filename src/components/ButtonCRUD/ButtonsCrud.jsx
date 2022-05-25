import * as classnames from 'classnames';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faPencil,
  faTrash,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { WordsContext } from '../WordsApi/WordsApi';

import styles from '../../assets/styles/Components/buttonsCDUD.module.scss';

const save = <FontAwesomeIcon icon={faCheck} />;
const edit = <FontAwesomeIcon icon={faPencil} />;
const del = <FontAwesomeIcon icon={faTrash} />;
const cancel = <FontAwesomeIcon icon={faXmark} />;

const ButtonsCRUD = ({ word, isSave, onEdit, onAbort }) => {
  const data = useContext(WordsContext);
  return (
    <div className={styles.wrapper}>
      {isSave ? (
        <>
          <div
            onClick={onEdit}
            aria-hidden='true'
            className={classnames(styles.butt, styles.buttSave)}
          >
            {save}
          </div>
          <div
            onClick={onAbort}
            aria-hidden='true'
            className={classnames(styles.butt, styles.buttEdit)}
          >
            {cancel}
          </div>
        </>
      ) : (
        <>
          <div
            onClick={onEdit}
            aria-hidden='true'
            className={classnames(styles.butt, styles.buttEdit)}
          >
            {edit}
          </div>
          <div
            onClick={() => data.wordDelete(word)}
            aria-hidden='true'
            className={classnames(styles.butt, styles.buttDelete)}
          >
            {del}
          </div>
        </>
      )}
    </div>
  );
};

export default ButtonsCRUD;
