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
            locationSelected: null,
            worldOption: "country"
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        if (event.target.value == "USA")
            this.setState({worldOption: "state"});
        else
            this.setState({worldOption: "country"})
        this.setState({
            locationSelected: event.target.value
        });
    }

    handleStatesChange = (event) => {
        this.setState({
            locationSelected: event.target.value
        });
    }

    handleSubmit = () => {
        console.log("worldOption: ", this.state.worldOption);

        let location = this.state.locationSelected;
        let worldOption = this.state.worldOption;
        this.props.onLocationSubmit(location, worldOption);
    }

    render() {
        if (this.props.countries == null || this.props.states == null) {
            return (
                <div>
                    Loading places..
                </div>
            );
        }
        else {
            if (this.state.locationSelected == null)
                this.setState({locationSelected: this.props.countries[0]});
            if (this.state.worldOption == "country") {
                return (
                    <div>
                        <select onChange={this.handleChange}>
                            {this.props.countries.map(function (place) {
                                return <option>{place}</option>
                            })}
                        </select>
                        <button onClick={this.handleSubmit}>Add Location</button>
                    </div>
                );
            }
            else if (this.state.worldOption == "state") {
                if (this.state.locationSelected == "USA")
                    this.setState({ locationSelected: this.props.states[0] });
                return (
                    <div>
                        <div>
                            States
                        </div>
                        <select onChange={this.handleStatesChange}>
                            {this.props.states.map(function (place) {
                                return <option>{place}</option>
                            })}
                        </select>
                        <button onClick={this.handleSubmit}>Add Location</button>
                    </div>
                );
            }
        }
    }
}

export default DropdownPlaces;