import logo from './logo.svg';
import React, { Component } from "react";
import './App.css';
import Login from './login'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={} />
      </Router>
    );
  }
}

export default App;