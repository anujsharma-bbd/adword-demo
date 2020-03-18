import { createStore } from 'redux';
import { combinedReducer } from '../reducers/combined-reducer';

export const store = createStore(combinedReducer);