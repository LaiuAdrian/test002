import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './componnente/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './componnente/reducers';

const store = createStore(reducers);

ReactDOM.render(

    <Provider store={store}>
      <App />
    </Provider>,

  document.getElementById('root')
);
