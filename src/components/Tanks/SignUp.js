// import React, { Component } from 'react';
// // import './Tanks.css';
// import firebase from "firebase";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// import Tank from "./components/Tanks/Tanks";
// import Temp from "./components/Tanks/Temp";
// import SignUp from "./components/Tanks/SignUp";
// import SignIn from "./components/Tanks/SignIn";
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



// firebase.initializeApp({
//     apiKey: "AIzaSyDUzI4kXKEpWapGiZ0f6nN0d0JQ7mrb9WU",
//     authDomain: "tank-temps.firebaseapp.com"
// })

// class SignUp extends Component {
//     state = {isSignedIn: false}
//     uiConfig = {
//         signInFlow: "popup",
//         signInOptions: [
//             firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//             firebase.auth.EmailAuthProvider.PROVIDER_ID
//         ],
//         callbacks: {
//             signInSuccess: () => {
//                 window.location.pathname="/tank"
//             }
//         }
//     }


//     componentDidMount = () => {
//         firebase.auth().onAuthStateChanged(user => {
//             this.setState({isSignedIn:!!user})
//         })


//     }

//     render() {
//         return (
            
//             <div className="signup">
//             {this.state.isSignedIn ? (
//                 <>
//                 <div>Signed In!</div>
//                 <Router>
//       <Switch>
//         <Route exact path='/' component={SignUp}/>
//         <Route exact path='/login' component={SignIn}/>
//         <Route exact path='/tank' component={Tank}/>
//         <Route exact path='/temp/:id' component={Temp}/>
//       </Switch>
//     </Router>
//                 <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
//                 </>
//             ) : (
//                 <StyledFirebaseAuth
//                 uiConfig={this.uiConfig}
//                 firebaseAuth={firebase.auth()}
//                 />
//             )}
//               </div>
            
//         )
//     }

// }

// export default SignUp