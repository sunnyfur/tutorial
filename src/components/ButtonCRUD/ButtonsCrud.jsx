import * as classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faPencil,
  faTrash,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

import styles from '../../assets/styles/Components/buttonsCDUD.module.scss';

const save = <FontAwesomeIcon icon={faCheck} />;
const edit = <FontAwesomeIcon icon={faPencil} />;
const del = <FontAwesomeIcon icon={faTrash} />;
const cancel = <FontAwesomeIcon icon={faXmark} />;

const ButtonsCRUD = ({ isSave, onEdit, onAbort }) => (
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
          // onClick={onDelete}
          aria-hidden='true'
          className={classnames(styles.butt, styles.buttDelete)}
        >
          {del}
        </div>
      </>
    )}
  </div>
);

export default ButtonsCRUD;
