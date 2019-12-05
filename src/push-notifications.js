// import firebase from 'firebase';


// export const initializeFirebase = () => {
//     firebase.initializeApp({
//     messagingSenderId: "355631466975"
//   });
// }

// navigator.serviceWorker
//     .register('../public/firebase-messaging-sw.js')
//     .then((register) => {
//       firebase.messaging().useServiceWorker(register);
//     });

//   export const askForPermissionToReceiveNotifications = async () => {
//     try {
  
//       const messaging = firebase.messaging();
  
//       await messaging.requestPermission();
//       const token = await messaging.getToken();
//       console.log('user token: ', token);
  
//       return token;
//     } catch (error) {
//       console.error(error);
//     }
//   }

// const messageOne = {
//     to: 'registration_token', 
//     collapse_key: 'your_collapse_key',
    
//     notification: {
//         title: 'Tank Temp Alert!', 
//         body: 'FV 1 is 2 degrees above set temperature' 
//     }
// }

// const messageTwo = {
//     to: 'registration_token', 
//     collapse_key: 'your_collapse_key',
    
//     notification: {
//         title: 'Tank Temp Alert!', 
//         body: 'FV 1 is 2 degrees below set temperature' 
//     }
// }
// export default askForPermissionToReceiveNotifications;

