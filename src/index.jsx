import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './store/store';
import environment from './environments/environment';
import setAutoFreeze from 'immer';

if (environment.env === 'PROD') {
   setAutoFreeze(false); // by deault its auto-freeze
}

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
