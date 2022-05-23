import * as classnames from 'classnames';
import styles from '../../assets/styles/Components/loader.module.scss';

const Loader = () => (
  <>
    <div className={classnames(styles.clear_loading, styles.loading_effect_4)}>
      <span />
      <span />
      <span />
      <span />
    </div>
  </>
);

export default Loader;
