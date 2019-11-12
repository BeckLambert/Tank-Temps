import React, { Component } from 'react';
// import './Tanks.css';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Tank from "./components/Tanks/Tanks";
import Temp from "./components/Tanks/Temp";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
const firebase = require("firebase");
require("firebase/firestore");// Required for side-effects



firebase.initializeApp({
    apiKey: "AIzaSyDUzI4kXKEpWapGiZ0f6nN0d0JQ7mrb9WU",
    authDomain: "tank-temps.firebaseapp.com"
})

class App extends Component {
    state = {isSignedIn: false}
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => {
                window.location.pathname="/tank"
            }
        }
    }



    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({isSignedIn:!!user})
        })


    }

    render() {
        return (
            
            <div className="signup">
            {this.state.isSignedIn ? (
                <>
                <div>Signed In!</div>
                <Router>
      <Switch>
        <Route exact path='/tank' component={Tank}/>
        <Route exact path='/temp/:id' component={Temp}/>
      </Switch>
    </Router>
                <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
                </>
            ) : (
                <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
                />
            )}
              </div>
            
        )
    }

}

export default App;
