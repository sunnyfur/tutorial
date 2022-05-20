import * as classnames from 'classnames';

import Header from './components/Header/Header';
import Table from './components/Table/Table';
import CardContainer from './components/CardContainer/CardContainer';
import Counter from './components/CardContainer/Counter';
import Footer from './components/Footer/Footer';

import styles from './assets/styles/Components/page.module.scss';

const App = () => (
  <div className={styles.wrapper}>
    <Header className={styles.container} />

    <main className={styles.container}>
      <Table />
    </main>
    <div className={styles.container}>
      <CardContainer />
    </div>
    <Counter />

    <Footer className={classnames(styles.container, styles.footer)} />
  </div>
);

export default App;
