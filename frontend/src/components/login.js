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


import {
    BrowserRouter as Router, Route
} from "react-router-dom";

class Login extends React.Component{
    constructor(props){
        super(props);

        console.log(props);
        this.state = {
            loggedIn: false,
            username: '',
            password: '',
            locations: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.AddList = this.AddList.bind(this);
        // const [user] = useAuthState(this.props.auth);
    }

    
        // this.props.firestore.collection(this.props.auth.currentUser.uid).add({
        //     locations: []
        // })

        // (async () => {
        //     const check = await this.props.firestore.collection("users").doc(this.props.auth.currentUser.uid);
        //     check.get().then(docTemp => {
        //             if (!docTemp.exists) {
        //                 // create a collection 
        //                 this.props.firestore.collection("users").doc(this.props.auth.currentUser.uid).add({
        //                     locations: []
        //                 });
        
        //             } 
        //         }); 
        // }) ();

        // // this.props.firestore.collection(this.props.auth.currentUser.uid).doc("locations").set(data);
        // const check = this.props.firestore.collection("users").doc(this.props.auth.currentUser.uid);
        // check.get().then(docTemp => {
        //     if (!docTemp.exists) {
        //         // create a collection 
        //         this.props.firestore.collection("users").doc(this.props.auth.currentUser.uid).add({
        //             locations: []
        //         });

        //     } 
        // }); 

        // // this.props.firestore.collection('users').doc(this.props.auth.currentUser.uid).update({
        // //     locations: firebase.firestore.FieldValue.arrayUnion(null)
        // // });
        

     

    onLoginClick = () => {
        this.setState({loggedIn: true})
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        // const userRef = firebase.database().ref('users');
        const user = {
            currentUser: this.state.username,
            currentPassword: this.state.password
        }
        // userRef.push(user);
        this.setState({
            username: '',
            password: ''
        });
    }

    

    render(){
        return(
		<div className="container">
            <form onSubmit={this.handleSubmit}>
                {this.props.children}
                <h2>Sign In</h2>
                <p>If you don't have an account, please sign-in using Google!</p>
                <input 
                    type="text" 
                    ref="username" 
                    placeholder="username"
                    onChange={this.handleChange}
                    value={this.state.username}
                    required
                /><br/>
                <input 
                    type="password" 
                    ref="password" 
                    placeholder="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    required
                /><br/>
                <input type="submit" value="login"/>
            </form>
            <section>
                {this.props.user ? <AddList firestore={this.props.firestore} auth = {this.props.auth} /> : <SignIn firestore = {this.props.firestore} auth = {this.props.auth}/>}
            </section>
        {/* COMMENTED GOOGLE LOGIN (JEREMY JUNG) */}
				{/* <GoogleLogin 
                    //!!need OAuth ClientID from Firebase
                    clientId = ''
                    buttonText = "Login"
                    onSuccess = {this.responseGoogle}
                    onFailure = {this.responseGoogle}
                    cookiePolicy = {'single_host_origin'}
                /> */}
					</div>
        )
    }
}

export default Login;