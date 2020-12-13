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
    }

    render = () => {
        return (
            <>
                <button className = {style.button} onClick={this.signInWithGoogle}>
                    Sign in with Google
                </button>
                <p>Do not violate the community guidelines or you will be banned for life!</p>
            </>
        );
    }
    
}

export default SignIn;