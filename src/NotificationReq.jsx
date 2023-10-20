import React from 'react'
import { messaging } from './firebase';
import { getToken } from 'firebase/messaging';
function NotificationReq() {
        console.log('Requesting permission...');
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            console.log('Notification permission granted.');
          }
        })
getToken(messaging, { vapidKey: 'LORR6WDcbkwEn-0frrBfdgUQG5hxIUsPcySzvBpcvpY' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});
    
}
NotificationReq();
export default NotificationReq  