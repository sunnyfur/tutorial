import styles from '../../assets/styles/Components/buttons.module.scss';

const ButtonCommon = ({ text, onClick }) => (
  <input
    className={styles.btnComm}
    type='button'
    value={text}
    onClick={onClick}
  />
);

export default ButtonCommon;
