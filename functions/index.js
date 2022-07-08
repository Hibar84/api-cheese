// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require('firebase-functions');

var config = {
    apiKey: "apiKey",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://cheese-84me216-default-rtdb.europe-west1.firebasedatabase.app/",
    storageBucket: "bucket.appspot.com"
  };
  firebase.initializeApp(config);
  var database = firebase.database();


// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();