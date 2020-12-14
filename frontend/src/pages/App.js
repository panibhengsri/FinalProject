/*App.js*/
import React, { Component } from "react";
import "./App.css";
import MainPage from "./pages"; 
import UsersPage from "./pages/users";
import NotFoundPage from "./pages/404";
//Import all needed Component for this tutorial
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
       <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/users" component={UsersPage} />
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="/404" /> 
       </Switch>
      </Router>
    );
  }
}

export default App;

// import logo from './logo.svg';
// import React, { Component } from "react";
// import './App.css';
// import Login from './login'
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Link,
//   Redirect
// } from "react-router-dom";

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Route path="/" component={} />
//       </Router>
//     );
//   }
// }

// export default App;