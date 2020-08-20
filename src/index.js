import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Home from './containers/Home';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Redux/Reducer/globalReducer';


/* STORE */
const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>,
document.getElementById('root'));
