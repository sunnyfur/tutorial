import * as classnames from 'classnames';

import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import styles from '../../assets/styles/Components/header.module.scss';

const Header = ({ className }) => (
  <header className={classnames(className)}>
    <div className={styles.wrapper}>
      <Link to='/tutorial'>
        <img className={styles.logo} src={logo} alt='logo' />
      </Link>
      <nav className={styles.nav}>
        <Link className={styles.link} to='/tutorial'>
          Home
        </Link>
        <Link className={styles.link} to='/tutorial/game'>
          Game
        </Link>
      </nav>
    </div>
  </header>
);
export default Header;
