/**
 * Created by inerc on 21.09.16.
 */

import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer'
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas/root';

import routes from './routes';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose (
        applyMiddleware(thunk, createLogger(), sagaMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

sagaMiddleware.run(rootSaga);

render(
    <Provider store = { store }>
        <Router history={browserHistory} routes={routes} />
    </Provider>, document.getElementById('app'));