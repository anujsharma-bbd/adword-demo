import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combinedReducer } from '../reducers/combined-reducer';

export const store = createStore(combinedReducer, applyMiddleware(thunk));