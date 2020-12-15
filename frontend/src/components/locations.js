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
import SignOut from './SignOut.js';
import AddList from './AddList.js';

import Logo from './logo.png';

class Locations extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
		<div className="container">
            
                <section>
                {this.props.user ? <AddList firestore={this.props.firestore} auth = {this.props.auth} /> : <SignIn firestore = {this.props.firestore} auth = {this.props.auth}/>}
            </section>
            <div> 
                <SignOut auth = {this.props.auth} />
            </div>
        </div>
        
        )
    }
}

export default Locations;