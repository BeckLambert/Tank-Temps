// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// const serviceAccount = require("./serviceAcountKey.json");

// admin.initializeApp(functions.config().firebase);

// const db = admin.firestore();

// exports.helloWorld = functions.https.onRequest(async(request, response) => {
//   const body = Object.assign(Object.assign({}, request.body), request.query);
//     console.log(JSON.stringify(body));
    // const payload = {"deviceToken":"tankId",
    //                 "event":"WEBHOOK_EVENT_NAME",
    //                 "signal":1,
    //                 "payload":18.2}
  //   const tankId = body.deviceToken
  //   if (!tankId) {
  //     return response.status(400).send("invalid id")
  //   }
  //   let temperature = Number.parseFloat(body.payload);
  //   if(Number.isNaN(temperature)) {
  //     return response.status(400).send("invalid temperature")
  //   }
  //   await db.collection(`tanks`).doc(tankId).set({temperature: temperature}, {merge: true});

  //   response.sendStatus(200);
  // });














// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://tank-temps.firebaseio.com",
//   databaseAuthVariableOverride: {
//     uid: null
//   }
// });


// exports.helloWorld = functions.https.onRequest((request, response) => {
  //     console.log(request.body);
  //     response.send("Hello from Firebase!");
  // });
  // const db = admin.database();
  
  
  // The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
  
  // Create and Deploy Your First Cloud Functions
  // https://firebase.google.com/docs/functions/write-firebase-functions
  
