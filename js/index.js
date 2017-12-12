

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';

import reducers from './reducers/rootReducer';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
import App from './app';


ReactDOM.render(
    <Provider store = {createStoreWithMiddleware(reducers)}>
        <App/>
    </Provider>, document.querySelector('.content')
)