const app = require("./app");

// Routes
require('./routes/item.js')(app);
require('./routes/recipes.js')(app);
require('./routes/secret.js')(app);

// Écoute du serveur
app.listen(3000, () => {
    console.log("Le serveur est lancé sur le port 3000");
});