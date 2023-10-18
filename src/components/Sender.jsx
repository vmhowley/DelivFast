import React from 'react'
import { useState } from 'react';
import { withGoogleMap, GoogleMap, Marker, withScriptjs  } from "react-google-maps"

function SenderInfo( {orderData, setOrderData}) {
  
 
  function validateForm() {
    // Check if the First Name is an Empty string or not.

    if (orderData.sender_name.length == 0) {
      alert('Invalid Form, First Name can not be empty')
      return
    }

    // Check if the Email is an Empty string or not.

    if (email.length == 0) {
      alert('Invalid Form, Email Address can not be empty')
      return
    }

    // check if the password follows constraints or not.

    // if password length is less than 8 characters, alert invalid form.

    if (password.length < 8) {
      alert(
        'Invalid Form, Password must contain greater than or equal to 8 characters.',
      )
      return
    }

    // variable to count upper case characters in the password.
    let countUpperCase = 0
    // variable to count lowercase characters in the password.
    let countLowerCase = 0
    // variable to count digit characters in the password.
    let countDigit = 0
    // variable to count special characters in the password.
    let countSpecialCharacters = 0

    for (let i = 0; i < password.length; i++) {
      const specialChars = [
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '_',
        '-',
        '+',
        '=',
        '[',
        '{',
        ']',
        '}',
        ':',
        ';',
        '<',
        '>',
      ]

      if (specialChars.includes(password[i])) {
        // this means that the character is special, so increment countSpecialCharacters
        countSpecialCharacters++
      } else if (!isNaN(password[i] * 1)) {
        // this means that the character is a digit, so increment countDigit
        countDigit++
      } else {
        if (password[i] == password[i].toUpperCase()) {
          // this means that the character is an upper case character, so increment countUpperCase
          countUpperCase++
        }
        if (password[i] == password[i].toLowerCase()) {
          // this means that the character is lowercase, so increment countUpperCase
          countLowerCase++
        }
      }
    }

    if (countLowerCase == 0) {
      // invalid form, 0 lowercase characters
      alert('Invalid Form, 0 lower case characters in password')
      return
    }

    if (countUpperCase == 0) {
      // invalid form, 0 upper case characters
      alert('Invalid Form, 0 upper case characters in password')
      return
    }

    if (countDigit == 0) {
      // invalid form, 0 digit characters
      alert('Invalid Form, 0 digit characters in password')
      return
    }

    if (countSpecialCharacters == 0) {
      // invalid form, 0 special characters characters
      alert('Invalid Form, 0 special characters in password')
      return
    }

    // if all the conditions are valid, this means that the form is valid

    alert('Form is valid')
  }
 
 
  const latitude = localStorage.getItem('lat');
  const longitude = localStorage.getItem('lng');
  const accuracy = localStorage.getItem('acc');
  const altitudeAccuracy = localStorage.getItem('aac');
  const altitude = localStorage.getItem('alt');
  const lat = parseFloat(latitude);
  const lng = parseFloat(longitude);
  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

  const MyMapComponent = withScriptjs(withGoogleMap(props =>
    
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: lat, lng: lng }}
      mapTypeId= {'terrain'}
    >
      
     
     {props.isMarkerShown &&  <Marker
        map= {GoogleMap}
        icon={'https://cdn4.iconfinder.com/data/icons/location-45/68/pin_map_box_package-45.png'}
        position={{ lat: lat, lng: lng }}
      />}
      
    </GoogleMap>
  ));
  
    return(
      
    <div className='flex p-4 justify-between content-center items-center' >
    <div className="w-screen">
    
      <form  className="rounded-lg  ">
        <div className="mb-4">
          <label
            className="block   mb-2"
            htmlFor="name"
          >
            Sender Name
          </label>
          
          <input
          required
            className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="name"
            name='name'
            type="text"
            placeholder="Jhon Smith"
            value={orderData.sender_name}
            onChange={(e) => setOrderData({...orderData, sender_name: e.target.value})}
          />
        </div>
        <div className="mb-4">
          <label
            className="block   mb-2"
            htmlFor="name"
          >
            Phone Number
          </label>
          <input
            className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="phone"
            name='phone'
            type="tel"
            placeholder="+1"
            value={orderData.sender_phone}
            onChange={(e) => setOrderData({...orderData, sender_phone: e.target.value})}
          />
        </div>
        <div className="mb-4">
          <label
            className="block   mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="email"
            name='email'
            type="text"
            placeholder="Email"
            value={orderData.sender_email}
            onChange={(e) => setOrderData({...orderData, sender_email: e.target.value})}
          />
        </div>
        <div className="mb-4">
          <label
            className="block   mb-2"
            htmlFor="city"
          >
            city
          </label>
          <input
            className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="city"
            name='city'
            type="text"
            placeholder="City"
            value={orderData.sender_city}
            onChange={(e) => setOrderData({...orderData, sender_city: e.target.value})}
          />
        </div>
        <div className="mb-4">
          <label
            className="block   mb-2"
            htmlFor="address"
          >
            Address Detail
          </label>
          <input
            className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="address"
            name='address'
            type="text"
            placeholder="Address"
            value={orderData.sender_address}
            onChange={(e) => setOrderData({...orderData, sender_address: e.target.value})}
            
          />
        
        </div>
        </form>

        <MyMapComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCx0wq_NY0cy99XoWDBtiSR-VAUm3dUmWI"
        isMarkerShown={true}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{  height: `300px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
/>
    </div>
    </div>
    )
}




export default SenderInfo;
