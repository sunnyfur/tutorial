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

const ButtonsCRUD = ({
  isSave,
  enableSave,
  onEdit,
  onApply,
  onAbort,
  onDelete,
}) => (
  <div className={styles.wrapper}>
    {isSave ? (
      <>
        <button
          type='button'
          disabled={enableSave}
          onClick={onApply}
          aria-hidden='true'
          className={classnames(styles.butt, styles.buttSave)}
        >
          {save}
        </button>
        <button
          type='button'
          onClick={onAbort}
          aria-hidden='true'
          className={classnames(styles.butt, styles.buttEdit)}
        >
          {cancel}
        </button>
      </>
    ) : (
      <>
        <button
          type='button'
          onClick={onEdit}
          aria-hidden='true'
          className={classnames(styles.butt, styles.buttEdit)}
        >
          {edit}
        </button>
        <button
          type='button'
          onClick={onDelete}
          aria-hidden='true'
          className={classnames(styles.butt, styles.buttDelete)}
        >
          {del}
        </button>
      </>
    )}
  </div>
);

export default ButtonsCRUD;
