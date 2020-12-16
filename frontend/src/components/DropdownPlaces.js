/*  Dropdown list of locations
    Created on (15/12/2020) by Jeremy Jung
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
    /* Handle change of <option> */
    handleChange = (event) => {
        // update worldOption when "USA" is clicked
        if (event.target.value == "USA")
            this.setState({worldOption: "state"});
        else
            this.setState({worldOption: "country"})
        
            // UPDATE STATE: locationSelected
        this.setState({
            locationSelected: event.target.value
        });
    }

    /* Handle change of <option> when worldOption is state */
    handleStatesChange = (event) => {
        this.setState({
            locationSelected: event.target.value
        });
    }
    /* Add selected location to list in AddList.js */
    handleSubmit = () => {
        console.log("worldOption: ", this.state.worldOption);

        let location = this.state.locationSelected;
        let worldOption = this.state.worldOption;
        this.props.onLocationSubmit(location, worldOption);
    }

    render() {
        // Loading screen when API responses have not yet been retrieved
        if (this.props.countries == null || this.props.states == null) {
            return (
                <div style={{color: '#ffff'}}>
                    Loading places..
                </div>
            );
        }
        // Render UI
        else {
            // INIT STATE: set state to first country
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
                        <button style={{margin: '10px', padding: '5px', fontSize: '13px'}} onClick={this.handleSubmit}>Add Location</button>
                    </div>
                );
            }
            else if (this.state.worldOption == "state") {
                // INIT STATE: set state to first country
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
                        <button style={{margin: '10px', padding: '5px', fontSize: '13px'}} onClick={this.handleSubmit}>Add Location</button>
                    </div>
                );
            }
        }
    }
}

export default DropdownPlaces;