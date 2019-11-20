const app = require("./app");

// Route test pour vérifier que le serveur fonctionne
app.get('/', (req, res) => {
    res.json({"message": "Hello Minecraft API !"});
});

// Écoute du serveur
app.listen(3000, () => {
    console.log("Le serveur est lancé sur le port 3000");
});