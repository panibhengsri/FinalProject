/*  SignIn "button"
    Edited on 10/12/2020 by Duncan Chang, Jeremy Jung
*/

import React from 'react';
import style from './button.module.css';
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

class SignIn extends React.Component {
    
    constructor(props) {
        super(props);

        this.signInWithGoogle = this.signInWithGoogle.bind(this);
    }

    signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        this.props.auth.signInWithPopup(provider);
            

        // const check = this.props.firestore.collection("users").doc(this.props.auth.currentUser.uid);
        // check.get().then(docTemp => {
        //         if (!docTemp.exists) {
        //             // create a collection 
     
                    
        
        //         } 
        // }); 
    }
    
  

   
    render = () => {
        return (
            <>
                <button><Link to = "/locations" onClick={this.signInWithGoogle}>
                    Sign in with Google
                </Link></button>
                <p style={{marginTop: '5px', color: 'white'}}>Do not violate the community guidelines or you will be banned for life!</p>
            </>
        );
    }
    
}

export default SignIn;