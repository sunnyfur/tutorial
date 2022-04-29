import styles from './assets/styles/Components/page.module.scss';

import Header from './components/Header/Header';
import Table from './components/Table/Table';
import Footer from './components/Footer/Footer';

const App = () => (
  <div className={styles.wrapper}>
    <Header />
    <main>
      <Table />
    </main>
    <Footer />
  </div>
);

export default App;
