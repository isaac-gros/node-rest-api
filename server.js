const app = require("./app");

// Route test pour vérifier que le serveur fonctionne
app.get('/', (req, res) => {
    res.json({"message": "Hello Minecraft API !"});
});

// Écoute du serveur
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});