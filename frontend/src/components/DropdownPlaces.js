/*  Login contains <SignIn> "button"
    Edited on 10/12/2020 by Duncan Chang, Jeremy Jung
*/

import React from 'react';

import Logo from './logo.png';

class DropdownPlaces extends React.Component {
    constructor(props) {
        /* Expected props: 
        1. onChange event listener
        2. onClick event listener
        3. array of places
        */
        super(props);

        this.state = {
            locationSelected: props.places[0]
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            locationSelected: event.target.value
        });
    }

    handleSubmit = () => {
        let location = this.state.locationSelected;
        this.props.onLocationSubmit(location);
    }

    render() {
        if (this.props.places == null) {
            return (
                <div>
                    Loading places..
                </div>
            );
        }
        else {
            return (
                <div>
                    <select onChange = {this.handleChange}>
                        {this.props.places.map(function (place) {
                            return <option>{place}</option>
                        })}
                    </select>
                    <button onClick = {this.handleSubmit}>Add Location</button>
                </div>
            );
        }
    }
}

export default DropdownPlaces;