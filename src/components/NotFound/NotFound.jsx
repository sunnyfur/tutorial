import * as classnames from 'classnames';
import styles from '../../assets/styles/Components/notFound.module.scss';
import people from '../../assets/images/people.svg';
import notF from '../../assets/images/404.svg';

const NotFound = () => (
  <div className={styles.wrapper}>
    <img className={classnames(styles.img, styles.notF)} src={notF} alt='' />
    <p className={styles.text}>такая страница не найдена</p>

    <img
      className={classnames(styles.img, styles.people)}
      src={people}
      alt=''
    />
  </div>
);
export default NotFound;
