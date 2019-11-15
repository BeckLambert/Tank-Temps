import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../src/components/Tanks/Tanks.css'
// import * as serviceWorker from './serviceWorker';
import { askForPermissionToReceiveNotifications } from './push-notifications';



ReactDOM.render(<App />, document.getElementById("root"));
// serviceWorker.unregister();
// initializeFirebase();

const NotificationButton = () => (
  <button onClick={askForPermissionToReceiveNotifications} >
    Allow Notifications
    </button>
);

export default NotificationButton;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA




