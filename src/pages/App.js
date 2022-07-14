import * as classnames from 'classnames';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { observer, inject } from 'mobx-react';

import Header from '../components/Header/Header';
import CardContainer from '../components/CardContainer/CardContainer';
import Footer from '../components/Footer/Footer';

import styles from '../assets/styles/Components/page.module.scss';
import NotFound from './NotFound';
import CardRoute from '../components/Card/CardRoute';
import TablePage from './TablePage';
import WordsApi from '../context/WordsApi/WordsApi';

const App = ({ wordStore }) => {
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
    wordStore.loadData();
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
          <WordsApi>
            {' '}
            <Routes>
              <Route index path='/tutorial' element={<TablePage />} />
              <Route path='/tutorial/game' exact element={<CardContainer />} />
              <Route path='/tutorial/cards'>
                <Route path=':id' element={<CardRoute />} />
              </Route>
              <Route path='*' element={<NotFound />} />
            </Routes>{' '}
          </WordsApi>
        </main>

        <Footer className={classnames(styles.container, styles.footer)} />
      </div>
    </BrowserRouter>
  );
};

export default inject(['wordStore'])(observer(App));
