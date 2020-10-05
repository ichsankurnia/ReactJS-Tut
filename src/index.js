import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Home from './containers/Home';
import { Provider } from 'react-redux';
import configureStore from './Redux/Store/configureStore';

/* STORE */
const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>,
document.getElementById('root'));
