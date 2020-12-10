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
        this.SignIn = this.SignIn.bind(this);
        // this.AddList = this.AddList.bind(this);
        // const [user] = useAuthState(this.props.auth);
    }

    SignIn = () => {

        const signInWithGoogle = () => {
            const provider = new firebase.auth.GoogleAuthProvider();
            this.props.auth.signInWithPopup(provider);
        }


        return (
            <>
                <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
                <p>Do not violate the community guidelines or you will be banned for life!</p>
            </>
        )

    }

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

    // login(){
    //     //provider should be Google Auth Provider
    //     auth.signInWithPopup(provider)
    //         .then((result)=>{
    //             const user = result.user;
    //             this.setState({
    //                 user
    //             });
    //         });
    // }

    // logout(){
    //     auth.signOut()
    //         .then(()=>{
    //             this.setState({
    //                 user:null
    //             });
    //         });
    // }

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
                {this.props.user ? <AddList /> : <SignIn auth = {this.props.auth}/>}
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