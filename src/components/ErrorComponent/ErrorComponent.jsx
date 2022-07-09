import * as classnames from 'classnames';

import ButtonCommon from '../ButtonCommon/ButtonCommon';
import styles from '../../assets/styles/Components/notFound.module.scss';
import people from '../../assets/images/people2.svg';
import err from '../../assets/images/error.svg';

const ErrorComponent = ({ message, onClick }) => (
  <div className={styles.wrapper}>
    <img className={classnames(styles.img, styles.notF)} src={err} alt='' />
    <p className={styles.text}>{message}</p>
    <ButtonCommon text='Go back' onClick={onClick} />
    <img
      className={classnames(styles.img, styles.people)}
      src={people}
      alt=''
    />
  </div>
);
export default ErrorComponent;
