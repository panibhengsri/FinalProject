import React, { useRef, useState } from 'react';
import './App.css';
import SignOut from './components/SignOut.js'
import SignIn from './components/SignIn.js'
import Result from './components/result.js'
import Locations from './components/locations.js';

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

import Logo from './components/logo.png';


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
  

    console.log("props.auth.currentuser is null");
    return (
      <div className="App">
        
        <Router>
          <Switch>
            
            <Route path = "/result/:id" render={ (props) => <Result {...props}/> } >
              
              {/* <Result>
              </Result> */}
            </Route>
            <Route path = "/locations">
              <Locations auth={auth} firestore={firestore} user={user}></Locations>
            </Route>
            <Route path="/">
              <img style={{width: '300px'}} src={Logo} alt="Logo"/>
              <SignIn auth = {auth}></SignIn>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  // }

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
