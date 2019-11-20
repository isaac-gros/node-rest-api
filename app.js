// Dépendances
const express = require("express");
const bodyParser = require('body-parser');
const app = express();

// Autorise les requêtes de type application/x-www-form-urlencoded + application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Configuration de la base de données
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connexion à la base de données
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connexion à la base de données réussie.");    
}).catch(err => {
    console.log('Impossible de se connecter à la base de données. Arrêt du programme en cours.', err);
    process.exit();
});

module.exports = app;
