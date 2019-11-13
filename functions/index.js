const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require("./serviceAcountKey.json");
firebaseToken = "1//04cxfo5zlM9wpCgYIARAAGAQSNwF-L9IrHuNu_39v55kRvIW6vR4dOhW85_eElIog2Io3saQOJ3fD7EikHbmxMVAhKZAXhxgbH2Q";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tank-temps.firebaseio.com",
  databaseAuthVariableOverride: {
    uid: "my-service-worker"
  }
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();
var ref = db.ref("restricted_access/secret_document");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

exports.helloWorld = functions.https.onRequest((request, response) => {
    console.log(request.body);
    response.send("Hello from Firebase!");
});


// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest(async(request, response) => {
//     console.log(request.body);
//     const db = admin.database();
//     await db.ref(`tanks/${tanks.displayName}`).update({tanks: temperature})
//   });
