import * as classnames from 'classnames';
import logo from '../../assets/images/logo.svg';
import styles from '../../assets/styles/Components/header.module.scss';

const Header = ({ className }) => (
  <header className={classnames(className, styles.wrapper)}>
    <img src={logo} alt='logo' />
    <nav className={styles.nav}>
      <a href='it.ru'>Home</a>
      <a href='it.ru'>Game</a>
    </nav>
  </header>
);
export default Header;
