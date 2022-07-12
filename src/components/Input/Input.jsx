import * as classnames from 'classnames';
import styles from '../../assets/styles/Components/input.module.scss';

const Input = ({ text, onChange, data, required, errorMsg }) => (
  <div className={styles.container}>
    <input
      className={classnames(styles.input, { [styles.notValid]: errorMsg })}
      data-name={data}
      data-required={required}
      defaultValue={text}
      onChange={onChange}
    />
    {errorMsg ? <p className={styles.errorText}>{errorMsg}</p> : <></>}
  </div>
);
export default Input;
