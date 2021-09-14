import { createStore, compose, applyMiddleware, combineReducers } from 'redux';

import thunk from "redux-thunk";
import rootReducer from './reducers/index';

const reducer = rootReducer;

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
export default store;