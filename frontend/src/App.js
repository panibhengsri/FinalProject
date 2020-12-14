import React, { useRef, useState } from 'react';
import './App.css';
import Login from './components/login.js'
import SignOut from './components/SignOut.js'
import Result from './components/result.js'
import routes from './components/routes.js';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


var config = {
    apiKey: "AIzaSyBozbLN9F8w_LCmJEvPsCIx82h7Hd0NtrY",
    authDomain: "comp20finalproj.firebaseapp.com",
    projectId: "comp20finalproj",
    storageBucket: "comp20finalproj.appspot.com",
    messagingSenderId: "721509114501",
    appId: "1:721509114501:web:3e7a6c1a4147938ca77fec",
    measurementId: "G-SJD7Z64VEP"
};

firebase.initializeApp(config);


const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


function App() {

  const [user] = useAuthState(auth);
  const locayRef = useRef();

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = "/result">
            <Result></Result>
          </Route>
          <Route path="/">
            <h1>Our REACT APP</h1>
            {/* Cannot use below routing because it links to results from login without checking user database */}
            {/* <Link to="/result">
              See your results
              </Link> */}
            <SignOut auth = {auth} />
            <Login auth={auth} firestore={firestore} user={user}></Login>
            <ul className="locay" ref={locayRef} id="locay"></ul>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}

export default App;
