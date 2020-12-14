import React from 'react';
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router, Route
} from "react-router-dom";
import SignOut from './SignOut.js';

// ReactDOM.render(
    
// );

class Locations extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                <div>
                    Testing locations
                </div>
                <div>
                    <SignOut auth = {this.props.auth}></SignOut>
                </div>
            </div>
        )
    }
}

export default Locations;
