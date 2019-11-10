import app from 'firebase/app';
import 'firebase/auth';
// import { withFirebase } from '../../Pages/SignOut';

var firebaseConfig = {
    apiKey: "AIzaSyDUzI4kXKEpWapGiZ0f6nN0d0JQ7mrb9WU",
    authDomain: "tank-temps.firebaseapp.com",
    databaseURL: "https://tank-temps.firebaseio.com",
    projectId: "tank-temps",
    storageBucket: "tank-temps.appspot.com",
    messagingSenderId: "355631466975",
    appId: "1:355631466975:web:4bd593965c255922795c6a",
    measurementId: "G-V89HNETHYP"
  };

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);

        this.auth = app.auth();
    }
//     // create user
//     doCreateUserWithEmailAndPassword = (email, password) =>
//     this.auth.createUserWithEmailAndPassword(email, password);
//     // sign in
//     doSignInWithEmailAndPassword = (email, password) =>
//     this.auth.signInWithEmailAndPassword(email, password);
//     //sign out 
//     doSignOut = () => this.auth.signOut();
//     //password reset
//     doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
//     doPasswordUpdate = password =>
//     this.auth.currentUser.updatePassword(password);
}

export default Firebase;
