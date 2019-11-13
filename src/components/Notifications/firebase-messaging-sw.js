importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');


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

// Initialize the Firebase app in the service worker by passing in the
 // messagingSenderId.
//  firebase.initializeApp({
//     'messagingSenderId': 'YOUR-SENDER-ID'
//   });

    const messaging = firebase.messaging();
    messaging.setBackgroundMessageHandler(function(payload) {
        console.log('[firebase-messaging-sw.js] Received background message ', payload);
        const title = "Tank Alert!"
        const options = {
            body: payload.data.status
        };
        return self.ServiceWorkerRegistration.showNotification(title, options);
    });