import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { addResult } from './actions/Cal';
import calReducer from './reducer/Cal';
import App from './Component/App';
import { createStore } from 'redux';
import {  Provider } from 'react-redux';

/**
 * Redux Store.
 * Store is the full representation of our state. It is a complex object that
 * keeps track of the state data, and will help us operate on it using defined
 * reducers/actions.
 */
const store = createStore( calReducer );

// Attempt to output, see if we're getting an error.
store.subscribe( () => console.log( store.getState() ) ); // Outputs each time a change occurs (subscribe watches for changes.)

/**
 * Redux Dispatch
 * Dispatch is used for us to send commands for mutation/manipulation/reads from
 * our store/state data.
 */
store.dispatch( addResult( "5*2 = 10" ) );
store.dispatch( addResult( "4-1 = 3" ) );
store.dispatch( addResult( "3+3 = 6" ) );



ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root')
);

