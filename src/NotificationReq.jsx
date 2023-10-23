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
}
NotificationReq();
export default NotificationReq  