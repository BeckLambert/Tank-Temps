importScripts('https://www.gstatic.com/firebasejs/7.3.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js'); 


firebase.initializeApp({
    messagingSenderId: "355631466975"  
});

const messaging = firebase.messaging();
