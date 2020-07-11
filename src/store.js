
import {combineReducers, createStore, applyMiddleware} from 'redux'


import {todos} from './redux/reducers';
import logger from 'redux-logger';

const reducers = {todos,}

const rootReducer = combineReducers(reducers);


const middleWares = [logger]



export const configureStore = () => createStore(rootReducer, applyMiddleware(...middleWares))


// combine reducers, create store, apply middlewares