/*  "Signout" button
    Edited on 10/12/2020 by Duncan Chang, Jeremy Jung
*/
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import style from './button.module.css';

import React from 'react';

class SignOut extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    render() {
        return this.props.auth.currentUser && (
            <Link to = "/" className = {style.button} onClick={() => this.props.auth.signOut()}>Sign Out</Link> 
        );
    }

}
export default SignOut;
