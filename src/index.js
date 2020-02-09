import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link,Switch, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App'
import User from './user'
import Contact from './contact'
import UncontrolledComp from './form/uncontrolledComp'
import UserContainer from './Components/userContainer'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './_redux/store'

const routing = (
  <Provider store={store}>
    <Router>
      <div>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/uncontrolledComp">UncontrolledComp</Link>
            </li>
            <li>
              <Link to="/userContainer">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
            <Route path="/user" component={User} />
            <Route path="/contact" component={Contact} />
            <Route path="/uncontrolledComp" component={UncontrolledComp} />
            <Route path="/userContainer" component={UserContainer} />
            <Route path="/" component={App} />
            </Switch>
      </div>
    </Router>
    </Provider>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
