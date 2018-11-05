import {createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducer/rootReducer'
import thunk from 'redux-thunk';

export default function configureStore() {
    const comopseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const mid = applyMiddleware(thunk);

    return createStore(
        rootReducer,
        comopseEnhancers(mid)
    )
}