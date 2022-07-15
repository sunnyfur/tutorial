// import React from 'react';
import { Provider } from 'mobx-react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import WordStore from './stores/WordsStore';

const store = {
  wordStore: new WordStore(),
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>  //первый рендер делается два раза. из-за этого происходит двойной Fetch
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Provider {...store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
