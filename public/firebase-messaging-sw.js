importScripts('https://www.gstatic.com/firebasejs/7.3.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');


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

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload){
    const title = 'Hello World';
    const options = {
        body: payload.data.status
    }
    return self.ServiceWorkerRegistration.showNotification(title, options)
})


// messaging.requestPermission()
//     .then(function () {
//         console.log('Have Permission')
//         return messaging.getToken();
//     })
//     .then(function(token){
//         console.log(token)
//     })
//     .catch(function (err) {
//         console.log('Error Occured')
//     })
