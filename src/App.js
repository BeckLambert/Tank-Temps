import React, { Component } from 'react';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Tank from "./components/Tanks/Tanks";
import Temp from "./components/Tanks/Temp";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const firebase = require("firebase");
require("firebase/firestore");// Required for side-effects


class App extends Component {
    state = { isSignedIn: false }
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => {
                window.location.pathname = "/tank"
            }
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
        })
    }

    render() {
        return (

            <div className="signup">
                {this.state.isSignedIn ? (
                    <>
                        
                        <Router>
                            <Switch>
                                <Route exact path='/tank' component={Tank} />
                                <Route exact path='/temp' component={Temp} />
                            </Switch>
                        </Router>
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
