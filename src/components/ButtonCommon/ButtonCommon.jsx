import { forwardRef } from 'react';
import styles from '../../assets/styles/Components/buttons.module.scss';

const ButtonCommon = forwardRef(({ text, onClick }, ref) => (
  <input
    className={styles.btnComm}
    type='button'
    value={text}
    onClick={onClick}
    ref={ref}
  />
));

export default ButtonCommon;
