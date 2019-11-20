// Dépendances
const express = require("express");
const bodyParser = require('body-parser');
const app = express();

// Autorise les requêtes de type application/x-www-form-urlencoded + application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//const objectRoutes = require("./api/routes/objects");
//pp.use("./objects", objectRoutes);

module.exports = app;
