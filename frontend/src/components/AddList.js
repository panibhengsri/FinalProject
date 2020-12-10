import React from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

class AddList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            me: this.props.firestore.collection(this.props.auth.currentUser.uid),
            locc: null,
            locArr: [1,2,3,4]
        }

        // const myID = this.props.auth.currentUser.uid;
        // const container = document.querySelector('ul.locay');
        
        this.setState = ( (state) => ({
            locc : this.state.me.doc('locations')
        }));

        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage = () => {
        
        const placeholder = "comp20";

        // adds new location to array
        this.state.locc.update({
            locations: firebase.firestore.FieldValue.arrayUnion(placeholder)
        });

        // setFormValue('');
    }

    render = () => {
        return (<>
            <main>
                <div>
                    {this.state.locArr.map((element) => {
                        return <div> {element} </div>
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