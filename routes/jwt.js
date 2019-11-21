const jwt = require('jsonwebtoken');
const fs = require('fs')

module.exports = (app) => {
    // Récupère tous les éléments secrets
    app.get('/jwt', (req, res) => {
        let privateKey = fs.readFileSync('./ssh/key.pem', 'utf8'); // Clé SSH Privée, invisible dans le repo Git
        let token = jwt.sign({ "body": "stuff" }, privateKey, { algorithm: 'HS256'});
        res.send(token);
    })
}