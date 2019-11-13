import { app } from "firebase-admin";

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

    // Initialize Firebase 
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

const messaging = firebase.messaging(app);
messaging.usePublicVapidKey("BOZqSEM5h9s0v7n7xeF7z5qjLLDhd9ohCaAmYt4_PyHmfZ3Tu9Reat57eYtjEl1kbvsyBHv0eUeZ_CMrElngjqY");

messaging.requestPermission()
.then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      // TODO(developer): Retrieve an Instance ID token for use with FCM.
      // ...
    } else {
      console.log('Unable to get permission to notify.');
    }
})
.catch(function(err) {
    console.log("Error");
})

messaging.getToken().then((currentToken) => {
    if (currentToken) {
      sendTokenToServer(currentToken);
      updateUIForPushEnabled(currentToken);
    } else {
      // Show permission request.
      console.log('No Instance ID token available. Request permission to generate one.');
      // Show permission UI.
      updateUIForPushPermissionRequired();
      setTokenSentToServer(false);
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    showToken('Error retrieving Instance ID token. ', err);
    setTokenSentToServer(false);
  });

  // Callback fired if Instance ID token is updated.
messaging.onTokenRefresh(() => {
    messaging.getToken().then((refreshedToken) => {
      console.log('Token refreshed.');
      // Indicate that the new Instance ID token has not yet been sent to the
      // app server.
      setTokenSentToServer(false);
      // Send Instance ID token to app server.
      sendTokenToServer(refreshedToken);
      // ...
    }).catch((err) => {
      console.log('Unable to retrieve refreshed token ', err);
      showToken('Unable to retrieve refreshed token ', err);
    });
  });

  messaging.onMessage(function(payload) {
        console.log("onMessage", payload);
  });