import React, { Component } from 'react';
import './App.css';
import './pages/LoginPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/homePage';


class App extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
                <LoginPage />
          </Route>
          <Route exact path="/home">
                <HomePage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
