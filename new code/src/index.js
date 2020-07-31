import React from 'react';
//import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import { addResult } from './actions/Cal';
import calReducer from './reducer/Cal';
import Nav from './Component/Nav';
import App from './Component/App';
import PastCal from './Component/PastCal';
import { createStore } from 'redux';
import {  Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from '@testing-library/react';

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

// Set up a "root" for our Router.
const Root = ( store ) => (
  <Provider store = {store.store}>
    <Router>
    <h1> React/Redux/Router Calculator</h1>
      <Nav />
      <Route path = "/" component = {App} exact/>
      <Route path = "/PastCalculations" component = {PastCal} />
     
    </Router>
  </Provider>

);
Root.propTypes ={
  store: PropTypes.object.isRequired
}
// Render the route-enabled configuration.
render( 
  <Root store ={store} />, 
  document.getElementById( 'root' )
);




