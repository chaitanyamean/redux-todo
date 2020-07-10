
import {combineReducers, createStore} from 'redux'


import {todos} from './redux/reducers';

const reducers = {todos,}

const rootReducer = combineReducers(reducers);


// const middleWares = []



export const configureStore = () => createStore(rootReducer)


// combine reducers, create store, apply middlewares