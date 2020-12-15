/*  Login contains <SignIn> "button"
    Edited on 10/12/2020 by Duncan Chang, Jeremy Jung
*/

import React from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// import GoogleLogin from 'react-google-login';    // COMMENTED BY JEREMY JUNG
import SignIn from './SignIn.js';
import AddList from './AddList.js';

import Logo from './logo.png';

class Login extends React.Component{
    render(){
        return(
		<div className="container">
            <div>
                <img style={{width: '300px'}} src={Logo} alt="Logo"/>
            </div>
            <div>
                <section>
                    {this.props.user ? <AddList firestore={this.props.firestore} auth = {this.props.auth} /> : <SignIn firestore = {this.props.firestore} auth = {this.props.auth}/>}
                </section>
            </div>
            
            
        {/* COMMENTED GOOGLE LOGIN (JEREMY JUNG) */}
        </div>
        )
    }
}

export default Login;