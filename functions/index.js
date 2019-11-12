const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require("./serviceAcountKey.json");
const tanks = require("../src/tanks.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tank-temps.firebaseio.com"
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest(async(request, response) => {
    console.log(request.body);
    const db = admin.database();
    await db.ref(`tanks/${tanks.displayName}`).update({tanks: temperature})
  });
