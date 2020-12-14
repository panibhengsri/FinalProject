/*  "Signout" button
    Edited on 10/12/2020 by Duncan Chang, Jeremy Jung
*/

import style from './button.module.css';

import React from 'react';

class SignOut extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    render() {
        return this.props.auth.currentUser && (
            <button className = {style.button} onClick={() => this.props.auth.signOut()}>Sign Out</button> 
        );
    }

}
export default SignOut;
