const cors = require('cors');
const functions = require("firebase-functions");
const app = require("express")();
    
const CHEESE = require("./api/routes/cheese");

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// Utilisation de l'API concernant le fromage
app.use('/cheese',CHEESE);

exports.api = functions.region("europe-west3").https.onRequest(app);