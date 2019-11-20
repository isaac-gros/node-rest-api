const express = require("express");
const app = express();

const objectRoutes = require("./api/routes/objects");

app.use("./objects", objectRoutes);

module.exports = app;
