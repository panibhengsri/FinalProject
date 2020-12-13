import React from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

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
                <button className="sign-in" onClick={this.signInWithGoogle}>Sign in with Google</button>
                <p>Do not violate the community guidelines or you will be banned for life!</p>
            </>
        );
    }
    
}

export default SignIn;