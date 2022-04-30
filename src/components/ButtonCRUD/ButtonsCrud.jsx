import * as classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

import styles from '../../assets/styles/Components/buttonsCDUD.module.scss';

const save = <FontAwesomeIcon icon={faCheck} />;
const edit = <FontAwesomeIcon icon={faPencil} />;
const del = <FontAwesomeIcon icon={faTrash} />;

const ButtonsCRUD = ({ isSave }) => (
  <div className={styles.wrapper}>
    {isSave && (
      <div className={classnames(styles.butt, styles.buttSave)}> {save}</div>
    )}
    <div className={classnames(styles.butt, styles.buttEdit)}> {edit}</div>
    <div className={classnames(styles.butt, styles.buttDelete)}>{del}</div>
  </div>
);

export default ButtonsCRUD;
