import React from 'react';
import GoogleLogin from 'react-google-login';
import {
    BrowserRouter as Router, Route
} from "react-router-dom";

export class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            loggedIn: false,
            username: '',
            password: '',
            locations: [],
            user:null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
						
				<GoogleLogin
                    //!!need OAuth ClientID from Firebase
                    clientId = ''
                    buttonText = "Login"
                    onSuccess = {this.responseGoogle}
                    onFailure = {this.responseGoogle}
                    cookiePolicy = {'single_host_origin'}
                />
					</div>
        )
    }
}

export default Login;