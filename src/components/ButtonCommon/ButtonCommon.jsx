import * as classnames from 'classnames';
import { forwardRef } from 'react';
import styles from '../../assets/styles/Components/buttons.module.scss';

const ButtonCommon = forwardRef(({ text, onClick, className }, ref) => (
  <input
    className={classnames(styles.btnComm, className)}
    type='button'
    value={text}
    onClick={onClick}
    ref={ref}
  />
));

export default ButtonCommon;
