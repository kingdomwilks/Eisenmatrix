import * as firebase from 'firebase';

// Set the configuration for your app
  // TODO: Replace with your project's config object
  const firebaseConfig = {
    apiKey: "AIzaSyB798bD0-OtGDp9FCY7e42WCDHrfZ-POX4",
    authDomain: "eisenmatrix-265007.firebaseapp.com",
    databaseURL: "https://eisenmatrix-265007.firebaseio.com",
    projectId: "eisenmatrix-265007",
    storageBucket: "eisenmatrix-265007.appspot.com",
    messagingSenderId: "815871266809",
    appId: "1:815871266809:web:cfb72127e4e1cf1be6f728",
    measurementId: "G-094QX2X66F"
  };

  //Initialise Firebase
  firebase.initializeApp(firebaseConfig);

  

  // Get a reference to the database service
  export const db = firebase.firestore();