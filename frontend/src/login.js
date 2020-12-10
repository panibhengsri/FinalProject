class Login extends React.Component{
    handleLogin(e){
        let username = this.refs.username.value
        let password = this.refs.password.value
        this.props.onSignIn(username,password)
    }

    render(){
        return(
            <form onSubmit={this.handleSignIn.bind(this)}>
                <h2>Sign In</h2>
                <p>If you don't have an account, click 'Register' below or sign-in using Google!</p>
                <input type="text" ref="username" placeholder="username"/>
                <input type="password" ref="password" placeholder="password"/>
                <input type="submit" value="login"/>
            </form>
        )
    }
}

ReactDOM.render(<App/>)
document.getElementById('app');
