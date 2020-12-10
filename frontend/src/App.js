
import React, { useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

var config = {
    apiKey: "AIzaSyBozbLN9F8w_LCmJEvPsCIx82h7Hd0NtrY",
    authDomain: "comp20finalproj.firebaseapp.com",
    projectId: "comp20finalproj",
    storageBucket: "comp20finalproj.appspot.com",
    messagingSenderId: "721509114501",
    appId: "1:721509114501:web:3e7a6c1a4147938ca77fec",
    measurementId: "G-SJD7Z64VEP"
};

firebase.initializeApp(config);


const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


function App() {

  const [user] = useAuthState(auth);
  const locayRef = useRef();

  return (
    <div className="App">
        <header>
        <h1>Our REACT APP</h1>

        <ul className="locay" ref={locayRef} id="locay"></ul>
        <SignOut />
      </header>

      <section>
        {user ? <AddList /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}


function AddList() {

  const myID = auth.currentUser.uid;
  const container =  document.querySelector('ul.locay');
  const dummy = useRef();
  const me = firestore.collection(myID);
  const locc = me.doc('locations');
  var locArr =[1,2,3,4]; 
  (async function() )
  await locc.onSnapshot(docSnapshot => {
    locArr = docSnapshot.data().locations;

  });

   
  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const placeholder = "comp20";
   
    // adds new location to array
    locc.update({
      locations: firebase.firestore.FieldValue.arrayUnion(placeholder)
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>
    <div>
        {locArr.map( (element) => {
            return <div> {element} </div>
        })}
      </div>

    

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
      
      <button type="submit" disabled={!formValue}>🕊️</button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}

export default App;
