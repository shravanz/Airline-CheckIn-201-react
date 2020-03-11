import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css"; 
import { createStore } from 'redux';
import {userReducer} from '../src/reducers/UserReducer';
import {Provider} from 'react-redux'
import {loadState , saveState} from './store/LocalStorage'

//load data from localStorage  
const persistedState = loadState();

//  create redux store using reducer
let store = createStore(userReducer , persistedState);

//persist redux state to localStorage for initilizing the state with previous value (to handle refersh)
store.subscribe(()=>saveState(store.getState()));

// Provider Component is a helper component which allow to inject the store to React Component
ReactDOM.render(<Provider store = {store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
