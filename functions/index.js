const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

exports.helloWorld = functions.https.onRequest(async (request, response) => {
  const body = Object.assign(Object.assign({}, request.body), request.query);
  console.log(JSON.stringify(body));

  const tankId = body.deviceToken
  if (!tankId) {
    return response.status(400).send("invalid id")
  }
  let temperature = Number.parseFloat(body.payload);
  if (Number.isNaN(temperature)) {
    return response.status(400).send("invalid temperature")
  }
  await db.collection(`tanks`).doc(tankId).set({ temperature: temperature }, { merge: true });

  response.sendStatus(200);
});