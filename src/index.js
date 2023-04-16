import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-slideshow-image/dist/styles.css';

import 'react-multi-carousel/lib/styles.css';
import {createStore} from 'redux';
import AllReducers from './reducers/index' ;  
import {Provider} from 'react-redux'

const store =createStore(AllReducers, /* preloadedState, */
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 window.localStorage.setItem("isLogin",0)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

