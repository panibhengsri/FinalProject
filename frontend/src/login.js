import React, {Component} from 'react';
import GoogleLogin from 'react-google-login'

export class Login extends Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            locations: [],
            user:null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const userRef = firebase.database().ref('users');
        const user = {
            currentUser: this.state.username,
            currentPassword: this.state.password
        }
        userRef.push(user);
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
                <h2>Sign In</h2>
                <p>If you don't have an account, click 'Register' below or sign-in using Google!</p>
                <input 
                    type="text" 
                    ref="username" 
                    placeholder="username"
                    onChange={this.handleChange}
                    value={this.state.username}
                /><br/>
                <input 
                    type="password" 
                    ref="password" 
                    placeholder="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                /><br/>
                <input type="submit" value="login"/>
            </form>
				<button type="button">sign-up</button>
						
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

ReactDOM.render(<App/>, document.getElementById('app'));
