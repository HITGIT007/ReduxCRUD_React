import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {configureStore} from '@reduxjs/toolkit';
/* Redux Toolkit has a configureStore() method that simplifies the store 
setup process. configureStore() wraps around the Redux library’s 
createStore() method and the combineReducers() method, and handles
 most of the store setup for us automatically. */

import {Provider} from 'react-redux';
/* The <Provider> component makes the Redux store available to any nested 
components that need to access the Redux store.
Since any React component in a React Redux app can be connected to the 
store, most applications will render a 
<Provider> at the top level, with the entire app’s component tree inside
of it. */

import usersReducer from './features/Users'

const store = configureStore({
/* A store holds the whole state tree of your application. The only way
to change the state inside it is to dispatch an action on it.
A store is not a class. It's just an object with a few methods on it. 
To create it, pass your root reducing function to createStore.  
 */
reducer:{
 //reducer is a property which is basically an object containing all the 
 //different types of reducers that you need to have

 users: usersReducer,


},
/* Reducers are a pure function in Redux. Pure functions are predictable. 
Reducers are the only way to change states in Redux. 
It is the only place where you can write logic and calculations. 
Reducer function will accept the previous state of app and action being 
dispatched, calculate the next state and returns the new object. */
})


ReactDOM.render(
    <Provider store={store}>
      {/* Here we pass the store to the store property of provider */}
      <App />
    </Provider>
    ,
  document.getElementById('root')
);

