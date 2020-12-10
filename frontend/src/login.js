class Login extends React.Component{
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

    login(){
        //provider should be Google Auth Provider
        auth.signInWithPopup(provider)
            .then((result)=>{
                const user = result.user;
                this.setState({
                    user
                });
            });
    }

    logout(){
        auth.signOut()
            .then(()=>{
                this.setState({
                    user:null
                });
            });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h2>Sign In</h2>
                <p>If you don't have an account, click 'Register' below or sign-in using Google!</p>
                <input 
                    type="text" 
                    ref="username" 
                    placeholder="username"
                    onChange={this.handleChange}
                    value={this.state.username}
                />
                <input 
                    type="password" 
                    ref="password" 
                    placeholder="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                />
                <input type="submit" value="login"/>
            </form>
        )
    }
}

ReactDOM.render(<App/>)
document.getElementById('app');
