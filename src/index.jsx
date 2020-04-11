import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import configureStore from './redux';

const root = document.querySelector('#root');

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
