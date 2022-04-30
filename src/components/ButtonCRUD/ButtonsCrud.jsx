import * as classnames from 'classnames';
import styles from '../../assets/styles/Components/buttonsCDUD.module.scss';

const ButtonsCRUD = ({ isSave }) => (
  <div className={styles.wrapper}>
    {isSave && (
      <input
        className={classnames(styles.butt, styles.buttSave)}
        type='button'
      />
    )}
    <input className={classnames(styles.butt, styles.buttEdit)} type='button' />
    <input
      className={classnames(styles.butt, styles.buttDelete)}
      type='button'
    />
  </div>
);

export default ButtonsCRUD;
