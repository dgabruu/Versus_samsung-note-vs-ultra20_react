import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router , Switch , Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Test from './test';
import Price from './price'
import Specs from './specs'

const history=createBrowserHistory();
ReactDOM.render(
  
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={App}></Route>
        <Route exact path='/test.js' component={Test}></Route>
        <Route exact path='/App.js' component={App}></Route>
        <Route exact path='/price.js' component={Price}></Route>
        <Route exact path='/specs.js' component={Specs}></Route>

      </Switch>
    </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
