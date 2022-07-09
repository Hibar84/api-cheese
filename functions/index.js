const functions = require("firebase-functions");
const app = require("express")();
    
const CHEESE = require("./api/routes/cheese");

app.use('/cheese',CHEESE);

exports.api = functions.region("europe-west3").https.onRequest(app);