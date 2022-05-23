import * as classnames from 'classnames';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Table from './components/Table/Table';
import CardContainer from './components/CardContainer/CardContainer';

// import Counter from './components/CardContainer/Counter';
import Footer from './components/Footer/Footer';

import styles from './assets/styles/Components/page.module.scss';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  const [shadowHeader, setShadowHeader] = useState(false);
  const handleScroll = () => {
    if (document.documentElement.scrollTop > 5) {
      setShadowHeader(true);
    } else {
      setShadowHeader(false);
    }
  };
  useEffect(() => {
    window.onscroll = () => handleScroll();
  }, []);

  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Header
          className={classnames(
            styles.header,
            shadowHeader ? styles.boxShadow : ''
          )}
        />

        <main className={classnames(styles.container, styles.main)}>
          <Routes>
            <Route index element={<Table />} />
            <Route path='/game' exact element={<CardContainer />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>

        <Footer className={classnames(styles.container, styles.footer)} />
      </div>
    </BrowserRouter>
  );
};

export default App;
