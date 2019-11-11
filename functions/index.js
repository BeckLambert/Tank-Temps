// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require("./serviceAcountKey.json");
// const app = admin.initializeApp();

// const refreshToken;
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tank-temps.firebaseio.com"
});

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
    console.log(request.body);
    firebase.database().ref().push('hello world')
    // response.send("Hello from Firebase!");
  });
  


