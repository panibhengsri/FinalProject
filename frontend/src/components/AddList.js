/*  Locations list 
    Created on 10/12/2020 by Duncan Chang, Jeremy Jung
*/

import React from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class AddList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            me: this.props.firestore.collection(this.props.auth.currentUser.uid),
            locc: null,
            locArr: [1,2,3,4],
            countries: null,
            states: null
        }
        console.log("addlist is made");
        
        this.sendMessage = this.sendMessage.bind(this);
        this.addCollec = this.addCollec.bind(this);
        this.setLoccArr = this.setLoccArr.bind(this);
        this.getCountries = this.getCountries.bind(this);
        this.getStates = this.getStates.bind(this);

        this.sendToRes = this.sendToRes.bind(this);
        
        this.setLoccArr();
        this.getCountries();
        this.getStates();
    }

    // Get the list of countries
    getCountries = () => {
        var API_URL = "https://final-project-comp20.herokuapp.com/api/countries";
        fetch(API_URL)
            .then(
                (response) => response.json()
            )
            .then(result => {
                this.setState({ countries: result.places });
                console.log(result.places);
            },
                (err) => {
                    console.log("Error in getCountries: ", err);
                })
    }

    // Get the list of States
    getStates = () => {
        var API_URL = "https://final-project-comp20.herokuapp.com/api/states";
        fetch(API_URL)
            .then(
                (response) => response.json()
            )
            .then(result => {
                this.setState({ states: result.places });
                console.log(result.places);
            },
                (err) => {
                    console.log("Error in getCountries: ", err);
                })
    }


    setLoccArr = () => {
        const me = this.props.firestore.collection(this.props.auth.currentUser.uid);

        const locc = me.doc('locations');

        locc.onSnapshot(docSnapshot => {
            this.setState({
                locArr: docSnapshot.data().locations
            });

        });
    }

    // this is a placeholder after dropdownlist is finished. Basically updates the location to firebase
    sendMessage = () => {
        
        const placeholder = "ehh";
        const me = this.props.firestore.collection(this.props.auth.currentUser.uid);
        const locc = me.doc('locations');
        // adds new location to array
        locc.update({
            locations: firebase.firestore.FieldValue.arrayUnion(placeholder)
        });

        // setFormValue('');
    }

    // this checks if the user is new. If it's new, add a new collection to firestore for this user
    addCollec = () => {

        const check = this.props.firestore.collection(this.props.auth.currentUser.uid).doc("locations");
        check.get().then(docTemp => {
            if (!docTemp.exists) {
                // create a collection 
                this.props.firestore.collection(this.props.auth.currentUser.uid).doc("locations").set({
                    locations: [""]
                });

            } 
        }); 

    }

    sendToRes = (element) => {
        

    }

    render = () => {
        
        // this.setLoccArr();
        this.addCollec();
        this.sendMessage();
        // this.setLoccArr();

        if (this.state.locArr[0] == 1) {
            return (
                <main>
                    <div>
                        Add location with the dropdown list above!
                    </div>
                </main>
            );
        }
        else {
            console.log("array is initialized")
            return (<>
                <main>
                    <div>
                        {this.state.locArr.map((element) => {
                            return <div> <Link to = "/result" className = {element} value = {element} onClick={() => {this.sendToRes(element)}}>{element}</Link>  </div>
                        })}
                    </div>    
                </main>
                {/* COMMENTED OUT PLACEHOLDER FOR PANI'S {ADD LOCATION BUTTON (or SUBMIT)} */}
                {/* <form onSubmit={sendMessage}> */}
                {/*  */}
                {/* <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" /> */}
                {/*  */}
                {/* <button type="submit" disabled={!formValue}>🕊️</button> */}
                {/*  */}
                {/* </form> */}
            </>)
        }

    }
}

export default AddList;


// AddList = () => {

//     const myID = this.props.auth.currentUser.uid;
//     const container = document.querySelector('ul.locay');
//     const me = this.props.firestore.collection(myID);
//     const locc = me.doc('locations');
//     var locArr = [];

//     locc.onSnapshot(docSnapshot => {
//         locArr = docSnapshot.data().locations;

//     });


//     // const [formValue, setFormValue] = useState('');


//     const sendMessage = async (e) => {
//         e.preventDefault();

//         const placeholder = "comp20";

//         // adds new location to array
//         locc.update({
//             locations: firebase.firestore.FieldValue.arrayUnion(placeholder)
//         });

//         // setFormValue('');
//     }

// }