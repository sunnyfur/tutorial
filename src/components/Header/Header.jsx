import * as classnames from 'classnames';

import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import styles from '../../assets/styles/Components/header.module.scss';

const Header = ({ className }) => (
  <header className={classnames(className)}>
    <div className={styles.wrapper}>
      <Link to='/'>
        <img src={logo} alt='logo' />
      </Link>
      <nav className={styles.nav}>
        <Link className={styles.link} to='/'>
          Home
        </Link>
        <Link className={styles.link} to='/game'>
          Game
        </Link>
      </nav>
    </div>
  </header>
);
export default Header;
