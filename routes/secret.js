module.exports = (app) => {
    
    // Récupère tous les éléments secrets
    app.get('/secrets', (req, res) => {
        res.json({ "message" : "Confidentiel" })
    });
}